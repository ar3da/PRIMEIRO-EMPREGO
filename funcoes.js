const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const rl = readline;
rl.question("Digite sua idade: ", function(idade) {
    let idadeNumero = Number(idade);
    verificar(idadeNumero);
    rl.close();
});


function verificar(idade) {
    if (idade >= 18) {
        console.log("Pode trabalhar");
    } else {
        console.log("Não pode trabalhar");
    }
}
