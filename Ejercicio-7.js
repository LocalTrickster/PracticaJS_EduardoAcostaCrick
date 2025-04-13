let num1 = 3;
let num2 = 30;

let resultado = "los multiplos de 3 entre " + num1 + " y " + num2 + " son: ";

for (let i = num1 + 1; i < num2; i++) {
    if (i % 3 == 0) {
        resultado += i + ", ";
    }
}
console.log(resultado);