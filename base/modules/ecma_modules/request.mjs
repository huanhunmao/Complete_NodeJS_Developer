function encrypt(data){
    return 'encrypt data'
}

function send(url, data){
    const encryptData = encrypt(data)
    console.log(`sending ${encryptData} to ${url}`);
}

export {
    send
}