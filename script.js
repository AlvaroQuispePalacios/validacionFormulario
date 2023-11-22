// Capturar elementos 
const form = document.getElementById('form');
const nombreusuario = document.getElementById('nombreusuario');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

/*
    FUNCIONES
*/



function esObligatorio(inputArray){

    //Si son esta en blanco le sale un mensaje de error
    // Con el "trim()"  quitamos los espacios en blancos y asi comprobamos que el usuario no haya introducido espacios en blanco
    // if(input.value.trim() === '') {
    //     // 
    //     muestraError(input, "Es obligatorio");

    // }
    inputArray.forEach((input) => {
        if(input.value.trim() === ''){
            muestraError(input,`${prenNomInput(input)} es obligatorio` );
        } else {
            muestraCorrecto(input);
        }

    });
}

function compruebaLongitud(input, min, max){
    if(input.value.length < min){
        muestraError(input, `tiene que tener un minimo de ${min} caracteres`);

        // prenNomInput(input);
    }else if (input.value.length > max) {
        muestraError(input, `tiene que tener un max de ${max} caracteres`);

    }else {
        muestraCorrecto(input);
    }
}

function esEmailValido(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(re.test(input.value.trim())) {
        muestraCorrecto(input);

    } else{
        
        let mensaje = `${prenNomInput(input)}  no tiene el formato correcto`;
        muestraError(input ,mensaje);
    };
}

function comprobarContrasenyaSonIguales(input1, input2){
    if(input1.value != input2.value){
        let mensaje = `${prenNomInput(input1)}  tiene que ser iguales ${prenNomInput(input2)}`; 
        muestraError(input2 ,mensaje);
    }else{
        muestraCorrecto(input2);
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

function prenNomInput(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


/*
    EVENTOS
*/

form.addEventListener('submit', (e) => {

    //Cancela el evento por defecto
    e.preventDefault();
    // console.log("submit");
    // esObligatorio(nombreusuario);
    // esObligatorio(email);
    // esObligatorio(password);
    // esObligatorio(password2);

    esObligatorio([nombreusuario, email, password, password2]);

    compruebaLongitud(nombreusuario, 3, 15);
    compruebaLongitud(password, 6, 25);

    esEmailValido(email);

    comprobarContrasenyaSonIguales(password, password2);
});