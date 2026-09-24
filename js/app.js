// Estación Meteorológica Universitaria · interacciones de la página

// Muestra el año actual en el pie de página
document.getElementById('anio').textContent = new Date().getFullYear();

// Muestra en vivo la probabilidad de lluvia elegida
var lluvia = document.getElementById('lluvia');
var lluviaValor = document.getElementById('lluvia-valor');

lluvia.addEventListener('input', function () {
    lluviaValor.textContent = lluvia.value;
});

// Confirma el registro de alertas sin recargar la página
var formulario = document.getElementById('form-alertas');
var mensaje = document.getElementById('mensaje-form');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value.trim();
    mensaje.textContent = 'Listo, ' + nombre + '. Te avisaremos cuando la estación detecte un cambio importante en el clima.';
    formulario.reset();
    lluviaValor.textContent = lluvia.value;
});
