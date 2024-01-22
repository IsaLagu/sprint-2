//Exercici 1.1: Arrow functions

//Exercici 1
const add = (a, b) => a + b;
console.log(add(2,3));

//Exercici 2
const randomNumber = () => Math.floor(Math.random() * 100);
console.log(randomNumber());

//Exercici 3 
class Person {

    constructor (name) {
        this.name = name;
    }

    greet = () => console.log(`Hola ${this.name}`);
}

const person = new Person("Isa");
person.greet();

//Exercici 4
const arrNums = [1, 2, 3, 4];

const printNumbers = () => {
    for (let i = 0; i < arrNums.length; i++ ) {
        console.log("printNumbers: ", arrNums[i]);
    } 
}
printNumbers();

//Exercici 5
const printMessage= () => {
    setTimeout(() => {
        console.log("Delayed for 3 seconds.");
    }, 3000);
}
printMessage();


//Exercici 1.2: Operador ternari

//Exercisi 1
function potConduir(age) {
    return age >= 18 ? "Pots conduir" : "No pots conduir";
}
console.log(potConduir(18));
console.log(potConduir(17));

//Exercisi 2
function mesGran(num1, num2) {
    return num1 > num2 ? "num1 és més gran" : "num2 és més gran"
}

console.log(mesGran(2, 3));
console.log(mesGran(3, 2));

//Exercisi 3
function esPositiu(x) {
    return x > 0 ? "positiu"
      : x < 0 ? "negatiu"
      : "zero";    
}
  console.log(esPositiu(8));

/////////////
function trobarMaxim(a, b, c) {
    return a > b ? (a > c ? a : c) : (b > c ? b : c);
}

//Exercisi 4
function parOImpar(arr) {
    for (let i = 0; i < arr.length; i++) {
   		console.log(arr[i] % 2 === 0 ? "El nombre és parell" : "El nombre és imparell"); 
    }
}
const numsArr = [2, 7, 11, 88];
parOImpar(numsArr);


//Exercici 1.3: Callbacks

//Exercisi 1
function processar(num, callback) {
    callback(num);
}

function cb(numero) {
    console.log("El resultado es: " + numero);
}
processar(17, cb);

//Exercisi 2
function calcular(num1, num2, callback) {
    callback(num1, num2);
}

function sum(num1, num2) {
    console.log("El resultado de la suma es: " + (num1 + num2));
}

calcular(3, 2, sum);

//Exercisi 3
function esperarISaludar(nom, callback) {
    setTimeout(() => {
        callback(nom)
    }, 2000);
}

const hola = (nom) => {
    console.log("Hola " + nom)
};

esperarISaludar("Isa", hola);

//Exercisi 4
function processarElements(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

const resultat = (num) => {
    console.log("El resultat és: "  + num)};

processarElements([2, 4, 6], resultat);

//Exercisi 5
function processarCadena(str, callback) {
    const novaStr = str.toUpperCase();
    callback(novaStr);
}

const result = (str) => {
    console.log("La nova cadena és " + str);
}

processarCadena("HOLA A TODOS", result);


//Exercici 1.4: Rest & Spread operators

//Exercisi 1
const array1 = [3,4,6];
const array2 = [1,27];
const array3 = [...array1, ...array2];

//Exercisi 2
function suma(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg
    };
    return sum;
}
const res = suma(1,2,3);
console.log(res);
console.log(suma(1,2,3));

//Exercisi 3
const objecte1 = {
    nombre: 'Isa', 
    edad: 36
};
const objecte2 = {...objecte1};
objecte2.nombre = 'Fran';



//Exercisi 4
const arrElements = ["Chocolate", "Pan", "Leche", "Plátanos", "Agua", "Galletas"];
const [primerElem, segonElem, ...restElements] = arrElements;

console.log(restElements);

//Exercisi 5
function crida(arg1, arg2, arg3) {
    return arg1, arg2, arg3;
}

const elements = ["Chocolate", "Pan", "Leche"];
crida(...elements);

//Exercisi 6
const tamaño = { width: 100, height: 50};
const posicion = { x: 40, y: 30};

const fusion = {...tamaño, ...posicion};
// {width: 100, height: 50, x: 40, y: 30}


//Exercici 1.5: Array transformations

//Exercisi 1
const numeros = [1, 2, 3, 4];
const cuadrado = numeros.map((x) => x * 2);

console.log(cuadrado);

//Exercisi 2
const numers = [1, 2, 3, 4];
const pares = numers.filter((x) => x % 2 === 0);

console.log(pares);

//Exercisi 3
const randomNums = [1, 10 , 8, 11];
const mesGran10 = randomNums.find((x) => x > 10);

console.log(mesGran10);

//Exercisi 4
const numbers = [13, 7, 8, 21];
const sumaTotal = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,
0,);

console.log(sumaTotal);

//Exercisi 5
const numRandom = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];
function calculo() {
    return numRandom.filter((x) => x >= 10).map((x) => x * 2).reduce((accumulator, currentValue) => accumulator + currentValue,
    0,);
}

console.log(calculo());

//Exercisi 6
const numbs =  [11, 12, 13, 14];

const totsMajorQue10 = numbs.every((x) => x > 10);
console.log(totsMajorQue10);

const someMajorQ10 = numbs.some((x) => x > 10);
console.log(someMajorQ10);



//Exercici 1.6: Array loops

//Exercisi 1
let nomsPersones = ['Anna', 'Bernat', 'Clara'];
const imprimirNoms = noms.forEach((nom) => console.log(nom));

//Exercisi 2
for (const persona of nomsPersones) {
  console.log(persona);
}

//Exercisi 3
const arrNumeros = [1, 2, 3, 4, 5, 6];
const numerosPares = arrNumeros.filter((num) => num % 2 === 0);
console.log(numerosPares);

//Exercisi 4
const obj = { nom: "Ona", edat: 25, ciutat: 'Barcelona' };
for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }

//Exercisi 5
const llistaDeNums = [1, 2, 3, 4, 5, 6];
for (const element of llistaDeNums) {
    if (element === 5) {
        console.log("Se encontró el número 5");
        break;
    }  
}

//Exercisi 6
const nombresPersonas = ['Anna', 'Bernat', 'Clara'];
for (const nombre of nombresPersonas) {
    console.log(`${nombresPersonas.indexOf(nombre)} ${nombre}`);
}



//Exercici 1.7: Promises & Async/Await

//Exercisi 1
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hola Mundo");
    }, 2000);
});

// Las siguientes formas de crear una promise que resuelva son equivalente
// const promise = new Promise((resolve) => {
//     resolve("Hola Mundo");
// });

// const promise = Promise.resolve('Hola mundo');

//Exercisi 2
promise.then((message) => {
    console.log(message);
});

//Exercisi 3
function sayHello(input) {
    return new Promise((resolve, reject) => {
        if (input === "Hola") {
            setTimeout(() => {
                resolve(input);
            }, 2000);
        } else {
            reject();
        }
    });
}

sayHello('Hola').then((message) => {
    console.log(message);
})

//Exercisi 4
async function asyncCall() {
    console.log('calling');
    const result = await promise;
    console.log(result);
}
  
  asyncCall();

  //Exercisi 5

  async function f() {
    try {
      const response = await promise;
      console.log(response);
    } catch(err) {
      console.log(err);
    }
  }
  
  f();

  //Exercisi 6
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1');
    }, 2000);
  });

  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2');
    }, 3000);
  });

  Promise.all([promise1, promise2]).then((values) => {
    console.log(values);
  })