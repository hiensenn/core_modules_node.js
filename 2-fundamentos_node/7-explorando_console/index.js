const a = 10;
const b = 'hiensen';
const c = [1,2];
const d = 'programador';

console.log(a,b,c);

//contagem de impressoes

console.count(`valor de a é ${a}, contagem`);
console.count(`valor de a é ${a}, contagem`);
console.count(`valor de a é ${a}, contagem`);
console.count(`valor de a é ${a}, contagem`);

//variavel entre string
console.log("o nome é %s e ele é :  %s", b, d);

//limpar console

setTimeout(() => {
    console.clear()
}, 2000)