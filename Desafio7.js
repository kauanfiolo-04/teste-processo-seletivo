// A cada 2 quadrados adicionados o numero de led's adicionados é 3, e o quociente do número de quadrados 
// dividido por 2 ao ser acrescentado em uma unidade e ser multiplicado novamente por 3 gera o número de led's

function calculaTotalLeds(altura,largura) {
  const qtdeQuad= altura*largura
  if(qtdeQuad===0){
    return 0
  }else{
    return (altura+1)*(largura+1)
  }
}