const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome: ", function(nome) {
    rl.question("Digite sua idade: ", function(idade) {
        rl.question("Digite sua experiência (em anos): ", function(experiencia) {

            console.log("Nome: ", nome);
            console.log("Idade: ", idade);

        let experienciaNumero = Number(experiencia);
        let nivel;

        if (experienciaNumero === 0) {
            nivel = "Júnior";
        } else if (experienciaNumero > 0 && experienciaNumero <= 2) {
            nivel = "Pleno";
        } else{
            nivel = "Sênior";
        }

        console.log("Nível: ", nivel);

        let idadeNumero = Number(idade);
        let status;

        if (idadeNumero >= 18) {
            status = "Pode trabalhar";
        } else {
            status = "Não pode trabalhar";
        }

        console.log("Status: ", status);

        rl.close();
        });
    });
});
