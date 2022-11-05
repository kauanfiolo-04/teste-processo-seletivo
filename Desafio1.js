// Você e seu time estão desenvolvendo um sistema de indicações de postos de gasolina que ficam próximos da localização atual do veículo. 
// No modo de direção “viagem”, a funcionalidade a ser desenvolvida é de indicar ao condutor o posto mais distante possível dentro do limite 
// atual de combustível. E caso não exista posto de gasolina, retornar -1
// A pessoa responsável por fazer a especificação do sistema informou que você terá as seguintes informações: consumo médio de combustível, 
// quantidade de combustível restante no veículo e um array contendo distâncias dos postos de gasolinas.
// Exemplo: Combustivel (em litros): 2 Consumo médio (km/l): 8 Distancia maxima 16 Postos de Gasolina (km): [2, 15, 22, 10.2

function ultimaParada(combustivel,consumo,postosDeGasolina) {
    const KmsRestantes= combustivel*consumo
    var postoMaisLongePossivel=0
    let valor
    postosDeGasolina.forEach(element=>{
      if(KmsRestantes>=element){
        if(element>postoMaisLongePossivel){
          postoMaisLongePossivel=element
        }
      }
    })
    
    
   //Fazer uma nova array pra verificar quando não há postos disponiveis
    
   //Subtrai o KmRestante da distancia dos postos para obter valores positivos ou nulos como possiveis postos
    const array= postosDeGasolina.map(item=>{
      return KmsRestantes-item
    })

    console.log(array)

    const arrayMaioresQueZero= array.filter(item=>item>0)
    if(arrayMaioresQueZero.length===0){
        valor=-1
    }else{
        valor= postoMaisLongePossivel
    }
    return  valor
  }

  console.log(ultimaParada(2,8,[2,15,22,11]))