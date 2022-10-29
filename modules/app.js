import Producto from "./producto.js";
import Inventario from "./inventario.js";

let inventario = new Inventario();

let btnAgregar = document.getElementById("btnAgregar");
let btnBuscar = document.getElementById("btnBuscar");
let btnModificar = document.getElementById("btnModificar");
let btnEliminar = document.getElementById("btnEliminar");
let operacion = document.getElementById("operacion");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let costo = document.getElementById("costo");
let cantidad = document.getElementById("cantidad");
let posicion = document.getElementById("posicion");
//CHIPS
let chipAdd = '<div class="chip-add"><div class="chip-content">NUEVO</div></div></div>';
let chipAdd1 = '<div class="chip-add1"><div class="chip-content">NUEVO</div></div></div>';
let chipSearch = '<div class="chip-search"><div class="chip-content">BUSCAR</div></div></div>';
let chipDelete = '<div class="chip-delete"><div class="chip-content">ELIMINAR</div></div></div>';
let chipUpdate = '<div class="chip-update"><div class="chip-content">MODIFICAR</div></div></div>';
///EVENTOS
btnAgregar.addEventListener("click", () => {
    if (codigo.value == '' || cantidad.value == '' || costo.value == '' || nombre.value == '') {
        codigo.style.border = "red solid 2px";
        cantidad.style.border = "red solid 2px";
        costo.style.border = "red solid 2px";
        nombre.style.border = "red solid 2px";
    } else {
        let verifica = inventario.buscar(codigo.value);
        if (verifica == false || verifica== null) {
            let producto = new Producto(codigo.value, nombre.value, cantidad.value, costo.value);
            if (posicion.value == '') {
                inventario.agregar(producto);
                inventario.ordenarPorCodigo();
                let resListar = inventario.listado();
                inventario.invertir();
                let resListarInverso = inventario.listado();
                inventario.invertir();
                document.getElementById('listar').innerHTML = resListar;
                document.getElementById('listarInverso').innerHTML = resListarInverso;
                
                operacion.innerHTML += `
                ${chipAdd} Se agregó un producto con el código ${codigo.value} y nombre "${nombre.value}" al inventario<hr>`;
                operacion.scrollTop = operacion.scrollHeight;
                codigo.style.border = "none";
                cantidad.style.border = "none";
                costo.style.border = "none";
                nombre.style.border = "none";;
                
                codigo.value = '';
                nombre.value = "";
                costo.value = "";
                cantidad.value = "";

                codigo.focus();
            } else {
                inventario.cambiarPosicion(producto, posicion.value-1);
                let resListar = inventario.listado();
                inventario.invertir();
                let resListarInverso = inventario.listado();
                inventario.invertir();
                document.getElementById('listar').innerHTML = resListar;
                document.getElementById('listarInverso').innerHTML = resListarInverso;
                
                operacion.innerHTML += `${chipAdd1} Se agregó un producto con el código ${codigo.value} y nombre "${nombre.value}" al inventario en la posición ${posicion.value}<hr>`;
                operacion.scrollTop = operacion.scrollHeight;
                codigo.style.border = "none";
                cantidad.style.border = "none";
                costo.style.border = "none";
                nombre.style.border = "none";
                
                codigo.value = '';
                nombre.value = "";
                costo.value = "";
                cantidad.value = "";
                posicion.value = "";
                
                codigo.focus();
            }
            
        } else {
            codigo.style.border = "red solid 2px";
            console.log("El código ya existe");
        } 
    }
});
/*Modificar*/
document.attachEvent = function (evento, q, fn) {
    document.addEventListener(evento, (e) => {
        if (e.target.matches(q)) {
            fn.apply(e.target, [e]);
        }
    });

};
document.attachEvent('click', '.modificar', function () {
    codigo.value = this.getAttribute('codigo');
    nombre.value = this.getAttribute('nombre');
    cantidad.value = parseInt(this.getAttribute('cantidad'));
    costo.value = parseInt(this.getAttribute('costo'));
    
    btnAgregar.style.display = "none";
    btnModificar.style.display = "block";
    codigo.readOnly = true;
    nombre.focus();
    posicion.readOnly = true;
});

