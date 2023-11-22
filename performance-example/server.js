const express = require('express')
const cluster = require('cluster')

const app = express()

const PORT = 3000

function delay(duration) {
    const startTime = Date.now()
    while(Date.now() - startTime < duration) {
        // event loop blocked
    }
}


app.get('/', (req, res) => {
    res.send(`Performance example  ${process.pid}`)
})

app.get('/timer', (req, res) => {
    delay(9000)
    res.send(`Dinging Dinging Dinging ${process.pid}`)
})

console.log('running server.js');
// 两个 tab 访问 http://localhost:3000/timer  结果都是 9s 不会变成两倍
// 一个 tab 访问 /  一个访问 /timer  第一个 非常快
if(cluster.isMaster) {
    console.log('Master is been started ... ');
    cluster.fork()
    cluster.fork()
}else{
    console.log('Worker is been started ... ');
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
}

