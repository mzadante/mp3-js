//conectando los elementos del HTML con el JS
const tituloCancion = document.querySelector('.reproductor h1');
const interpreteCancion = document.querySelector('.reproductor p');
const cancion = document.getElementById('audio');
const progresoCancion = document.getElementById('progreso');
const buttonAtras = document.querySelector('.controles button.atras');
const buttonPlayPausa = document.querySelector('.controles button.play');
const buttonAdelante = document.querySelector('.controles button.adelante');
//para cambiar el icono de play a pause
const iconPlay = document.getElementById('icon-play');


//Array de canciones
const canciones = [
    {
        titulo: 'Barracuda (1977)',
        interprete: 'Heart',
        archivo: 'music/Heart - Barracuda (1977).mp3'
    },
    {
        titulo: 'Fear of the Dark (2015 Remaster)',
        interprete: 'Iron Maiden',
        archivo: 'music/Iron Maiden - Fear of the Dark (2015 Remaster).mp3'
    },
    {
        titulo: 'I Was Made For Lovin You',
        interprete: 'Kiss',
        archivo: 'music/Kiss - I Was Made For Lovin You.mp3'
    },
    {
        titulo: 'Holy Wars...The Punishment Due',
        interprete: 'Megadeth',
        archivo: 'music/Megadeth - Holy Wars...The Punishment Due.mp3'
    },
    {
        titulo: 'No More Tears',
        interprete: 'Ozzy Osbourne',
        archivo: 'music/Ozzy Osbourne - No More Tears.mp3'
    },
    {
        titulo: 'Nobody Hears',
        interprete: 'Suicidal Tendencies',
        archivo: 'music/Suicidal Tendencies - Nobody Hears.mp3'
    },
    {
        titulo: 'L.A. Woman 1971',
        interprete: 'The Doors',
        archivo: 'music/The Doors - L.A. Woman 1971.mp3'
    }
];

let indiceCancionActual = 0;

//Funcion para cargar la cancion

function cargarCancion() {
    tituloCancion.textContent = canciones[indiceCancionActual].titulo;
    interpreteCancion.textContent = canciones[indiceCancionActual].interprete;
    cancion.src = canciones[indiceCancionActual].archivo;
    cancion.addEventListener('loadeddata', function () { }) //cuando la cancion se cargue
};

buttonPlayPausa.addEventListener('click', reproducirPausar);

function reproducirPausar() {
    if (cancion.paused) {
        reproducirCancion();
    } else {
        pausarCancion();
    }
}

function reproducirCancion() {
    cancion.play();
    iconPlay.classList.add("bi-pause-fill");
    iconPlay.classList.remove("bi-play-fill");
}

function pausarCancion() {
    cancion.pause();
    iconPlay.classList.remove("bi-pause-fill");
    iconPlay.classList.add("bi-play-fill");
}

cancion.addEventListener('timeupdate', function () {
    if (!cancion.paused) {
        progresoCancion.value = cancion.currentTime;
    }
});

progresoCancion.addEventListener('input', function () {
    cancion.currentTime = progresoCancion.value;
});

progresoCancion.addEventListener('change', ()=> {
    cancion.currentTime = progresoCancion.value;
});
buttonAdelante.addEventListener('click', ()=> {
    indiceCancionActual = (indiceCancionActual + 1);
    if (indiceCancionActual >= canciones.length) {
        indiceCancionActual = 0;
    }
    cargarCancion();
    reproducirCancion();
});

cargarCancion();