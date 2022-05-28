

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
 
    let arr;
    let soma = 0;
    let maior = 0;
    let menor = 0;

    const askQ = i => {

      if (i < 10) {

        rl.question(`Digite o ${i + 1}° número: `, (answer) => {

          soma += +answer;
          
          if (i == 0 || +answer > maior) {
            maior =  +answer;
          }
          if (i == 0 || +answer < menor) {
            menor =  +answer;
          }

          askQ(i + 1); // função recursiva

        });

      } else {

          console.log(`Soma: ${soma}`);
          console.log(`Media: ${soma/10}`);
          console.log(`Maior: ${maior}`);
          console.log(`Menor: ${menor}`);
          rl.close();
      }

    };

    askQ(0);