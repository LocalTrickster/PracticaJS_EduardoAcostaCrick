let palabra = { 
    nombre: "martillo",
};
let contador = {};

for (let letra of palabra.nombre) { 
    if (contador[letra]) {
        contador[letra] += 1; 
    } else { 
        contador [letra] = 1;
    }
}
console.log(`La palabra "${palabra.nombre}" tiene las siguientes letras:`);
for (let letra in contador) {
     console.log(`${letra} = ${contador[letra]}`);
}