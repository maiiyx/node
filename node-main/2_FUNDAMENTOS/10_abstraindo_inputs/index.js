const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?'
    }
])
.then((answers)=>{
     console.log(answers)
     const media = ((Number(answers.p1)+ Number(answers.p2)) /2).toFixed(2)
     if(media < 6){
        'Reprovado'
     }else{
        "Aprovado"
     }
})
.catch(err => console.log(err))