const weddingDate = new Date('2024-12-14T00:00:00');

function updateCountdown() {
    const now = new Date();
    const timeDiff = weddingDate - now;

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Actualizar los valores en el HTML
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Iniciar el conteo regresivo
setInterval(updateCountdown, 1000);

// Selección de elementos
const audio = document.getElementById("audio");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const modal = document.getElementById("modal");
const overlay = document.getElementById('overlay');
const volumeControls = document.getElementById("volume-controls");
const volumeOn = document.getElementById("volume-on");
const volumeOff = document.getElementById("volume-off");

// Variables de estado
let isPlaying = false;

// Al aceptar el modal
yesButton.addEventListener("click", () => {
    // Ocultar el modal y el overlay
    modal.style.display = "none";
    overlay.style.display = "none"; // Ocultar el overlay
    volumeControls.style.display = "block"; // Mostrar controles de volumen

    // Reproducir audio y configurar el icono de volumen
    audio.play();
    isPlaying = true;
    volumeOn.style.display = "block"; // Mostrar el icono de volumen ON
    volumeOff.style.display = "none"; // Ocultar el icono de volumen OFF
});

// Al rechazar el modal
noButton.addEventListener("click", () => {
    modal.style.display = "none"; // Ocultar el modal
    overlay.style.display = "none"; // Ocultar el overlay
});

// Control de volumen (pausar/reproducir)
volumeOn.addEventListener("click", () => {
    audio.pause(); // Pausar música
    isPlaying = false;
    volumeOn.style.display = "none"; // Ocultar el icono de volumen ON
    volumeOff.style.display = "block"; // Mostrar el icono de volumen OFF
});

volumeOff.addEventListener("click", () => {
    audio.play(); // Reproducir música
    isPlaying = true;
    volumeOff.style.display = "none"; // Ocultar el icono de volumen OFF
    volumeOn.style.display = "block"; // Mostrar el icono de volumen ON
});

// Asegurarse de que el audio esté oculto al inicio
volumeControls.style.display = "none"; // Ocultar controles de volumen inicialmente
modal.style.display = "block"; // Mostrar el modal al inicio
overlay.style.display = "block"; // Mostrar el overlay al inicio
