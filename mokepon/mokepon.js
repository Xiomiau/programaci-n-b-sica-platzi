const spanMascotaJugador=document.querySelector('#mascota-jugador');
const botonFuego=document.querySelector('#boton-fuego');
const botonAgua=document.querySelector('#boton-agua');
const botonTierra=document.querySelector('#boton-tierra');
const seccionAtaque = document.querySelector('#atack');
const seccionMascota = document.querySelector('#pet');
const spanMascotaEnemigo = document.querySelector('#mascota-enemigo');
const spanVidaJugador = document.querySelector('#spanVidaJugador');
const spanVidaEnemigo = document.querySelector('#spanVidaEnemigo');
const mensajesSection = document.querySelector('#mensajes');
const botonReiniciar = document.querySelector('#reiniciarBtn');
const contenedorTarjetas = document.querySelector('#contenedor-tarjetas');

let ataqueJugador
let ataqueContrario
let vidasJugador = 3;
let vidasEnemigo = 3;
let opcionDeMokepones
let inputRatigueya
let inputHipodoge
let inputCapipepo

let mokepones = []

//CLASE
class Mokepon {
    constructor (nombre,foto,vida) {
        this.nombre= nombre
        this.foto= foto
        this.vida= vida
        this.ataques = []
    }
}
//OBJETOS
let hipodoge = new Mokepon('Hipodoge', '/mokepon/images/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', '/mokepon/images/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', '/mokepon/images/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push (
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '💧', id:'boton-agua'},
    {nombre: '🔥', id:'boton-fuego'},
    {nombre: '🌿', id:'boton-tierra'},
    )
    
capipepo.ataques.push (
        {nombre: '🌿', id:'boton-tierra'},
        {nombre: '🌿', id:'boton-tierra'},
        {nombre: '🌿', id:'boton-tierra'},
        {nombre: '💧', id:'boton-agua'},
        {nombre: '🔥', id:'boton-fuego'}
        )
        
ratigueya.ataques.push (
            {nombre: '🔥', id:'boton-fuego'},
            {nombre: '🔥', id:'boton-fuego'},
            {nombre: '🔥', id:'boton-fuego'},
            {nombre: '💧', id:'boton-agua'},
    {nombre: '🌿', id:'boton-tierra'},
    )
    
