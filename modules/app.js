import Producto from "./producto.js";
import Inventario from "./inventario.js";

let inventario = new Inventario();

let btnAgregar = document.getElementById("btnAgregar");
let btnAgregarPosicion = document.getElementById("btnAgregarPosicion");
let btnBuscar = document.getElementById("btnBuscar");
let btnEliminar = document.getElementById("btnEliminar");
let btnListar = document.getElementById("btnListar");
let btnListarInverso = document.getElementById("btnListarInverso");
let operacion = document.getElementById("operacion");

let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let costo = document.getElementById("costo");
let cantidad = document.getElementById("cantidad");
let mostrar1 = false, mostrar2 = false, mostrar3 = false;

//OCULTAR SECCIONES
document.getElementById("agregarh3").addEventListener("click", () => {
    if (!mostrar1) {
        document.getElementById("crud_agregar").style.display = "block";
        mostrar1 = true;
    } else {
        document.getElementById("crud_agregar").style.display = "none";
        mostrar1 = false;
    } 
});
document.getElementById("buscarh3").addEventListener("click", () => {
    if (!mostrar3) {
        document.getElementById("crud_buscar").style.display = "block";
        mostrar3 = true;
    } else {
        document.getElementById("crud_buscar").style.display = "none";
        mostrar3 = false;
    }
});
/***********/
btnAgregar.addEventListener("click", () => {
    let verifica = inventario.buscar(codigo.value);
    if (verifica == null) {
        let producto = new Producto(codigo.value, nombre.value, cantidad.value, costo.value);
        inventario.agregar(producto);
        operacion.innerHTML += "Se agregó un elemento al inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
        codigo.value++;
        nombre.value = "";
        costo.value = "";
        cantidad.value = "";
    } else console.log("El código ya existe");
    
});
btnAgregarPosicion.addEventListener("click", () => {
    let posicion = document.getElementById("posicion").value;
    let producto = new Producto(codigo.value, nombre.value, cantidad.value, costo.value);
    inventario.agregarPosicion(producto, posicion);
    operacion.innerHTML += `Se agregó un elemento al inventario en la posicion ${posicion}<hr>`;
    operacion.scrollTop = operacion.scrollHeight;

    codigo.value++;
    nombre.value = "";
    costo.value = "";
    cantidad.value = "";
});
btnListar.addEventListener("click", () => {
    let resListar = inventario.listado();
    if (resListar != "") {
        document.getElementById('listar').innerHTML = resListar;
        operacion.innerHTML += "Se enlistaron los elementos del inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    }
});
btnListarInverso.addEventListener("click", () => {
    let resListar = inventario.listadoInverso();
    if (resListar != "") {
        document.getElementById('listar').innerHTML = resListar;
        operacion.innerHTML += "Se enlistaron los elementos del inventario en orden inverso<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    }
});
btnBuscar.addEventListener("click", () => {
    let codigo = document.getElementById("buscar1").value;
    let divRes = document.getElementById("res");
    //let elemento = inventario.buscar(codigo);
    let elemento = inventario.busquedaBinaria(codigo);
    
    if (elemento != null) {
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = `<tr><td>Código</td><td>Nombre</td><td>Cantidad</td><td>Costo</td></tr><tr><td>${elemento.codigo} </td> <td>${elemento.nombre} </td><td> ${elemento.cantidad} </td><td>${elemento.costo}</td></tr>`;
        operacion.innerHTML += "Se buscó un elemento en el inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    } else {
        document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Resultado de la búsqueda</h3>";
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = "No se encontró el producto";
    }
});
btnEliminar.addEventListener("click", () => {
    let codigo = document.getElementById("buscar1").value;
    let res = inventario.eliminar(codigo);

    let divRes = document.getElementById("res");
    if (res) {
        document.getElementById('title_search').innerHTML = "<h3 id='title_search'>Eliminado</h3>";
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = `El elemento con código ${codigo} ha sido eliminado`;
        operacion.innerHTML += "Se eliminó un elemento del inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    } else {
        document.getElementById('title_search').style.display = "block";
        divRes.innerHTML = "Ingrese un código válido";  
    }

});
btnOrdenar.addEventListener("click", () => {
    let pre = inventario.ordenarCodigo();
    if (pre != null) {
        operacion.innerHTML += "Se ordenaron los elementos del inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
    }
});