const http = require('http')
const port = 65535

const server = http.createServer((req, res) => {
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.writeHead(200, {'Content-Type':'text/html'})
    
    if (!name) {
        res.end('<h1>Preencha seu nome:</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="enviar"><input type="submit" value="enviar><input>/form>')
    }else{
        res.end(`<h1>Seja bem vindo ${name}</h1>`)
    }
})

server.listen(3000, () => {
    console.log(`Servidor Rodando na porta ${port}`)
})