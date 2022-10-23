import Producto from "./producto.js";
import Inventario from "./inventario.js";

let inventario = new Inventario();

let btnAgregar = document.getElementById("btnAgregar");
let btnBuscar = document.getElementById("btnBuscar");
let btnEliminar = document.getElementById("btnEliminar");
let operacion = document.getElementById("operacion");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let costo = document.getElementById("costo");
let cantidad = document.getElementById("cantidad");
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
            inventario.agregar(producto);
            let resListar = inventario.listado();
            let resListarInverso = inventario.listadoInverso();
    
            document.getElementById('listar').innerHTML = resListar;
            document.getElementById('listarInverso').innerHTML = resListarInverso;
            
            operacion.innerHTML += `Se agregó un producto con el código ${codigo.value} y nombre "${nombre.value}" al inventario<hr>`;
            operacion.scrollTop = operacion.scrollHeight;
            codigo.style.border = "black solid 2px";
            cantidad.style.border = "black solid 2px";
            costo.style.border = "black solid 2px";
            nombre.style.border = "black solid 2px";
            
            codigo.value = '';
            nombre.value = "";
            costo.value = "";
            cantidad.value = "";
        } else {
            codigo.style.border = "red solid 2px";
            console.log("El código ya existe");
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
    let codigo = document.getElementById("buscar1").value;
    let res = inventario.eliminar(codigo);

    let divRes = document.getElementById("res");
    if (res) {
        let resListar = inventario.listado();
        let resListarInverso = inventario.listadoInverso();

        document.getElementById('listar').innerHTML = resListar;
        document.getElementById('listarInverso').innerHTML = resListarInverso;
        document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Eliminado</h3>";
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = `El producto con código ${codigo} ha sido eliminado`;
        operacion.innerHTML += `Se eliminó un producto con el código <b>${codigo}</b> del inventario<hr>`;
        operacion.scrollTop = operacion.scrollHeight;
    } else {
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = "Ingrese un código válido";  
    }

});
