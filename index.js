// Solicitar o nome e a XP do herói
let nome = prompt("super dev");
let xp = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"));

// Variável para armazenar o nível
let nivel = "";

// Classificação de acordo com a XP
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
} else {
    nivel = "Indefinido";
}

// Exibir a mensagem final
console.log(`O Herói de nome ${super dev} está no nível de ${nivel}`);
