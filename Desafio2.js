// Você está trabalhando para uma empresa que fornece materiais escolares e precisa da sua ajuda para entrar no mundo digital.
// Como primeira atividade, você identificou que não existe uma funcionalidade que é muito importante para a empresa ter mais 
// controle sobre os valores dos produtos vendidos. 
// Esta funcionalidade consiste em descobrir o maior e o menor valor dos produtos vendidos em um período de tempo, para cada vendedor.

// Os valores das vendas que devem ser consideradas podem variar entre 20 e 500 reais e estão agrupados por vendedores.
// Além disso, deve-se ignorar as devoluções, que estão indicadas com o valor 0.

// A sua função/método deverá receber uma lista vendas agrupadas por vendedores,
//  (e.g. [[200, 100], [300]]) e retornar um array onde a primeira posição contém o menor valor e a segunda posição o maior valor 
//  (e.g. [100, 300]).

// Mas preste atenção! Algum vendedor pode não ter realizado vendas no período.

function retornaMenorEMaiorValorDeVendas(tickets) {
    let menor=0
    let maior=0
    
    //como temos array dentro de array vou ter q usar um laço dentro de outro
    
    tickets.forEach(element=>{
      element.forEach(item=>{
        
        if(item >= 20 && item <= 500 && item!=0){
          if(item > maior){
            maior=item
            console.log(`Maior:${maior}`)
          }
          if(item < menor || menor == 0){
            menor=item
            console.log(`Menor:${menor}`)
          }
        }
       
         
       })
    })
    return Array.of(menor,maior)
  }