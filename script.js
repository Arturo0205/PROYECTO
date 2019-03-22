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
año = fecha.getFullYear();
mes = fecha.getMonth();
numdia = fecha.getDate();
dia = fecha.getDay();
var FH = " " + diasem[dia] + ", " + numdia + " de " + meses[mes] + " del " +año;
var sum = 0;


function save(){
var id = sum;

var divespacios = document.createElement("div");
	divespacios.id = "divespac"+sum;
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
var boton1 = document.createElement("button");
boton1.addEventListener("click", function(){bncomentarios(id)}, false); 

//console.log("Boton Save");
//console.log(fecha.toLocaleDateString());



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
var linea = document.createElement("hr");
var comentario = document.createElement("h3");
var divcoment = document.createElement("div")
var espaciocom = document.createElement("input");
var resulcom = document.createElement("span");
var boton2 = document.createElement("button");
boton2.addEventListener("click", function(){agregacom(id)}, false); 
var ndivcom = document.createElement("div");
ndivcom.id = "muestracomentarios"+sum;

espaciocom.id = "icomentario"+sum;
divcoment.id = "divcomen" + sum;
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

divcoment.appendChild(ndivcom);

divcoment.appendChild(linea);

	

sum ++;
}

function bncomentarios(enseñar){
if (document.getElementById("divcomen"+enseñar).style.display == "none"){
	document.getElementById("divcomen"+enseñar).style.display = "block"; 
}else {
		document.getElementById("divcomen"+enseñar).style.display = "none";
	}
}

function agregacom(buttons){
console.log(buttons);
	//console.log("Si Funciona")

	var obtenerComentario = document.getElementById("icomentario"+buttons).value;
	console.log(obtenerComentario);

	var divcoment = document.getElementById("muestracomentarios"+buttons);
	var spancomentario = document.createElement("span");
	var fechaActual2 = document.createElement("span");
	var separadorcoment = document.createElement("p");
	var separadorcoment2 = document.createElement("p");


	divcoment.appendChild(separadorcoment2);
	spancomentario.textContent = obtenerComentario;
	divcoment.appendChild(spancomentario);	
	divcoment.appendChild(separadorcoment);
	fechaActual2.textContent ="Fecha:  " + FH;
	divcoment.appendChild(fechaActual2);
	document.body.appendChild(divcoment);

	document.getElementById("icomentario"+idBoton).value = "";
		actualizarContador(idBoton);
}


function actualizarContador(idComments){
	var elemento = document.getElementById("colocarComments"+idComments);

}

