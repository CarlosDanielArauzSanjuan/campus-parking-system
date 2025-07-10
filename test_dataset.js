db.sedes.insertMany([
  {
    nombre: "Campus Norte",
    direccion: "Av. 1 #23-45",
    telefono: "6011234567",
    ciudad: "Bogotá",
    estado: "abierto"
  },
  {
    nombre: "Campus Sur",
    direccion: "Cra. 9 #45-78",
    telefono: "6049876543",
    ciudad: "Medellín",
    estado: "abierto"
  },
  {
    nombre: "Campus Oriente",
    direccion: "Calle 50 #10-20",
    telefono: "6073456789",
    ciudad: "Bucaramanga",
    estado: "abierto"
  }
]);

//------------------------------------------------------------------------------------------------------------


db.system.js.insertMany([
  { _id: "getCampusNorte", value: new Code("function() { return ObjectId('686f788d0b650d55481c89fd'); }") },
  { _id: "getCampusSur", value: new Code("function() { return ObjectId('686f788d0b650d55481c89fe'); }") },
  { _id: "getCampusOriente", value: new Code("function() { return ObjectId('686f788d0b650d55481c89ff'); }") }
]);

const getCampusNorte = new Function('return ' + db.system.js.findOne({ _id: "getCampusNorte" }).value.code)();
const getCampusSur = new Function('return ' + db.system.js.findOne({ _id: "getCampusSur" }).value.code)();
const getCampusOriente = new Function('return ' + db.system.js.findOne({ _id: "getCampusOriente" }).value.code)();

//------------------------------------------------------------------------------------------------------------

db.zonas.insertMany([
  { sede_id: getCampusNorte(), nombre: "A", capacidad: 30, estado: "disponible", tipo_vehiculo: "carro", tarifa: 1800.00 },
  { sede_id: getCampusNorte(), nombre: "B", capacidad: 20, estado: "disponible", tipo_vehiculo: "moto", tarifa: 800.00 },
  { sede_id: getCampusNorte(), nombre: "C", capacidad: 15, estado: "mantenimiento", tipo_vehiculo: "bicicleta", tarifa: 300.00 },
  { sede_id: getCampusNorte(), nombre: "D", capacidad: 25, estado: "disponible", tipo_vehiculo: "carro", tarifa: 2000.00 },
  { sede_id: getCampusNorte(), nombre: "E", capacidad: 10, estado: "ocupada", tipo_vehiculo: "camion", tarifa: 5000.00 }
]);


db.zonas.insertMany([
  { sede_id: getCampusSur(), nombre: "A", capacidad: 40, estado: "disponible", tipo_vehiculo: "carro", tarifa: 1900.00 },
  { sede_id: getCampusSur(), nombre: "B", capacidad: 18, estado: "ocupada", tipo_vehiculo: "moto", tarifa: 900.00 },
  { sede_id: getCampusSur(), nombre: "C", capacidad: 12, estado: "disponible", tipo_vehiculo: "bicicleta", tarifa: 350.00 },
  { sede_id: getCampusSur(), nombre: "D", capacidad: 20, estado: "mantenimiento", tipo_vehiculo: "carro", tarifa: 2100.00 },
  { sede_id: getCampusSur(), nombre: "E", capacidad: 8, estado: "disponible", tipo_vehiculo: "camion", tarifa: 4800.00 }
]);


db.zonas.insertMany([
  { sede_id: getCampusOriente(), nombre: "A", capacidad: 35, estado: "disponible", tipo_vehiculo: "carro", tarifa: 1700.00 },
  { sede_id: getCampusOriente(), nombre: "B", capacidad: 22, estado: "ocupada", tipo_vehiculo: "moto", tarifa: 750.00 },
  { sede_id: getCampusOriente(), nombre: "C", capacidad: 10, estado: "disponible", tipo_vehiculo: "bicicleta", tarifa: 250.00 },
  { sede_id: getCampusOriente(), nombre: "D", capacidad: 28, estado: "disponible", tipo_vehiculo: "carro", tarifa: 1900.00 },
  { sede_id: getCampusOriente(), nombre: "E", capacidad: 5, estado: "mantenimiento", tipo_vehiculo: "camion", tarifa: 5200.00 }
]);

//------------------------------------------------------------------------------------------------------------

