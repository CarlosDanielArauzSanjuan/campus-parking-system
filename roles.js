"use campus_parking"

// ---------------------------------------------
// 👑 Rol: ADMINISTRADOR
// - Puede leer y escribir en todas las colecciones.
// - Puede crear y modificar usuarios.
// - Puede administrar índices y configuraciones.
// ---------------------------------------------
db.createRole({
  role: "administrador",
  privileges: [
    {
      resource: { db: "campus_parking", collection: "" }, // Acceso total a todas las colecciones
      actions: [ "find", "insert", "update", "remove", "createCollection", "createIndex" ]
    },
    {
      resource: { db: "campus_parking", collection: "system.users" }, // Gestión de usuarios
      actions: [ "createUser", "updateUser", "dropUser" ]
    },
    {
      resource: { db: "admin", collection: "" }, // Información de sistema
      actions: [ "listDatabases", "serverStatus" ]
    }
  ],
  roles: [
    { role: "userAdmin", db: "campus_parking" },
    { role: "dbAdmin", db: "campus_parking" }
  ]
});


// ---------------------------------------------
// 👷‍♂️ Rol: EMPLEADO DE SEDE
// - Puede consultar usuarios y vehículos.
// - Puede insertar y actualizar parqueos (ingresos y salidas).
// - Puede consultar zonas y sedes.
// - La restricción por sede debe aplicarse desde la aplicación.
// ---------------------------------------------
db.createRole({
  role: "empleado_sede",
  privileges: [
    {
      resource: { db: "campus_parking", collection: "usuarios" },
      actions: [ "find" ] // Solo lectura de usuarios
    },
    {
      resource: { db: "campus_parking", collection: "vehiculos" },
      actions: [ "find" ] // Solo lectura de vehículos
    },
    {
      resource: { db: "campus_parking", collection: "parqueo" },
      actions: [ "find", "insert", "update" ] // Registro de entradas/salidas
    },
    {
      resource: { db: "campus_parking", collection: "zonas" },
      actions: [ "find" ] // Solo lectura
    },
    {
      resource: { db: "campus_parking", collection: "sedes" },
      actions: [ "find" ] // Solo lectura
    }
  ],
  roles: []
});


// ---------------------------------------------
// 👤 Rol: CLIENTE
// - Puede ver su perfil (la app debe filtrar por su ID).
// - Puede consultar su historial de parqueos.
// - Puede ver la disponibilidad y precios de zonas.
// ---------------------------------------------
db.createRole({
  role: "cliente",
  privileges: [
    {
      resource: { db: "campus_parking", collection: "usuarios" },
      actions: [ "find" ] // Solo lectura de su propio usuario (filtrado por app)
    },
    {
      resource: { db: "campus_parking", collection: "parqueo" },
      actions: [ "find" ] // Solo historial propio
    },
    {
      resource: { db: "campus_parking", collection: "zonas" },
      actions: [ "find" ] // Ver zonas disponibles y precios
    }
  ],
  roles: []
});


// ---------------------------------------------
// 👥 Asignación de roles a usuarios
// ---------------------------------------------

// Crear usuario administrador
db.createUser({
  user: "admin1",
  pwd: "adminpass123",
  roles: [ { role: "administrador", db: "campus_parking" } ]
});

// Crear usuario empleado
db.createUser({
  user: "empleado1",
  pwd: "empleadopass",
  roles: [ { role: "empleado_sede", db: "campus_parking" } ]
});

// Crear usuario cliente
db.createUser({
  user: "cliente1",
  pwd: "clientepass",
  roles: [ { role: "cliente", db: "campus_parking" } ]
});