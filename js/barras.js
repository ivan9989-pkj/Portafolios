document.addEventListener("DOMContentLoaded", function() {
    var habilidades = document.querySelectorAll('.habilidad');
    
    if (window.innerWidth > 768) {
        habilidades.forEach(function(habilidad, index) {
            animateProgress(habilidad, index);
        });
    }
});

function animateProgress(habilidad, index) {
    var porcentaje = parseFloat(habilidad.querySelector('.porcentaje').textContent);
    var progressBar = habilidad.querySelector('.progreso');
    var width = 0;

    function frame() {
        if (width >= porcentaje) {
            cancelAnimationFrame(animation);
        } else {
            width += 0.5; // Ajusta la velocidad de llenado según sea necesario
            progressBar.style.width = width + "%";
            requestAnimationFrame(frame);
        }
    }

    var animation = requestAnimationFrame(frame);
}
