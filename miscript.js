/* 
Crear una aplicación que pida al usuario escribir un numero entre 10 y 20

1. Enviar un mensaje de error si no se ingreso un numero
2. Si la edad es menor de 16 escribir el mensaje "Eres muy joven"
3. Si la edad es menor de 26 escribir el mensaje "Todo un adulto"
4. Si la edad es menor de 45 escribir el mensaje "En tu mejor momento"
5. Si la edad no encaja en ninguna escribir el mensaje "Tienes que cuidarte"

funciones a utilizar: prompt(), alert() y isNaN()
*/
var edad = prompt('Ingresa tu edad: ');
var out = isNaN(edad);

if (out) { //out = true por lo que no es un número.
    alert ('No ingresaste una edad valida...');
}
else if (edad < 16){
    alert ('Eres muy joven');
}
else if (edad < 26){
    alert ('Todo un adulto');
}
else if (edad < 45){
    alert ('En tu mejor momento');
}
else{
    alert ('Tienes que cuidarte');
}