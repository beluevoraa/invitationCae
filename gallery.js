// Array de imágenes de la galería
const images = [
    '../../gallery img/1.jpg',
    '../gallery img/2.jpg',
    '../gallery img/3.jpg',
    '../gallery img/6.jpg',
    '../gallery img/7.jpg',
    '../gallery img/8.png',
    '../gallery img/9.png',
    '../gallery img/11.png',
    '../gallery img/12.png',
    '../gallery img/13.jpg',
    '../gallery img/caerie.jpg',
    '../gallery img/15.jpg',
];

const gallery = document.getElementById('gallery');
let currentIndex = 0; // Índice de la imagen actual

// Crear las imágenes de la galería
images.forEach((imgSrc, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = 'Imagen de la galería';
    imgElement.className = 'gallery-image'; // Clase para las imágenes pequeñas
    imgElement.onclick = () => openModal(index); // Llamar a la función para abrir el modal
    gallery.appendChild(imgElement);
});

// Función para abrir un modal y mostrar la imagen seleccionada
function openModal(index) {
    currentIndex = index; // Guardar el índice actual
    const modal = document.createElement('div');
    modal.className = 'modal';

    const modalImg = document.createElement('img');
    modalImg.src = images[currentIndex];
    modalImg.className = 'modal-content';

    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;'; // La "X" para cerrar el modal
    closeBtn.onclick = () => {
        document.body.removeChild(modal);
    };

    const prevBtn = document.createElement('button');
    prevBtn.className = 'nav-btn prev-btn'; // Clase para la flecha izquierda
    prevBtn.innerHTML = '&#10094;'; // Flecha izquierda
    prevBtn.onclick = () => changeImage(-1);

    const nextBtn = document.createElement('button');
    nextBtn.className = 'nav-btn next-btn'; // Clase para la flecha derecha
    nextBtn.innerHTML = '&#10095;'; // Flecha derecha
    nextBtn.onclick = () => changeImage(1);

    modal.appendChild(modalImg);
    modal.appendChild(closeBtn);
    modal.appendChild(prevBtn);
    modal.appendChild(nextBtn);
    document.body.appendChild(modal);
}

// Función para cambiar la imagen en el modal
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Volver a la última imagen
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volver a la primera imagen
    }
    const modalImg = document.querySelector('.modal-content');
    modalImg.src = images[currentIndex]; // Actualizar la imagen mostrada
}
