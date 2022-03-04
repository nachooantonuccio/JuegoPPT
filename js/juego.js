var contadorHumano = 0;
var contadorRobot = 0;

const divEleccionRobot = document.getElementById("eleccionRobot");
const divEleccionHumano = document.getElementById("eleccionHumano");
const divContador = document.getElementById("contador");
const divResultado = document.getElementById("resultado");


function aleatorio(minimo, maximo){
    var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
    return numero;
}

function reiniciarJuego(){
    divResultado.style.backgroundColor = '#D3D3D3';
	divEleccionRobot.classList.remove("papel");
	divEleccionRobot.classList.remove("tijera");
	divEleccionRobot.classList.remove("piedra");
	divEleccionHumano.classList.remove("papel");
	divEleccionHumano.classList.remove("tijera");
	divEleccionHumano.classList.remove("piedra");
	contadorHumano = 0;
	contadorRobot = 0;
	divContador.innerHTML = "Robot: " + contadorRobot + "<br>";
	divContador.innerHTML += "Humano: " + contadorHumano + "<br>";
	divResultado.innerHTML= "Resultado ";
}

function seleccionDeElemento(id){

divResultado.style.backgroundColor = '#D3D3D3';

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["piedra", "papel", "tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);


if (opciones[opcionMaquina] == "piedra")
{
    opcionUsuario = 0;
    divEleccionRobot.classList.remove("papel");
    divEleccionRobot.classList.remove("tijera");
    divEleccionRobot.classList.add("piedra");   
}

if (opciones[opcionMaquina] == "papel"){
    opcionUsuario = 1;
    divEleccionRobot.classList.remove("piedra");
    divEleccionRobot.classList.remove("tijera");
    divEleccionRobot.classList.add("papel");
}

if (opciones[opcionMaquina] == "tijera"){
    opcionUsuario = 2;
    divEleccionRobot.classList.remove("papel");
    divEleccionRobot.classList.remove("pidra");
    divEleccionRobot.classList.add("tijera");
}


if (id == "piedra")
{
    opcionUsuario = 0;
    divEleccionHumano.classList.remove("papel");
    divEleccionHumano.classList.remove("tijera");
    divEleccionHumano.classList.add("piedra");  
}

if (id == "papel"){
    opcionUsuario = 1;
    divEleccionHumano.classList.remove("piedra");
    divEleccionHumano.classList.remove("tijera");
    divEleccionHumano.classList.add("papel");
}

if (id == "tijera"){
    opcionUsuario = 2;
    divEleccionHumano.classList.remove("papel");
    divEleccionHumano.classList.remove("pidra");
    divEleccionHumano.classList.add("tijera");
}



if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        divResultado.innerHTML="Empate!";
    }
    else if(opcionMaquina == papel)
    {
        divResultado.innerHTML="Perdiste!";
        contadorRobot++;
    }
    else if(opcionMaquina == tijera)
    {
        divResultado.innerHTML="Ganaste!";
        contadorHumano++;
    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        divResultado.innerHTML="Ganaste!";
        contadorHumano++;
    }
    else if(opcionMaquina == papel)
    {
         divResultado.innerHTML="Empate!";
    }
    else if(opcionMaquina == tijera)
    {
        divResultado.innerHTML="Perdiste!";
        contadorRobot++;
    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
       divResultado.innerHTML="Perdiste!";
        contadorRobot++;
    }
    else if(opcionMaquina == papel)
    {
        divResultado.innerHTML="Ganaste!";
        contadorHumano++;
    }
    else if(opcionMaquina == tijera)
    {
        divResultado.innerHTML="Empate!";
    }
}
else
{
    console.log("¿Pos qué carajo?");
}


divContador.innerHTML = "Robot: " + contadorRobot + "<br>";
divContador.innerHTML += "Humano: " + contadorHumano + "<br>";

setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="¡PIEDRA";
},1000);


setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="PAPEL";
},2000);


setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="O TIJERA!";
},3000);

if(contadorRobot == 3 || contadorHumano == 3){
	divResultado.innerHTML += "<br> Se termino la partida";
    document.getElementById("temporizadorElemento").innerHTML="";
    clearTimeout(temporizador1);
    clearTimeout(temporizador2);
    clearTimeout(temporizador3);
    if(contadorRobot == 3){
        divResultado.style.backgroundColor = '#FF6059';
    } else {
        divResultado.style.backgroundColor = '#8EFC46';
    }
	contadorRobot = 0;
	contadorHumano = 0;

}

}

conteinerElementos = document.querySelector(".conteiner-elementos");
conteinerElementos.addEventListener('click',function (event){

    seleccionDeElemento(event.target.id);

},false);


botonReiniciar = document.getElementById("botonReiniciar");
botonReiniciar.addEventListener('click',function (event){

    reiniciarJuego();
    
},false);

const temporizador1 = setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="¡PIEDRA";
},1000);


const temporizador2 = setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="PAPEL";
},2000);


const temporizador3 = setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="O TIJERA!";
},3000);