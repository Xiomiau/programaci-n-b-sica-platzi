let ataqueJugador
let ataqueContrario

function iniciarJuego() {
    let botonMascotaJugador = document.querySelector('#boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego=document.querySelector('#boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua=document.querySelector('#boton-agua');
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra=document.querySelector('#boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra)

}
function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function seleccionarMascotaJugador() {

    // apuntadores de las mascotas
    const hipodoge = document.querySelector('#hipodoge');
    const capipepo = document.querySelector('#capipepo');
    const ratigueya = document.querySelector('#ratigueya');
    const langostelvis = document.querySelector('#langostelvis');
    const tucapalma = document.querySelector('#tucapalma');
    const pydos = document.querySelector('#pydos');
    const spanMascotaJugador=document.querySelector('#mascota-jugador');

    // Condicional para mensaje de elección de mascota
    if(hipodoge.checked) {
        //alert("Seleccionaste a: Hipodoge");
        spanMascotaJugador.innerHTML="Hipodoge"
    } else if (capipepo.checked) {
        //alert("Seleccionaste a: Capipepo");
        spanMascotaJugador.innerHTML="Capipepo"
    } else if (ratigueya.checked) {
        //alert("Seleccionaste a: Ratigueya");
        spanMascotaJugador.innerHTML="Ratigueya"
    } else if (langostelvis.checked) {
        //alert("Seleccionaste a: Langostelvis");
        spanMascotaJugador.innerHTML="Langostelvis"
    } else if (tucapalma.checked) {
        //alert("Seleccionaste a: Tucapalma");
        spanMascotaJugador.innerHTML="Tucapalma"
    } else if (pydos.checked) {
        //alert("Seleccionaste a: Pydos");
        spanMascotaJugador.innerHTML="Pydos"
    }
    else {
        alert("No has seleccionado a tu Mokepon")
    }

    seleccionarMascotaEnemigo()
}


function seleccionarMascotaEnemigo() {
    let ataqueAleatorio = aleatorio(1,6);
    let spanMascotaEnemigo = document.querySelector('#mascota-enemigo')
    
    if(ataqueAleatorio==1) {
        spanMascotaEnemigo.innerHTML="Hipodogue"
    } else if (ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML="Capipepo"
    } else if (ataqueAleatorio==3){
        spanMascotaEnemigo.innerHTML="Ratigueya"
    } else if (ataqueAleatorio==4){
        spanMascotaEnemigo.innerHTML="Langostelvis"
    }else if (ataqueAleatorio==5){
        spanMascotaEnemigo.innerHTML="Tucapalma"
    }else if (ataqueAleatorio==6){
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
    ataqueContrario= aleatorio(1,3);

    if(ataqueContrario==1){
        ataqueContrario='FUEGO 🔥'
        //alert(`Tu enemigo eligió ataque FUEGO`);
        } else if (ataqueContrario==2) {
            ataqueContrario='AGUA 💧'
        //alert(`Tu enemigo eligió ataque AGUA`);
         } else if (ataqueContrario==3){
            ataqueContrario='TIERRA 🌿'
            //alert(`Tu enemigo eligió ataque TIERRA`);
         } else {
             alert("Ups algo salió mal")
         }

        combate()
}


function combate() {
    if(ataqueJugador==ataqueContrario) {
        crearMensaje("EMPATE");
    } else if(ataqueJugador== 'FUEGO' && ataqueContrario=='TIERRA') {
        crearMensaje("GANASTE");
    } else if (ataqueJugador=='AGUA' && ataqueContrario== 'FUEGO'){
        crearMensaje("GANASTE");
    } else if (ataqueJugador== 'TIERRA' && ataqueContrario=='AGUA'){
        crearMensaje("GANASTE");
    }else {
        crearMensaje("PERDISTE");
    }

}

function crearMensaje (resultado) {

    let mensajesSection = document.querySelector('#mensajes');

    let = parrafo = document.createElement('p')
    parrafo.innerHTML= 'Tu mokepon atacó con '+  ataqueJugador + ' el enemigo atacó con ' + ataqueContrario + '- ' + resultado + '-';
    mensajesSection.appendChild(parrafo);

    
}




window.addEventListener('load',  iniciarJuego);
