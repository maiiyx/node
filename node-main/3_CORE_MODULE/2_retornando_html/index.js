const http = require('http')
const port = 3333

const server = http.createServer((req, res)=>{
    //res.writeHead(200, {'Content-Type':'text/html'})
    res.statusCode = 200
    res.setHeader({'Content-Type':'text/html'})
    res.end('<h1>Olá, Este é meu primeiro serve com HTML!</h1>')
})

server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})