

// 命令：openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365

// req: 这个参数指定了使用证书请求相关的功能。
// -x509: 表示生成自签名的X.509证书。
// -newkey rsa:4096: 用于生成一个新的RSA私钥，并指定了密钥的位数为4096位。
// -nodes: 表示不使用加密来保护生成的私钥，没有密码。
// -keyout key.pem: 指定生成的私钥保存的文件名为key.pem。
// -out cert.pem: 指定生成的证书保存的文件名为cert.pem。
// -days 365: 指定证书的有效期为365天。
// 这个命令将生成一个私钥文件 key.pem 和一个自签名的证书文件 cert.pem，有效期为365天。请注意，自签名的证书在生产环境中通常不够安全，建议在生产环境中使用由受信任的证书颁发机构（CA）签发的证书