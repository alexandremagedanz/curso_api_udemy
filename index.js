const http = require('http');
const url = require('url');

http.createServer((request, respose) => {
    const parseUrl = url.parse(request.url, true)
    const pathName = parseUrl.pathName
    const queryParms = parseUrl.query

    if (pathName === '/favicon.ico') {
        respose.writeHead(404)
        respose.end();
        return;
    }
    console.log(queryParms)

    if (request.method === 'GET'){
        respose.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
        respose.write('A Soma é ' + (Number(queryParms.num1) + Number(queryParms.num2)));
        respose.end(); 
    }
}).listen(9090)
