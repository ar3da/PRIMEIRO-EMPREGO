let nomes = ["Areda", "Josana", "Milena"]
let idades = [22, 30, 22]
let nivel = ["Junior", "Pleno", "Sênior"]

for (let i=0; i < nomes.length; i++) {
    console.log("-".repeat(10), `USUÁRIO ${i + 1}:`)
    
    console.log("Nome: ", nomes[i])
    
    console.log("Idade: ", idades[i])
    
    console.log("Nível: ", nivel[i])
}