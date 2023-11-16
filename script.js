document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementsByName('formulario')[0];

    var validarNombre = function (e) {
    if (formulario.nombre.value.trim() === '') {
        alert('Completa el campo Nombre');
        e.preventDefault();
    }
    };

    var validarApellido = function (e) {
    if (formulario.apellido.value.trim() === '') {
        alert('Completa el campo Apellido');
        e.preventDefault();
    }
    };

    var validarSexo = function (e) {
        if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
        }
        else {alert("Por favor completa el campo sexo");
        e.preventDefault(e)}
    }
    var validarCondiciones = function(e) {
        if (formulario.checking.checked == true) {
        }
        else {alert("Por favor acepta nuestros términos y condiciones");
    e.preventDefault(e)}
    }
    formulario.addEventListener('submit', function (e) {
    validarNombre(e);
    validarApellido(e);
    validarSexo(e);
    validarCondiciones(e);
    });
    });
