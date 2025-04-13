let resultado = "los multiplos de 2 y 5 menor a 100 son: ";

for (let i = 1; i < 100; i++) {
    if (i % 2 == 0 && i % 5 == 0) {
        resultado += i + ", ";
    }
   
}
console.log (resultado);