const path = require('path');

function getMessages(req, res) {
    // res.send('<ul><li>Hello PPX</li></ul>')
    // __dirname 表示当前文件夹 
    // 上一级的 public 下面的 xxx.jpg 图片
    res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'))
}

function postMessages(req, res)  {
    console.log('Updating messages ...');
}

module.exports = {
    getMessages,
    postMessages
}