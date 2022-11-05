// Dada um texto qualquer e um lista de termos de pesquisa (sequencia de caracteres),
// retorne os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

// Exemplo:
// String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

// Lista de termos: ["a", "em", "i", "el"]

// K: 2

// Resultado: ["i", "a"]

// Explicação:

// Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2, retornamos "i" e "a" ordenados conforme a quantidade de
// ocorrências de cada termo.

// Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo com a ordem de ocorrência do termo na string.


function calculaTopOcorrenciasDeQueries(texto,queries,k) {
    const text=texto
    const Decrescente=[]


    const arraySplitada= text.split(' ')
    
    const arr=queries.map(item=>{
      let count=0
      arraySplitada.forEach(element=>{
        if(element.includes(item)){
          count++
        }
      })
       return count
    }) 
    
    
    const getMaxOfArray=(numArray)=> {
        return Math.max.apply(null, numArray);
    }

    for(let i=0; i<k; i++){
        let maior=getMaxOfArray(arr)
        console.log(maior)
        Decrescente[i]=queries[arr.indexOf(maior)]
        arr.splice(arr.indexOf(maior), 1, -1)
        console.log(arr)
    }

    console.log(Decrescente)
}

const texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"

  calculaTopOcorrenciasDeQueries(texto,["a","em","i","el"],2)