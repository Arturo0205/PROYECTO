
var usuario;
var descripcion;
var imagen;



function save(){
var creardiv = document.createElement("div");
var crearUsuario = document.createElement("span");
var crearDes = document.createElement("span");

console.log("Boton Save");
usuario = document.getElementById("textUsuario").value;
descripcion = document.getElementById("textDescripcion").value;

//document.getElementById("mostrausuario").innerHTML = usuario;
//document.getElementById("mostradescri").innerHTML = descripcion;

crearUsuario.textContent = usuario;
creardiv.appendChild(crearUsuario);
document.body.appendChild(creardiv);

crearDes.textContent = descripcion;
creardiv.appendChild(crearDes);
document.body.appendChild(creardiv);



}