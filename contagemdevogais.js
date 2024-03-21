//Seleciono uma variável:

let texto = "Atividade Exemplo";

//Coloco as letras em minúsculo para ficar mais facil de identificar:

texto = texto.toLowerCase();

//Seleciono uma array de vogais:

let vogais = ['a', 'e', 'i', 'o', 'u'];

//Seleciono uma array de consoantes:

let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

//Dividindo o texto em um array de caracteres individuais:

let arrayletras = texto.split("");

//Definindo os arrays para guardar as vogais, consoantes e espaços:

let arrayvogais = [];
let arrayconsoante = [];
let arrayespaco = [];

//Iterando em cada caractere no array de letras:

for(let i = 0; i < arrayletras.length; i++){
    if(vogais.includes(arrayletras[i])){
        arrayvogais.push(arrayletras[i]);
        }
        if(consoantes.includes(arrayletras[i])){
            arrayconsoante.push(arrayletras[i]);
        }
        if(arrayletras[i] == ' ') {
            arrayespaco++;
        }
}

//Exibo todos os resultados encontrados:

console.log("Variável:", texto);
console.log(' ');
console.log("Vogais identificadas:", arrayvogais.toString());
console.log("Quantidade de vogais:" + arrayvogais.length);
console.log(' ');
console.log("Consoantes identificadas:", arrayconsoante.toString());
console.log("Quantidade de consoantes:" + arrayconsoante.length);
console.log(' ');
console.log("Quantidade de espaços:" + arrayespaco);