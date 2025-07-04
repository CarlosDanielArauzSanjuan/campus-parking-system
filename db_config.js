// Creación de colecciones con $jsonSchema e índices

"use CampusParking"
// Crear la colección "usuarios" con un esquema JSON

db.createCollection("usuarios", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['_id', 'nombre', "email", 'telefono', 'cedula',],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "El Identificador unico del usuario"
                },
                nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z ]+$",
                    minLength: 1,
                    maxLength: 50,
                    description: "El usuario se debe llamar con letras y espacios, y tener entre 1 y 50 caracteres"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                    description: "El email debe ser una dirección de correo electrónico válida"
                },
                telefono: {
                    bsonType: "string",
                    pattern: "^[0-9]{10}$",
                    description: "El teléfono debe ser un número de 10 dígitos"
                },
                cedula: {
                    bsonType: "string",
                    pattern: "^[0-9]{8,10}$",
                    description: "La cédula debe ser un número de al menos 8 y max 10 dígitos"
                },
                fecha_registro: {
                    bsonType: "date",
                    description: "La fecha de registro debe ser una fecha válida"
                },
            },
            additionalProperties: false
        }
    }
}
);

db.createCollection("vehiculos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['_id', 'usuario_id', 'placa', 'marca', 'modelo', 'color'],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "El Identificador unico del vehículo"
                },
                usuario_id: {
                    bsonType: "objectId",
                    description: "El ID del usuario al que pertenece el vehículo",
                },
                placa: {
                    bsonType: "string",
                    pattern: "^[A-Z]{1,3}[0-9A-Z]{2,3}$",
                    description: "La placa debe ser una cadena de 5 o 6 caracteres alfanuméricos en mayúsculas"

                },
                marca: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z ]+$",
                    minLength: 1,
                    maxLength: 50,
                    description: "La marca del vehículo debe ser una cadena de letras y espacios, y tener entre 1 y 50 caracteres"
                },
                modelo: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9 ]+$",
                    minLength: 1,
                    maxLength: 50,
                    description: "El modelo del vehículo debe ser una cadena de letras, números y espacios, y tener entre 1 y 50 caracteres"
                },
                color: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z ]+$",
                    minLength: 1,
                    maxLength: 30,
                    description: "El color del vehículo debe ser una cadena de letras y espacios, y tener entre 1 y 30 caracteres"
                },
            }
        },
        additionalProperties: false
    }
}
);

db.createCollection('sedes', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['_id', 'nombre', 'direccion', 'telefono', "ciudad", 'estado'],
        properties: {
                _id: {
                    bsonType: "objectId",
                    description: "El Identificador unico de la sede"
                },
                nombre: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z ]+$",
                    minLength: 2,
                    maxLength: 50,
                    description: "El nombre de la sede debe ser una cadena de letras y espacios, y tener entre 1 y 50 caracteres"
                },
                direccion: {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 100,
                    description: "La dirección de la sede debe ser una cadena con un máximo de 100 caracteres"
                },
                telefono: {
                    bsonType: "string",
                    pattern: "^[0-9]{10}$",
                    description: "El teléfono debe ser un número de 10 dígitos"
                },
                ciudad: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z ]+$",
                    minLength: 1,
                    maxLength: 50,
                    description: "La ciudad debe ser una cadena de letras y espacios, y tener entre 1 y 50 caracteres"
                },
                estado: {
                    bsonType: "string",
                    enum: ["abierto", "cerrado", "mantenimiento"],
                    description: "El estado debe ser 'abierto' 'cerrado''mantenimiento'"
                }
            }
        },
        additionalProperties: false
    }
})

