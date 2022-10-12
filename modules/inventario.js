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
                while (aux.codigo != codigo) {
                    aux = aux.next;
                }
                if (aux.codigo == codigo) {
                    return aux;
                }
            } catch (error) { }
        }
    }
    eliminar(codigo) {
        let product = null;
        for (let i = 0; i <= this.productos.length; i++) {
            if (this.productos[i])
                if (codigo === this.productos[i].codigo) {
                    for (let o = i; o < this.productos.length - 1; o++)
                        this.productos[o] = this.productos[o + 1];

                    this.productos[this.productos.length - 1] = 0;
                    this.productos.pop();
                    product = true;
                }
        }
        return product;
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