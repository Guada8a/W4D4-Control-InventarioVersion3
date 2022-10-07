import Producto from "./producto.js";
import Inventario from "./inventario.js";

let inventario = new Inventario();

let btnAgregar = document.getElementById("btnAgregar");
let btnAgregarPosicion = document.getElementById("btnAgregarPosicion");
let btnBuscar = document.getElementById("btnBuscar");
let btnEliminar = document.getElementById("btnEliminar");
let operacion = document.getElementById("operacion");
let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let costo = document.getElementById("costo");
let cantidad = document.getElementById("cantidad");

///EVENTOS
btnAgregar.addEventListener("click", () => {
    let verifica = inventario.buscar(codigo.value);
    if (verifica==false) {
        let producto = new Producto(codigo.value, nombre.value, cantidad.value, costo.value);
        inventario.agregar(producto);

        inventario.ordenarCodigo();
        let resListar = inventario.listado();
        let resListarInverso = inventario.listadoInverso();

        document.getElementById('listar').innerHTML = resListar;
        document.getElementById('listarInverso').innerHTML = resListarInverso;
        
        operacion.innerHTML += "Se agregó un elemento al inventario<hr>";
        operacion.scrollTop = operacion.scrollHeight;
        codigo.style.border = "black solid 2px";
        nombre.value = "";
        costo.value = "";
        cantidad.value = "";
    } else {
        codigo.style.border = "red solid 2px";
        console.log("El código ya existe");
    }
    
});
btnBuscar.addEventListener("click", () => {
    let codigo = document.getElementById("buscar1").value;
    let divRes = document.getElementById("res");
    let elemento = inventario.buscar(codigo);
    
    if (elemento != false) {
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
