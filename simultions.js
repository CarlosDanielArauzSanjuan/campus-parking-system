//------------------------------------------------
// Conexión y sesión
session = db.getMongo().startSession();

try {
  // Iniciamos la transacción
  session.startTransaction();

  // Datos simulados del nuevo parqueo (puedes parametrizarlos o recibirlos de frontend)
  const parqueo = {
    usuario_id: cliente1(),                     // función que retorna el ObjectId del cliente
    vehiculo_id: vehiculo1(),                   // función que retorna el ObjectId del vehículo
    sede_id: getCampusNorte(),                  // función que retorna el ObjectId de la sede
    zona_id: zona1(),                           // función que retorna el ObjectId de la zona
    hora_entrada: new Date(),                   // hora actual
    hora_salida: null,                          // aún activo
    costo: 0                                    // se calculará al salir
  };

  // 1. Insertar nuevo parqueo
  db.parqueos.insertOne(parqueo, { session });

  // 2. Disminuir el campo cupos_disponibles de la zona usada
  const result = db.zonas.updateOne(
    { _id: parqueo.zona_id, cupos_disponibles: { $gt: 0 } },
    { $inc: { cupos_disponibles: -1 } },
    { session }
  );

  // Validación: si no se pudo decrementar cupo (cupo ya en 0), cancelar
  if (result.modifiedCount === 0) {
    throw new Error("No hay cupos disponibles en la zona seleccionada.");
  }

  // 3. Confirmar la transacción
  session.commitTransaction();
  print("✅ Ingreso registrado correctamente con transacción.");

} catch (error) {
  // Si hubo un error, deshacer los cambios
  session.abortTransaction();
  print("❌ Transacción cancelada. Motivo: " + error.message);
} finally {
  // Finalizar sesión
  session.endSession();
}


//Escenario: Cerrar un parqueo activo

//🔧 Objetivo:
	//•	Actualizar el documento del parqueo: agregar hora_salida y calcular costo.
	//•	Aumentar el campo cupos_disponibles en la zona correspondiente.
	//•	Ejecutar ambas operaciones dentro de una transacción.
 session = db.getMongo().startSession();

try {
  session.startTransaction();

  // ID del parqueo que se quiere cerrar (debe estar activo)
  const parqueoId = ObjectId("AQUI_VA_EL_ID_DEL_PARQUEO");

  // 1. Buscar el parqueo actual para obtener zona_id y hora_entrada
  const parqueo = db.parqueos.findOne({ _id: parqueoId, hora_salida: null }, { session });

  if (!parqueo) {
    throw new Error("Parqueo no encontrado o ya fue cerrado.");
  }

  // 2. Calcular tiempo y costo (ejemplo simple: $1000 por hora)
  const horaSalida = new Date();
  const horas = Math.ceil((horaSalida - parqueo.hora_entrada) / (1000 * 60 * 60));
  const costo = horas * 1000;

  // 3. Actualizar parqueo: agregar hora_salida y costo
  db.parqueos.updateOne(
    { _id: parqueoId },
    { $set: { hora_salida: horaSalida, costo: costo } },
    { session }
  );

  // 4. Aumentar cupo disponible en la zona usada
  const result = db.zonas.updateOne(
    { _id: parqueo.zona_id },
    { $inc: { cupos_disponibles: 1 } },
    { session }
  );

  if (result.modifiedCount === 0) {
    throw new Error("No se pudo actualizar el cupo de la zona.");
  }

  // 5. Confirmar transacción
  session.commitTransaction();
  print(`✅ Parqueo cerrado. Tiempo: ${horas}h - Costo: $${costo}`);

} catch (error) {
  session.abortTransaction();
  print("❌ Transacción cancelada. Motivo:", error.message);
} finally {
  session.endSession();
}

// -------------------------------------------------

//Eliminar un cliente y sus parqueos
function eliminarCliente(clienteId) {
  const session = db.getMongo().startSession();
  try {
    session.startTransaction();

    // Eliminar todos sus parqueos
    db.parqueos.deleteMany({ usuario_id: ObjectId(clienteId) }, { session });

    // Eliminar al cliente
    const deleted = db.usuarios.deleteOne({ _id: ObjectId(clienteId), rol: "cliente" }, { session });
    if (deleted.deletedCount === 0) throw new Error("Cliente no encontrado o no es cliente");

    session.commitTransaction();
    print("✅ Cliente y sus parqueos eliminados correctamente.");
  } catch (e) {
    session.abortTransaction();
    print("❌ Transacción cancelada:", e.message);
  } finally {
    session.endSession();
  }
}
// --------------------------------------------------

