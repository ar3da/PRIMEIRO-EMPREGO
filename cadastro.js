const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Digite seu nome: ", function(nome) {
    rl.question("Digite sua idade: ", function(idade) {
        rl.question("Digite sua experiência (em anos): ", function(experiencia) {

            let experienciaNumero = Number(experiencia);
            let nivel;
            if (experienciaNumero === 0) {
                nivel = "Júnior";
            } else if (experienciaNumero <= 2) {
                nivel = "Pleno";
            } else {
                nivel = "Sênior";
            }

            let idadeNumero = Number(idade);
            let status;
            if (idadeNumero >= 18) {
                status = "Pode trabalhar";
            } else {
                status = "Não pode trabalhar";
            }

            console.log("-".repeat(3), "RESULTADO DO CADASTRO", "-".repeat(3));
            console.log("Nome: ", nome);
            console.log("Idade: ", idadeNumero);
            console.log("Nível: ", nivel);
            console.log("Status: ", status);
            console.log("-".repeat(30));
            console.log(`${nome}, você é nível ${nivel} e ${status}.`);
            rl.close();
        });
    });
});