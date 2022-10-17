# App de Control de Inventario

## Inventario con Listas Enlazadas Simples
![Visualización](/images/PrevInventario.jpg)
## Actividad
Utilizando el mismo ejercicio de Inventario con que se ha venido trabajando se va a implementar un cambio en la estructura de datos para utilizar listas enlazadas simples, se va a considerar un ejemplo similar al primer ejercicio en donde los productos se acomodaban de acuerdo al orden en que llegaran (no es necesario ordenar) y por lo tanto si existe la opción de insertar un nuevo producto en determinada posición.
## Requerimientos
**_Los metódos de inventario deben permitir:_**

- Agregar
- Buscar
- Eliminar
- Insertar
- Listar
- Listar Inverso

**_Metódos Implicítos_**
- Agregar en Posición
- Agregar Primero

## Restricciones
- **_Ya no será necesario el uso del metódo de Ordenar al momento de añadir un nuevo producto_**
## Explicación
Para insertar se realizará poniendo la posición en la que se desea colocar:

**Ejemplo**
```

Primero: 3 => 4 => 7 => 1 => 2 => 9
inventario.insertar(posicion, nuevo)

insertar(2,{5}) // El 5 quedó en la posición 2
Primero: 3 => {5} => 4 => 7 => 1 => 2 => 9

```
### **NOTA:**
- Recordar que se deben de usar por lo menos las clases del Producto, la del Inventario y la de la Aplicación (interacción con el DOM HTML)
- No se implementa el INSERTAR y el MODIFICAR
- No usar swal.fire para las interfaces
- Evitar el uso de alert y confirm
