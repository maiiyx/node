const http = require('http')
const port = 3000

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plan'})
    res.end('Olá, Mundo!')
})

server.listen(3000, ()=>{
    console.log(`Servidor Rodando na porta ${port}`)
})