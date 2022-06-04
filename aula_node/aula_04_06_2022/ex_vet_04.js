//Classe de leitura do Node
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Variáveis Globais
var vet=[];
var nome;
//número de repetição
quant=11;
//Método de leitura
const askQ = i => {
  if (i < quant) {
	let frase;
	if (i == 10){
		frase = 'Digite o nome para procurar: ';
	} else {
		frase = `Digite o ${i + 1} nome: `;
	}
    rl.question(frase, (answer) => {
	  if (i < 10) {	
		vet[i] = answer;
	  } else {
		nome = answer;		
	  }		
      askQ(i + 1);
    });
  } else {
	//Imprime os resultados
	  let pos = -1;
      for (let j=0; j < 10; j++){
		  if (nome == vet[j]) {
			  pos = j;
			  break;
		  }
	  }
	  if (pos > -1) {
		  console.log(`Nome encontrado na posição ${pos}`);
	  } else {
		  console.log('O nome não foi encontrado!!!!!');
      }		  
	//Fecha a classe de leitura	
    rl.close();
  }
};
askQ(0);