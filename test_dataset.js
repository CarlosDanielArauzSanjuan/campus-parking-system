db.sedes.insertMany([
  {
    _id: ObjectId("66ff1c000000000000000001"),
    nombre: "Sede Bucaramanga",
    direccion: "Zona Franca Edificio Zenith",
    telefono: "3001234567",
    ciudad: "Bucaramanga",
    estado: "abierto"
  },
  {
    _id: ObjectId("66ff1c000000000000000002"),
    nombre: "Sede Cúcuta",
    direccion: "Cll 45 #18-19",
    telefono: "3012345678",
    ciudad: "Cúcuta",
    estado: "abierto"
  },
  {
    _id: ObjectId("66ff1c000000000000000003"),
    nombre: "Sede Bogotá",
    direccion: "Av 68 #55-10",
    telefono: "3023456789",
    ciudad: "Bogotá",
    estado: "abierto"
  }
]);

// ----------------------------------------------------------------------------
db.zonas.insertMany([
  // Sede Bucaramanga
  {
    _id: ObjectId("66ff1c000000000000000011"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    nombre: "A",
    capacidad: 10,
    estado: "disponible",
    tipo_vehiculo: "carro",
    tarifa: 4.5
  },
  {
    _id: ObjectId("66ff1c000000000000000012"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    nombre: "B",
    capacidad: 12,
    estado: "disponible",
    tipo_vehiculo: "moto",
    tarifa: 2.5
  },
  {
    _id: ObjectId("66ff1c000000000000000013"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    nombre: "C",
    capacidad: 8,
    estado: "disponible",
    tipo_vehiculo: "bicicleta",
    tarifa: 1.0
  },
  {
    _id: ObjectId("66ff1c000000000000000014"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    nombre: "D",
    capacidad: 20,
    estado: "disponible",
    tipo_vehiculo: "carro",
    tarifa: 5.0
  },
  {
    _id: ObjectId("66ff1c000000000000000015"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    nombre: "E",
    capacidad: 6,
    estado: "disponible",
    tipo_vehiculo: "camion",
    tarifa: 6.5
  },

  // ----------------------------------------------------------------------------
  // Sede Cucuta
  {
    _id: ObjectId("66ff1c000000000000000016"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    nombre: "A",
    capacidad: 9,
    estado: "disponible",
    tipo_vehiculo: "carro",
    tarifa: 4.8
  },
  {
    _id: ObjectId("66ff1c000000000000000017"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    nombre: "B",
    capacidad: 10,
    estado: "disponible",
    tipo_vehiculo: "moto",
    tarifa: 2.0
  },
  {
    _id: ObjectId("66ff1c000000000000000018"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    nombre: "C",
    capacidad: 5,
    estado: "disponible",
    tipo_vehiculo: "bicicleta",
    tarifa: 0.8
  },
  {
    _id: ObjectId("66ff1c000000000000000019"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    nombre: "D",
    capacidad: 18,
    estado: "disponible",
    tipo_vehiculo: "carro",
    tarifa: 5.2
  },
  {
    _id: ObjectId("66ff1c00000000000000001a"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    nombre: "E",
    capacidad: 7,
    estado: "disponible",
    tipo_vehiculo: "camion",
    tarifa: 6.0
  },

  // ----------------------------------------------------------------------------
  // Sede bogota
  {
    _id: ObjectId("66ff1c00000000000000001b"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    nombre: "A",
    capacidad: 11,
    estado: "disponible",
    tipo_vehiculo: "carro",
    tarifa: 4.2
  },
  {
    _id: ObjectId("66ff1c00000000000000001c"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    nombre: "B",
    capacidad: 13,
    estado: "disponible",
    tipo_vehiculo: "moto",
    tarifa: 2.3
  },
  {
    _id: ObjectId("66ff1c00000000000000001d"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    nombre: "C",
    capacidad: 6,
    estado: "disponible",
    tipo_vehiculo: "bicicleta",
    tarifa: 1.2
  },
  {
    _id: ObjectId("66ff1c00000000000000001e"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    nombre: "D",
    capacidad: 14,
    estado: "disponible",
    tipo_vehiculo: "carro",
    tarifa: 5.1
  },
  {
    _id: ObjectId("66ff1c00000000000000001f"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    nombre: "E",
    capacidad: 5,
    estado: "disponible",
    tipo_vehiculo: "camion",
    tarifa: 6.8
  }
]);

// ----------------------------------------------------------------------------

db.usuarios.insertMany([
  { _id: ObjectId("66ff1c000000000000000101"), nombre: "Usuario 1", email: "user1@correo.com", telefono: "3000000001", cedula: "10000001", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000102"), nombre: "Usuario 2", email: "user2@correo.com", telefono: "3000000002", cedula: "10000002", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000103"), nombre: "Usuario 3", email: "user3@correo.com", telefono: "3000000003", cedula: "10000003", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000104"), nombre: "Usuario 4", email: "user4@correo.com", telefono: "3000000004", cedula: "10000004", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000105"), nombre: "Usuario 5", email: "user5@correo.com", telefono: "3000000005", cedula: "10000005", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000106"), nombre: "Usuario 6", email: "user6@correo.com", telefono: "3000000006", cedula: "10000006", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000107"), nombre: "Usuario 7", email: "user7@correo.com", telefono: "3000000007", cedula: "10000007", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000108"), nombre: "Usuario 8", email: "user8@correo.com", telefono: "3000000008", cedula: "10000008", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000109"), nombre: "Usuario 9", email: "user9@correo.com", telefono: "3000000009", cedula: "10000009", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c00000000000000010a"), nombre: "Usuario 10", email: "user10@correo.com", telefono: "3000000010", cedula: "10000010", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c00000000000000010b"), nombre: "Usuario 11", email: "user11@correo.com", telefono: "3000000011", cedula: "10000011", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c00000000000000010c"), nombre: "Usuario 12", email: "user12@correo.com", telefono: "3000000012", cedula: "10000012", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c00000000000000010d"), nombre: "Usuario 13", email: "user13@correo.com", telefono: "3000000013", cedula: "10000013", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c00000000000000010e"), nombre: "Usuario 14", email: "user14@correo.com", telefono: "3000000014", cedula: "10000014", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c00000000000000010f"), nombre: "Usuario 15", email: "user15@correo.com", telefono: "3000000015", cedula: "10000015", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000110"), nombre: "Usuario 16", email: "user16@correo.com", telefono: "3000000016", cedula: "10000016", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000111"), nombre: "Usuario 17", email: "user17@correo.com", telefono: "3000000017", cedula: "10000017", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000112"), nombre: "Usuario 18", email: "user18@correo.com", telefono: "3000000018", cedula: "10000018", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000113"), nombre: "Usuario 19", email: "user19@correo.com", telefono: "3000000019", cedula: "10000019", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000114"), nombre: "Usuario 20", email: "user20@correo.com", telefono: "3000000020", cedula: "10000020", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000115"), nombre: "Usuario 21", email: "user21@correo.com", telefono: "3000000021", cedula: "10000021", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000116"), nombre: "Usuario 22", email: "user22@correo.com", telefono: "3000000022", cedula: "10000022", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000117"), nombre: "Usuario 23", email: "user23@correo.com", telefono: "3000000023", cedula: "10000023", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000118"), nombre: "Usuario 24", email: "user24@correo.com", telefono: "3000000024", cedula: "10000024", fecha_registro: new Date() },
  { _id: ObjectId("66ff1c000000000000000119"), nombre: "Usuario 25", email: "user25@correo.com", telefono: "3000000025", cedula: "10000025", fecha_registro: new Date() }
]);

// ----------------------------------------------------------------------------

db.vehiculos.insertMany([
  { _id: ObjectId("66ff1c000000000000000201"), usuario_id: ObjectId("66ff1c000000000000000101"), placa: "XYZ101", marca: "Toyota", modelo: "Corolla", color: "Rojo" },
  { _id: ObjectId("66ff1c000000000000000202"), usuario_id: ObjectId("66ff1c000000000000000102"), placa: "XYZ102", marca: "Yamaha", modelo: "FZ", color: "Negro" },
  { _id: ObjectId("66ff1c000000000000000203"), usuario_id: ObjectId("66ff1c000000000000000103"), placa: "XYZ103", marca: "Chevrolet", modelo: "Spark", color: "Azul" },
  { _id: ObjectId("66ff1c000000000000000204"), usuario_id: ObjectId("66ff1c000000000000000104"), placa: "XYZ104", marca: "Specialized", modelo: "Allez", color: "Gris" },
  { _id: ObjectId("66ff1c000000000000000205"), usuario_id: ObjectId("66ff1c000000000000000105"), placa: "XYZ105", marca: "Toyota", modelo: "Corolla", color: "Rojo" },
  { _id: ObjectId("66ff1c000000000000000206"), usuario_id: ObjectId("66ff1c000000000000000106"), placa: "XYZ106", marca: "Yamaha", modelo: "FZ", color: "Negro" },
  { _id: ObjectId("66ff1c000000000000000207"), usuario_id: ObjectId("66ff1c000000000000000107"), placa: "XYZ107", marca: "Chevrolet", modelo: "Spark", color: "Azul" },
  { _id: ObjectId("66ff1c000000000000000208"), usuario_id: ObjectId("66ff1c000000000000000108"), placa: "XYZ108", marca: "Specialized", modelo: "Allez", color: "Gris" },
  { _id: ObjectId("66ff1c000000000000000209"), usuario_id: ObjectId("66ff1c000000000000000109"), placa: "XYZ109", marca: "Toyota", modelo: "Corolla", color: "Rojo" },
  { _id: ObjectId("66ff1c00000000000000020a"), usuario_id: ObjectId("66ff1c00000000000000010a"), placa: "XYZ110", marca: "Yamaha", modelo: "FZ", color: "Negro" },
  { _id: ObjectId("66ff1c00000000000000020b"), usuario_id: ObjectId("66ff1c00000000000000010b"), placa: "XYZ111", marca: "Chevrolet", modelo: "Spark", color: "Azul" },
  { _id: ObjectId("66ff1c00000000000000020c"), usuario_id: ObjectId("66ff1c00000000000000010c"), placa: "XYZ112", marca: "Specialized", modelo: "Allez", color: "Gris" },
  { _id: ObjectId("66ff1c00000000000000020d"), usuario_id: ObjectId("66ff1c00000000000000010d"), placa: "XYZ113", marca: "Toyota", modelo: "Corolla", color: "Rojo" },
  { _id: ObjectId("66ff1c00000000000000020e"), usuario_id: ObjectId("66ff1c00000000000000010e"), placa: "XYZ114", marca: "Yamaha", modelo: "FZ", color: "Negro" },
  { _id: ObjectId("66ff1c00000000000000020f"), usuario_id: ObjectId("66ff1c00000000000000010f"), placa: "XYZ115", marca: "Chevrolet", modelo: "Spark", color: "Azul" },
  { _id: ObjectId("66ff1c000000000000000210"), usuario_id: ObjectId("66ff1c000000000000000101"), placa: "XYZ116", marca: "Specialized", modelo: "Allez", color: "Gris" },
  { _id: ObjectId("66ff1c000000000000000211"), usuario_id: ObjectId("66ff1c000000000000000102"), placa: "XYZ117", marca: "Toyota", modelo: "Corolla", color: "Rojo" },
  { _id: ObjectId("66ff1c000000000000000212"), usuario_id: ObjectId("66ff1c000000000000000103"), placa: "XYZ118", marca: "Yamaha", modelo: "FZ", color: "Negro" },
  { _id: ObjectId("66ff1c000000000000000213"), usuario_id: ObjectId("66ff1c000000000000000104"), placa: "XYZ119", marca: "Chevrolet", modelo: "Spark", color: "Azul" },
  { _id: ObjectId("66ff1c000000000000000214"), usuario_id: ObjectId("66ff1c000000000000000105"), placa: "XYZ120", marca: "Specialized", modelo: "Allez", color: "Gris" },
  { _id: ObjectId("66ff1c000000000000000215"), usuario_id: ObjectId("66ff1c000000000000000106"), placa: "XYZ121", marca: "Toyota", modelo: "Corolla", color: "Rojo" },
  { _id: ObjectId("66ff1c000000000000000216"), usuario_id: ObjectId("66ff1c000000000000000107"), placa: "XYZ122", marca: "Yamaha", modelo: "FZ", color: "Negro" },
  { _id: ObjectId("66ff1c000000000000000217"), usuario_id: ObjectId("66ff1c000000000000000108"), placa: "XYZ123", marca: "Chevrolet", modelo: "Spark", color: "Azul" },
  { _id: ObjectId("66ff1c000000000000000218"), usuario_id: ObjectId("66ff1c000000000000000109"), placa: "XYZ124", marca: "Specialized", modelo: "Allez", color: "Gris" },
  { _id: ObjectId("66ff1c000000000000000219"), usuario_id: ObjectId("66ff1c00000000000000010a"), placa: "XYZ125", marca: "Toyota", modelo: "Corolla", color: "Rojo" },
  { _id: ObjectId("66ff1c00000000000000021a"), usuario_id: ObjectId("66ff1c00000000000000010b"), placa: "XYZ126", marca: "Yamaha", modelo: "FZ", color: "Negro" },
  { _id: ObjectId("66ff1c00000000000000021b"), usuario_id: ObjectId("66ff1c00000000000000010c"), placa: "XYZ127", marca: "Chevrolet", modelo: "Spark", color: "Azul" },
  { _id: ObjectId("66ff1c00000000000000021c"), usuario_id: ObjectId("66ff1c00000000000000010d"), placa: "XYZ128", marca: "Specialized", modelo: "Allez", color: "Gris" },
  { _id: ObjectId("66ff1c00000000000000021d"), usuario_id: ObjectId("66ff1c00000000000000010e"), placa: "XYZ129", marca: "Toyota", modelo: "Corolla", color: "Rojo" },
  { _id: ObjectId("66ff1c00000000000000021e"), usuario_id: ObjectId("66ff1c00000000000000010f"), placa: "XYZ130", marca: "Yamaha", modelo: "FZ", color: "Negro" }
]);

// ----------------------------------------------------------------------------

db.parqueo.insertMany([
  {
    _id: ObjectId("66ff1c000000000000000301"),
    usuario_id: ObjectId("66ff1c000000000000000101"),
    vehiculo_id: ObjectId("66ff1c000000000000000201"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000011"),
    fecha_ingreso: ISODate("2025-07-01T08:00:00"),
    fecha_salida: null,
    costo: 0
  },
  {
    _id: ObjectId("66ff1c000000000000000302"),
    usuario_id: ObjectId("66ff1c000000000000000102"),
    vehiculo_id: ObjectId("66ff1c000000000000000202"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000012"),
    fecha_ingreso: ISODate("2025-07-01T09:00:00"),
    fecha_salida: ISODate("2025-07-01T12:00:00"),
    costo: 1001.5
  },
  {
    _id: ObjectId("66ff1c000000000000000303"),
    usuario_id: ObjectId("66ff1c000000000000000103"),
    vehiculo_id: ObjectId("66ff1c000000000000000203"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000013"),
    fecha_ingreso: ISODate("2025-07-01T10:00:00"),
    fecha_salida: ISODate("2025-07-01T13:00:00"),
    costo: 1003.0
  },
  {
    _id: ObjectId("66ff1c000000000000000304"),
    usuario_id: ObjectId("66ff1c000000000000000104"),
    vehiculo_id: ObjectId("66ff1c000000000000000204"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000014"),
    fecha_ingreso: ISODate("2025-07-01T11:00:00"),
    fecha_salida: ISODate("2025-07-01T14:00:00"),
    costo: 1004.5
  },
  {
    _id: ObjectId("66ff1c000000000000000305"),
    usuario_id: ObjectId("66ff1c000000000000000105"),
    vehiculo_id: ObjectId("66ff1c000000000000000205"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000015"),
    fecha_ingreso: ISODate("2025-07-01T12:00:00"),
    fecha_salida: ISODate("2025-07-01T15:00:00"),
    costo: 1006.0
  },
  {
    _id: ObjectId("66ff1c000000000000000306"),
    usuario_id: ObjectId("66ff1c000000000000000106"),
    vehiculo_id: ObjectId("66ff1c000000000000000206"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000016"),
    fecha_ingreso: ISODate("2025-07-01T13:00:00"),
    fecha_salida: ISODate("2025-07-01T16:00:00"),
    costo: 1007.5
  },
  {
    _id: ObjectId("66ff1c000000000000000307"),
    usuario_id: ObjectId("66ff1c000000000000000107"),
    vehiculo_id: ObjectId("66ff1c000000000000000207"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000017"),
    fecha_ingreso: ISODate("2025-07-01T14:00:00"),
    fecha_salida: ISODate("2025-07-01T17:00:00"),
    costo: 1009.0
  },
  {
    _id: ObjectId("66ff1c000000000000000308"),
    usuario_id: ObjectId("66ff1c000000000000000108"),
    vehiculo_id: ObjectId("66ff1c000000000000000208"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000018"),
    fecha_ingreso: ISODate("2025-07-01T15:00:00"),
    fecha_salida: ISODate("2025-07-01T18:00:00"),
    costo: 1010.5
  },
  {
    _id: ObjectId("66ff1c000000000000000309"),
    usuario_id: ObjectId("66ff1c000000000000000109"),
    vehiculo_id: ObjectId("66ff1c000000000000000209"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000019"),
    fecha_ingreso: ISODate("2025-07-01T16:00:00"),
    fecha_salida: ISODate("2025-07-01T19:00:00"),
    costo: 1012.0
  },
  {
    _id: ObjectId("66ff1c00000000000000030a"),
    usuario_id: ObjectId("66ff1c00000000000000010a"),
    vehiculo_id: ObjectId("66ff1c00000000000000020a"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c00000000000000001a"),
    fecha_ingreso: ISODate("2025-07-01T17:00:00"),
    fecha_salida: ISODate("2025-07-01T20:00:00"),
    costo: 1013.5
  },
  {
    _id: ObjectId("66ff1c00000000000000030b"),
    usuario_id: ObjectId("66ff1c00000000000000010b"),
    vehiculo_id: ObjectId("66ff1c00000000000000020b"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c00000000000000001b"),
    fecha_ingreso: ISODate("2025-07-01T18:00:00"),
    fecha_salida: ISODate("2025-07-01T21:00:00"),
    costo: 1015.0
  },
  {
    _id: ObjectId("66ff1c00000000000000030c"),
    usuario_id: ObjectId("66ff1c00000000000000010c"),
    vehiculo_id: ObjectId("66ff1c00000000000000020c"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c00000000000000001c"),
    fecha_ingreso: ISODate("2025-07-01T19:00:00"),
    fecha_salida: ISODate("2025-07-01T22:00:00"),
    costo: 1016.5
  },
  {
    _id: ObjectId("66ff1c00000000000000030d"),
    usuario_id: ObjectId("66ff1c00000000000000010d"),
    vehiculo_id: ObjectId("66ff1c00000000000000020d"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c00000000000000001d"),
    fecha_ingreso: ISODate("2025-07-01T20:00:00"),
    fecha_salida: ISODate("2025-07-01T23:00:00"),
    costo: 1018.0
  },
  {
    _id: ObjectId("66ff1c00000000000000030e"),
    usuario_id: ObjectId("66ff1c00000000000000010e"),
    vehiculo_id: ObjectId("66ff1c00000000000000020e"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c00000000000000001e"),
    fecha_ingreso: ISODate("2025-07-01T21:00:00"),
    fecha_salida: ISODate("2025-07-02T00:00:00"),
    costo: 1019.5
  },
  {
    _id: ObjectId("66ff1c00000000000000030f"),
    usuario_id: ObjectId("66ff1c00000000000000010f"),
    vehiculo_id: ObjectId("66ff1c00000000000000020f"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c00000000000000001f"),
    fecha_ingreso: ISODate("2025-07-01T22:00:00"),
    fecha_salida: ISODate("2025-07-02T01:00:00"),
    costo: 1021.0
  },
  {
    _id: ObjectId("66ff1c000000000000000310"),
    usuario_id: ObjectId("66ff1c000000000000000101"),
    vehiculo_id: ObjectId("66ff1c000000000000000210"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000011"),
    fecha_ingreso: ISODate("2025-07-01T23:00:00"),
    fecha_salida: ISODate("2025-07-02T02:00:00"),
    costo: 1022.5
  },
  {
    _id: ObjectId("66ff1c000000000000000311"),
    usuario_id: ObjectId("66ff1c000000000000000102"),
    vehiculo_id: ObjectId("66ff1c000000000000000211"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000012"),
    fecha_ingreso: ISODate("2025-07-02T00:00:00"),
    fecha_salida: ISODate("2025-07-02T03:00:00"),
    costo: 1024.0
  },
  {
    _id: ObjectId("66ff1c000000000000000312"),
    usuario_id: ObjectId("66ff1c000000000000000103"),
    vehiculo_id: ObjectId("66ff1c000000000000000212"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000013"),
    fecha_ingreso: ISODate("2025-07-02T01:00:00"),
    fecha_salida: ISODate("2025-07-02T04:00:00"),
    costo: 1025.5
  },
  {
    _id: ObjectId("66ff1c000000000000000313"),
    usuario_id: ObjectId("66ff1c000000000000000104"),
    vehiculo_id: ObjectId("66ff1c000000000000000213"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000014"),
    fecha_ingreso: ISODate("2025-07-02T02:00:00"),
    fecha_salida: ISODate("2025-07-02T05:00:00"),
    costo: 1027.0
  },
  {
    _id: ObjectId("66ff1c000000000000000314"),
    usuario_id: ObjectId("66ff1c000000000000000105"),
    vehiculo_id: ObjectId("66ff1c000000000000000214"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000015"),
    fecha_ingreso: ISODate("2025-07-02T03:00:00"),
    fecha_salida: ISODate("2025-07-02T06:00:00"),
    costo: 1028.5
  },
  {
    _id: ObjectId("66ff1c000000000000000315"),
    usuario_id: ObjectId("66ff1c000000000000000106"),
    vehiculo_id: ObjectId("66ff1c000000000000000215"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000016"),
    fecha_ingreso: ISODate("2025-07-02T04:00:00"),
    fecha_salida: ISODate("2025-07-02T07:00:00"),
    costo: 1030.0
  },
  {
    _id: ObjectId("66ff1c000000000000000316"),
    usuario_id: ObjectId("66ff1c000000000000000107"),
    vehiculo_id: ObjectId("66ff1c000000000000000216"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000017"),
    fecha_ingreso: ISODate("2025-07-02T05:00:00"),
    fecha_salida: ISODate("2025-07-02T08:00:00"),
    costo: 1031.5
  },
  {
    _id: ObjectId("66ff1c000000000000000317"),
    usuario_id: ObjectId("66ff1c000000000000000108"),
    vehiculo_id: ObjectId("66ff1c000000000000000217"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000018"),
    fecha_ingreso: ISODate("2025-07-02T06:00:00"),
    fecha_salida: ISODate("2025-07-02T09:00:00"),
    costo: 1033.0
  },
  {
    _id: ObjectId("66ff1c000000000000000318"),
    usuario_id: ObjectId("66ff1c000000000000000109"),
    vehiculo_id: ObjectId("66ff1c000000000000000218"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000019"),
    fecha_ingreso: ISODate("2025-07-02T07:00:00"),
    fecha_salida: ISODate("2025-07-02T10:00:00"),
    costo: 1034.5
  },
  {
    _id: ObjectId("66ff1c000000000000000319"),
    usuario_id: ObjectId("66ff1c00000000000000010a"),
    vehiculo_id: ObjectId("66ff1c000000000000000219"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c00000000000000001a"),
    fecha_ingreso: ISODate("2025-07-02T08:00:00"),
    fecha_salida: ISODate("2025-07-02T11:00:00"),
    costo: 1036.0
  },
  {
    _id: ObjectId("66ff1c00000000000000031a"),
    usuario_id: ObjectId("66ff1c00000000000000010b"),
    vehiculo_id: ObjectId("66ff1c00000000000000021a"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c00000000000000001b"),
    fecha_ingreso: ISODate("2025-07-02T09:00:00"),
    fecha_salida: ISODate("2025-07-02T12:00:00"),
    costo: 1037.5
  },
  {
    _id: ObjectId("66ff1c00000000000000031b"),
    usuario_id: ObjectId("66ff1c00000000000000010c"),
    vehiculo_id: ObjectId("66ff1c00000000000000021b"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c00000000000000001c"),
    fecha_ingreso: ISODate("2025-07-02T10:00:00"),
    fecha_salida: ISODate("2025-07-02T13:00:00"),
    costo: 1039.0
  },
  {
    _id: ObjectId("66ff1c00000000000000031c"),
    usuario_id: ObjectId("66ff1c00000000000000010d"),
    vehiculo_id: ObjectId("66ff1c00000000000000021c"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c00000000000000001d"),
    fecha_ingreso: ISODate("2025-07-02T11:00:00"),
    fecha_salida: ISODate("2025-07-02T14:00:00"),
    costo: 1040.5
  },
  {
    _id: ObjectId("66ff1c00000000000000031d"),
    usuario_id: ObjectId("66ff1c00000000000000010e"),
    vehiculo_id: ObjectId("66ff1c00000000000000021d"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c00000000000000001e"),
    fecha_ingreso: ISODate("2025-07-02T12:00:00"),
    fecha_salida: ISODate("2025-07-02T15:00:00"),
    costo: 1042.0
  },
  {
    _id: ObjectId("66ff1c00000000000000031e"),
    usuario_id: ObjectId("66ff1c00000000000000010f"),
    vehiculo_id: ObjectId("66ff1c00000000000000021e"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c00000000000000001f"),
    fecha_ingreso: ISODate("2025-07-02T13:00:00"),
    fecha_salida: ISODate("2025-07-02T16:00:00"),
    costo: 1043.5
  },
  {
    _id: ObjectId("66ff1c00000000000000031f"),
    usuario_id: ObjectId("66ff1c000000000000000101"),
    vehiculo_id: ObjectId("66ff1c000000000000000201"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000011"),
    fecha_ingreso: ISODate("2025-07-02T14:00:00"),
    fecha_salida: ISODate("2025-07-02T17:00:00"),
    costo: 1045.0
  },
  {
    _id: ObjectId("66ff1c000000000000000320"),
    usuario_id: ObjectId("66ff1c000000000000000102"),
    vehiculo_id: ObjectId("66ff1c000000000000000202"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000012"),
    fecha_ingreso: ISODate("2025-07-02T15:00:00"),
    fecha_salida: ISODate("2025-07-02T18:00:00"),
    costo: 1046.5
  },
  {
    _id: ObjectId("66ff1c000000000000000321"),
    usuario_id: ObjectId("66ff1c000000000000000103"),
    vehiculo_id: ObjectId("66ff1c000000000000000203"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000013"),
    fecha_ingreso: ISODate("2025-07-02T16:00:00"),
    fecha_salida: ISODate("2025-07-02T19:00:00"),
    costo: 1048.0
  },
  {
    _id: ObjectId("66ff1c000000000000000322"),
    usuario_id: ObjectId("66ff1c000000000000000104"),
    vehiculo_id: ObjectId("66ff1c000000000000000204"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000014"),
    fecha_ingreso: ISODate("2025-07-02T17:00:00"),
    fecha_salida: ISODate("2025-07-02T20:00:00"),
    costo: 1049.5
  },
  {
    _id: ObjectId("66ff1c000000000000000323"),
    usuario_id: ObjectId("66ff1c000000000000000105"),
    vehiculo_id: ObjectId("66ff1c000000000000000205"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000015"),
    fecha_ingreso: ISODate("2025-07-02T18:00:00"),
    fecha_salida: ISODate("2025-07-02T21:00:00"),
    costo: 1051.0
  },
  {
    _id: ObjectId("66ff1c000000000000000324"),
    usuario_id: ObjectId("66ff1c000000000000000106"),
    vehiculo_id: ObjectId("66ff1c000000000000000206"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000016"),
    fecha_ingreso: ISODate("2025-07-02T19:00:00"),
    fecha_salida: ISODate("2025-07-02T22:00:00"),
    costo: 1052.5
  },
  {
    _id: ObjectId("66ff1c000000000000000325"),
    usuario_id: ObjectId("66ff1c000000000000000107"),
    vehiculo_id: ObjectId("66ff1c000000000000000207"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000017"),
    fecha_ingreso: ISODate("2025-07-02T20:00:00"),
    fecha_salida: ISODate("2025-07-02T23:00:00"),
    costo: 1054.0
  },
  {
    _id: ObjectId("66ff1c000000000000000326"),
    usuario_id: ObjectId("66ff1c000000000000000108"),
    vehiculo_id: ObjectId("66ff1c000000000000000208"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000018"),
    fecha_ingreso: ISODate("2025-07-02T21:00:00"),
    fecha_salida: ISODate("2025-07-03T00:00:00"),
    costo: 1055.5
  },
  {
    _id: ObjectId("66ff1c000000000000000327"),
    usuario_id: ObjectId("66ff1c000000000000000109"),
    vehiculo_id: ObjectId("66ff1c000000000000000209"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000019"),
    fecha_ingreso: ISODate("2025-07-02T22:00:00"),
    fecha_salida: ISODate("2025-07-03T01:00:00"),
    costo: 1057.0
  },
  {
    _id: ObjectId("66ff1c000000000000000328"),
    usuario_id: ObjectId("66ff1c00000000000000010a"),
    vehiculo_id: ObjectId("66ff1c00000000000000020a"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c00000000000000001a"),
    fecha_ingreso: ISODate("2025-07-02T23:00:00"),
    fecha_salida: ISODate("2025-07-03T02:00:00"),
    costo: 1058.5
  },
  {
    _id: ObjectId("66ff1c000000000000000329"),
    usuario_id: ObjectId("66ff1c00000000000000010b"),
    vehiculo_id: ObjectId("66ff1c00000000000000020b"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c00000000000000001b"),
    fecha_ingreso: ISODate("2025-07-03T00:00:00"),
    fecha_salida: ISODate("2025-07-03T03:00:00"),
    costo: 1060.0
  },
  {
    _id: ObjectId("66ff1c00000000000000032a"),
    usuario_id: ObjectId("66ff1c00000000000000010c"),
    vehiculo_id: ObjectId("66ff1c00000000000000020c"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c00000000000000001c"),
    fecha_ingreso: ISODate("2025-07-03T01:00:00"),
    fecha_salida: ISODate("2025-07-03T04:00:00"),
    costo: 1061.5
  },
  {
    _id: ObjectId("66ff1c00000000000000032b"),
    usuario_id: ObjectId("66ff1c00000000000000010d"),
    vehiculo_id: ObjectId("66ff1c00000000000000020d"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c00000000000000001d"),
    fecha_ingreso: ISODate("2025-07-03T02:00:00"),
    fecha_salida: ISODate("2025-07-03T05:00:00"),
    costo: 1063.0
  },
  {
    _id: ObjectId("66ff1c00000000000000032c"),
    usuario_id: ObjectId("66ff1c00000000000000010e"),
    vehiculo_id: ObjectId("66ff1c00000000000000020e"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c00000000000000001e"),
    fecha_ingreso: ISODate("2025-07-03T03:00:00"),
    fecha_salida: ISODate("2025-07-03T06:00:00"),
    costo: 1064.5
  },
  {
    _id: ObjectId("66ff1c00000000000000032d"),
    usuario_id: ObjectId("66ff1c00000000000000010f"),
    vehiculo_id: ObjectId("66ff1c00000000000000020f"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c00000000000000001f"),
    fecha_ingreso: ISODate("2025-07-03T04:00:00"),
    fecha_salida: ISODate("2025-07-03T07:00:00"),
    costo: 1066.0
  },
  {
    _id: ObjectId("66ff1c00000000000000032e"),
    usuario_id: ObjectId("66ff1c000000000000000101"),
    vehiculo_id: ObjectId("66ff1c000000000000000210"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000011"),
    fecha_ingreso: ISODate("2025-07-03T05:00:00"),
    fecha_salida: null,
    costo: 0
  },
  {
    _id: ObjectId("66ff1c00000000000000032f"),
    usuario_id: ObjectId("66ff1c000000000000000102"),
    vehiculo_id: ObjectId("66ff1c000000000000000211"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000012"),
    fecha_ingreso: ISODate("2025-07-03T06:00:00"),
    fecha_salida: null,
    costo: 0
  },
  {
    _id: ObjectId("66ff1c000000000000000330"),
    usuario_id: ObjectId("66ff1c000000000000000103"),
    vehiculo_id: ObjectId("66ff1c000000000000000212"),
    sede_id: ObjectId("66ff1c000000000000000003"),
    zona_id: ObjectId("66ff1c000000000000000013"),
    fecha_ingreso: ISODate("2025-07-03T07:00:00"),
    fecha_salida: null,
    costo: 0
  },
  {
    _id: ObjectId("66ff1c000000000000000331"),
    usuario_id: ObjectId("66ff1c000000000000000104"),
    vehiculo_id: ObjectId("66ff1c000000000000000213"),
    sede_id: ObjectId("66ff1c000000000000000001"),
    zona_id: ObjectId("66ff1c000000000000000014"),
    fecha_ingreso: ISODate("2025-07-03T08:00:00"),
    fecha_salida: null,
    costo: 0
  },
  {
    _id: ObjectId("66ff1c000000000000000332"),
    usuario_id: ObjectId("66ff1c000000000000000105"),
    vehiculo_id: ObjectId("66ff1c000000000000000214"),
    sede_id: ObjectId("66ff1c000000000000000002"),
    zona_id: ObjectId("66ff1c000000000000000015"),
    fecha_ingreso: ISODate("2025-07-03T09:00:00"),
    fecha_salida: null,
    costo: 0
  }
]);

// ----------------------------------------------------------------------------



