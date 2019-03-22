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
var sum = 0;


function save(){
var id = sum;

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
boton1.addEventListener("click", function(){bncomentarios(id)}, false); 

//console.log("Boton Save");
//console.log(fecha.toLocaleDateString());
año = fecha.getFullYear();
mes = fecha.getMonth();
numdia = fecha.getDate();
dia = fecha.getDay();

var FH = " " + diasem[dia] + ", " + numdia + " de " + meses[mes] + " del " +año;


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

crearUsuario.textContent = "Usuario:  " + usuario;
creardiv2.appendChild(crearUsuario);
document.body.appendChild(creardiv2);

crearDes.textContent = "Descripcion:  " + descripcion;
creardiv3.appendChild(crearDes);
document.body.appendChild(creardiv3);

fechaActual.textContent ="Fecha:  " + FH;
creardiv4.appendChild(fechaActual);
document.body.appendChild(creardiv4);

boton1.textContent="COMENTARIOS";
creardiv5.appendChild(boton1);
creardiv5.appendChild(separador);
document.body.appendChild(creardiv5);


	document.getElementById("textUsuario").value = ""
	document.getElementById("textDescripcion").value = ""
	document.getElementById("image").value = ""

// COMENTARIOS 
var comentario = document.createElement("h3");
var divcoment = document.createElement("div")
var espaciocom = document.createElement("input");
var resulcom = document.createElement("span");
var boton2 = document.createElement("button");
boton2.addEventListener("click", function(){agregacom(id)}, false); 

espaciocom.id = "input"+sum;
divcoment.id = "divcomen"
divcoment.style.display = "none";

comentario.textContent="Comentarios"
divcoment.appendChild(comentario);
document.body.appendChild(divcoment);

divcoment.appendChild(espaciocom);
document.body.appendChild(divcoment);

boton2.textContent="COMENTAR";
divcoment.appendChild(boton2);
divcoment.appendChild(separador);
document.body.appendChild(divcoment);

divcoment.appendChild(linea);
document.body.appendChild(divcoment);
	

sum ++;
}

function bncomentarios(){
if (document.getElementById("divcomen").style.display == "none"){
	document.getElementById("divcomen").style.display = "block"; 
}else {
		document.getElementById("divcomen").style.display = "none";
	}
}

function agregacom(){

	console.log("Si Funciona")
}