db.createCollection('zonas', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['_id', 'sede_id', 'nombre', 'capacidad', 'estado', 'tipo_vehiculo', 'tarifa'],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "El Identificador unico de la zona"
                },
                sede_id: {
                    bsonType: "objectId",
                    description: "El ID de la sede a la que pertenece la zona"
                },
                nombre: {
                    bsonType: "string",
                    pattern: "^[A-E ]{1}",
                    description: "El nombre de la zona debe ser una Letra entre A y E",
                },
                capacidad: {
                    bsonType: "int",
                    minimum: 1,
                    maximum: 100,
                    description: "La capacidad debe ser un número entero entre 1 y 100"
                },
                estado: {
                    bsonType: "string",
                    enum: ["disponible", "ocupada", "mantenimiento"],
                    description: "El estado debe ser 'disponible', 'ocupada', 'mantenimiento'"
                },
                tipo_vehiculo: {
                    bsonType: "string",
                    enum: ["carro", "moto", "bicicleta", "camion"],
                    description: "El tipo de vehículo debe ser 'carro', 'moto', 'bicicleta', 'camion'"
                },
                tarifa: {
                    bsonType: "double",
                    minimum: 0,
                    description: "La tarifa debe ser un número decimal no negativo"
                }
            }
        },
        additionalProperties: false
    }})

db.createCollection('parqueo', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ['_id', 'usuario_id', 'sede_id', 'vehiculo_id', 'zona_id', 'fecha_ingreso', 'fecha_salida', 'costo'],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "El Identificador unico del parqueo"
                },
                usuario_id: {
                    bsonType: "objectId",
                    description: "El ID del usuario que realiza el parqueo"
                },
                vehiculo_id: {
                    bsonType: "objectId",
                    description: "El ID del vehículo que se está parqueando"
                },
                sede_id: {
                    bsonType: "objectId",
                    description: "El ID de la sede donde se realiza el parqueo"
                },
                zona_id: {
                    bsonType: "objectId",
                    description: "El ID de la zona donde se realiza el parqueo"
                },
                fecha_ingreso: {
                    bsonType: "date",
                    description: "La fecha y hora de ingreso debe ser una fecha válida"
                },
                fecha_salida: {
                    bsonType: "date",
                    description: "La fecha y hora de salida debe ser una fecha válida"
                },
                costo: {
                    bsonType: "double",
                    minimum: 0,
                    description: "El costo del parqueo debe ser un número decimal no negativo"
                }
            }
        },
        additionalProperties: false
    }

}
);

db.usuarios.createIndex({ email: 1 }, { unique: true });
db.usuarios.createIndex({ cedula: 1 }, { unique: true });
db.usuarios.createIndex({ sede_id: 1}, { unique: false });

db.vehiculos.createIndex({ placa: 1 }, { unique: true });
db.vehiculos.createIndex({ usuario_id: 1 }, { unique: false });
db.vehiculos.createIndex({ marca: 1, modelo: 1 }, { unique: false });
db.vehiculos.createIndex({ color: 1 }, { unique: false });

db.sedes.createIndex({ nombre: 1 }, { unique: true });
db.sedes.createIndex({ ciudad: 1 }, { unique: false });
db.sedes.createIndex({ estado: 1 }, { unique: false });
db.sedes.createIndex({ telefono: 1 }, { unique: false });

db.zonas.createIndex({ sede_id: 1 }, { unique: false });
db.zonas.createIndex({ nombre: 1 }, { unique: false });
db.zonas.createIndex({ estado: 1 }, { unique: false });
db.zonas.createIndex({ tipo_vehiculo: 1 }, { unique: false });
db.zonas.createIndex({ tarifa: 1 }, { unique: false });

db.parqueo.createIndex({ usuario_id: 1 }, { unique: false });
db.parqueo.createIndex({ vehiculo_id: 1 }, { unique: false });
db.parqueo.createIndex({ sede_id: 1 }, { unique: false });
db.parqueo.createIndex({ zona_id: 1 }, { unique: false });
db.parqueo.createIndex({ fecha_ingreso: 1 }, { unique: false });
db.parqueo.createIndex({ fecha_salida: 1 }, { unique: false });

// Fin de la creación de colecciones e índices