btnModificar.addEventListener("click", () => {
    if (codigo.value == '' || cantidad.value == '' || costo.value == '' || nombre.value == '') {
        codigo.style.border = "red solid 2px";
        cantidad.style.border = "red solid 2px";
        costo.style.border = "red solid 2px";
        nombre.style.border = "red solid 2px";
    } else {
        let verifica = inventario.buscar(codigo.value);
        if (verifica == false || verifica== null) {
            console.log("El código no existe");
        } else {
            let producto = new Producto(codigo.value, nombre.value, cantidad.value, costo.value);
            inventario.modificar(producto);
            let resListar = inventario.listado();
            inventario.invertir();
            let resListarInverso = inventario.listado();
            inventario.invertir();
    
            document.getElementById('listar').innerHTML = resListar;
            document.getElementById('listarInverso').innerHTML = resListarInverso;
            
            operacion.innerHTML += `${chipUpdate} Se modificó un producto con el código ${codigo.value} y nombre "${nombre.value}" del inventario<hr>`;
            operacion.scrollTop = operacion.scrollHeight;
            codigo.style.border = "none";
            cantidad.style.border = "none";
            costo.style.border = "none";
            nombre.style.border = "none";
            
            codigo.value = '';
            nombre.value = "";
            costo.value = "";
            cantidad.value = "";

            btnAgregar.style.display = "block";
            btnModificar.style.display = "none";
            codigo.readOnly = false;
            posicion.readOnly = false;
        } 
    }
});

btnBuscar.addEventListener("click", () => {
    let codigo = document.getElementById("buscar1").value;
    let divRes = document.getElementById("res");
    let producto = inventario.buscar(codigo);
    if (producto == null) {
        document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Resultado de la búsqueda</h3>";
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = "No hay productos en el inventario";
    } else {
        if (producto != false) {
            document.getElementById('title_search').style.display = "block";
            divRes.innerHTML = `<thead><tr><td>Código</td><td>Nombre</td><td>Cantidad</td><td>Costo</td><td>Total</td></thead></tr><tr><td>${producto.codigo} </td> <td>${producto.nombre} </td><td> ${producto.cantidad} </td><td>${producto.costo}</td><td>${producto.total}</td></tr>`;
            operacion.innerHTML += `${chipSearch} Se buscó un producto con el código <b>${codigo}</b> del inventario<hr>`;
            operacion.scrollTop = operacion.scrollHeight;
        } else {
            document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Resultado de la búsqueda</h3>";
            document.getElementById('title_search').style.display = "block";
            divRes.innerHTML = "No se encontró el producto";
        }
    }
});
document.getElementById('buscar1').addEventListener("click", () => {
    document.getElementById('title_search').style.display = "none";
    document.getElementById('res').innerHTML = "";
});
btnEliminar.addEventListener("click", () => {
    const codigo = document.getElementById("buscar1").value;
    let divRes = document.getElementById("res");

    if (codigo != '') {
        if (inventario.primero != null) {
            let aux = new Producto(codigo, "", "", "");
            let res = inventario.eliminar(aux.codigo);
            if (res != false) {
                document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Eliminado</h3>";
                document.getElementById('title_search').style.display = "block";
                divRes.innerHTML = `El producto con código ${codigo} ha sido eliminado`;
                operacion.innerHTML += `${chipDelete} Se eliminó un producto con el código <b>${codigo}</b> del inventario<hr>`;
                operacion.scrollTop = operacion.scrollHeight;
            } else {
                document.getElementById('title_search').style.display = "block";
                divRes.innerHTML = "Producto no encontrado";
            }
        } else {
            document.getElementById('title_search').style.display = "block";
            document.getElementById('listarInverso').innerHTML = "";
        }
    } else {
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = "Ingrese un código válido";
    }
});