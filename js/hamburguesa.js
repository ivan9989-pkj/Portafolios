document.addEventListener('DOMContentLoaded', () => {
    const navegacion = document.getElementById('menu--navegacion');
    const hamburguesa = document.getElementById('hamburguesa');

    hamburguesa.addEventListener('click', () => {
        navegacion.classList.toggle('resposive--dinamico');

        // Actualiza la lógica de cambio de imagen
        if (navegacion.classList.contains('resposive--dinamico')) {
            hamburguesa.src = './img/cruz.svg'; // Muestra la cruz cuando el menú está visible
        } else {
            hamburguesa.src = './img/hamburguesa.svg'; // Muestra la hamburguesa cuando el menú está oculto
        }
    });

    // Asegurarse de que la navegación esté oculta por defecto al cargar la página
    if (window.innerWidth <= 1140) {
        navegacion.classList.remove('resposive--dinamico'); // Oculta la navegación en pantallas pequeñas
        hamburguesa.src = './img/hamburguesa.svg'; // Muestra la hamburguesa al cargar la página en pantallas pequeñas
    }
});
