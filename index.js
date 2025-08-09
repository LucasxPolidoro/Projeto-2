let nome = "Lucas"
let quantidade = 4000
let nivel  

if (quantidade <= 1000) {
    nivel = "Ferro"
} else if (quantidade <= 2000) {
    nivel = "Bronze"
} else if (quantidade <= 5000) {
    nivel = "Prata"
} else if (quantidade <= 7000) {
    nivel = "Ouro"
} else if ( quantidade <= 8000) {
    nivel = "Platina"
} else if ( quantidade <= 9000) {
    nivel = "Ascendente"
} else if ( quantidade <= 10000) {
    nivel = "Imortal"
} else if ( quantidade > 10000) {
    nivel = "Radiante"
} else {

}
console.log("o herói de nome " + nome + " está no nível " + nivel)
