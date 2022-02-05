console.log(`Trabalhando com listas`) 
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//control K C é um atalho para transformar em comentário (verde) 
//control K U é para tirar comentário (verde)

const listaDeDestinos = new Array (
    "Salvador", "São Paulo", "Rio de Janeiro"
    );

    listaDeDestinos.push("Curitiba") // adicionando um item na lista depois que já foi declarado
    console.log("Possíveis destinos:")
    console.log(listaDeDestinos);

    listaDeDestinos.splice(1, 1); //retirar item da lista
    console.log(listaDeDestinos);
    console.log(listaDeDestinos[1]) //imprimir apenas 1 item da lista
    console.log(listaDeDestinos[1], listaDeDestinos[2]) //imprimir um ou mais itens