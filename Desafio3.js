// Durante uma expedição tecnológica, sua equipe encontrou o que parece ser a senha que lhes dá acesso a um grande tesouro digital.
// Por sorte, sua equipe é formada pelas pessoas mais feras em programação e vocês rapidamente descobriram como decifrá-la.

// Com a possibilidade de que vocês encontrem mais códigos contendo outras senhas,
//  você foi designado à tarefa de desenvolver um algoritmo que decifra os códigos para não precisarem fazer isso de forma manual.

// A senha é representada por um número binário de 10 dígitos formado pelo dígito predominante de cada coluna.
// Caso a coluna tenha a mesma quantidade de dígitos 0 e 1, deve se considerar o número 1.

// Exemplo: A primeira coluna da lista tem como dígito predominante o número 1, sendo assim, o primeiro dígito - dos 10 - da senha é 1.

const x = [
  "0110100000", 
  "1001011111", 
  "1110001010", 
  "0111010101", 
  "0011100110",
  "1010011001", 
  "1101100100", 
  "1011010100", 
  "1001100111", 
  "1000011000"  
];
//0111111110
// Desenvolva um algoritmo que receba um array de valores binários (como o exemplo acima) e retorne a representação decimal da senha.

function calculaNumeroDaSenha(senha) {
  

  const matriz=senha.map(item=>{
    return item.split('')
  })

  const columns=matriz.map((row, i)=>{
    let arr=[]
    row.forEach((item, j)=>{
      arr.push(matriz[j][i])
    })
    return arr
  })
         
  const pwdBin= columns.map(item=>{
    let UNS=0
    let ZEROS=0
    item.forEach(element=>{
      element==='1' ? UNS++ : ZEROS++ 
    })
    
    if(UNS>=ZEROS){
      return 1
    }else{
      return 0
    }
  })
   let senhaBin=pwdBin.join('')
   
   return parseInt(senhaBin, 2)
 
}
console.log(calculaNumeroDaSenha(x))

