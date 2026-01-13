// 3. Adivinhação de Número (Médio)
// Gere um número aleatório entre 1 e 100.
// Peça ao usuário para adivinhar o número.
// Use um while para continuar pedindo tentativas até que ele acerte.
// Dê dicas se o número é maior ou menor.
let h1 = document.querySelector("#h1")
let number = Math.floor(Math.random() *100) +1
console.log(number)
let adv = Number(prompt("Advinhe o numero:"))

 while(adv != number){
    if(adv < number){
        adv = Number(prompt("Advinhe o numero ele é maior:"))
    }
    else if(adv > number){
        adv = Number(prompt("Advinhe o numero ele é menor:"))
    }
    else{
        alert("Acertou")

    }
 }
  h1.innerHTML = `Você acertou o numero é ${number}`