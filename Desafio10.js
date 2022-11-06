function shuffleMusicas(musicasTocadas) {
    const arr=musicasTocadas
    const Decrescente=[]
    const embaralhado=[]
    let arry=Decrescente

    const maiorDaArray=(numArray)=> {
        return Math.max.apply(null, numArray);
    }

    const menorDaArray=(numArray)=> {
        return Math.min.apply(null, numArray);
    }

    for(let i=0;i<musicasTocadas.length; i++){
        Decrescente[i]=maiorDaArray(arr)
        arr.splice(arr.indexOf(maiorDaArray(arr)),1,-1)
    }

    arr.forEach((_,index)=>{
        
        if(index %2!==0){
            embaralhado[index]=menorDaArray(arry)
            arry.splice(arry.indexOf(menorDaArray(arry)),1)
            console.log(arry)
            
        }else{
            embaralhado[index]=maiorDaArray(arry)
            arry.splice(arry.indexOf(maiorDaArray(arry)),1)
            console.log(arry)
        }
        
    })
    
    return embaralhado
    
    
}

console.log(shuffleMusicas([2,10,5,3]))