function DivisoresComunes(num1, num2) {
   
    function obtenerDivisores(num) {
        let divisores = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                divisores.push(i);
            }
        }
        return divisores;
    }

   
    let divisoresNum1 = obtenerDivisores(num1);
    let divisoresNum2 = obtenerDivisores(num2);
    
   
    let divisoresComunes = divisoresNum1.filter(valor => divisoresNum2.includes(valor));
    
    return divisoresComunes;
}


let divisoresComunes = DivisoresComunes(10, 50);


console.log("Los divisores comunes entre 2 y 50 son: " + divisoresComunes);