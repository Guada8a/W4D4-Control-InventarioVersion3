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
        if (pos == 0) {
            this.agregarInicio(nuevo);
        } else {
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
    }
    modificar(nuevo) {
        let aux = this.productos;
        while (aux.codigo != nuevo.codigo) {
            aux = aux.next;
        }
        if (aux.codigo == nuevo.codigo) {
            aux.nombre = nuevo.nombre;
            aux.cantidad = nuevo.cantidad;
            aux.costo = nuevo.costo;
            aux.total = nuevo.total;
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
        let head = '<thead><th colspan="7"><h3>PRODUCTOS | Listado Inverso</h3></th><tr><td width="5%">Pos.</td><td width="10%">Código</td><td width="20%">Nombre</td><td width="15%">Cantidad</td><td width="15%">Costo</td><td width="15%">Total</td><td width="20%"></td></tr></thead>';
        let str = '';
        let pos = 1;
        if (this.productos != null) {
            let temp = this.productos;
            while (temp != null) {
                str = `<tr><td class='num'>${pos}</td><td>${temp.codigo} </td> <td>${temp.nombre} </td><td> ${temp.cantidad} </td><td>${temp.costo}</td><td>${temp.total}</td><td><button type='reset' id="${temp.codigo}">Modificar</button</td></tr>` + str;
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