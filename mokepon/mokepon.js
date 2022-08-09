const spanMascotaJugador = document.querySelector('#mascota-jugador');
const seccionMascota     = document.querySelector('#pet');
const spanVidaJugador    = document.querySelector('#spanVidaJugador');
const seccionAtaque      = document.querySelector('#atack');
const spanMascotaEnemigo = document.querySelector('#mascota-enemigo');
const spanVidaEnemigo    = document.querySelector('#spanVidaEnemigo');
const mensajesSection    = document.querySelector('#mensajes');
const botonReiniciar     = document.querySelector('#reiniciarBtn');
const contenedorTarjetas = document.querySelector('#contenedor-tarjetas');
const contenedorAtaques  = document.querySelector('#contenedorAtaques');

const ataqueJugadorDiv=document.querySelector('#ataque-jugador');
const ataqueEnemyDiv =document.querySelector('#ataque-enemy');


let mascotaJugador
let vidasJugador = 3;
let victoriasJugador=0
let indexAtaqueJugador
let ataqueJugador =[]  

let ataquesMokepon
let opcionDeMokepones
let ataquesMokeponEnemigo
let indexAtaqueEnemigo
let ataqueEnemigo =[]
let vidasEnemigo = 3;
let victoriasEnemigo=0

let botonFuego   
let botonAgua   
let botonTierra
let botones=[] 
let mokepones = []
let elHipodoge
let elCapipepo
let laRatigueya


class Mokepon {
    constructor (nombre,foto,vida) {
        this.nombre= nombre
        this.foto= foto
        this.vida= vida
        this.ataques = []
    }
}
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
        <label  for=${mokepon.nombre}> ${mokepon.nombre} 
        <input id=${mokepon.nombre} type="radio" name="mascota"  > 
        <img width="200px" src=${mokepon.foto} alt=${mokepon.nombre}>
        </label> `
        
    contenedorTarjetas.innerHTML += opcionDeMokepones;
        
        elHipodoge = document.querySelector('#Hipodoge');
        elCapipepo = document.querySelector('#Capipepo');
        laRatigueya = document.querySelector('#Ratigueya');
    }) 

    elHipodoge.addEventListener('click', seleccionarMascotaJugador);
    elCapipepo.addEventListener('click', seleccionarMascotaJugador);
    laRatigueya.addEventListener('click', seleccionarMascotaJugador);

    botonReiniciar.addEventListener('click', reiniciarJuego);
    botonReiniciar.style.display= 'none'
}


function seleccionarMascotaJugador() {
    
    seccionMascota.style.display='none';
    seccionAtaque.style.display='flex';
    
    if(elHipodoge.checked) {
        spanMascotaJugador.innerHTML= elHipodoge.id
        mascotaJugador = elHipodoge.id

    } else if (elCapipepo.checked) {
        spanMascotaJugador.innerHTML=elCapipepo.id
        mascotaJugador = elCapipepo.id

    } else if (laRatigueya.checked) {
        spanMascotaJugador.innerHTML=laRatigueya.id
        mascotaJugador = laRatigueya.id
    } else {
        alert('Primero debes elegir tu combatiente')
        reiniciarJuego()
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques (mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques (ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button class="ataques BAtaque " id= ${ataque.id}>${ataque.nombre}</button> `
        contenedorAtaques.innerHTML += ataquesMokepon
    })
    
    botonFuego  = document.querySelector('#boton-fuego');
    botonAgua   = document.querySelector('#boton-agua');
    botonTierra = document.querySelector('#boton-tierra');
    botones = document.querySelectorAll('.BAtaque');
    
   // botonReiniciar.style.display= 'none';
}

function secuenciaAtaque () {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if(e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO 🔥')
                console.log(ataqueJugador)
            boton.style.background= '#112f58';
            
        } else if (e.target.textContent=== '💧') {
            ataqueJugador.push('AGUA 💧')
            console.log(ataqueJugador)
            boton.style.background= '#112f58';
            
        } else if (e.target.textContent=== '🌿'){
            ataqueJugador.push('TIERRA 🌿')
            console.log(ataqueJugador)
            boton.style.background= '#112f58';
        }
        ataqueContrario()
        })
    })
}

