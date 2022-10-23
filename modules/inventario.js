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
        let str = '<thead><th colspan="6"><h3>PRODUCTOS | Listado</h3></th><tr><td width="5%">Pos.</td><td width="10%">Código</td><td width="40%">Nombre</td><td width="15%">Cantidad</td><td width="15%">Costo</td><td width="15%">Total</td></tr></thead>';
        let pos = 1;
        if (this.productos != null) {
            let temp = this.productos;
            while (temp != null) {
                str += `<tr><td class='num'>${pos}</td><td>${temp.codigo} </td> <td>${temp.nombre} </td><td> ${temp.cantidad} </td><td>${temp.costo}</td><td>${temp.total}</td></tr>`;
                temp = temp.next;
                pos++;
            }
            return str;
        } else {
            console.log("No hay productos en el inventario");
            return str = '';
        }
    }
    listadoInverso() {
        let head = '<thead><th colspan="6"><h3>PRODUCTOS | Listado Inverso</h3></th><tr><td width="5%">Pos.</td><td width="10%">Código</td><td width="40%">Nombre</td><td width="15%">Cantidad</td><td width="15%">Costo</td><td width="15%">Total</td></tr></thead>';
        let str = '';
        let pos = 1;
        if (this.productos != null) {
            let temp = this.productos;
            while (temp != null) {
                str = `<tr><td class='num'>${pos}</td><td>${temp.codigo} </td> <td>${temp.nombre} </td><td> ${temp.cantidad} </td><td>${temp.costo}</td><td>${temp.total}</td></tr>` + str;
                temp = temp.next;
                pos++;
            }
            return head+str;
        } else {
            console.log("No hay productos en el inventario");
            return str = '';
        }
    }
}