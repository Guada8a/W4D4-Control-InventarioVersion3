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
                let resListar = inventario.listado();
                let resListarInverso = inventario.listadoInverso();
        
                document.getElementById('listar').innerHTML = resListar;
                document.getElementById('listarInverso').innerHTML = resListarInverso;
                
                operacion.innerHTML += `Se agregó un producto con el código ${codigo.value} y nombre "${nombre.value}" al inventario<hr>`;
                operacion.scrollTop = operacion.scrollHeight;
                codigo.style.border = "white solid 2px";
                cantidad.style.border = "white solid 2px";
                costo.style.border = "white solid 2px";
                nombre.style.border = "white solid 2px";
                
                codigo.value = '';
                nombre.value = "";
                costo.value = "";
                cantidad.value = "";
            } else {
                inventario.cambiarPosicion(producto, posicion.value-1);
                let resListar = inventario.listado();
                let resListarInverso = inventario.listadoInverso();
        
                document.getElementById('listar').innerHTML = resListar;
                document.getElementById('listarInverso').innerHTML = resListarInverso;
                
                operacion.innerHTML += `Se agregó un producto con el código ${codigo.value} y nombre "${nombre.value}" al inventario en la posición ${posicion.value}<hr>`;
                operacion.scrollTop = operacion.scrollHeight;
                codigo.style.border = "white solid 2px";
                cantidad.style.border = "white solid 2px";
                costo.style.border = "white solid 2px";
                nombre.style.border = "white solid 2px";
                
                codigo.value = '';
                nombre.value = "";
                costo.value = "";
                cantidad.value = "";
                posicion.value = "";
                console.log(inventario.productos);
            }
            
        } else {
            codigo.style.border = "red solid 2px";
            console.log("El código ya existe");
        } 
    }
});
/*Modificar*/
document.attachEvent = function (evt, q, fn) {

    document.addEventListener(evt, (e) => {
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
            if (posicion.value == '') {
                inventario.modificar(producto);
                let resListar = inventario.listado();
                let resListarInverso = inventario.listadoInverso();
        
                document.getElementById('listar').innerHTML = resListar;
                document.getElementById('listarInverso').innerHTML = resListarInverso;
                
                operacion.innerHTML += `Se modificó un producto con el código ${codigo.value} y nombre "${nombre.value}" del inventario<hr>`;
                operacion.scrollTop = operacion.scrollHeight;
                codigo.style.border = "white solid 2px";
                cantidad.style.border = "white solid 2px";
                costo.style.border = "white solid 2px";
                nombre.style.border = "white solid 2px";
                
                codigo.value = '';
                nombre.value = "";
                costo.value = "";
                cantidad.value = "";
    
                btnAgregar.style.display = "block";
                btnModificar.style.display = "none";
                codigo.readOnly = false;
            } else {
                inventario.modificar(producto);
                inventario.cambiarPosicionModificar(producto, posicion.value-1);
                let resListar = inventario.listado();
                let resListarInverso = inventario.listadoInverso();
        
                document.getElementById('listar').innerHTML = resListar;
                document.getElementById('listarInverso').innerHTML = resListarInverso;
                
                operacion.innerHTML += `Se modificó un producto con el código ${codigo.value} y nombre "${nombre.value}" del inventario en la posición ${posicion.value}<hr>`;
                operacion.scrollTop = operacion.scrollHeight;
                codigo.style.border = "white solid 2px";
                cantidad.style.border = "white solid 2px";
                costo.style.border = "white solid 2px";
                nombre.style.border = "white solid 2px";
                
                codigo.value = '';
                nombre.value = "";
                costo.value = "";
                cantidad.value = "";
                posicion.value = "";
    
                btnAgregar.style.display = "block";
                btnModificar.style.display = "none";
                codigo.readOnly = false;
                posicion,readOnly = false;
            }
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
            operacion.innerHTML += `Se buscó un producto con el código <b>${codigo}</b> del inventario<hr>`;
            operacion.scrollTop = operacion.scrollHeight;
        } else {
            document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Resultado de la búsqueda</h3>";
            document.getElementById('title_search').style.display = "block";
            divRes.innerHTML = "No se encontró el producto";
        }
    }
});

btnEliminar.addEventListener("click", () => {
    const codigo = document.getElementById("buscar1").value;
    let divRes = document.getElementById("res");
    if (codigo != '') {
        if (inventario.productos != null) {
            let aux = new Producto(codigo, "", "", "");
            let res = inventario.eliminar(aux.codigo);
            let resListar = inventario.listado();
            let resListarInverso = inventario.listadoInverso();
            if (res!= false) {
                document.getElementById('listar').innerHTML = resListar;
                document.getElementById('listarInverso').innerHTML = resListarInverso;
                document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Eliminado</h3>";
                document.getElementById('title_search').style.display = "block";
                divRes.innerHTML = `El producto con código ${codigo} ha sido eliminado`;
                operacion.innerHTML += `Se eliminó un producto con el código <b>${codigo}</b> del inventario<hr>`;
                operacion.scrollTop = operacion.scrollHeight;
            } else {
                document.getElementById('title_search').style.display = "block";
                divRes.innerHTML = "Producto no encontrado";
            }
        } else {
            document.getElementById('title_search').style.display = "block";
            divRes.innerHTML = "No hay productos en el inventario";
        }
    } else {
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = "Ingrese un código válido";  
    }

});