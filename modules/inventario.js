import Producto from "./producto.js";
export default class Inventario{
    constructor() {
        this.productos = null;
    }
    agregar(producto) {
        if (this.productos === null)
            this.productos = producto;
        else {
            let aux = this.productos;
            while (aux.next != null)
                aux = aux.next;
            aux.next = producto;
        }
        console.log(this.productos);
    }
    agregarInicio(producto) {
        if (this.productos === null)
            this.productos = producto;
        else {
            let aux = this.productos;
            this.productos = producto;
            producto.next = aux;
        }
    }
    buscar(codigo) {
        let aux = this.productos;
        if (aux) {
            try {
                while (aux.codigo != codigo)
                    aux = aux.next;
                if (aux.codigo == codigo)
                    return aux;
            } catch (error) { }
        }
    }
    eliminar(codigo) {
        let aux = this.productos;
        if (this.productos.codigo == codigo) {
            this.productos = this.productos.next;
        } else {
            while (aux.next.codigo != codigo) {
                aux = aux.next;
            }
            if (aux.next.codigo === codigo) {
                aux.next = aux.next.next;
            }
        }
    }
    eliminarInicio() {
        this.productos = this.productos.next;
    }
    cambiarPosicion(nuevo,pos) {
        let aux = this.productos;
        let cont = 1;
        while (aux != null) {
            cont++;
            aux = aux.next;
        }
        if (pos > cont) {
            this.agregar(nuevo);
        } else {
            let aux = this.productos;
            let cont = 0;
            while (cont < pos - 1) {
                cont++;
                aux = aux.next;
            }
            if (cont == pos - 1) {
                let aux2 = aux.next;
                aux.next = nuevo;
                nuevo.next = aux2;
            }
        }
    }
    listado() {
        let str = '<thead><tr><td>Código</td><td>Nombre</td><td>Cantidad</td><td>Costo</td><td>Total</td></tr></thead>';
        if (this.productos != null) {
            let temp = this.productos;
            while (temp != null) {
                str += `<tr><td>${temp.codigo} </td> <td>${temp.nombre} </td><td> ${temp.cantidad} </td><td>${temp.costo}</td><td>${temp.total}</td></tr>`;
                temp = temp.next;
            }
            return str;
        } else {
            console.log("No hay productos en el inventario");
            return str = '';
        }
    }
    listadoInverso() {
        let head = '<thead><tr><td>Código</td><td>Nombre</td><td>Cantidad</td><td>Costo</td><td>Total</td></tr></thead>';
        let str = '';
        if (this.productos != null) {
            let temp = this.productos;
            while (temp != null) {
                str = `<tr><td>${temp.codigo} </td> <td>${temp.nombre} </td><td> ${temp.cantidad} </td><td>${temp.costo}</td><td>${temp.total}</td></tr>` + str;
                temp = temp.next;
            }
            return head+str;
        } else {
            console.log("No hay productos en el inventario");
            return str = '';
        }
    }
}