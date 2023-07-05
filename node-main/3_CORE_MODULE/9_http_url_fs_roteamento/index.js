const http = require('http')
const url = require('url')
const fs = require('fs')

const PORT = 3000

const server = http.createServer((req, res)=>{
    const q = url.parse(req.url, true)
    const fileName = q.pathname.substring(1)
    //localhost:3000/index.html
    //                 0  .  1
        if(fileName.includes('html')){
            if(fs.existsSync(fileName)){
                fs.readFile(fileName, function (err, data) {
                    res.writeHead(200, {'Content-Type':'text/html'});
                    res.write(data);
                    return res.end();
                });
            } else{
                
            }
        }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on na porta: ${PORT}🤠`)
})