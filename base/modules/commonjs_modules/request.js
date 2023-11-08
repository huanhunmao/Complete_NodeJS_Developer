function encrypt(data){
    return 'encrypt data'
}

function send(url, data){
    const encryptData = encrypt(data)
    console.log(`sending ${encryptData} to ${url}`);
}

console.log(module); // 每个 js 文件本身就是一个 module ?

module.exports = {
    send
}