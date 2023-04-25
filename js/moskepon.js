let ataquejugador
let ataqueenemigo
let vidasjugador = 3
let vidasenemigo = 3

function iniciarjuego() {
    let botonmascotajugador = document.getElementById('botonmascota')
    botonmascotajugador.addEventListener("click", seleccionarmascotajugador)

    let botonfuego = document.getElementById('botonagua')
    botonfuego.addEventListener("click", ataquefuego)
    let botonagua = document.getElementById('botonfuego')
    botonagua.addEventListener("click", ataqueagua)
    let botontierra = document.getElementById('botontierra')
    botontierra.addEventListener("click", ataquetierra)

    let botonreinicar = document.getElementById('botonreinicar')
    botonreinicar.addEventListener("click", botonreinicar)
}

function seleccionarmascotajugador() {
    let inputgreninja = document.getElementById('greninja')
    let inputcharizad = document.getElementById('charizad')
    let inputvulvasur = document.getElementById('vulvasur')
    let spanmascotajugador = document.getElementById('mascotajugador')

    if (inputgreninja.checked) {
        spanmascotajugador.innerHTML = 'greninja'
    } else if (inputcharizad.checked) {
        spanmascotajugador.innerHTML = 'charizad'
    } else if (inputvulvasur.checked) {
        spanmascotajugador.innerHTML = 'vulvasur'
    } else {
        alert('selecciona una mascota')
    }
    
}

    function seleccionarmascotaenemigo() {
    let mascotaaleatorio = aleatorio(1,3)
    let spanmascotaenemigo = document.getElementById(mascotaenemigo)
    
    if(mascotaaleatorio == 1) {
        spanmascotaenemigo.innerHTML = 'greninja'
    } else if (mascotaaleatorio == 2) {
        spanmascotaenemigo.innerHTML = 'charizad'
    } else {
        spanmascotaenemigo.innerHTML = 'vulvasur'
    }
}

function ataquefuego() {
    ataquejugador = "fuego"
    ataquealeatorioenemigo()
}
function ataqueagua() {
    ataquejugador = "agua"
    ataquealeatorioenemigo()
}
function ataquetierra() {
    ataquejugador = "tierra"
    ataquealeatorioenemigo()
}

function ataquealeatorioenemigo() {
    let ataquealeatorio = aleatorio(1,3)

    if (ataquealeatorio == 1 ) {
        ataqueenemigo = 'fuego'
    } else if (ataquealeatorio == 2) {
        ataqueenemigo = 'agua'
    } else {
        ataqueenemigo = 'tierra'
    }


    crearmensajes()
}

function combate() {
    let spanvidasjugador = document.getElementById("vidasjugador")
    let spanvidasenemigo = document.getElementById("vidasenemigo")

    if(ataqueenemigo  == ataquejugador) {
        crearmensajes("empate")
    } else if (ataquejugador == 'fuego' && ataqueenemigo == 'tierra') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
    } else if (ataquejugador == agua && ataqueenemigo == 'fuego') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
        
    } else if (jugador == tierra && ataqueenemigo == 'agua') {
        crearmensajes("ganaste")
        vidasenemigo--
        spanvidasenemigo.innerHTML = 'vidasenemigo'
    } else {
        crearmensajes("perdiste")
        vidasjugador--
        spanvidasjugador.innerHTML = 'vidasjugador'
    }
}

function revisarvidas() {
    if (vidasenemigo == 0){
        crearmensajesfinal("felicitaciones ganaste")
    } else if (vidasjugador == 0) {
        crearmensajesfinal("lo siento perdiste")
    }
}

function crearmensajes(resultado) {
    let sectionmensajes = document.getElementById("mensajes")

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con' + ataquejugador + ',la mascota del enemigo ataco con ' + ataqueenemigo  + '- ' + resultado 

    sectionmensajes.appendChild(parrafo)
}

function crearmensajesfinal(resultadofinal) {
    let sectionmensajes = document.getElementById("mensajes")

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con' + ataquejugador + ',la mascota del enemigo ataco con ' + ataqueenemigo   + '- ' + resultado

    sectionmensajes.appendChild(parrafo)
}

function reiniciarjuego() {
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener("load", iniciarjuego)