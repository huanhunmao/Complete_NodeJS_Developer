const express = require('express')
const cors = require('cors');
const path = require('path');

const planetRouter = require('./routes/planets/planets.router')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use(planetRouter)
// 确保第一页打开就是 index.html 内容
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','public','index.html'));
} )

module.exports = app