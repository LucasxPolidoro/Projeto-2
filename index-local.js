<<<<<<< HEAD
function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de chamada
calcularNivel(90, 0); // Saída: O Herói tem de saldo de 90 está no nível de Diamante
=======
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
>>>>>>> dc611b45ff355b5cfd89cb3eac37d54b31bb2dc3
