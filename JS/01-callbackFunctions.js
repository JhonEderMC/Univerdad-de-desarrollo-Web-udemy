// Se trata de una funcion que recibe otra funcion como argumento y esta ultima se utilia dentro de la funcion

function hello1() {
    console.log('Hello1');
}

function hello2(funtion1) {
    funtion1();
}

hello2(hello1);

// Sumar
function sum(print, num1, num2) {    
    const sum = num1 + num2;
    print(sum);
}

function print(message) {    
    console.log(message);
}

sum(print, 1, 2);

