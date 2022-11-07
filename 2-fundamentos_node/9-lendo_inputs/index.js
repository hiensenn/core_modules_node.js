const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual o seu nome ? : ", (hiensen) => {
    
    console.log(`meu nome é : ${hiensen}`);
    readline.close();
})