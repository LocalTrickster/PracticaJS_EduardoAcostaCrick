let num1 = 8;
let num2 = 15;
let num3 = 3;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
  } else {
    mayor = num3;
  }
  if (num1 <= num2 && num1 <= num3) {
    menor = num1;
  } else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
  } else {
    menor = num3;
  }
  
  console.log("El número mayor es: " + mayor);
  console.log("El número menor es: " + menor);