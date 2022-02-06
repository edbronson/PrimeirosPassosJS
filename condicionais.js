console.log(`Trabalhando com condicionais`) 

const listaDeDestinos = new Array (
    "Salvador", "São Paulo", "Rio de Janeiro"
    );

    const idadeComprador = 16;
    console.log("Possíveis destinos:")
    console.log(listaDeDestinos);

    
    if(idadeComprador >= 18){
        console.log("Comprador maior de idade");
        listaDeDestinos.splice(1, 1); //retirar item da lista

    }else{
        console.log ("Não é maior idade e não posso vender")
    }

        

    console.log(listaDeDestinos);

    console.log(idadeComprador > 18);
    console.log(idadeComprador < 18);
    console.log(idadeComprador <= 18);
    console.log(idadeComprador >= 18);
    console.log(idadeComprador == 18); //exatamente igual a 18
   
    