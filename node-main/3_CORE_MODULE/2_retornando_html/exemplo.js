const http = require('http')
const port = 65535

const server = http.createServer((requicao, resposta)=>{
    if(requicao.url === '/'){
        resposta.writeHead(200, {'Content-Type':'text/html'})
        resposta.write('<h1>Página Home</h1>')
    }else if(requicao.url === '/sobre'){
        resposta.writeHead(200, {'Content-Type':'text/html'})
        resposta.write('<h1>Página Sobre</h1>')
    }else if(requicao.url === '/contato'){
        resposta.writeHead(200, {'Content-Type':'text/html'})
        resposta.write('<h1>Página Contato</h1>')
    } else {
        resposta.writeHead(200, {'Content-Type':'text/html'})
        resposta.write('<h1>Página não Encontrada</h1>')
    }
})
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})