const x = 10;

if(!Number.isInteger(x))
{
    throw new Error('o valor de x não é um número inteiro')
}

console.log('continuando o código.')