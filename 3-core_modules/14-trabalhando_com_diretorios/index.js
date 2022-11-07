const fs = require("fs");

if(!fs.existsSync('./minhapasta2')){
    console.log("Não existe");
    fs.mkdirSync("minhapasta2");
} else if(fs.existsSync('./minhapasta2')){
    console.log(" existe!");
} 