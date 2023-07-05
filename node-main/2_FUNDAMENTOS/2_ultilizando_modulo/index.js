// const fs = require('fs')
// fs.readFile('arquivo.txt', 'utf8', (err, data) => {
//     if (err){
//         console.log(err)
//     }
//      console.log(data) 
// })


const fs = require('fs')
fs.rename('arquivo.txt', 'novo_arquivo', function (err) {
    if
        (err) throw(err)
    
        console.log('updated')
})