//1.- Colocar las condiciones necesarias para que se cumpla la salida en consola. (10 pt)
var numero1 = 5;
var numero2 = 8;

if(numero1 < numero2) {
    console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0) {
    console.log("numero2 es positivo");
}
if(numero1 != 0) {
    console.log("numero1 es negativo o distinto de cero");
}
if(numero1 + 1 < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

//2. El factorial de un número entero n es una operación matemática que consiste en
//multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5
//(escrito como 5!) es igual a 5! = 5 x 4 x 3 x 2 x 1 = 120
//Utilizando la estructura crear un script que calcule la factorial de un número entero.
//(10 pts) \\

function factorialRecursivo(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorialRecursivo(n - 1) * n;
    }
}
console.log(factorialRecursivo(8))
//3. Escribir el código de una función a la que se pasa como parámetro un número entero
//y devuelve como resultado una cadena de texto que indica si el número es par o impar.
//Mostrar por pantalla el resultado devuelto por la función 

function calcula(num)
{
if (num%2==0) {
   alert("El numero introducido es par");
} else {
   alert("El numero introducido es impar");
}
}
console.log(calcula(12))

//4. Definir una función determine si la cadena de texto que se le pasa como parámetro
//es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
//derecha. Ejemplo de palíndromo complejo: “La ruta nos aporto otro paso natural”. 

function esPalindromo(cadena){
    let Array= cadena.split("");
    let reverse= Array.reverse();

    return cadena == reverse.join("") ? "Sí es palindromo" : "No es palindromo"
}

    console.log(esPalindromo("anitalavalatina"));
//5. Ejercicio
class persona {
    nombre;
    edad;
    obtDetalles() {
        console.log(this);
    }
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
class estudiante extends persona {
    constructor(nombre, edad, calificacion) {
        super(nombre, edad, calificacion);
        this.calificacion = calificacion;
    }
    obtDetalles(){
        console.log(this);
    }
}
class profesor extends persona {
    constructor(nombre, edad, asignatura = "js", nivel = "Basico") {
        super(nombre, edad, asignatura, nivel);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    obtDetalles(){
        console.log(this);
    }
}
class grupo  {
    promedio;
    constructor(profesor, estudiantes = []) {
        //super(nombre, edad, promedio, estudiantes)
        this.profesor = profesor;
        this.estudiantes = estudiantes;
    }
    calificar (){
        for(let i = 0 ;i < this.estudiantes.length; i++){
            this.estudiantes[i].calificacion = Math.random() * 10
        }
        //console.log(this.estudiantes);
    }

console.log(new estudiante().obtDetalles("pepe","aceptado"));

//6. Escribe una function que genere todas las posibles combinaciones con las letras de
//dicho string. (La entrada la puede limitar a 3 letras)

let possibleCombinacion = (palabra) =>{
    let combinacion = [];
      for(let i = 0 ;i < palabra.length; i++)
    {
        for(let j = i + 1; j< palabra.length + 1; j++)
        {
            combinacion.push(palabra.slice(i , j));
        }
    }
   return combinacion;
}
console.log(possibleCombinacion('pato'));




