const calcular = document.getElementById('calcular');
	

function imc () {
	const nome = document.getElementById('nome').value;
	const altura = document.getElementById('altura').value;
	const peso = document.getElementById('peso').value;
	const resultado = document.getElementById('resultado');

 
 	if (nome !== '' && altura !== '' && peso !== '') {
 	
 		const valorIMC = (peso / (altura * altura)).toFixed(1);

 		let classificacao = ''; 

 			 if (valorIMC < 18.5){
            	classificacao = 'abaixo do peso.';

 			} else if (valorIMC < 25) {
 				classificacao = 'Parabens!! você esta com peso ideal';

 			} else if (valorIMC < 30){
 				classificacao = 'você esta com levemente acima do peso.';

 			} else if (valorIMC < 35){
 				classificacao = 'voce esta Obesidade Grau l.';

 			} else if (valorIMC < 40){
 				classificacao = 'voce esta Obesidade Grau ll.';

 			} else {
 				classificacao = 'voce esta Obesidade Grau llL. Cuidado!!!.';
 			}


 	        resultado.textContent = `${nome} seu IMC é ${valorIMC} é voce esta ${classificacao}`;
 	         
 	   } else {
 	   		resultado.textContent = 'preencha os campos!'	
 	   }
	
	}




calcular.addEventListener('click', imc);