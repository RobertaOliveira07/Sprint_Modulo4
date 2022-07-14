import readlineSync from "readline-sync";

let resposta = [];

while (true) {
    let input = readlineSync.question('Digite uma propiedade de CSS:');

    if (input.toLowerCase() === 'sair') {
        break;
    }
    resposta.push(input);
}

console.log(resposta.sort());