mokepones.push(hipodoge,capipepo,ratigueya);
function iniciarJuego() {
    seccionAtaque.style.display='none';

    mokepones.forEach((mokepon)=>{
        opcionDeMokepones = ` 
        <input id=${mokepon.nombre} type="radio" name="mascotas">
        <label for=${mokepon.nombre}/>
        <p> ${mokepon.nombre} </p> 
        <img width="200px" src=${mokepon.foto} alt=${mokepon.nombre}>
        </label> `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputRatigueya = document.querySelector('#Ratigueya');
        inputHipodoge = document.querySelector('#Hipodoge');
        inputCapipepo = document.querySelector('#Capipepo');
        
        inputHipodoge.addEventListener('click', seleccionarMascotaJugador);
        inputCapipepo.addEventListener('click', seleccionarMascotaJugador);
        inputRatigueya.addEventListener('click', seleccionarMascotaJugador);
    })
    
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra);
    botonReiniciar.addEventListener('click', reiniciarJuego);
    botonReiniciar.style.display= 'none'; 
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function seleccionarMascotaJugador() {
    seccionAtaque.style.display='flex';
    seccionMascota.style.display='none';
    // Condicional para mensaje de elección de mascota
    if(hipodoge.checked) {
        seccionAtaque.style.display='flex';
        seccionMascota.style.display='none';
        spanMascotaJugador.innerHTML="Hipodoge"
    } else if (capipepo.checked) {
        seccionAtaque.style.display='flex';
        seccionMascota.style.display='none';
        spanMascotaJugador.innerHTML="Capipepo"
    } else if (ratigueya.checked) {
        seccionAtaque.style.display='flex';
        seccionMascota.style.display='none';
        spanMascotaJugador.innerHTML="Ratigueya"
    } else {
        alert('Primero debes elegir tu combatiente')
        reiniciarJuego()
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(1,6);
    if(mascotaEnemigo==1) {
        spanMascotaEnemigo.innerHTML="Hipodoge"
    } else if (mascotaEnemigo==2){
        spanMascotaEnemigo.innerHTML="Capipepo"
    } else if (mascotaEnemigo==3){
        spanMascotaEnemigo.innerHTML="Ratigueya"
    } else if (mascotaEnemigo==4){
        spanMascotaEnemigo.innerHTML="Langostelvis"
    }else if (mascotaEnemigo==5){
        spanMascotaEnemigo.innerHTML="Tucapalma"
    }else if (mascotaEnemigo==6){
        spanMascotaEnemigo.innerHTML="Pydos"
    }
}

function ataqueFuego (){
    ataqueJugador = 'FUEGO 🔥';
    ataqueEnemigo()
    //alert("Elegiste ataque " + ataqueJugador);
}

function ataqueAgua (){
    ataqueJugador = 'AGUA 💧';
    ataqueEnemigo()
    //alert("Elegiste ataque " + ataqueJugador);
}

function ataqueTierra (){
    ataqueJugador = 'TIERRA 🌿';
    ataqueEnemigo()
    //alert("Elegiste ataque " + ataqueJugador);
    
}

function ataqueEnemigo() {
    ataqueContrario = aleatorio(1,3);

    if(ataqueContrario == 1){
        ataqueContrario ='FUEGO 🔥';
        } else if (ataqueContrario == 2) {
            ataqueContrario ='AGUA 💧';
        } else if (ataqueContrario == 3){
            ataqueContrario = 'TIERRA 🌿';
        }
        combate()
}

function combate() {
    if(ataqueContrario == ataqueJugador) {
        crearMensaje('EMPATE');
    }else if(ataqueJugador == 'FUEGO 🔥' && ataqueContrario == 'TIERRA 🌿') {
        crearMensaje('GANASTE');
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador =='AGUA 💧' && ataqueContrario == 'FUEGO 🔥'){
        crearMensaje('GANASTE');
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'TIERRA 🌿' && ataqueContrario =='AGUA 💧'){
        crearMensaje('GANASTE');
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo;
        } else {
        crearMensaje('PERDISTE');
        vidasJugador--
        spanVidaJugador.innerHTML = vidasJugador;
    }
        revisarVidas()
}

function revisarVidas(){
    if(vidasJugador==0){
        crearMensajeFinal('Suerte para la próxima. 🙁');
    } else if (vidasEnemigo==0){
        crearMensajeFinal('Yeii, ganaste! 🎉');
    }
}

function crearMensaje() {
    let = parrafoAtaqueJugador = document.createElement('p')
    let = parrafoAtaqueEnemigo = document.createElement('p')

    parrafoAtaqueJugador.innerHTML= 'Tu mokepon atacó con '+  ataqueJugador;
    parrafoAtaqueJugador.setAttribute('class', 'parrafoAtaqueJugador ataque');

    if (ataqueJugador=='FUEGO 🔥'){
        parrafoAtaqueJugador.style.boxShadow='1px -1px 4px 3px rgb(240, 58, 45)';
    } else if (ataqueJugador=='AGUA 💧') {
        parrafoAtaqueJugador.style.boxShadow = '1px -1px 4px 3px rgba(111,210,232,1)';
    } else if (ataqueJugador=='TIERRA 🌿') {
        parrafoAtaqueJugador.style.boxShadow = '1px -1px 4px 3px rgb(170, 84, 4)';
    }

    parrafoAtaqueEnemigo.innerHTML=' El enemigo atacó con ' + ataqueContrario;
    parrafoAtaqueEnemigo.setAttribute('class', 'parrafoAtaqueEnemigo')
    if (ataqueContrario=='FUEGO 🔥'){
        parrafoAtaqueEnemigo.style.boxShadow='1px -1px 4px 3px rgb(240, 58, 45)';
    } else if (ataqueContrario =='AGUA 💧') {
        parrafoAtaqueEnemigo.style.boxShadow = '1px -1px 4px 3px rgba(111,210,232,1)';
    } else if (ataqueContrario =='TIERRA 🌿') {
        parrafoAtaqueEnemigo.style.boxShadow = '1px -1px 4px 3px rgb(170, 84, 4)';
    }
    mensajesSection.appendChild(parrafoAtaqueJugador);
    mensajesSection.appendChild(parrafoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {

    let parrafoResultadoFinal = document.createElement('p');
    parrafoResultadoFinal.setAttribute('id','resultadoFinal')
    parrafoResultadoFinal.innerHTML= resultadoFinal;
    mensajesSection.appendChild(parrafoResultadoFinal);

    
    botonFuego.disabled=true;
    botonAgua.disabled=true;
    botonTierra.disabled=true; 
    botonReiniciar.style.display= 'block';
}


function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load',  iniciarJuego);
