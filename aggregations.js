//------------------------------------------------
// 1. ¿Cuántos parqueos se registraron por sede en el último mes?

db.parqueos.aggregate([
  {
    // Filtrar parqueos cuya hora_entrada sea en los últimos 30 días
    $match: {
      hora_entrada: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }
    }
  },
  {
    // Agrupar por sede y contar cantidad de parqueos
    $group: {
      _id: "$sede_id",
      total_parqueos: { $sum: 1 }
    }
  },
  {
    // Unir con la colección de sedes para mostrar el nombre
    $lookup: {
      from: "sedes",
      localField: "_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    // Mostrar solo nombre de sede y total
    $project: {
      _id: 0,
      sede: "$sede.nombre",
      total_parqueos: 1
    }
  }
]);

//------------------------------------------------
// 2. ¿Cuáles son las zonas más ocupadas en cada sede?

db.parqueos.aggregate([
  {
    // Agrupar por sede y zona
    $group: {
      _id: { sede_id: "$sede_id", zona_id: "$zona_id" },
      cantidad: { $sum: 1 }
    }
  },
  { $sort: { "_id.sede_id": 1, cantidad: -1 } },
  {
    // Seleccionar la zona con más parqueos por sede
    $group: {
      _id: "$_id.sede_id",
      zona_mas_ocupada: { $first: "$_id.zona_id" },
      cantidad: { $first: "$cantidad" }
    }
  },
  {
    $lookup: {
      from: "zonas",
      localField: "zona_mas_ocupada",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $project: {
      _id: 0,
      sede_id: "$_id",
      zona: "$zona.nombre",
      cantidad: 1
    }
  }
]);

//------------------------------------------------
// 3. ¿Cuál es el ingreso total generado por parqueo en cada sede?

db.parqueos.aggregate([
  {
    // Solo parqueos finalizados (con hora_salida)
    $match: { hora_salida: { $ne: null } }
  },
  {
    $group: {
      _id: "$sede_id",
      ingreso_total: { $sum: "$costo" }
    }
  },
  {
    $lookup: {
      from: "sedes",
      localField: "_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $project: {
      _id: 0,
      sede: "$sede.nombre",
      ingreso_total: 1
    }
  }
]);

//------------------------------------------------
// 4. ¿Qué cliente ha usado más veces el parqueadero?

db.parqueos.aggregate([
  {
    $group: {
      _id: "$usuario_id",
      cantidad: { $sum: 1 }
    }
  },
  { $sort: { cantidad: -1 } },
  { $limit: 1 },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "cliente"
    }
  },
  { $unwind: "$cliente" },
  {
    $project: {
      _id: 0,
      nombre: "$cliente.nombre",
      email: "$cliente.email",
      veces_uso: "$cantidad"
    }
  }
]);

//------------------------------------------------
// 5. ¿Qué tipo de vehículo es más frecuente por sede?

db.parqueos.aggregate([
  {
    // Unimos con vehículos
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    // Unimos con zonas para conocer tipo de vehículo permitido
    $lookup: {
      from: "zonas",
      localField: "zona_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    // Agrupamos por sede y tipo de vehículo
    $group: {
      _id: { sede: "$sede_id", tipo: "$zona.tipo_vehiculo" },
      total: { $sum: 1 }
    }
  },
  { $sort: { "_id.sede": 1, total: -1 } },
  {
    $group: {
      _id: "$_id.sede",
      tipo_mas_frecuente: { $first: "$_id.tipo" },
      total: { $first: "$total" }
    }
  }
]);

//------------------------------------------------
// 6. Historial de parqueos de un cliente específico

db.parqueos.aggregate([
  { 
    $match: { usuario_id: ObjectId("AQUÍ_VA_EL_ID_DEL_CLIENTE") } 
  },
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    $lookup: {
      from: "zonas",
      localField: "zona_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $lookup: {
      from: "sedes",
      localField: "sede_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $project: {
      hora_entrada: 1,
      hora_salida: 1,
      costo: 1,
      sede: "$sede.nombre",
      zona: "$zona.nombre",
      tipo_vehiculo: "$zona.tipo_vehiculo",
      tiempo_horas: {
        $cond: {
          if: { $and: ["$hora_salida", "$hora_entrada"] },
          then: {
            $divide: [
              { $subtract: ["$hora_salida", "$hora_entrada"] },
              1000 * 60 * 60
            ]
          },
          else: null
        }
      }
    }
  }
]);

//------------------------------------------------
// 7. Vehículos actualmente parqueados en cada sede

db.parqueos.aggregate([
  { $match: { hora_salida: null } },
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    $lookup: {
      from: "sedes",
      localField: "sede_id",
      foreignField: "_id",
      as: "sede"
    }
  },
  { $unwind: "$sede" },
  {
    $project: {
      sede: "$sede.nombre",
      placa: "$vehiculo.placa",
      marca: "$vehiculo.marca",
      modelo: "$vehiculo.modelo",
      color: "$vehiculo.color",
      hora_entrada: 1
    }
  }
]);

//------------------------------------------------
// 8. Zonas que han excedido su capacidad de parqueo

