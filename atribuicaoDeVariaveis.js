console.log("Trabalhando com atribuição de variáveis")

const idade = 29;
let nome = "Eder"; //variavel comum que varia, diferente da const
const sobrenome = "Bronson";

console.log(nome + sobrenome); //sem espaco
console.log(nome, sobrenome); // com espaco
console.log(nome + " " + sobrenome); //outra forma com espaco
console.log(`Meu nome é ${nome}`);

nome = nome + sobrenome;

let contador = 0;
contador = contador +1;