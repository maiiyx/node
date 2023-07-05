const http = require('http')
const port = 4000

const server = http.createServer((req, res)=>{
    //Rotas localhost:3000/about
    // /-> Caminho principal da aplicação
    // /about -> Rota que possui uma página sobre
    
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type':'text/plan'})
        req.end('Página Inicial')

    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type':'text/plan'})
        res.end('Página Sobre')

    }else{
        res.writeHead(404, {'Content-Type':'text/plan'})
        res.end('Página não encontrada')
    }
})

server.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`)
})