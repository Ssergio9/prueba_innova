const imagenes = document.querySelectorAll('.miImagen');
const overlay = document.getElementById('overlay');
const imagenExpandida = document.getElementById('imagenExpandida');

imagenes.forEach(imagen => {
    imagen.onclick = function () {
        overlay.style.display = 'flex';
        imagenExpandida.src = this.src; // Cambia la fuente de la imagen expandida
    }
});

function cerrar() {
    overlay.style.display = 'none'; // Oculta la imagen expandida
}