function calculateSalary(salario, vendas) {
        let comissao = 0;
        let comissaoMaior = 0;
        let salarioTotal;
        if(vendas <= 1200){
          comissao  = 1200 * 0.03;
          salarioTotal = salario + comissao;
        }else if(vendas > 1200){
            comissao = (1200 * 0.03);
            comissaoMaior = (vendas * 0.05 ) + comissao ;
            salarioTotal = comissaoMaior + salario;
        }

        return salarioTotal;
}



function calculateStock(quantminima, quantmaxima, quantatual){
    let quantmedia = 0;
    let resultado
    quantmedia = (quantmaxima + quantminima) / 2;
    if(quantatual >= quantmedia){
       resultado = 'Não efetuar compra';
    }else{
       resultado = 'Efetuar a compra';
    }

    return resultado;

}

function calculateAge(anoNasc, anoAtual){
    let quantidadeAnos = 0;
    let quantidadeMeses = 0;
    let quantidadeDias = 0;
    let quantidadeSemanas = 0;
    quantidadeAnos = anoAtual - anoNasc;
    quantidadeMeses = quantidadeAnos * 12;
    quantidadeDias = quantidadeAnos * 365;
    quantidadeSemanas = quantidadeAnos * 52;
    
    return 'A sua idade em anos é igual: ' + quantidadeAnos  
    + '\nA sua idade em meses  é igual: ' + quantidadeMeses  
    + '\nA sua idade em dias é igual: ' + quantidadeDias  
    + '\nA sua idade em semanas é igual: ' + quantidadeSemanas; 
 }

  //console.log(calculateAge(1997, 2021));

  function getDiagonal(matriz){
      let diagonal = [];

      for(let linha = 0; linha < matriz.length; linha++){
          for(let coluna = 0; coluna < matriz.length; coluna++){
              if( linha === coluna){
                  diagonal.push(matriz[linha][coluna]);
              }
          }
      }

      return diagonal;
  }
  
  function cashMachine(saque){
    let notade100 = 0;
    let notade50 = 0;
    let notade20 = 0;
    let notade10 = 0;
    let notade5 = 0;
    let notade2 = 0;
    let notade1 = 0;
    
    let resposta = '';

    while( saque > 0){
        if(saque >= 100){
            notade100++;
            saque -= 100;
            resposta = notade100 + 'nota(s) de 100 reais \n';
        }else if(saque >= 50){
            notade50++;
            saque -= 50;
            resposta += notade50 + 'nota(s) de 50 reais \n';

        }else if(saque >= 20){
            notade20++;
            saque -= 20;
            resposta += notade20 + 'nota(s) de 20 reais \n';

        }else if(saque >= 10){
            notade10++;
            saque -= 10;
            resposta += notade10 + 'nota(s) de 10 reais \n';
        }else if(saque >= 5){
            notade5++;
            saque -= 5;
            resposta += notade5 + 'nota(s) de 5 reais\n';
        }else if(saque >= 2){
            notade2++;
            saque -= 2;
            resposta += notade2 + 'nota(s) de 2 reais \n';
    } else if(saque === 1){
           notade1++;
           saque  -= 1;
           resposta += notade1 + 'nota de 1 reais \n';
    }

  }
      return resposta;
  }

