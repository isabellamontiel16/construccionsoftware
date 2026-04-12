console.log("Hola mundo");

//Promedio
const promedio = (arr)=>{
    let suma = 0;
    for (let num of arr){
        suma += num;
    }
    return suma/arr.length;
}

const numeros = [10, 20, 30, 40];
console.log("Promedio: ", promedio(numeros));


//FilesSystem
const fs = require('fs');
fs.writeFileSync('hola.txt', 'Hola mundo desde node');
console.log("Archivo creado");

//Factorial
const factorial = (n) => {
    if (n == 0) return 1;
    return n * factorial(n-1);
}

console.log("Facrorial de 5: ", factorial(5));

//async sort
const arreglo =[5000, 60, 90, 100, 10, 20];

for (let item of arreglo){
    setTimeout(() => {
        console.log(item);
    }, item);
}
