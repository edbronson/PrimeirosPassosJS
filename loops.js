console.log( `\nTrabalhando com condicionais`)

const listaDeDestinos = new Array(
    "Salvador", 
    "São Paulo", 
    "Rio de Janeiro"
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log( "\nPossíveis destinos:")
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){;
        console.log("destino existe");
    }else{
        console.log("destino não existe");
    }
    contador += 1;
}


   