function seleccionarMascotaEnemigo() {
    let mascotAleatoria = aleatorio(0, mokepones.length -1);
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotAleatoria].nombre;
    ataquesMokeponEnemigo= mokepones[mascotAleatoria].ataques;
    secuenciaAtaque ()
}

function ataqueContrario() {
    let ataqueAleatorioContrario = aleatorio(0,ataquesMokeponEnemigo.length -1);
    
    if(ataqueAleatorioContrario == 0 || ataqueAleatorioContrario==1){
        ataqueEnemigo.push('FUEGO 🔥');
    } else if (ataqueAleatorioContrario == 3 || ataqueAleatorioContrario == 4) {
        ataqueEnemigo.push('AGUA 💧');
    } else {
            ataqueEnemigo.push('TIERRA 🌿');
        }
        console.log(ataqueEnemigo)
        iniciarPelea()
    }

function iniciarPelea () {
        if(ataqueJugador.length===5) {
            combate()
        }
    }

function indexAmbosOponentes(jugador, enemigo) {
        indexAtaqueJugador = ataqueJugador[jugador]
        indexAtaqueEnemigo = ataqueEnemigo[enemigo]
    }
    
function combate(){

for (let index = 0; index < ataqueJugador.length; index++){

        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index,index)
            crearMensaje('EMPATE 🤜🏽🤛🏽');
            victoriasJugador++
            spanVidaJugador.innerHTML = `${victoriasJugador} victorias`
        }else if(ataqueJugador[index] === 'FUEGO 🔥' && ataqueEnemigo[index] === 'TIERRA 🌿') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE');
            victoriasJugador++
            spanVidaJugador.innerHTML = `${victoriasJugador} victorias`;


        }else if(ataqueJugador[index]==='AGUA 💧' && ataqueEnemigo[index]==='FUEGO 🔥') {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE');
            victoriasJugador++
            spanVidaJugador.innerHTML = `${victoriasJugador} victorias`;

        }else if(ataqueJugador[index]==='TIERRA 🌿' && ataqueEnemigo[index]==='AGUA 💧' ) {
            indexAmbosOponentes(index,index)
            crearMensaje('GANASTE');
            victoriasJugador++
            spanVidaJugador.innerHTML = `${victoriasJugador} victorias`;

        }else {
            indexAmbosOponentes(index,index)
            crearMensaje('PERDISTE');
            victoriasEnemigo++
            spanVidaEnemigo.innerHTML = `${victoriasEnemigo} victorias`;
        }
    }
    revisarVictorias()
}


function revisarVictorias(){
    if(victoriasJugador===victoriasEnemigo){
        crearMensajeFinal('EMPATE 🤜🏽🤛🏽');
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal('Yeii, ganaste! 🎉');
    } else if (victoriasEnemigo > victoriasJugador){
        crearMensajeFinal('Suerte para la próxima. 🙁');
    }
}
    
function crearMensaje(resultado) {

let parrafoAtaqueJugador = document.createElement('p')
let parrafoAtaqueEnemigo = document.createElement('p')

mensajesSection.innerHTML= resultado
parrafoAtaqueJugador.innerHTML= indexAtaqueJugador
parrafoAtaqueEnemigo.innerHTML= indexAtaqueEnemigo

ataqueJugadorDiv.appendChild(parrafoAtaqueJugador)
ataqueEnemyDiv.appendChild(parrafoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {

    mensajesSection.innerHTML= resultadoFinal
    mensajesSection.setAttribute('class', 'final')

    botonFuego.disabled=true;
    botonAgua.disabled=true;
    botonTierra.disabled=true; 
    botonReiniciar.style.display= 'block';
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

window.addEventListener('load',  iniciarJuego)

