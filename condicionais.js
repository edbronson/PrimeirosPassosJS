console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(
    "Salvador", "São Paulo", "Rio de Janeiro"
);

const idadeComprador = 21;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Possíveis destinos:")
console.log(listaDeDestinos);


// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //retirar item da lista

// } else if (estaAcompanhada) {
//     console.log("Está acompanhada");
//     listaDeDestinos.splice(1, 1); //retirar item da lista

// } else {
//     console.log("Não é maior idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(2, 1); //retirar item da lista
} else {
    console.log("Não é maior idade e não posso vender");
}

console.log("Embarque: \n")
if(idadeComprador >18 && temPassagemComprada){
    console.log("Boa Viagem!")
}else{
    console.log("você não pode embarcar!")
}




console.log(listaDeDestinos);

    // console.log(idadeComprador > 18);
    // console.log(idadeComprador < 18);
    // console.log(idadeComprador <= 18);
    // console.log(idadeComprador >= 18);
    // console.log(idadeComprador == 18); //exatamente igual a 18

