var contadorHumano = 0;
var contadorRobot = 0;

const divEleccionRobot = document.getElementById("eleccionRobot");
const divEleccionHumano = document.getElementById("eleccionHumano");
const divContador = document.getElementById("contador");
const divResultado = document.getElementById("resultado");


const aleatorio = (min, max) => {
    var numero = Math.floor( Math.random() * (max - min + 1) + min );
    return numero;
}

const reiniciarJuego = () => {
    contadorHumano = 0;
    contadorRobot = 0;
    divResultado.style.backgroundColor = '#D3D3D3';
	divEleccionRobot.classList.remove("papel");
	divEleccionRobot.classList.remove("tijera");
	divEleccionRobot.classList.remove("piedra");
	divEleccionHumano.classList.remove("papel");
	divEleccionHumano.classList.remove("tijera");
	divEleccionHumano.classList.remove("piedra");
	divContador.innerHTML = "Robot: " + contadorRobot + "<br>";
	divContador.innerHTML += "Humano: " + contadorHumano + "<br>";
	divResultado.innerHTML= "Resultado ";
}

const seleccionDeElemento = (elementoSeleccionado) => {

divResultado.style.backgroundColor = '#D3D3D3';

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["piedra", "papel", "tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,2);

if (elementoSeleccionado == "piedra")
{
    opcionUsuario = 0;
}

if (elementoSeleccionado == "papel"){
    opcionUsuario = 1;
}

if (elementoSeleccionado == "tijera"){
    opcionUsuario = 2;
}


if(opcionUsuario == piedra)
{
    divEleccionHumano.classList.remove("papel");
    divEleccionHumano.classList.remove("tijera");
    divEleccionHumano.classList.add("piedra");  
    
    if(opcionMaquina == piedra)
    {
        divEleccionRobot.classList.remove("papel");
        divEleccionRobot.classList.remove("tijera");
        divEleccionRobot.classList.add("piedra");   
        divResultado.innerHTML="Empate!";
    }
    else if(opcionMaquina == papel)
    {
        divEleccionRobot.classList.remove("piedra");
        divEleccionRobot.classList.remove("tijera");
        divEleccionRobot.classList.add("papel");
        divResultado.innerHTML="Perdiste!";
        contadorRobot++;
    }
    else if(opcionMaquina == tijera)
    {
        divEleccionRobot.classList.remove("papel");
        divEleccionRobot.classList.remove("pidra");
        divEleccionRobot.classList.add("tijera");
        divResultado.innerHTML="Ganaste!";
        contadorHumano++;
    }
}
else if(opcionUsuario == papel)
{
    divEleccionHumano.classList.remove("piedra");
    divEleccionHumano.classList.remove("tijera");
    divEleccionHumano.classList.add("papel");
    
    if(opcionMaquina == piedra)
    {
        divEleccionRobot.classList.remove("papel");
        divEleccionRobot.classList.remove("tijera");
        divEleccionRobot.classList.add("piedra");  
        divResultado.innerHTML="Ganaste!";
        contadorHumano++;
    }
    else if(opcionMaquina == papel)
    {
        divEleccionRobot.classList.remove("piedra");
        divEleccionRobot.classList.remove("tijera");
        divEleccionRobot.classList.add("papel");
        divResultado.innerHTML="Empate!";
    }
    else if(opcionMaquina == tijera)
    {
        divEleccionRobot.classList.remove("papel");
        divEleccionRobot.classList.remove("pidra");
        divEleccionRobot.classList.add("tijera");
        divResultado.innerHTML="Perdiste!";
        contadorRobot++;
    }
}
else if(opcionUsuario == tijera)
{
    divEleccionHumano.classList.remove("papel");
    divEleccionHumano.classList.remove("pidra");
    divEleccionHumano.classList.add("tijera");

    if(opcionMaquina == piedra)
    {
       divEleccionRobot.classList.remove("papel");
       divEleccionRobot.classList.remove("tijera");
       divEleccionRobot.classList.add("piedra");  
       divResultado.innerHTML="Perdiste!";
       contadorRobot++;
    }
    else if(opcionMaquina == papel)
    {
        divEleccionRobot.classList.remove("piedra");
        divEleccionRobot.classList.remove("tijera");
        divEleccionRobot.classList.add("papel");
        divResultado.innerHTML="Ganaste!";
        contadorHumano++;
    }
    else if(opcionMaquina == tijera)
    {
        divEleccionRobot.classList.remove("papel");
        divEleccionRobot.classList.remove("pidra");
        divEleccionRobot.classList.add("tijera");
        divResultado.innerHTML="Empate!";
    }
}
else
{
    console.log("Hubo algun error");
}


divContador.innerHTML = "Robot: " + contadorRobot + "<br>";
divContador.innerHTML += "Humano: " + contadorHumano + "<br>";

/* temporizador para el contador de PIEDRA, PAPEL y TIJERA */
setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="¡PIEDRA";
},1000);


setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="PAPEL";
},2000);


setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="O TIJERA!";
},3000);


/* finalizacion de la partida cuando alguno llega a 3 puntos */
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

/* escucha del evento click en los 3 elementos */
conteinerElementos = document.querySelector(".conteiner-elementos");
conteinerElementos.addEventListener('click',function (event){

    seleccionDeElemento(event.target.id);

},false);


/* escucha del evento click en el boton reiniciar */
botonReiniciar = document.getElementById("botonReiniciar");
botonReiniciar.addEventListener('click',function (event){

    reiniciarJuego();
    
},false);



/* temporizador para el contador de PIEDRA, PAPEL y TIJERA */
const temporizador1 = setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="¡PIEDRA";
},1000);


const temporizador2 = setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="PAPEL";
},2000);


const temporizador3 = setTimeout(()=>{
    document.getElementById("temporizadorElemento").innerHTML="O TIJERA!";
},3000);