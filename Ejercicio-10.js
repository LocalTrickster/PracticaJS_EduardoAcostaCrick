let numeros = [2, 6, 13, 15, 21, 30]
let suma = 0;


    for (let i =0; i < numeros.length; i++) {
       if (numeros[i] % 2 == 0) {
            suma += numeros[i];
        }
    }
console.log ("la suma de los numeros pares dentro del array son: " + suma);
