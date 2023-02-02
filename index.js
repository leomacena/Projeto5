const readLineSync = require('readline-sync');

const cssList = [];

const resposta = () => {
    let cadastro = true;
    let input = '';

    while (cadastro) {
        input = readLineSync
            .question("Digite as propriedades CSS, ou para encerrar digite 'sair': ")
                .toLowerCase();
        if(input === "") {
            console.log("Comando inválido");
        }else if (input !== 'sair') {
            cssList.push(input);
        } else {
            cadastro = false;
        }
    }
    console.log(cssList.sort());
};
resposta();
