let listagente =  [
    { nombre: "Gabriel", sexo: "masculino", edad: 28 },
    { nombre: "Minos", sexo: "masculino", edad: 59 },
    { nombre: "Mirage", sexo: "femenino", edad: 21 },
    { nombre: "Miranda", sexo: "femenino", edad: 26 }
];
let sumadeedades = 0;

for (let persona of listagente) {
    sumadeedades += persona.edad;
}
let promedio = sumadeedades / listagente.length;
console.log( "El promedio de edad es: " + promedio);


let mujeres = listagente.filter(persona => persona.sexo === "femenino");
let mujermayor = mujeres.reduce((mayor, persona) => {
    return (persona.edad > mayor.edad) ? persona : mayor;
})
console.log ("la mujer con mayor edad es: " + mujermayor.nombre + " con " + mujermayor.edad + " años");


let hombres = listagente.filter(persona => persona.sexo === "masculino");
let hombremenor = hombres.reduce((menor, persona) => {
    return (persona.edad < menor.edad) ? persona : menor;

})

console.log ("el hombre con menor edad es: " + hombremenor.nombre + " con " + hombremenor.edad + " años")

let promediomujeres = mujeres.reduce((suma, persona) => suma + persona.edad, 0) /mujeres.length;
console.log ("el promedio de edad de las mujeres es: " + promediomujeres);