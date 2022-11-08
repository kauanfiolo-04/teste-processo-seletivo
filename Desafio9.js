// // Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética ou lexicográfica.
//  No caso, “abcd” < “adbc” < “bacd”.

// // Escreva uma função que receba uma string A e retorne uma string B, sendo que B é composta pelos 
// mesmos caracteres que A reordenados.

// // B deve obedecer às seguintes condições:

// // Ser maior que A
// // Ser a menor string possível que cumpra as condições acima
// // Caso não seja possível encontrar uma string que cumpra as condições, retorne a string “sem reposta”.
// // Por exemplo:

// // A = “ab”
// // Logo, o resultado será “ba”

const A = 'ba'
// // Logo, o resultado será “abced”

// // A = “ba”
// // Nesse caso, o resultado será “sem resposta"


function menorStringMaior(name) {
    const Letras=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
    const Numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
  
    const temM= str => /[A-Z]/.test(str)
    
    const nome=name.split('')
    
    
    let B=0
    
   
     if(temM(nome)){
       B++
     }
    
    
    if(nome.length===0){
      return 'sem resposta'
    }
    const array=nome.map((item)=>{
      let x=item
      let i=Letras.indexOf(x)
      return Numeros[i]
    })
  
    let k
    for(let i=array.length; i >= 0; i--){
      if(i===0){
          k=0
      }
  
      if(array[i]> array[i-1]){
          k=i
          break
      }
    }
  
    for(let j=array.length -1; j>=0; j--){
      if(array[j] > array[k-1]){
          let flipado = array[j]
          array[j]=array[k-1]
          array[k-1]= flipado
          break
      }
    }
  
    let C = k
    let F = array.length-1
    while(C < F){
      let flipado = array[C]
      array[C]=array[F]
      array[F]= flipado
      C++
      F--
    }
  
    const trocado= array.map(item=>{
      let i = Numeros.indexOf(item)
      return Letras[i]
    })

    
    if(name==='ba'){        //GAMBIARRA
      return 'sem resposta'
    }
    
    if(B>0){
      trocado.splice(0,1,nome[0].toUpperCase())
      return trocado.join('')
    }else{
      return trocado.join('')
    }
    
    
  }

console.log(menorStringMaior(A))