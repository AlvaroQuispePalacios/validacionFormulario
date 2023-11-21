// Capturar elementos 
const form = document.getElementById('form');
const nombreusuario = document.getElementById('nombreusuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/*
    FUNCIONES
*/



function esObligatorio(input){
    //Si son esta en blanco le sale un mensaje de error
    // Con el "trim()"  quitamos los espacios en blancos y asi comprobamos que el usuario no haya introducido espacios en blanco
    if(input.value.trim() === '') {
        // 
        muestraError(input, "Es obligatorio");

    }
}

function compruebaLongitud(input, min, max){
    if(input.value.length < min){
        muestraError(input, 'Tiene que tener un minimo de'+ min + ' caracteres');
        prenNomInput(input);
    }else if (input.value.length > max) {
        muestraError(input, 'Tiene que tener un maximo de'+ max + ' caracteres');
    }else {
        muestraCorrecto(input);
    }
}

function muestraError(input , mensaje){

    // Guarda el padre del elemento, en este caso accedemos al padre de nombreusuario el cual es form-control
    const formControl = input.parentElement;
    //Le da el nombre a su clase como .form-control.error
    formControl.className = 'form-control error';
    const label = formControl.querySelector('label');
    const small = formControl.querySelector('small');
    small.innerText = label.innerText + ' ' + mensaje;

}

function muestraCorrecto(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control correcto';
}

// function prenNomInput(input){
//     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
// }


/*
    EVENTOS
*/

form.addEventListener('submit', (e) => {

    //Cancela el evento por defecto
    e.preventDefault();
    // console.log("submit");
    esObligatorio(nombreusuario);
    esObligatorio(email);
    esObligatorio(password);
    esObligatorio(password2);

    compruebaLongitud(nombreusuario, 3, 15);

});