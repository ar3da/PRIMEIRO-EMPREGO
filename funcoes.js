function verificarIdade() {
    let idade = 22;

    if (idade >= 18) {
        console.log("Pode trabalhar");
    } else {
        console.log("Não pode trabalhar");
    }
}

verificarIdade();

let nomes = ["Areda", "Maria"];
let idades = [22, 25];

function mostrarUsuarios() {
    for (let i = 0; i < nomes.length; i++) {
        console.log("Nome:", nomes[i]);
        console.log("Idade:", idades[i]);
        console.log("----------------");
    }
}

mostrarUsuarios();