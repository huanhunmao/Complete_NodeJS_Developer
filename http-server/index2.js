// 添加 路由
const http = require('http');

const PORT = 3000

const server  = http.createServer()

server.on('request', (req, res) => {
    if(req.url === '/friends'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            id: 1,
            name: "I have two friends",
        }))
    }else if(req.url === '/messages'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<html')
        res.write('<body>')
        res.write('<ul>')
        res.write('<li>Hello ppx</li>')
        res.write('<li>Here are some messages</li>')
        res.write('</html')
        res.write('</body>')
        res.write('</ul>')
        res.end()
    }else{
        res.statusCode = 404
        res.end()
    }
})

server.listen(PORT)