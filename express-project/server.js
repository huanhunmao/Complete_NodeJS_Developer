const express = require('express');

const messagesController = require('./controllers/messages.controller')
const friendsController = require('./controllers/friends.controller')

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
    console.log(`${req.method} ${req.url} ${delta}ms`);
})

app.use(express.json())

app.post('/friends', friendsController.postFriends)

app.get('/', (req, res) => {
    res.send('Hellooooooo')
})

app.get('/friends', friendsController.getFriends)

app.get('/friends/:id', friendsController.getFriendById)

app.get('/messages', messagesController.getMessages)

app.post('/messages', messagesController.postMessages)

app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`);
})