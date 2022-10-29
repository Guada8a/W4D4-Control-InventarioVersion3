import Producto from "./producto.js";
export default class Inventario{
    constructor() {
        this.primero = null;
        this.ultimo = null;
    }
    agregar(producto) {
        if (!this.primero) {
            this.primero = producto;
            this.ultimo = producto;
        }else {
            this.ultimo.next = producto;
            producto.prev = this.ultimo;
            this.ultimo = producto;
        }
    }
    agregarInicio(producto) {
        if (!this.primero) {
            this.primero = producto;
            this.ultimo = producto;
        } else {
            producto.next = this.primero;
            this.primero.prev = producto;
            this.primero = producto;
        }
    }
    buscar(codigo) {
        let aux = this.primero;
        if (aux) {
            try {
                while (aux.codigo != codigo)
                    aux = aux.next;
                if (aux.codigo == codigo)
                    return aux;
            } catch (e) { }
        }
    }
    eliminarProducto(codigo) {
        let aux = this.primero;
        if (this.primero != null) {
            if(this.primero.codigo == codigo){
                this.primero = this.primero.next;
                if (this.primero != null) {
                    this.primero.prev = null;
                }
                return aux;
            } else {
                try {
                    while (aux.next.codigo != codigo)
                        aux = aux.next;
                    if (aux.next.codigo == codigo) {
                        try{
                            aux.next = aux.next.next;
                            aux.next.prev = aux;
                        } catch (e) {
                            return aux;
                        }
                        return aux;
                    }
                }catch (e) { }
            }
        }
    }
    eliminarInicio() {
        let aux = this.primero;
        if (this.primero.next == null) {
            this.primero = null;
        } else {
            this.primero = aux.next;
            this.primero.prev = null;
        }
        console.log(this.primero);
    }
    ordenarPorCodigo() {
        let temp = this.primero;
        let aux = this.primero;
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
            aux = this.primero;
        }
    }
    cambiarPosicion(nuevo, pos) { 
        let aux = this.primero;
        if (aux) {
            try {
                while (aux.codigo != nuevo.codigo)
                    aux = aux.next;
                if (aux.codigo == nuevo.codigo) {
                    if (pos == 1) {
                        this.eliminarInicio();
                        this.agregarInicio(nuevo);
                    } else {
                        let temp = this.primero;
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
        let aux = this.primero;
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
        let str = '<thead><th colspan="7"><h3>INVENTARIO</h3></th><tr><td width="5%">Pos.</td><td width="10%">Código</td><td width="20%">Nombre</td><td width="15%">Cantidad</td><td width="15%">Costo</td><td width="15%">Total</td><td width="20%"></td></tr></thead>';
        let pos = 1;
        if (this.primero != null) {
            let temp = this.primero;
            while (temp != null) {
                str += `<tr><td class='num'>${pos}</td><td>${temp.codigo}</td><td>${temp.nombre}</td><td > ${temp.cantidad} </td><td>${temp.costo}</td><td>${temp.total}</td><td width='20%'><button class='modificar' codigo="${temp.codigo}" nombre="${temp.nombre}" cantidad="${temp.cantidad}" costo="${temp.costo}">Modificar</button></td></tr>`;
                temp = temp.next;
                pos++;
            }
            return str;
        } else {
            return str = "No hay productos en el inventario";
        }
    }
    listadoInverso() {
        this.invertir();
        this.listado();
    }
    invertir() {
        let temp = this.primero;
        let aux = '';
        while (temp) {
            aux = temp.next;
            temp.next = temp.prev;
            temp.prev = aux;
            temp = temp.prev;
        }
        let aux2 = this.primero;
        this.primero = this.ultimo;
        this.ultimo = aux2;
    }
}