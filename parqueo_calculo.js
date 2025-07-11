
// ---------------------------------------------
// 👑 EXAMEN: Mongo 2
// - 1. Reciba un parqueo con horaIngreso, horaSalida y tarifaHora.
// - 2. Calcule el tiempo total en horas.
// - 3. Multiplique por la tarifa correspondiente y redondee
// - 4. Devuelva un objeto con { tiempoTotalHoras, costoTotal}
// ---------------------------------------------



// -------------------- SOLUCION -------------------------------------


// recibir un parqueo con hora Ingreso, hora Salida y Tarifa Hora
const dbSession = session.getDatabase("campus_parking");
function parqueoCalculo(parqueoId) {
    const session = db.getMongo().startSession();
 
    try {
      session.startTransaction();
  
      // Buscar parqueo activo por ID
      const parqueo = db.parqueos.findOne(
        { _id: ObjectId(parqueoId), hora_salida: null },
        { session }
      );
  
      if (!parqueo) {
        throw new Error("Parqueo no encontrado o ya finalizado.");
      }
// calcular el tiempo total en horas, MUltiplicar por la tarifa correspondiente


// TENER EN CUENTA QUE EN MI BASE DE DATOS  costo = tarifaHora, fecha_ingreso = horaEntrada, horaSalida = fecha_salida
// LOS NOMBRES CAMBIAN DE ACUERDO A LOS REQUERIMIENTOS DADOS EN EL ENUNCIADO DE LA HOJA

      const horaSalida = new Date();
      const tiempoTotalHoras = Math.ceil((horaSalida - parqueo.hora_entrada) / (1000 * 60 * 60));
      const costoTotal = tiempoTotalHoras * tarifaHora;
  
      // Actualizar el parqueo
      db.parqueos.updateOne(
        { _id: parqueo._id },
        { $set: { hora_salida: horaSalida, costo_Total: costoTotal } },
        { session }
      );
// devuelva un objeto con {tiempo total horas, costo total} Confirmar la transacción
      session.commitTransaction();
      print(`✅ Parqueo cerrado: ${tiempoTotalHoras}h, $${costoTotal}`);
  
    } catch (e) {
      session.abortTransaction();
      print("❌ Error:", e.message);
    } finally {
      session.endSession();
    }
  }


//-------------------------------------


function calcularCostoParqueo(parqueoId) {
  // Iniciamos una sesión para poder trabajar con transacciones
  const session = db.getMongo().startSession();

  try {
    // Inicia la transacción
    session.startTransaction();

    // 1️⃣ Buscar el parqueo activo (que aún no tiene hora_salida)
    const parqueo = db.parqueos.findOne(
      {
        _id: ObjectId(parqueoId),   // Convertimos el ID recibido a ObjectId
        hora_salida: null           // Solo si aún está activo (sin salida)
      },
      { session }                   // Importante: ejecutar dentro de la transacción
    );

    // Validación: si no se encuentra o ya está cerrado
    if (!parqueo) {
      throw new Error("Parqueo no encontrado o ya fue cerrado.");
    }

    // 2️⃣ Buscar la zona relacionada para obtener la tarifa por hora
    const zona = db.zonas.findOne(
      { _id: parqueo.zona_id },    // Tomamos la zona_id desde el parqueo
      { session }
    );

    const tarifaHora = zona.tarifa_hora; // Guardamos la tarifa extraída

    // 3️⃣ Calcular el tiempo total (en horas redondeadas hacia arriba)
    const horaSalida = new Date(); // Tomamos la hora actual como salida
    const tiempoTotalHoras = Math.ceil(
      (horaSalida - parqueo.hora_entrada) / (1000 * 60 * 60)
    );
    // Se divide entre mil (ms) → 60 (min) → 60 (h)

    // 4️⃣ Calcular el costo total
    const costoTotal = tiempoTotalHoras * tarifaHora;

    // 5️⃣ Actualizar el parqueo con hora_salida y costo
    db.parqueos.updateOne(
      { _id: parqueo._id },
      {
        $set: {
          hora_salida: horaSalida,  // Guardamos la hora actual como salida
          costo: costoTotal         // Guardamos el costo calculado
        }
      },
      { session }
    );

    // 6️⃣ Confirmamos la transacción: se guardan todos los cambios
    session.commitTransaction();

    // 7️⃣ Mostramos el resultado por consola (como pide el enunciado)
    printjson({
      tiempoTotalHoras,
      tarifaHora,
      costoTotal
    });

  } catch (error) {
    // Si ocurre algún error, cancelamos los cambios hechos
    session.abortTransaction();
    print("❌ Error:", error.message);
  } finally {
    // Siempre cerramos la sesión al final
    session.endSession();
  }
}
