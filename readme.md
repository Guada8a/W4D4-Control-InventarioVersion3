# App de Control de Inventario

## CONTROL DE INVENTARIO (ORDENADO POR CÓDIGO)
### ***CRUD Create Read Update Delete Sistemas de informacion (Altas, bajas, modificaciones y consultas)***

## Actividad
Crear una interfaz en HTML para manipular un INVENTARIO de productos, para almacenar la información debemos usar un vector (no BDs, ni local storage).
## Requerimientos
**_Los elementos deberán agregarse y quedar almacenados de manera ascedente por el código que será numérico._**

En la interfaz (una sola pantalla) tener los inputs para cada dato, los botones para las tareas a realizar que se describen a continuación y un div para ir describiendo las actividades que se van realizando y sus resultados.
## Características Principales
### **Botones**
```
- Agregar nuevo producto
- Eliminar un producto por código, devolver el producto (si existe) o null (si no existe)
- Buscar un producto por código
- Recuperar todos los productos => listar
- Recuperar todos los productos en orden inverso a cómo se ingresaron => Listar inverso

```                 
### **NOTA:**

- No se implementa el INSERTAR y el MODIFICAR
- No usar swal.fire para las interfaces
- Evitar el uso de alert y confirm
