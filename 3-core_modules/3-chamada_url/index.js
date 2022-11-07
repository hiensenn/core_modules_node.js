const url = require('url');

const adress = 'https://www.hiensen.com.br/catalag?produtos=mesa';

const parsedUrl = new url.URL(adress);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));