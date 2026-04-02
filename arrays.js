let nomes = ["Areda", "Josana", "Milena", "Edilma", "Italo"]

console.log("Nomes: ", nomes)
console.log("Primeiro nome: ", nomes[0])
console.log("Último nome: ", nomes[nomes.length - 1])

nomes.push("Maria")
console.log("Nomes após adicionar Maria: ", nomes)

let idades = [22, 30, 22, 28, 35]
console.log("Idades: ", idades)
console.log("Primeira idade: ", idades[0])
console.log("Última idade: ", idades[idades.length - 1])

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}