const express = require('express')
const cluster = require('cluster')
const os = require('os')

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
    // cluster.fork()
    // cluster.fork()

    // 根据 cpu 数量 来决定创建多少个 fork
    const NUM_WORKERS = os.cpus().length 
    console.log('NUM_WORKERS',NUM_WORKERS); // 12

    for(let i = 0; i < NUM_WORKERS; i++){  // 这样 即使开 4个 tab 时间也都差不多是 9s
        cluster.fork()
    }
}else{
    console.log('Worker is been started ... ');
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
}

