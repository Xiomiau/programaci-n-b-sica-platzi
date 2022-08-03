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


function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
    }

let botonMascotaJugador = document.querySelector('#boton-mascota');
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);



