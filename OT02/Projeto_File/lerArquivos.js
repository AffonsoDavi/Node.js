var fs = require('fs');

fs.appendFile('novo.txt', 'Olá NodeJS! SENAI', function (err) {
    if (err) throw err;
    console.log('Arquivo Salvo com Texto Inicial!');
});  

fs.writeFile('novo.txt', 'UNISENAI', function (err) {
    if (err) throw err;
    console.log('Conteúdo do Arquivo Atualizado para UNISENAI!');    
});    
        
fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function (err) {
   if (err) throw err;
    console.log('Arquivo Renomeado para ArquivoNovoRenomeado.txt!');      
});

fs.unlink('ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo Deletado: ArquivoNovoRenomeado.txt');
});