db.system.js.insertMany([
  { _id: "zona1", value: new Code("function() { return ObjectId('686f7bf8be06e73a0a89ca26'); }") },
  { _id: "zona2", value: new Code("function() { return ObjectId('686f7c03be06e73a0a89ca27'); }") },
  { _id: "zona3", value: new Code("function() { return ObjectId('686f7c0cbe06e73a0a89ca28'); }") },
  { _id: "zona4", value: new Code("function() { return ObjectId('686f7c18be06e73a0a89ca29'); }") },
  { _id: "zona5", value: new Code("function() { return ObjectId('686f7c24be06e73a0a89ca2a'); }") },
  { _id: "zona6", value: new Code("function() { return ObjectId('686f7c70be06e73a0a89ca2b'); }") },
  { _id: "zona7", value: new Code("function() { return ObjectId('686f7c70be06e73a0a89ca2c'); }") },
  { _id: "zona8", value: new Code("function() { return ObjectId('686f7c70be06e73a0a89ca2d'); }") },
  { _id: "zona9", value: new Code("function() { return ObjectId('686f7c70be06e73a0a89ca2e'); }") },
  { _id: "zona10", value: new Code("function() { return ObjectId('686f7c70be06e73a0a89ca2f'); }") },
  { _id: "zona11", value: new Code("function() { return ObjectId('686f7c91be06e73a0a89ca30'); }") },
  { _id: "zona12", value: new Code("function() { return ObjectId('686f7c91be06e73a0a89ca31'); }") },
  { _id: "zona13", value: new Code("function() { return ObjectId('686f7c91be06e73a0a89ca32'); }") },
  { _id: "zona14", value: new Code("function() { return ObjectId('686f7c91be06e73a0a89ca33'); }") },
  { _id: "zona15", value: new Code("function() { return ObjectId('686f7c91be06e73a0a89ca34'); }") }
]);


const zona1 = new Function('return ' + db.system.js.findOne({ _id: "zona1" }).value.code)();
const zona2 = new Function('return ' + db.system.js.findOne({ _id: "zona2" }).value.code)();
const zona3 = new Function('return ' + db.system.js.findOne({ _id: "zona3" }).value.code)();
const zona4 = new Function('return ' + db.system.js.findOne({ _id: "zona4" }).value.code)();
const zona5 = new Function('return ' + db.system.js.findOne({ _id: "zona5" }).value.code)();
const zona6 = new Function('return ' + db.system.js.findOne({ _id: "zona6" }).value.code)();
const zona7 = new Function('return ' + db.system.js.findOne({ _id: "zona7" }).value.code)();
const zona8 = new Function('return ' + db.system.js.findOne({ _id: "zona8" }).value.code)();
const zona9 = new Function('return ' + db.system.js.findOne({ _id: "zona9" }).value.code)();
const zona10 = new Function('return ' + db.system.js.findOne({ _id: "zona10" }).value.code)();
const zona11 = new Function('return ' + db.system.js.findOne({ _id: "zona11" }).value.code)();
const zona12 = new Function('return ' + db.system.js.findOne({ _id: "zona12" }).value.code)();
const zona13 = new Function('return ' + db.system.js.findOne({ _id: "zona13" }).value.code)();
const zona14 = new Function('return ' + db.system.js.findOne({ _id: "zona14" }).value.code)();
const zona15 = new Function('return ' + db.system.js.findOne({ _id: "zona15" }).value.code)();





//------------------------------------------------------------------------------------------------------------

//db.usuarios.find({}, { _id: 1, nombre: 1 })

db.usuarios.insertMany([
  { nombre: "Laura Torres", email: "laura.torres1@campus.com", telefono: "3001234567", cedula: "1010101100", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Carlos Ruiz", email: "carlos.ruiz1@campus.com", telefono: "3002345678", cedula: "1010101101", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Ana Morales", email: "ana.morales1@campus.com", telefono: "3003456789", cedula: "1010101102", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Julian Herrera", email: "julian.herrera1@campus.com", telefono: "3004567890", cedula: "1010101103", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Paula Rios", email: "paula.rios1@campus.com", telefono: "3005678901", cedula: "1010101104", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Andres Patino", email: "andres.patino1@campus.com", telefono: "3006789012", cedula: "1010101105", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Natalia Vega", email: "natalia.vega1@campus.com", telefono: "3007890123", cedula: "1010101106", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Felipe Mendoza", email: "felipe.mendoza1@campus.com", telefono: "3008901234", cedula: "1010101107", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Camila Restrepo", email: "camila.restrepo1@campus.com", telefono: "3009012345", cedula: "1010101108", fecha_registro: new Date(), rol: "empleado" },
  { nombre: "Juan Pablo Londono", email: "juan.londono1@campus.com", telefono: "3009123456", cedula: "1010101109", fecha_registro: new Date(), rol: "empleado" }
]);

