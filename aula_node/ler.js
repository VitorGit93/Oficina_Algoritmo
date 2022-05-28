/*const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout})

readline.question("What's your name? ", name => {
    console.log(`Hi ${name}!`)
    readline.close() } )*/

    const readline = require('readline');

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    const q0 = 'Qual é seu nome? ';
    const q1 = 'Seu sobrenome? ';
    const q2 = 'Seu gênero de música';
    const q3 = 'Sua idade? ';
   
    const arr = [q0, q1, q2, q3];
    let res = '';
    const askQ = i => {
      if (i < arr.length) {
        rl.question(arr[i], (answer) => {
          res += '\n' + answer;
          askQ(i + 1);
        });
      } else {
          console.log(`Thank you for your valuable feedback: ${res}`);
          rl.close();
      }
    };
    askQ(0);