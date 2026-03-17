let nome = "Areda";
let idade = 22;
let experiencia = 0;

console.log("Nome: ", nome);
console.log("Idade: ", idade);

let nivel;
if (experiencia === 0) {
    nivel = "Júnior"
} else if (experiencia > 0 && experiencia <= 2) {
    nivel = "Pleno";
} else if (experiencia > 2) {
    nivel = "Sênior";
}

console.log("Nível: ", nivel);

if (idade >= 18) {
    console.log("Status: Pode trabalhar");
} else {
    console.log("Status: Não pode trabalhar");
}
    