//------------------------------------------------------------------------------------------------------------

// consultar id  db.usuarios.find({ rol: "cliente" }).sort({ nombre: 1 }).forEach(doc => { print(doc._id + " - " + doc.nombre); })

db.usuarios.insertMany([
  { nombre: "Sofia Ramirez", email: "sofia.ramirez@clientes.com", telefono: "3010000001", cedula: "2020202201", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Mateo Gonzalez", email: "mateo.gonzalez@clientes.com", telefono: "3010000002", cedula: "2020202202", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Valentina Castro", email: "valentina.castro@clientes.com", telefono: "3010000003", cedula: "2020202203", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Sebastian Torres", email: "sebastian.torres@clientes.com", telefono: "3010000004", cedula: "2020202204", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Isabela Herrera", email: "isabela.herrera@clientes.com", telefono: "3010000005", cedula: "2020202205", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Samuel Rios", email: "samuel.rios@clientes.com", telefono: "3010000006", cedula: "2020202206", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Antonella Ruiz", email: "antonella.ruiz@clientes.com", telefono: "3010000007", cedula: "2020202207", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Emiliano Vega", email: "emiliano.vega@clientes.com", telefono: "3010000008", cedula: "2020202208", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Gabriela Lopez", email: "gabriela.lopez@clientes.com", telefono: "3010000009", cedula: "2020202209", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Luciana Romero", email: "luciana.romero@clientes.com", telefono: "3010000010", cedula: "2020202210", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Benjamin Jimenez", email: "benjamin.jimenez@clientes.com", telefono: "3010000011", cedula: "2020202211", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Salome Martinez", email: "salome.martinez@clientes.com", telefono: "3010000012", cedula: "2020202212", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Jeronimo Diaz", email: "jeronimo.diaz@clientes.com", telefono: "3010000013", cedula: "2020202213", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Allison Gutierrez", email: "allison.gutierrez@clientes.com", telefono: "3010000014", cedula: "2020202214", fecha_registro: new Date(), rol: "cliente" },
  { nombre: "Tomas Silva", email: "tomas.silva@clientes.com", telefono: "3010000015", cedula: "2020202215", fecha_registro: new Date(), rol: "cliente" }
]);
//------------------------------------------------------------------------------------------------------------

db.system.js.insertMany([
  { _id: "cliente1", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca5c'); }") },
  { _id: "cliente2", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca55'); }") },
  { _id: "cliente3", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca59'); }") },
  { _id: "cliente4", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca56'); }") },
  { _id: "cliente5", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca57'); }") },
  { _id: "cliente6", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca53'); }") },
  { _id: "cliente7", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca5b'); }") },
  { _id: "cliente8", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca58'); }") },
  { _id: "cliente9", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca50'); }") },
  { _id: "cliente10", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca5a'); }") },
  { _id: "cliente11", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca54'); }") },
  { _id: "cliente12", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca52'); }") },
  { _id: "cliente13", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca4f'); }") },
  { _id: "cliente14", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca5d'); }") },
  { _id: "cliente15", value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca51'); }") }
]);

const cliente1 = new Function('return ' + db.system.js.findOne({ _id: "cliente1" }).value.code)();
const cliente2 = new Function('return ' + db.system.js.findOne({ _id: "cliente2" }).value.code)();
const cliente3 = new Function('return ' + db.system.js.findOne({ _id: "cliente3" }).value.code)();
const cliente4 = new Function('return ' + db.system.js.findOne({ _id: "cliente4" }).value.code)();
const cliente5 = new Function('return ' + db.system.js.findOne({ _id: "cliente5" }).value.code)();
const cliente6 = new Function('return ' + db.system.js.findOne({ _id: "cliente6" }).value.code)();
const cliente7 = new Function('return ' + db.system.js.findOne({ _id: "cliente7" }).value.code)();
const cliente8 = new Function('return ' + db.system.js.findOne({ _id: "cliente8" }).value.code)();
const cliente9 = new Function('return ' + db.system.js.findOne({ _id: "cliente9" }).value.code)();
const cliente10 = new Function('return ' + db.system.js.findOne({ _id: "cliente10" }).value.code)();
const cliente11 = new Function('return ' + db.system.js.findOne({ _id: "cliente11" }).value.code)();
const cliente12 = new Function('return ' + db.system.js.findOne({ _id: "cliente12" }).value.code)();
const cliente13 = new Function('return ' + db.system.js.findOne({ _id: "cliente13" }).value.code)();
const cliente14 = new Function('return ' + db.system.js.findOne({ _id: "cliente14" }).value.code)();
const cliente15 = new Function('return ' + db.system.js.findOne({ _id: "cliente15" }).value.code)();

//db.system.js.find().sort({ _id: 1 }).pretty()

//------------------------------------------------------------------------------------------------------------

//10 en 10
db.vehiculos.insertMany([
  { usuario_id: cliente1(), placa: "ABC123", marca: "Toyota", modelo: "Corolla", color: "Rojo", tipo: "carro" },
  { usuario_id: cliente2(), placa: "XYZ789", marca: "Honda", modelo: "Civic", color: "Azul", tipo: "carro" },
  { usuario_id: cliente3(), placa: "LMN456", marca: "Yamaha", modelo: "FZ25", color: "Negro", tipo: "moto" },
  { usuario_id: cliente4(), placa: "JKL321", marca: "Chevrolet", modelo: "Spark GT", color: "Gris", tipo: "carro" },
  { usuario_id: cliente1(), placa: "DEF456", marca: "Suzuki", modelo: "Gixxer", color: "Verde", tipo: "moto" },
  { usuario_id: cliente5(), placa: "PQR678", marca: "BMX", modelo: "Freestyle", color: "Amarillo", tipo: "bicicleta" },
  { usuario_id: cliente6(), placa: "UVW246", marca: "Ford", modelo: "Ranger", color: "Blanco", tipo: "camion" },
  { usuario_id: cliente7(), placa: "HJK135", marca: "KTM", modelo: "Duke 390", color: "Naranja", tipo: "moto" },
  { usuario_id: cliente2(), placa: "QWE852", marca: "Mazda", modelo: "CX-5", color: "Plata", tipo: "carro" },
  { usuario_id: cliente8(), placa: "TGB963", marca: "GW", modelo: "Cross", color: "Negro", tipo: "bicicleta" }
]);

db.vehiculos.insertMany([
  { usuario_id: cliente9(), placa: "ZXC741", marca: "Renault", modelo: "Duster", color: "Blanco", tipo: "carro" },
  { usuario_id: cliente10(), placa: "ASD159", marca: "Kia", modelo: "Picanto", color: "Rojo", tipo: "carro" },
  { usuario_id: cliente11(), placa: "FGH753", marca: "BMW", modelo: "R1200", color: "Negro", tipo: "moto" },
  { usuario_id: cliente12(), placa: "CVB258", marca: "Giant", modelo: "Escape 3", color: "Azul", tipo: "bicicleta" },
  { usuario_id: cliente13(), placa: "MNB456", marca: "Hyundai", modelo: "Tucson", color: "Gris", tipo: "carro" },
  { usuario_id: cliente9(), placa: "TRE321", marca: "Nissan", modelo: "Sentra", color: "Verde", tipo: "carro" },
  { usuario_id: cliente14(), placa: "YUI852", marca: "JAC", modelo: "Sunray", color: "Blanco", tipo: "camion" },
  { usuario_id: cliente10(), placa: "LOP963", marca: "Hero", modelo: "Hunk 160", color: "Negro", tipo: "moto" },
  { usuario_id: cliente15(), placa: "WSX159", marca: "GW", modelo: "Mountain", color: "Amarillo", tipo: "bicicleta" },
  { usuario_id: cliente11(), placa: "EDC357", marca: "Mercedes", modelo: "GLA", color: "Plata", tipo: "carro" }
]);

db.vehiculos.insertMany([
  { usuario_id: cliente12(), placa: "QAZ741", marca: "Jeep", modelo: "Compass", color: "Gris", tipo: "carro" },
  { usuario_id: cliente13(), placa: "PLM159", marca: "Toyota", modelo: "Hilux", color: "Rojo", tipo: "camion" },
  { usuario_id: cliente14(), placa: "OKN753", marca: "Akt", modelo: "NKD125", color: "Negro", tipo: "moto" },
  { usuario_id: cliente15(), placa: "BGH258", marca: "Trek", modelo: "FX 1", color: "Verde", tipo: "bicicleta" },
  { usuario_id: cliente13(), placa: "JUI456", marca: "Audi", modelo: "Q3", color: "Azul", tipo: "carro" },
  { usuario_id: cliente2(), placa: "HGD321", marca: "Bajaj", modelo: "Boxer CT100", color: "Negro", tipo: "moto" },
  { usuario_id: cliente4(), placa: "MVC852", marca: "Fiat", modelo: "Cronos", color: "Blanco", tipo: "carro" },
  { usuario_id: cliente6(), placa: "NBV963", marca: "Chevrolet", modelo: "Sail", color: "Plata", tipo: "carro" },
  { usuario_id: cliente7(), placa: "KJU456", marca: "GW", modelo: "Rush", color: "Gris", tipo: "bicicleta" },
  { usuario_id: cliente15(), placa: "EDR159", marca: "Yamaha", modelo: "R15", color: "Rojo", tipo: "moto" }
]);

// ids

db.system.js.insertMany([
  { _id: "vehiculo1", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca5e'); }") },
  { _id: "vehiculo2", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca69'); }") },
  { _id: "vehiculo3", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca75'); }") },
  { _id: "vehiculo4", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca6b'); }") },
  { _id: "vehiculo5", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca62'); }") },
  { _id: "vehiculo6", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca71'); }") },
  { _id: "vehiculo7", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca7b'); }") },
  { _id: "vehiculo8", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca6a'); }") },
  { _id: "vehiculo9", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca77'); }") },
  { _id: "vehiculo10", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca65'); }") },
  { _id: "vehiculo11", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca61'); }") },
  { _id: "vehiculo12", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca76'); }") },
  { _id: "vehiculo13", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca7a'); }") },
  { _id: "vehiculo14", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca60'); }") },
  { _id: "vehiculo15", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca6f'); }") },
  { _id: "vehiculo16", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca6c'); }") },
  { _id: "vehiculo17", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca78'); }") },
  { _id: "vehiculo18", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca79'); }") },
  { _id: "vehiculo19", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca74'); }") },
  { _id: "vehiculo20", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca73'); }") },
  { _id: "vehiculo21", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca63'); }") },
  { _id: "vehiculo22", value: new Code("function() { return ObjectId('686f8d67be06e73a0a89ca72'); }") },
  { _id: "vehiculo23", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca66'); }") },
  { _id: "vehiculo24", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca67'); }") },
  { _id: "vehiculo25", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca6d'); }") },
  { _id: "vehiculo26", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca64'); }") },
  { _id: "vehiculo27", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca70'); }") },
  { _id: "vehiculo28", value: new Code("function() { return ObjectId('686f8cc5be06e73a0a89ca5f'); }") },
  { _id: "vehiculo29", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca6e'); }") },
  { _id: "vehiculo30", value: new Code("function() { return ObjectId('686f8d04be06e73a0a89ca68'); }") }
]);

const vehiculo1 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo1" }).value.code)();
const vehiculo2 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo2" }).value.code)();
const vehiculo3 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo3" }).value.code)();
const vehiculo4 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo4" }).value.code)();
const vehiculo5 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo5" }).value.code)();
const vehiculo6 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo6" }).value.code)();
const vehiculo7 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo7" }).value.code)();
const vehiculo8 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo8" }).value.code)();
const vehiculo9 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo9" }).value.code)();
const vehiculo10 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo10" }).value.code)();
const vehiculo11 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo11" }).value.code)();
const vehiculo12 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo12" }).value.code)();
const vehiculo13 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo13" }).value.code)();
const vehiculo14 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo14" }).value.code)();
const vehiculo15 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo15" }).value.code)();
const vehiculo16 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo16" }).value.code)();
const vehiculo17 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo17" }).value.code)();
const vehiculo18 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo18" }).value.code)();
const vehiculo19 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo19" }).value.code)();
const vehiculo20 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo20" }).value.code)();
const vehiculo21 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo21" }).value.code)();
const vehiculo22 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo22" }).value.code)();
const vehiculo23 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo23" }).value.code)();
const vehiculo24 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo24" }).value.code)();
const vehiculo25 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo25" }).value.code)();
const vehiculo26 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo26" }).value.code)();
const vehiculo27 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo27" }).value.code)();
const vehiculo28 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo28" }).value.code)();
const vehiculo29 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo29" }).value.code)();
const vehiculo30 = new Function('return ' + db.system.js.findOne({ _id: "vehiculo30" }).value.code)();

//------------------------------------------------------------------------------------------------------------

//parqueos

db.parqueos.insertMany([
  { usuario_id: cliente1(), vehiculo_id: vehiculo1(), sede_id: getCampusNorte(), zona_id: zona1(), hora_entrada: ISODate("2025-07-10T07:30:00Z"), hora_salida: ISODate("2025-07-10T09:00:00Z") },
  { usuario_id: cliente2(), vehiculo_id: vehiculo2(), sede_id: getCampusSur(), zona_id: zona3(), hora_entrada: ISODate("2025-07-10T08:00:00Z") },
  { usuario_id: cliente3(), vehiculo_id: vehiculo3(), sede_id: getCampusOriente(), zona_id: zona5(), hora_entrada: ISODate("2025-07-10T08:15:00Z"), hora_salida: ISODate("2025-07-10T10:45:00Z") },
  { usuario_id: cliente4(), vehiculo_id: vehiculo4(), sede_id: getCampusNorte(), zona_id: zona2(), hora_entrada: ISODate("2025-07-10T08:30:00Z") },
  { usuario_id: cliente5(), vehiculo_id: vehiculo5(), sede_id: getCampusSur(), zona_id: zona1(), hora_entrada: ISODate("2025-07-10T09:00:00Z"), hora_salida: ISODate("2025-07-10T11:00:00Z") },
  { usuario_id: cliente6(), vehiculo_id: vehiculo6(), sede_id: getCampusOriente(), zona_id: zona4(), hora_entrada: ISODate("2025-07-10T09:15:00Z") },
  { usuario_id: cliente7(), vehiculo_id: vehiculo7(), sede_id: getCampusNorte(), zona_id: zona5(), hora_entrada: ISODate("2025-07-10T09:30:00Z"), hora_salida: ISODate("2025-07-10T12:00:00Z") },
  { usuario_id: cliente8(), vehiculo_id: vehiculo8(), sede_id: getCampusSur(), zona_id: zona2(), hora_entrada: ISODate("2025-07-10T10:00:00Z") },
  { usuario_id: cliente9(), vehiculo_id: vehiculo9(), sede_id: getCampusOriente(), zona_id: zona3(), hora_entrada: ISODate("2025-07-10T10:15:00Z"), hora_salida: ISODate("2025-07-10T13:30:00Z") },
  { usuario_id: cliente10(), vehiculo_id: vehiculo10(), sede_id: getCampusNorte(), zona_id: zona1(), hora_entrada: ISODate("2025-07-10T10:45:00Z") }
]);

db.parqueos.insertMany([
  { usuario_id: cliente11(), vehiculo_id: vehiculo11(), sede_id: getCampusOriente(), zona_id: zona11(), hora_entrada: ISODate("2025-07-10T08:00:00Z"), hora_salida: ISODate("2025-07-10T10:00:00Z") },
  { usuario_id: cliente12(), vehiculo_id: vehiculo12(), sede_id: getCampusSur(), zona_id: zona9(), hora_entrada: ISODate("2025-07-10T08:15:00Z") },
  { usuario_id: cliente13(), vehiculo_id: vehiculo13(), sede_id: getCampusNorte(), zona_id: zona2(), hora_entrada: ISODate("2025-07-10T08:45:00Z"), hora_salida: ISODate("2025-07-10T11:30:00Z") },
  { usuario_id: cliente14(), vehiculo_id: vehiculo14(), sede_id: getCampusOriente(), zona_id: zona14(), hora_entrada: ISODate("2025-07-10T09:00:00Z") },
  { usuario_id: cliente15(), vehiculo_id: vehiculo15(), sede_id: getCampusSur(), zona_id: zona10(), hora_entrada: ISODate("2025-07-10T09:15:00Z"), hora_salida: ISODate("2025-07-10T12:15:00Z") },
  { usuario_id: cliente11(), vehiculo_id: vehiculo16(), sede_id: getCampusNorte(), zona_id: zona4(), hora_entrada: ISODate("2025-07-10T09:30:00Z") },
  { usuario_id: cliente12(), vehiculo_id: vehiculo17(), sede_id: getCampusOriente(), zona_id: zona13(), hora_entrada: ISODate("2025-07-10T09:45:00Z"), hora_salida: ISODate("2025-07-10T11:15:00Z") },
  { usuario_id: cliente13(), vehiculo_id: vehiculo18(), sede_id: getCampusSur(), zona_id: zona8(), hora_entrada: ISODate("2025-07-10T10:00:00Z") },
  { usuario_id: cliente14(), vehiculo_id: vehiculo19(), sede_id: getCampusNorte(), zona_id: zona5(), hora_entrada: ISODate("2025-07-10T10:15:00Z"), hora_salida: ISODate("2025-07-10T12:45:00Z") },
  { usuario_id: cliente15(), vehiculo_id: vehiculo20(), sede_id: getCampusOriente(), zona_id: zona15(), hora_entrada: ISODate("2025-07-10T10:30:00Z") }
]);
db.parqueos.insertMany([
  { usuario_id: cliente1(), vehiculo_id: vehiculo21(), sede_id: getCampusNorte(), zona_id: zona1(), hora_entrada: ISODate("2025-07-10T11:00:00Z"), hora_salida: ISODate("2025-07-10T13:00:00Z") },
  { usuario_id: cliente2(), vehiculo_id: vehiculo22(), sede_id: getCampusSur(), zona_id: zona6(), hora_entrada: ISODate("2025-07-10T11:15:00Z") },
  { usuario_id: cliente3(), vehiculo_id: vehiculo23(), sede_id: getCampusOriente(), zona_id: zona12(), hora_entrada: ISODate("2025-07-10T11:30:00Z"), hora_salida: ISODate("2025-07-10T14:00:00Z") },
  { usuario_id: cliente4(), vehiculo_id: vehiculo24(), sede_id: getCampusNorte(), zona_id: zona3(), hora_entrada: ISODate("2025-07-10T11:45:00Z") },
  { usuario_id: cliente5(), vehiculo_id: vehiculo25(), sede_id: getCampusSur(), zona_id: zona7(), hora_entrada: ISODate("2025-07-10T12:00:00Z"), hora_salida: ISODate("2025-07-10T14:30:00Z") },
  { usuario_id: cliente6(), vehiculo_id: vehiculo26(), sede_id: getCampusOriente(), zona_id: zona13(), hora_entrada: ISODate("2025-07-10T12:15:00Z") },
  { usuario_id: cliente7(), vehiculo_id: vehiculo27(), sede_id: getCampusNorte(), zona_id: zona4(), hora_entrada: ISODate("2025-07-10T12:30:00Z"), hora_salida: ISODate("2025-07-10T15:00:00Z") },
  { usuario_id: cliente8(), vehiculo_id: vehiculo28(), sede_id: getCampusSur(), zona_id: zona8(), hora_entrada: ISODate("2025-07-10T12:45:00Z") },
  { usuario_id: cliente9(), vehiculo_id: vehiculo29(), sede_id: getCampusOriente(), zona_id: zona14(), hora_entrada: ISODate("2025-07-10T13:00:00Z"), hora_salida: ISODate("2025-07-10T15:30:00Z") },
  { usuario_id: cliente10(), vehiculo_id: vehiculo30(), sede_id: getCampusNorte(), zona_id: zona5(), hora_entrada: ISODate("2025-07-10T13:15:00Z") }
]);
db.parqueos.insertMany([
  { usuario_id: cliente11(), vehiculo_id: vehiculo1(), sede_id: getCampusSur(), zona_id: zona6(), hora_entrada: ISODate("2025-07-10T13:30:00Z"), hora_salida: ISODate("2025-07-10T15:30:00Z") },
  { usuario_id: cliente12(), vehiculo_id: vehiculo2(), sede_id: getCampusOriente(), zona_id: zona11(), hora_entrada: ISODate("2025-07-10T13:45:00Z") },
  { usuario_id: cliente13(), vehiculo_id: vehiculo3(), sede_id: getCampusNorte(), zona_id: zona2(), hora_entrada: ISODate("2025-07-10T14:00:00Z"), hora_salida: ISODate("2025-07-10T16:15:00Z") },
  { usuario_id: cliente14(), vehiculo_id: vehiculo4(), sede_id: getCampusSur(), zona_id: zona9(), hora_entrada: ISODate("2025-07-10T14:15:00Z") },
  { usuario_id: cliente15(), vehiculo_id: vehiculo5(), sede_id: getCampusOriente(), zona_id: zona13(), hora_entrada: ISODate("2025-07-10T14:30:00Z"), hora_salida: ISODate("2025-07-10T17:00:00Z") },
  { usuario_id: cliente1(), vehiculo_id: vehiculo6(), sede_id: getCampusNorte(), zona_id: zona4(), hora_entrada: ISODate("2025-07-10T14:45:00Z") },
  { usuario_id: cliente2(), vehiculo_id: vehiculo7(), sede_id: getCampusSur(), zona_id: zona10(), hora_entrada: ISODate("2025-07-10T15:00:00Z"), hora_salida: ISODate("2025-07-10T17:30:00Z") },
  { usuario_id: cliente3(), vehiculo_id: vehiculo8(), sede_id: getCampusOriente(), zona_id: zona15(), hora_entrada: ISODate("2025-07-10T15:15:00Z") },
  { usuario_id: cliente4(), vehiculo_id: vehiculo9(), sede_id: getCampusNorte(), zona_id: zona1(), hora_entrada: ISODate("2025-07-10T15:30:00Z"), hora_salida: ISODate("2025-07-10T18:00:00Z") },
  { usuario_id: cliente5(), vehiculo_id: vehiculo10(), sede_id: getCampusSur(), zona_id: zona7(), hora_entrada: ISODate("2025-07-10T15:45:00Z") }
]);
db.parqueos.insertMany([
  { usuario_id: cliente6(), vehiculo_id: vehiculo11(), sede_id: getCampusOriente(), zona_id: zona12(), hora_entrada: ISODate("2025-07-10T16:00:00Z"), hora_salida: ISODate("2025-07-10T18:30:00Z") },
  { usuario_id: cliente7(), vehiculo_id: vehiculo12(), sede_id: getCampusSur(), zona_id: zona8(), hora_entrada: ISODate("2025-07-10T16:15:00Z") },
  { usuario_id: cliente8(), vehiculo_id: vehiculo13(), sede_id: getCampusNorte(), zona_id: zona3(), hora_entrada: ISODate("2025-07-10T16:30:00Z"), hora_salida: ISODate("2025-07-10T19:00:00Z") },
  { usuario_id: cliente9(), vehiculo_id: vehiculo14(), sede_id: getCampusOriente(), zona_id: zona14(), hora_entrada: ISODate("2025-07-10T16:45:00Z") },
  { usuario_id: cliente10(), vehiculo_id: vehiculo15(), sede_id: getCampusSur(), zona_id: zona10(), hora_entrada: ISODate("2025-07-10T17:00:00Z"), hora_salida: ISODate("2025-07-10T19:30:00Z") },
  { usuario_id: cliente11(), vehiculo_id: vehiculo16(), sede_id: getCampusNorte(), zona_id: zona5(), hora_entrada: ISODate("2025-07-10T17:15:00Z") },
  { usuario_id: cliente12(), vehiculo_id: vehiculo17(), sede_id: getCampusSur(), zona_id: zona9(), hora_entrada: ISODate("2025-07-10T17:30:00Z"), hora_salida: ISODate("2025-07-10T20:00:00Z") },
  { usuario_id: cliente13(), vehiculo_id: vehiculo18(), sede_id: getCampusOriente(), zona_id: zona15(), hora_entrada: ISODate("2025-07-10T17:45:00Z") },
  { usuario_id: cliente14(), vehiculo_id: vehiculo19(), sede_id: getCampusNorte(), zona_id: zona2(), hora_entrada: ISODate("2025-07-10T18:00:00Z"), hora_salida: ISODate("2025-07-10T20:30:00Z") },
  { usuario_id: cliente15(), vehiculo_id: vehiculo20(), sede_id: getCampusSur(), zona_id: zona6(), hora_entrada: ISODate("2025-07-10T18:15:00Z") }
]);