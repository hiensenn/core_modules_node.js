import chalk from 'chalk'
import inquirer from 'inquirer'

inquirer
.prompt([
    {
        name: 'n1',
        message: 'Qual seu nome ? :',
    }, 
    {
        name: 'n2',
        message: 'Qual a sua idade : ',
    },
])
.then((answers) => {
    if(!answers.n1 || !answers.n2){
        throw new Error("Nome e idade são obrigatórios");
    }

    console.log(chalk.bgYellow.black(`Nome: ${answers.n1} e Idade : ${answers.n2}`));
       
})
.catch((err) => console.log(err))