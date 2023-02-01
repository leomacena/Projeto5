const readLineSync = require('readline-sync');

const cssList = [];

const verifica = (input) =>{
    if (input === 'sair'){
        return false
    } else {
        return true
    }
}


const resposta = () => {
    
    while (cadastro) {
        cssList.push(input);
        let input = readLineSync.question("Digite as propriedades CSS, ou para encerrar digite 'sair': ").toLowerCase();
        cadastro = verifica(input);
    }
    console.log(cssList.sort());
}

console.log(resposta);


