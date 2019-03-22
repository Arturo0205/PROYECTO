var usuario;
var se = 0;
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
var divcoment = document.createElement("div")
var linea = document.createElement("hr");
var creardiv = document.createElement("div");
var creardiv2 = document.createElement("div");
var creardiv3 = document.createElement("div");
var creardiv4 = document.createElement("div");
var creardiv5 = document.createElement("div");
var crearUsuario = document.createElement("span");
var crearDes = document.createElement("span");
var crearImg = document.createElement("img");
var fechaActual = document.createElement("span");
var boton1 = document.createElement("button");

	divespacios.id = "divespac"+sum;
	divcoment.id = "divcomen" + sum;
	divcoment.style.display = "none";

	boton1.id = "contador" + sum;
	boton1.textContent="Comentarios (" + se + ")";
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

crearDes.textContent = "Descripcion:  " + descripcion;
creardiv3.appendChild(crearDes);


fechaActual.textContent ="Fecha:  " + FH;
creardiv4.appendChild(fechaActual);

	creardiv5.appendChild(boton1);
	divespacios.appendChild(creardiv);
	divespacios.appendChild(creardiv2);
	divespacios.appendChild(creardiv3);
	divespacios.appendChild(creardiv4);
	divespacios.appendChild(creardiv5);
	divespacios.appendChild(divcoment);
	divespacios.appendChild(linea);

	document.getElementById("textUsuario").value = ""
	document.getElementById("textDescripcion").value = ""
	document.getElementById("image").value = ""

// COMENTARIOS 

var comentario = document.createElement("h3");
var divinfo = document.createElement("div");
var espaciocom = document.createElement("input");
var resulcom = document.createElement("span");
var boton2 = document.createElement("button");
var uno = document.createElement("div");

uno.id = "muestracomentarios"+sum;


espaciocom.id = "icomentario"+sum;
boton2.id = "botoncomentario"+sum;
boton2.textContent="COMENTAR";
boton2.addEventListener("click", function(){agregacom(id)}, false); 

comentario.textContent="Comentarios"
divinfo.appendChild(espaciocom);
divinfo.appendChild(boton2);


divcoment.appendChild(comentario);
divcoment.appendChild(divinfo);
divcoment.appendChild(uno);

	console.log(divcoment)
	document.body.appendChild(divespacios);
sum ++;
}

function bncomentarios(enseñar){
	//console.log("si funciono")
	//if (document.getElementById("divcomen"+enseñar).style.display == "none"){

	//}
	//else {
	//	document.getElementById("divcomen"+enseñar).style.display = "none";
	//}
if (document.getElementById("divcomen"+enseñar).style.display == "none"){
	document.getElementById("divcomen"+enseñar).style.display = "block"; 
}else {
		document.getElementById("divcomen"+enseñar).style.display = "none";
	}
}

function agregacom(buttons){
    //onsole.log(buttons);
	//console.log("Si Funciona")

	var comentariofinal = document.getElementById("icomentario"+buttons).value;
	
	var divcoment = document.getElementById("muestracomentarios"+buttons);
	var spancomentario = document.createElement("p");
	var fechaActual2 = document.createElement("span");

	//divcoment.appendChild(espaco);
	spancomentario.textContent = comentariofinal;
	divcoment.appendChild(spancomentario);	
	//divcoment.appendChild(espaco2);
	fechaActual2.textContent =" - Fecha:  " + FH;
	divcoment.appendChild(fechaActual2);
	

	document.getElementById("icomentario"+buttons).value = "";
		actualizarContador(buttons);
}


function actualizarContador(comentarionum){
 //funciona
	var funca = document.getElementById("muestracomentarios"+comentarionum);
	var numm = funca.getElementsByTagName("p").length;
	var resultado = document.getElementById("contador"+comentarionum);


	resultado.textContent = "Comentarios (" + numm + ")";
}

