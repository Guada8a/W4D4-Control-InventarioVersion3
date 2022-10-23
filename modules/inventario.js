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
            aux.next.prev = aux;
        }
        console.log(this.productos);
    }
    agregarInicio(producto) {
        if (this.productos === null)
            this.productos = producto;
        else {
            let aux = this.productos;
            this.productos = producto;
            this.productos.next = aux;
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
            } catch (e) { }
        }
    }
    eliminar(codigo) {
        let aux = this.productos;
        if(this.productos.codigo == codigo){
            this.eliminarInicio();
        } else {
            while (aux.next.codigo != codigo) {
                aux = aux.next;
            }
            if (aux.next.codigo === codigo) {
                aux.next = aux.next.next;
                aux.next.prev = aux;
            } else {
                console.log("No se encontró el producto");
            }
        }
    }
    eliminarInicio() {
        let aux = this.productos;
        this.productos = aux.next;
        this.productos.prev = null;
    }
    ordenarPorCodigo() {
        let temp = this.productos;
        let aux = this.productos;
        let cont = 0;
        while (temp != null) {
            cont++;
            temp = temp.next;
        }
        for (let i = 0; i < cont; i++) {
            while (aux.next != null) {
                if (parseInt(aux.codigo) > parseInt(aux.next.codigo)) {
                    let aux2 = aux.codigo;
                    aux.codigo = aux.next.codigo;
                    aux.next.codigo = aux2;
                    aux2 = aux.nombre;
                    aux.nombre = aux.next.nombre;
                    aux.next.nombre = aux2;
                    aux2 = aux.cantidad;
                    aux.cantidad = aux.next.cantidad;
                    aux.next.cantidad = aux2;
                    aux2 = aux.costo;
                    aux.costo = aux.next.costo;
                    aux.next.costo = aux2;
                    aux2 = aux.total;
                    aux.total = aux.next.total;
                    aux.next.total = aux2;
                }
                aux = aux.next;
            }
            aux = this.productos;
        }
    }
    cambiarPosicion(nuevo, pos) { 
        let aux = this.productos;
        if (aux) {
            try {
                while (aux.codigo != nuevo.codigo)
                    aux = aux.next;
                if (aux.codigo == nuevo.codigo) {
                    if (pos == 1) {
                        this.eliminarInicio();
                        this.agregarInicio(nuevo);
                    } else {
                        let temp = this.productos;
                        let cont = 1;
                        while (cont < pos) {
                            temp = temp.next;
                            cont++;
                        }
                        this.eliminar(nuevo.codigo);
                        this.agregarInicio(nuevo);
                        this.eliminarInicio();
                        this.agregarInicio(temp);
                    }
                }
            } catch (e) { }
        }
    }
    modificar(nuevo) {
        let aux = this.productos;
        if (aux) {
            try {
                while (aux.codigo != nuevo.codigo)
                    aux = aux.next;
                if (aux.codigo == nuevo.codigo) {
                    aux.nombre = nuevo.nombre;
                    aux.cantidad = nuevo.cantidad;
                    aux.costo = nuevo.costo;
                    aux.total = nuevo.total;
                }
            } catch (e) { }
        }
    }
    listado() {
        let str = '<thead><th colspan="7"><h3>PRODUCTOS | Listado</h3></th><tr><td width="5%">Pos.</td><td width="10%">Código</td><td width="20%">Nombre</td><td width="15%">Cantidad</td><td width="15%">Costo</td><td width="15%">Total</td><td width="20%"></td></tr></thead>';
        let pos = 1;
        if (this.productos != null) {
            let temp = this.productos;
            while (temp != null) {
                str += `<tr id="${temp.codigo}"><td class='num'>${pos}</td><td id="code">${temp.codigo}</td><td id="nombre">${temp.nombre}</td><td id="cantidad"> ${temp.cantidad} </td><td id="costo">${temp.costo}</td><td>${temp.total}</td>`;
                str += `<td width='20%'><button class='modificar' type='reset' codigo="${temp.codigo}" nombre="${temp.nombre}" cantidad="${temp.cantidad}" costo="${temp.costo}">Modificar</button></td></tr>`;
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
        let head = '<thead><th colspan="6"><h3>PRODUCTOS | Listado Inverso</h3></th><tr><td width="5%">Pos.</td><td width="10%">Código</td><td width="20%">Nombre</td><td width="15%">Cantidad</td><td width="15%">Costo</td><td width="15%">Total</td></tr></thead>';
        let str = '';
        let pos = 1;
        if (this.productos != null) {
            let temp = this.productos;
            while (temp.next != null) {
                temp = temp.next;
            }
            while (temp != null) {
                str += `<tr><td class='num'>${pos}</td><td>${temp.codigo} </td> <td>${temp.nombre} </td><td> ${temp.cantidad} </td><td>${temp.costo}</td><td>${temp.total}</td>`;
                temp = temp.prev;
                pos++;
            }
            return head+str;
        } else {
            console.log("No hay productos en el inventario");
            return str = '';
        }
    }
    
}