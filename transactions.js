const session = db.getMongo().startSession();
const dbSession = session.getDatabase("campus_parking");
session.startTransaction();

try {
  // Buscar la zona para validar cupo disponible
  const zona = dbSession.zonas.findOne(
    { _id: ObjectId("66ff1c000000000000000015") },
    { session }
  );

  if (!zona || zona.cupos_disponibles <= 0) {
    throw "No hay cupos disponibles en la zona.";
  }

  // Insertar nuevo registro de parqueo
  dbSession.parqueo.insertOne({
    _id: ObjectId(),
    usuario_id: ObjectId("66ff1c000000000000000105"),
    vehiculo_id: ObjectId("66ff1c000000000000000205"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000015"),
    fecha_ingreso: new Date(),
    fecha_salida: null,
    costo: 0
  });

  // Disminuir cupo disponible en la zona
  dbSession.zonas.updateOne(
    { _id: ObjectId("66ff1c000000000000000015") },
    { $inc: { cupos_disponibles: -1 } }
  );

  // Confirmar la transacción
  session.commitTransaction();
  print("Transacción completada: ingreso registrado.");

} catch (e) {
  // Cancelar la transacción si ocurre un error
  session.abortTransaction();
  print("Transacción cancelada:", e);

} finally {
  // Finalizar la sesión
  session.endSession();
}

print("Fin del script");
