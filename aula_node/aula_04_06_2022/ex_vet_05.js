//Classe de leitura do Node
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Variáveis Globais
var vet=[];
var vet2 =[];
var vet3 =[];
var vet4 =[];
var vet5 =[];

//número de repetição
quant=40;
//Método de leitura
const askQ = i => {
  if (i < quant) {
	let frase;
	if (i < 20){
		frase = `Digite o valor da posição ${i + 1} do primeiro vetor : `;
	} else {
		frase = `Digite o valor da posição ${i - 19} do segundo vetor : `;
	}
    rl.question(frase, (answer) => {
	  if (i < 20) {	
		vet[i] = +answer;
	  } else {
		vet2[i-20] = +answer;		
	  }		
      askQ(i + 1);
    });

  } else {
	  
      for (let j=0; j < 20; j++){
		
		vet3[j] = vet[j] - vet2[j];
		vet4[j] = vet[j] + vet2[j];
		vet5[j] = vet[j] * vet2[j];
		
		console.log(`Pos. ${j} =>> V1: ${vet[j]}  |  V2: ${vet2[j]}  |  V3: ${vet3[j]}  |  V4: ${vet3[j]}  |  V5: ${vet4[j]}`);
      }		  
	//Fecha a classe de leitura	
    rl.close();
  }

};
askQ(0);