# Programa CRUD

## ESTRUCTURAS DE DATOS
### ***CRUD Create Read Update Delete Sistemas de informacion (Altas, bajas, modificaciones y consultas)***

Se va a controlar un inventario de productos, de los que se guarda el codigo, nombre, cantidad y costo, utilizando un vector.

Podremos agregar, buscar por codigo, eliminar por codigo, insertar un producto en una posicion y recuperar el listado como texto.

Crear una interfaz en HTML con cajas de texto para cada dato, al igual que botones para cada accion y un div al final donde se ira mostrando el detalle de las operaciones que se van realizando.


```
NODO BASE   Estructura      Aplicacion
producto    Inventario      Crear productos y guardar
            TRANSPARENTE
                agregar(producto)
                eliminar(codigo)
                    modificar(codigo)
                listado()
                listadoInverso()
                buscar(codigo)
```                 
***NOTA:
No usar shift, unshift, splice, reverse, o algún otro metódo similar
Solamente usar push y pop***
