alert('Boas vindas ao jogo do número secreto');

const numberMax = 100;
const numberSecret = parseInt(Math.random() * numberMax + 1);
let palpite;
let tentativas = 0;

console.log(numberSecret);

do {
    palpite = Number(prompt(`Escolha um número entre 1 e ${numberMax}`));
    
    if(numberSecret > palpite){
        alert(`O número secreto é maior que ${palpite}`);
    } else if (numberSecret < palpite) {
        alert(`O número secreto é menor que ${palpite}`);
    }
    
    tentativas++;
} while(palpite !== numberSecret);

const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso aí! Você descobriu o número secreto em ${tentativas} ${palavraTentativa}`);
