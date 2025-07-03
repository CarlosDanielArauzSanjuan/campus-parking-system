//------------------------------------------------
// 1 Consultas de agregación para el sistema de parqueo
db.parqueo.aggregate([
  {
    // Filtramos parqueos desde hace 30 días
    $match: {
      fecha_ingreso: { $gte: new Date(new Date().setDate(new Date().getDate() - 30)) }
    }
  },
  {
    // Agrupamos por sede
    $group: {
      _id: "$sede_id",
      total_parqueos: { $sum: 1 }
    }
  },
  {
    // Unimos con la colección sedes para mostrar nombre
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
      total_parqueos: 1
    }
  }
]);
 //-------------------------------------------------
// 2 Encontrar la zona más ocupada por sede
db.parqueo.aggregate([
  {
    // Agrupamos por sede y zona para contar parqueos
    $group: {
      _id: { sede_id: "$sede_id", zona_id: "$zona_id" },
      cantidad: { $sum: 1 }
    }
  },
  {
    // Ordenamos por sede y por cantidad descendente
    $sort: { "_id.sede_id": 1, cantidad: -1 }
  },
  {
    // Agrupamos por sede y dejamos solo la zona más ocupada
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

// 3 Ingresos totales por sede
db.parqueo.aggregate([
  {
    // Solo parqueos finalizados
    $match: { fecha_salida: { $ne: null } }
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

// 4 Usuario que más ha utilizado el parqueo
db.parqueo.aggregate([
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

// 5 Tipo de vehículo más frecuente por sede
db.parqueo.aggregate([
  {
    // Unimos con vehículos y zonas
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

// 6 Detalles de parqueos de un usuario específico
db.parqueo.aggregate([
  { $match: { usuario_id: ObjectId("66ff1c000000000000000101") } },
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
      fecha_ingreso: 1,
      fecha_salida: 1,
      costo: 1,
      sede: "$sede.nombre",
      zona: "$zona.nombre",
      tipo_vehiculo: "$zona.tipo_vehiculo",
      tiempo_horas: {
        $divide: [
          { $subtract: ["$fecha_salida", "$fecha_ingreso"] },
          1000 * 60 * 60
        ]
      }
    }
  }
]);

// 7 Detalles de parqueos activos (sin fecha de salida)
db.parqueo.aggregate([
  { $match: { fecha_salida: null } },
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
      fecha_ingreso: 1
    }
  }
]);

// 8 Zonas con parqueos activos que exceden su capacidad
db.parqueo.aggregate([
  { $match: { fecha_salida: null } },
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

