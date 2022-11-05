function shuffleMusicas(musicasTocadas) {
    const arr=musicasTocadas
    const Decrescente=[]
    
    const getMaxOfArray=(numArray)=> {
        return Math.max.apply(null, numArray);
    }

    for(let i=0;i<musicasTocadas.length; i++){
        Decrescente[i]=getMaxOfArray(arr)
        arr.splice(arr.indexOf(getMaxOfArray(arr)),1,-1)
    }

    
    
  }

shuffleMusicas([2,10,5,3])