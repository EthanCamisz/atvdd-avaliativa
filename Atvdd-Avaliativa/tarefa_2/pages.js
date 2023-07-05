const http = require('http')
const port = 65535

const server = http.createServer((requicao, resposta)=>{
    if(requicao.url === '/'){
        resposta.writeHead(200, {'Content-Type':'text/html'})
        resposta.write('<h1>Bem vindo a página inicial</h1>')
    }else if(requicao.url === '/sobre'){
        resposta.writeHead(200, {'Content-Type':'text/html'})
        resposta.write('<h1> Sobre nós: somos uma empresa dedicada a...</h1>')
    }
})
server.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})