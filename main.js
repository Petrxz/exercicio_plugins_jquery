$(document).ready(function() {
    $('#cpf').mask('000.000.000-000');

    $('#cep').mask('00000-000');

    $('#formulario').submit(function(event) {
        event.preventDefult();
    })
})