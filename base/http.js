const { get } = require('https');

get('https://www.baidu.com', (res) => {
    
    // 错误处理
    res.on('error', (err) => {
        console.log(`Error: ${err}`);
    });

    // 当收到数据块时
    res.on('data', (chunk) => {
        console.log(`Data chunk: ${chunk}`);
    });

    // 数据接收完毕
    res.on('end', () => {
        console.log('No more data');
    });

});
