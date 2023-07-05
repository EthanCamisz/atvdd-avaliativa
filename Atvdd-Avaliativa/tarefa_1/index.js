const http = require('http')
const port = 2222

const serve = http.createServer((req, res)=>{
    //res.writeHead(200, {'Content-Type':'text/html'})
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    res.end('<h1> Olá, Mundo! </h1>')
})

serve.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