db.parqueos.aggregate([
  { $match: { hora_salida: null } },
  {
    $group: {
      _id: "$zona_id",
      parqueos_activos: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "zonas",
      localField: "_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $project: {
      zona: "$zona.nombre",
      sede_id: "$zona.sede_id",
      capacidad: "$zona.capacidad",
      parqueos_activos: 1,
      excedido: { $gt: ["$parqueos_activos", "$zona.capacidad"] }
    }
  },
  { $match: { excedido: true } }
]);
//------------------------------------------------

// Promedio de tiempo de parqueo por sede
// Calcula el promedio de horas que un vehículo permanece parqueado en cada sede
db.parqueos.aggregate([
  { $match: { hora_salida: { $ne: null } } },
  {
    $project: {
      sede_id: 1,
      duracion_horas: {
        $divide: [{ $subtract: ["$hora_salida", "$hora_entrada"] }, 1000 * 60 * 60]
      }
    }
  },
  {
    $group: {
      _id: "$sede_id",
      promedio_horas: { $avg: "$duracion_horas" }
    }
  }
]);

//------------------------------------------------
//  Zonas con menor rotación (menos parqueos totales)
// Encuentra las zonas con menor cantidad de parqueos históricos
db.parqueos.aggregate([
  { $group: { _id: "$zona_id", total_parqueos: { $sum: 1 } } },
  { $sort: { total_parqueos: 1 } },
  {
    $lookup: {
      from: "zonas",
      localField: "_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $project: {
      zona: "$zona.nombre",
      total_parqueos: 1
    }
  }
]);
//------------------------------------------------
//Clientes que más han pagado en total
// Identifica los clientes que han pagado más dinero acumulado
db.parqueos.aggregate([
  { $match: { hora_salida: { $ne: null } } },
  { $group: { _id: "$usuario_id", total_pagado: { $sum: "$costo" } } },
  { $sort: { total_pagado: -1 } },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      nombre: "$usuario.nombre",
      email: "$usuario.email",
      total_pagado: 1
    }
  }
]);
//------------------------------------------------
 // Promedio de parqueos por cliente
 // Calcula el promedio general de parqueos por cliente
db.parqueos.aggregate([
  { $group: { _id: "$usuario_id", cantidad: { $sum: 1 } } },
  {
    $group: {
      _id: null,
      promedio: { $avg: "$cantidad" }
    }
  },
  {
    $project: {
      _id: 0,
      promedio_parqueos_por_cliente: "$promedio"
    }
  }
]);
//------------------------------------------------
// Histograma de parqueos por hora del día
// Muestra cuántos parqueos ocurren por hora (de 0 a 23)
db.parqueos.aggregate([
  { $project: { hora: { $hour: "$hora_entrada" } } },
  { $group: { _id: "$hora", cantidad: { $sum: 1 } } },
  { $sort: { _id: 1 } }
]);

//------------------------------------------------
//Frecuencia de uso por tipo de vehículo
// Muestra cuántas veces se han parqueado por tipo de vehículo (carro, moto, etc.)
db.parqueos.aggregate([
  {
    $lookup: {
      from: "zonas",
      localField: "zona_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  { $group: { _id: "$zona.tipo_vehiculo", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);

//------------------------------------------------
//Ranking de zonas por ingresos
// Calcula el total de dinero generado por cada zona
db.parqueos.aggregate([
  { $match: { hora_salida: { $ne: null } } },
  { $group: { _id: "$zona_id", ingreso_total: { $sum: "$costo" } } },
  {
    $lookup: {
      from: "zonas",
      localField: "_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $project: {
      zona: "$zona.nombre",
      ingreso_total: 1
    }
  },
  { $sort: { ingreso_total: -1 } }
]);
//------------------------------------------------
//Tasa de ocupación actual por zona
// Muestra el porcentaje de ocupación actual por zona
db.parqueos.aggregate([
  { $match: { hora_salida: null } },
  { $group: { _id: "$zona_id", activos: { $sum: 1 } } },
  {
    $lookup: {
      from: "zonas",
      localField: "_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $project: {
      zona: "$zona.nombre",
      capacidad: "$zona.capacidad",
      activos: 1,
      ocupacion: {
        $divide: ["$activos", "$zona.capacidad"]
      }
    }
  },
  { $sort: { ocupacion: -1 } }
]);
//------------------------------------------------
//Clientes que han usado más de una sede
// Muestra los clientes que han usado más de una sede diferente
db.parqueos.aggregate([
  { $group: { _id: "$usuario_id", sedes: { $addToSet: "$sede_id" } } },
  {
    $project: {
      cantidad_sedes: { $size: "$sedes" },
      sedes: 1
    }
  },
  { $match: { cantidad_sedes: { $gt: 1 } } }
]);
//------------------------------------------------
// Promedio de costo por tipo de vehículo
// Calcula cuánto se cobra en promedio según el tipo de vehículo
db.parqueos.aggregate([
  { $match: { hora_salida: { $ne: null } } },
  {
    $lookup: {
      from: "zonas",
      localField: "zona_id",
      foreignField: "_id",
      as: "zona"
    }
  },
  { $unwind: "$zona" },
  {
    $group: {
      _id: "$zona.tipo_vehiculo",
      promedio_costo: { $avg: "$costo" }
    }
  }
]);
//------------------------------------------------
