var usuario;
var descripcion;
var imagen;
var fecha = new Date();
var año;
var numdia;
var mes;
var dia;
var diasem =["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", 
"Octubre", "Noviembre", "Diciembre"];

function save(){


var creardiv = document.createElement("div");
var creardiv2 = document.createElement("div");
var creardiv3 = document.createElement("div");
var creardiv4 = document.createElement("div");
var creardiv5 = document.createElement("div");
var crearUsuario = document.createElement("span");
var crearDes = document.createElement("span");
var separador = document.createElement("br");
var separador2 = document.createElement("br");
var crearImg = document.createElement("img");
var fechaActual = document.createElement("span");
var linea = document.createElement("hr");
var boton1 = document.createElement("button");
boton1.innerHTML = "COMENTARIOS";



console.log("Boton Save");
console.log(suma);
//console.log(fecha.toLocaleDateString());
año = fecha.getFullYear();
mes = fecha.getMonth();
numdia = fecha.getDate();
dia = fecha.getDay();

var FH = " " + diasem[dia] + " " + numdia + " de " + meses[mes] + " del " +año;


usuario = document.getElementById("textUsuario").value;
descripcion = document.getElementById("textDescripcion").value;
imagen = document.getElementById("image").value;
crearImg.src = imagen;
crearImg.width = 160;
crearImg.height= 160;

//document.getElementById("mostrausuario").innerHTML = usuario;
//document.getElementById("mostradescri").innerHTML = descripcion;

crearImg.imgContent = imagen;
creardiv.appendChild(crearImg);
document.body.appendChild(creardiv);

crearUsuario.textContent = usuario;
creardiv2.appendChild(crearUsuario);
document.body.appendChild(creardiv2);

crearDes.textContent = descripcion;
creardiv3.appendChild(crearDes);
document.body.appendChild(creardiv3);

fechaActual.textContent = FH;
creardiv4.appendChild(fechaActual);
document.body.appendChild(creardiv4);


creardiv5.appendChild(boton1);
creardiv5.appendChild(separador);
creardiv5.appendChild(linea);
document.body.appendChild(creardiv5);


	document.getElementById("textUsuario").value = ""
	document.getElementById("textDescripcion").value = ""
	document.getElementById("image").value = ""
}


