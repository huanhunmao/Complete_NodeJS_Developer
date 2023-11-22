const express = require('express')

const app = express()

const PORT = 3000

function delay(duration) {
    const startTime = Date.now()
    while(Date.now() - startTime < duration) {
        // event loop blocked
    }
}


app.get('/', (req, res) => {
    res.send('Performance example')
})

app.get('/timer', (req, res) => {
    delay(9000)
    res.send('Dinging Dinging Dinging')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})