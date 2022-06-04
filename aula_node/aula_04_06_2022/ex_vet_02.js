/* Classe de leitura de input no Node */
const ler_linha = require('readline');
const scan = ler_linha.createInterface( { input: process.stdin, output: process.stdout } );
 
/* Variávies globais */
var vet = [];
var vet2 = [];
/* número de repetição */
quant = 10;

/* Método de para leitura */
const askQ = i => {
    if (i < quant) {
        scan.question(`Digite o ${i + 1}° número: `, (resposta) => {

            vet[i] = +resposta;
            vet2[(quant-1)-i] = +resposta;

            askQ(i + 1); /* função recursiva */
        });
      } else {
          /* Imprime os resultados */
        
          for(let j = 0; j < quant; j++) {
            console.log(`Posição ${j} =>> Vetor 1: ${vet[j]}  |  Vetor 2: ${vet2[j]}`);
          }

          /* Fecha a classe de leitura */
          scan.close();
        }
    };
    /* Chamada do método */
    askQ(0);