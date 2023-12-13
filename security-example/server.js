const express = require('express');
const https = require('https');
const path = require('path');
const fs = require('fs');

const PORT = 3000;

const app = express();

app.get('/secret', function (req, res) {
    return res.send('Your personal secret value is 666');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
    // 如果证书有密码，添加 passphrase 选项
    // passphrase: 'your_certificate_password',
};

https.createServer(options, app).listen(PORT, function (err) {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Server listening on port ' + PORT);
    }
});
