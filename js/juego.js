var contadorHumano = 0;
var contadorRobot = 0;


function aleatorio(minimo, maximo){
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

function reiniciarJuego(){
	document.getElementById("eleccionRobot").classList.remove("papel");
	document.getElementById("eleccionRobot").classList.remove("tijera");
	document.getElementById("eleccionRobot").classList.remove("piedra");
	document.getElementById("eleccionHumano").classList.remove("papel");
	document.getElementById("eleccionHumano").classList.remove("tijera");
	document.getElementById("eleccionHumano").classList.remove("piedra");
	contadorHumano = 0;
	contadorRobot = 0;
	document.getElementById("contadores").innerHTML = "Robot: " + contadorRobot + "<br>";
	document.getElementById("contadores").innerHTML += "Humano: " + contadorHumano + "<br>";
	document.getElementById("resultado").innerHTML= "Resultado ";
}

function seleccionDeElemento(id){

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["piedra", "papel", "tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

if (opciones[opcionMaquina] == "piedra")
{
	opcionUsuario = 0;
	document.getElementById("eleccionRobot").classList.remove("papel");
	document.getElementById("eleccionRobot").classList.remove("tijera");
	document.getElementById("eleccionRobot").classList.add("piedra");	
}

if (opciones[opcionMaquina] == "papel"){
	opcionUsuario = 1;
	document.getElementById("eleccionRobot").classList.remove("piedra");
	document.getElementById("eleccionRobot").classList.remove("tijera");
	document.getElementById("eleccionRobot").classList.add("papel");
}

if (opciones[opcionMaquina] == "tijera"){
	opcionUsuario = 2;
	document.getElementById("eleccionRobot").classList.remove("papel");
	document.getElementById("eleccionRobot").classList.remove("pidra");
	document.getElementById("eleccionRobot").classList.add("tijera");
}


if (id == "piedra")
{
	opcionUsuario = 0;
	document.getElementById("eleccionHumano").classList.remove("piedra");
	document.getElementById("eleccionHumano").classList.remove("tijera");
	document.getElementById("eleccionHumano").classList.add("piedra");	
}

if (id == "papel"){
	opcionUsuario = 1;
	document.getElementById("eleccionHumano").classList.remove("piedra");
	document.getElementById("eleccionHumano").classList.remove("tijera");
	document.getElementById("eleccionHumano").classList.add("papel");
}

if (id == "tijera"){
	opcionUsuario = 2;
	document.getElementById("eleccionHumano").classList.remove("papel");
	document.getElementById("eleccionHumano").classList.remove("pidra");
	document.getElementById("eleccionHumano").classList.add("tijera");
}



if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        document.getElementById("resultado").innerHTML="Empate!";
    }
    else if(opcionMaquina == papel)
    {
        document.getElementById("resultado").innerHTML="Perdiste!";
        contadorRobot++;
    }
    else if(opcionMaquina == tijera)
    {
        document.getElementById("resultado").innerHTML="Ganaste!";
        contadorHumano++;
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        document.getElementById("resultado").innerHTML="Ganaste!";
        contadorHumano++;
    }
    else if(opcionMaquina == papel)
    {
         document.getElementById("resultado").innerHTML="Empate!";
    }
    else if(opcionMaquina == tijera)
    {
        document.getElementById("resultado").innerHTML="Perdiste!";
        contadorRobot++;
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        document.getElementById("resultado").innerHTML="Perdiste!";
        contadorRobot++;
    }
    else if(opcionMaquina == papel)
    {
        document.getElementById("resultado").innerHTML="Ganaste!";
        contadorHumano++;
    }
    else if(opcionMaquina == tijera)
    {
         document.getElementById("resultado").innerHTML="Empate!";
    }
}
else
{
    console.log("¿Pos qué carajo?");
}

document.getElementById("contadores").innerHTML = "Robot: " + contadorRobot + "<br>";
document.getElementById("contadores").innerHTML += "Humano: " + contadorHumano + "<br>";

if(contadorRobot == 3 || contadorHumano == 3){
	document.getElementById("resultado").innerHTML += "<br> Se termino la partida";
	contadorRobot = 0;
	contadorHumano = 0;
}

}