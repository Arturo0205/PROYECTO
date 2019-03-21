var usuario;
var descripcion;
var imagen;


function save(){
var creardiv = document.createElement("div");
var crearUsuario = document.createElement("span");
var crearDes = document.createElement("span");
var separador = document.createElement("br");
var crearImg = document.createElement("img");
crearImg.src = " " == image;
var espacio = document.createElement("span");
var linea = document.createElement("hr");
var boton1 = document.createElement("button");
boton1.textContent = "COMENTARIOS";


console.log("Boton Save");
usuario = document.getElementById("textUsuario").value;
descripcion = document.getElementById("textDescripcion").value;
imagen = document.getElementById("image").value;
//document.getElementById("mostrausuario").innerHTML = usuario;
//document.getElementById("mostradescri").innerHTML = descripcion;

crearUsuario.textContent = usuario;
creardiv.appendChild(crearUsuario);
document.body.appendChild(creardiv);
crearImg.textContent = imagen;
creardiv.appendChild(crearImg);
document.body.appendChild(creardiv);
creardiv.appendChild(espacio);
creardiv.appendChild(boton1);
creardiv.appendChild(separador);
crearDes.textContent = descripcion;
creardiv.appendChild(crearDes);
document.body.appendChild(creardiv);
creardiv.appendChild(linea);

}