const fs = require('fs');

const arqAtual = 'novoarquivo.txt';
const arqNovo = 'novo.txt';

fs.rename(arqNovo,arqAtual,  function(err){
    if(err){
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqNovo} foi renomeado para ${arqNovo}`);
})