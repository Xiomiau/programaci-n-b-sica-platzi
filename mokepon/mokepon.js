const spanMascotaJugador = document.querySelector('#mascota-jugador');

const seccionAtaque      = document.querySelector('#atack');
const seccionMascota     = document.querySelector('#pet');
const spanMascotaEnemigo = document.querySelector('#mascota-enemigo');
const spanVidaJugador    = document.querySelector('#spanVidaJugador');
const spanVidaEnemigo    = document.querySelector('#spanVidaEnemigo');
const mensajesSection    = document.querySelector('#mensajes');
const botonReiniciar     = document.querySelector('#reiniciarBtn');
const contenedorTarjetas = document.querySelector('#contenedor-tarjetas');
const contenedorAtaques  = document.querySelector('#contenedorAtaques');

 

let mokepones = []
let mascotaJugador
let ataqueContrario =[]
let ataqueAleatorioContrario
let opcionDeMokepones
let vidasJugador = 3;
let vidasEnemigo = 3;
let ataquesMokepon
let botonFuego   
let botonAgua   
let botonTierra
let botones=[] 
let comboAtaqueJugador=[]  
let ataquesMokeponEnemigo


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
        <label for=${mokepon.nombre}> ${mokepon.nombre}
        <input type='radio' name='mascota' id=${mokepon.nombre} > 
        <img width="200px" src=${mokepon.foto} alt=${mokepon.nombre}>
        </label> `

        contenedorTarjetas.innerHTML += opcionDeMokepones;

        ratigueya = document.querySelector('#Ratigueya');
        hipodoge = document.querySelector('#Hipodoge');
        capipepo = document.querySelector('#Capipepo');

    }) 
    ratigueya.addEventListener('click', seleccionarMascotaJugador);
    hipodoge.addEventListener('click', seleccionarMascotaJugador)
    capipepo.addEventListener('click', seleccionarMascotaJugador)

}


function seleccionarMascotaJugador() {

    seccionAtaque.style.display='flex';
    seccionMascota.style.display='none';

    // Condicional para mensaje de elección de mascota
    if(hipodoge.checked) {
        spanMascotaJugador.innerHTML= hipodoge.id
        mascotaJugador = hipodoge.id
    } else if (capipepo.checked) {
        spanMascotaJugador.innerHTML=capipepo.id
        mascotaJugador = capipepo.id
    } else if (ratigueya.checked) {
        spanMascotaJugador.innerHTML=ratigueya.id
        mascotaJugador = ratigueya.id
    } else {
        alert('Primero debes elegir tu combatiente')
        reiniciarJuego()
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques () {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador=== mokepones[i].nombre) {
            ataques= mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques (ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = ` <button class="ataques BAtaque " id= ${ataque.id}>${ataque.nombre}</button> `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

        botonFuego  = document.querySelector('#boton-fuego');
        botonAgua   = document.querySelector('#boton-agua');
        botonTierra = document.querySelector('#boton-tierra');
        botonReiniciar.addEventListener('click', reiniciarJuego);

        botones = document.querySelectorAll('.BAtaque')
        botonReiniciar.style.display= 'none';
}

function secuenciaAtaque () {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
        if(e.target.textContent=== '🔥') {
            comboAtaqueJugador.push('FUEGO')
            console.log(comboAtaqueJugador)
            boton.style.background= '#112f58';

        } else if (e.target.textContent=== '💧') {
            comboAtaqueJugador.push('AGUA')
            console.log(comboAtaqueJugador)
            boton.style.background= '#112f58';

        } else if (e.target.textContent=== '🌿'){
            comboAtaqueJugador.push('TIERRA')
            console.log(comboAtaqueJugador)
            boton.style.background= '#112f58';
        }
        ataqueEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(0, mokepones.length -1);

    spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemigo].nombre;
    ataquesMokeponEnemigo= mokepones[mascotaEnemigo].ataques;
    
    secuenciaAtaque ()
}

function ataqueEnemigo() {
    ataqueAleatorioContrario = aleatorio(0,ataquesMokeponEnemigo.length -1);
    
    if(ataqueContrario == 0 || ataqueContrario==1){
        ataqueContrario.push('FUEGO 🔥');
    } else if (ataqueContrario == 3 || ataqueContrario == 4) {
        ataqueContrario.push('AGUA 💧');
        } else {
            ataqueContrario.push('TIERRA 🌿');
        }
        console.log(ataqueContrario)
        combate()
    }
    
    function combate() {
    // if(ataqueContrario == ataqueJugador) {
    //     crearMensaje('EMPATE');
    // }else if(ataqueJugador == 'FUEGO 🔥' && ataqueContrario == 'TIERRA 🌿') {
    //     crearMensaje('GANASTE');
    //     vidasEnemigo--
    //     spanVidaEnemigo.innerHTML = vidasEnemigo;
    // } else if (ataqueJugador =='AGUA 💧' && ataqueContrario == 'FUEGO 🔥'){
    //     crearMensaje('GANASTE');
    //     vidasEnemigo--
    //     spanVidaEnemigo.innerHTML = vidasEnemigo;
    // } else if (ataqueJugador == 'TIERRA 🌿' && ataqueContrario =='AGUA 💧'){
    //     crearMensaje('GANASTE');
    //     vidasEnemigo--
    //     spanVidaEnemigo.innerHTML = vidasEnemigo;
    // } else {
    //     crearMensaje('PERDISTE');
    //     vidasJugador--
    //     spanVidaJugador.innerHTML = vidasJugador;
    // }
    //     revisarVidas()
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

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}