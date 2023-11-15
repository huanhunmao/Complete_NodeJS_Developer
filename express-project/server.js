const express = require('express');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

// middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`)
//     next()
// })

app.use((req, res, next) => {
    const start = Date.now()
    next()
    const delta = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
})

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hellooooooo')
})

app.use('/friends', friendsRouter)

app.use('/messages', messagesRouter)

app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`);
})