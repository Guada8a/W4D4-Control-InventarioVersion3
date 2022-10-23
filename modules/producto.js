export default class Producto {
    constructor(codigo, nombre, cantidad, costo) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.total = cantidad * costo;
        this.next = null;
        this.prev = null;
    }
    update(nombre,cantidad,costo) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.total = cantidad * costo;
    }
}