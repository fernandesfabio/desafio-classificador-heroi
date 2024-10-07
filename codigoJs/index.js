let nomeHeroi = prompt("Digite o nome do seu herói: ")

let xp = parseInt(prompt("Digite o XP do seu herói para descobrir em qual nível você está :"));

let nivelHeroi

if(xp <= 1000){
    nivelHeroi = "Ferro"
}else if(xp > 1000 && xp <= 2000){
    nivelHeroi = "Bronze"
}else if(xp > 2001 && xp <= 5000){
    nivelHeroi = "Prata"
}else if(xp > 5001 && xp <= 7000){
    nivelHeroi = "Ouro"
}else if(xp > 7001 && xp <= 8000){
    nivelHeroi = "Platina"
}else if(xp > 8001 && xp <= 9000){
    nivelHeroi = "Ascendente"
}else if(xp > 9001 && xp <= 10000){
    nivelHeroi = "Imortal"
}else{
    nivelHeroi = "Radiante"
}

console.log(`O Herói de nome ${nomeHeroi} está com o XP de ${xp} e pertence ao nível de ${nivelHeroi}`)


