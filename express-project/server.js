const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id:0,
        name: 'John',
    },
    {
        id:1,
        name:'PPX2'
    },
    {
        id:2,
        name:'Wang3'
    }
]

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

app.get('/', (req, res) => {
    res.send('Hellooooooo')
})

app.get('/friends', (req, res) => {
    res.json(friends)
})

app.get('/friends/:id', (req, res) => {
    const friendId = Number(req.params.id)
    const friend = friends[friendId]
    if(friend){
        res.status(200).json(friend)
    }else{
        res.status(404).json({
            error:'Friend not found'
        })
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello PPX</li></ul>')
})

app.post('/messages', (req, res) => {
    console.log('Updating messages ...');
})

app.listen(PORT, (req, res) => {
    console.log(`Listening on ${PORT}`);
})