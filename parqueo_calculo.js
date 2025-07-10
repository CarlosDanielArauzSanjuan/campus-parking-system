
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


