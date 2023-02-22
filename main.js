function sum(a = 1, b) {
  return a + b;
}

// console.log(sum(undefined,5))
// console.log(sum(3,5))

function saludar() {
  const x = "hola";
  return x;
}

// console.log(saludar())

function greet(greeting = "Hello", name) {
  if (!name) {
    return greeting;
  } else {
    return `${greeting} ${name}`;
  }
}

// console.log(greet(undefined, "Vlad"));

function calculadora() {
  let num1 = prompt("Introduce el 1º número.");
  let signo = prompt(
    "Introduce un signo aritmético entres los siguientes:\n'+' --> Suma\n'-' --> Resta\n'*'--> Multiplicación\n'/' --> División\n'^' --> Potencia\n'%' --> Módulo"
  );
  let num2 = prompt("Introduce el 2º número.");
  num1 = +num1;
  num2 = +num2;
  let resultado = 0;
  switch (signo) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
    case "^":
      resultado = num1 ** num2;
      break;
    case "%":
      resultado = num1 % num2;
      break;

    default:
      break;
  }
  return (
    "El resultado de la operación " +
    num1 +
    " " +
    signo +
    " " +
    num2 +
    " es " +
    resultado
  );
}

// calculadora();

// Crea la función convierteString debe recibir un tipo number y devolver el número como string .
// Si la función no recibe un dato tipo number debe devolver el string 'Debo ser ejecutada con un número'

function convierteString(num) {
  if (typeof num === "number") {
    num = num.toString();
    return typeof num + " " + num;
  } else {
    return "Debo ser ejecutada con un número";
  }
}

// console.log(convierteString(7));

// Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar.

function esPar(num) {
  if (typeof num !== "number") {
    return "tienes que poner un número";
  } else if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esPar(4));