// Cancelar un ingreso recién creado
function cancelarIngreso(parqueoId) {
  const session = db.getMongo().startSession();
  try {
    session.startTransaction();

    const parqueo = db.parqueos.findOne({ _id: ObjectId(parqueoId), hora_salida: null }, { session });
    if (!parqueo) throw new Error("Parqueo no encontrado o ya fue cerrado.");

    db.parqueos.deleteOne({ _id: parqueo._id }, { session });

    const result = db.zonas.updateOne(
      { _id: parqueo.zona_id },
      { $inc: { cupos_disponibles: 1 } },
      { session }
    );

    if (result.modifiedCount === 0) throw new Error("No se pudo liberar el cupo de zona.");

    session.commitTransaction();
    print("✅ Ingreso cancelado y cupo restaurado.");
  } catch (e) {
    session.abortTransaction();
    print("❌ Error al cancelar ingreso:", e.message);
  } finally {
    session.endSession();
  }
}
//---------------------------------------------------
//Registrar múltiples ingresos en lote
function registrarIngresosEnLote(lista) {
  const session = db.getMongo().startSession();
  try {
    session.startTransaction();

    for (let p of lista) {
      const parqueo = {
        usuario_id: ObjectId(p.usuario_id),
        vehiculo_id: ObjectId(p.vehiculo_id),
        sede_id: ObjectId(p.sede_id),
        zona_id: ObjectId(p.zona_id),
        hora_entrada: new Date(),
        hora_salida: null,
        costo: 0
      };

      db.parqueos.insertOne(parqueo, { session });

      const updated = db.zonas.updateOne(
        { _id: parqueo.zona_id, cupos_disponibles: { $gt: 0 } },
        { $inc: { cupos_disponibles: -1 } },
        { session }
      );

      if (updated.modifiedCount === 0) {
        throw new Error(`No hay cupo disponible para zona: ${parqueo.zona_id}`);
      }
    }

    session.commitTransaction();
    print("✅ Todos los ingresos fueron registrados.");
  } catch (e) {
    session.abortTransaction();
    print("❌ Error en lote:", e.message);
  } finally {
    session.endSession();
  }
}
registrarIngresosEnLote([
  { usuario_id: cliente1(), vehiculo_id: vehiculo1(), sede_id: getCampusNorte(), zona_id: zona1() },
  { usuario_id: cliente2(), vehiculo_id: vehiculo2(), sede_id: getCampusSur(), zona_id: zona6() }
]);

// --------------------------------------------------
// Ajustar manualmente un parqueo
function ajustarParqueo(parqueoId, nuevosValores) {
  const session = db.getMongo().startSession();
  try {
    session.startTransaction();

    // Validar que el parqueo exista
    const parqueo = db.parqueos.findOne({ _id: ObjectId(parqueoId) }, { session });
    if (!parqueo) throw new Error("Parqueo no encontrado");

    // Ajustar campos válidos: hora_entrada, hora_salida, costo
    const updateFields = {};
    if (nuevosValores.hora_entrada) updateFields.hora_entrada = new Date(nuevosValores.hora_entrada);
    if (nuevosValores.hora_salida) updateFields.hora_salida = new Date(nuevosValores.hora_salida);
    if (nuevosValores.costo !== undefined) updateFields.costo = nuevosValores.costo;

    db.parqueos.updateOne(
      { _id: parqueo._id },
      { $set: updateFields },
      { session }
    );

    session.commitTransaction();
    print("✅ Parqueo ajustado correctamente.");
  } catch (e) {
    session.abortTransaction();
    print("❌ Error al ajustar parqueo:", e.message);
  } finally {
    session.endSession();
  }
}

ajustarParqueo("686fa123be06e73a0a89cab1", {
  hora_entrada: "2025-07-10T08:00:00Z",
  hora_salida: "2025-07-10T10:00:00Z",
  costo: 2000
});
// --------------------------------------------------
