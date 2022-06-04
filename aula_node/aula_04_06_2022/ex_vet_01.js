/* Classe de leitura de input no Node */
const ler_linha = require('readline');
const scan = ler_linha.createInterface( { input: process.stdin, output: process.stdout } );
 
/* Variávies globais */
var vet = [];

/* número de repetição */
quant = 10;

/* Método de para leitura */
const askQ = i => {
    if (i < quant) {
        scan.question(`Digite o ${i + 1}° número: `, (resposta) => {

            vet[i] = +resposta;

            askQ(i + 1); /* função recursiva */
        });
      } else {
          /* Imprime os resultados */
          console.log('Normal');
          for(let j = 0; j < 10; j++) {
              console.log(`Posição: ${j} Valor: ${vet[j]}`);
          }
          
          for(let j = 9; j >=0 ; j--) {
              console.log(`Posição: ${j} Valor: ${vet[j]}`);
          }

          /* Fecha a classe de leitura */
          scan.close();
        }
    };
    /* Chamada do método */
    askQ(0);