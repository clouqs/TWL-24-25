//objects

let persona ={
    nome: "Mario",
    età: 25,
    città: "Roma"
}

console.log(persona.città);

//fib
let fib = [0, 1];

for (let i = 2; i < 100; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);


//this 
const persona2 = {
    name: "skibidi",
    favfood: "pizza",
    sayhello: function(){console.log("hello, my name is " + this.favfood)}
}

persona2.sayhello();