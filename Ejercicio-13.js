let listagente =  [
    { nombre: "Gabriel", sexo: "masculino", edad: 28 },
    { nombre: "Minos", sexo: "masculino", edad: 59 },
    { nombre: "Mirage", sexo: "femenino", edad: 21 },
    { nombre: "Miranda", sexo: "femenino", edad: 26 }
];

function promedioedades (listagente){

let sumaedades = listagente.reduce((suma, persona) => suma + persona.edad, 0);
return sumaedades / listagente.length;
}

console.log ("El promedio de edad es: " + promedioedades(listagente));

function obtenermujermayor (listaagente) {
    let mujeres = listagente.filter (persona => persona.sexo === "femenino");
    return mujeres.reduce((mayor, persona) => (persona.edad > mayor.edad) ? persona : mayor);
    }
    let mujermayor = obtenermujermayor(listagente);

console.log ("La mujer con mayor edad es " + mujermayor.nombre + " con " + mujermayor.edad + " años" );

function obtenerhombremenor (listagente) {
    let hombres = listagente.filter (persona => persona.sexo === "masculino");
    return hombres.reduce((menor, persona) => (persona.edad < menor.edad) ? persona : menor);

}
let hombremenor = obtenerhombremenor(listagente);
console.log ("El hombre con menor edad es " + hombremenor.nombre + " con " + hombremenor.edad + " años" );


function promedioedadmujeres (listagente) {
let mujeres = listagente.filter (persona => persona.sexo === "femenino");
let sumaEdadesMujeres = mujeres.reduce((suma, persona) => suma + persona.edad, 0);
return sumaEdadesMujeres / mujeres.length;
}
let promediomujeres = promedioedadmujeres(listagente);

console.log ("El promedio de edad entre las mujeres es " + promediomujeres + " años" );

