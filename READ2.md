```JS

# 📦 Campus Parking – Sistema de Parqueadero con MongoDB

Este proyecto es una base de datos diseñada en MongoDB para gestionar parqueaderos distribuidos en varias sedes. Incluye inserciones estructuradas, referencias cruzadas, consultas analíticas con `aggregations`, y operaciones con `transactions`.

---

## 🧱 Colecciones principales

- `usuarios` – Clientes y empleados registrados.
- `vehiculos` – Vehículos asociados a los clientes.
- `sedes` – Campus de parqueo en diferentes ciudades.
- `zonas` – Áreas dentro de cada sede con capacidad limitada y tipos de vehículo permitidos.
- `parqueos` – Registro de ingresos y salidas de vehículos.
- `system.js` – Funciones reutilizables para facilitar referencias (`cliente1()`, `vehiculo3()`, `zona2()`, etc.)

---

## 🧪 Inserciones estructuradas

- 3 sedes (`getCampusNorte`, `getCampusSur`, `getCampusOriente`)
- 5 zonas por sede (15 en total), con cupos, tipo_vehiculo y precios
- 10 empleados y 15 clientes (usuarios con rol)
- 30 vehículos asociados a los clientes
- 50 registros de parqueo, con mezcla de zonas, sedes y estados (activos o finalizados)

---

## 🔧 Transacciones implementadas

Todas incluyen `startTransaction()`, `commitTransaction()` o `abortTransaction()` y validación de errores.

1. **Registrar ingreso** – Inserta en `parqueos` y descuenta `cupos_disponibles` de zona
2. **Cerrar parqueo** – Agrega `hora_salida`, calcula `costo` y libera un cupo en la zona
3. **Eliminar cliente y sus parqueos** – Borra `usuario` y todos sus registros de `parqueos`
4. **Cancelar ingreso** – Elimina un ingreso activo recién creado y restaura cupo
5. **Registrar ingresos en lote** – Inserta múltiples parqueos y actualiza zonas, validando disponibilidad
6. **Ajustar parqueo manualmente** – Permite modificar `hora_entrada`, `hora_salida`, `costo`

---

## 📊 Aggregations.js – Consultas analíticas

### Básicas (preguntas clave):

1. ¿Cuántos parqueos se registraron por sede en el último mes?
2. ¿Cuáles son las zonas más ocupadas en cada sede?
3. ¿Cuál es el ingreso total generado por parqueo en cada sede?
4. ¿Qué cliente ha usado más veces el parqueadero?
5. ¿Qué tipo de vehículo es más frecuente por sede?
6. ¿Cuál es el historial de parqueos de un cliente? (fecha, sede, zona, costo, etc.)
7. ¿Qué vehículos están parqueados actualmente?
8. ¿Qué zonas han excedido su capacidad en algún momento?

### Avanzadas:

9. Promedio de tiempo de parqueo por sede
10. Zonas con menor rotación
11. Clientes que más han pagado en total
12. Promedio de parqueos por cliente
13. Histograma de parqueos por hora del día
14. Frecuencia de uso por tipo de vehículo
15. Ranking de zonas por ingresos
16. Tasa de ocupación actual por zona
17. Clientes que han usado más de una sede
18. Promedio de costo por tipo de vehículo

---

## 📁 Estructura de funciones reutilizables (`system.js`)

```
```js
// Ejemplo de función guardada para referenciar un ID
{
  _id: "cliente1",
  value: new Code("function() { return ObjectId('686f827bbe06e73a0a89ca5c'); }")
}
```

Cargar con:
```js
const cliente1 = new Function('return ' + db.system.js.findOne({ _id: "cliente1" }).value.code)();

---

## 🧠 Buenas prácticas

- Todos los `_id` son generados automáticamente por MongoDB
- Las relaciones entre colecciones usan referencias y funciones para evitar errores manuales
- Todas las operaciones sensibles usan transacciones
- Las consultas están documentadas paso a paso para fines educativos o productivos

---

## 🚀 Recomendaciones futuras

- Implementar un dashboard visual con gráficos basados en estas consultas
- Integrar un backend (Node.js) con funciones transaccionales
- Añadir roles y autenticación para usuarios externos

---

**Desarrollado por:** Daniel Arauz 🧠

Proyecto educativo: *Campus Parking System con MongoDB*
```