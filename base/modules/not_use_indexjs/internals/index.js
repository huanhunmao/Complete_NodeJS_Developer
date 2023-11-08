// module.exports = {
//     request: require('./request'),
//     response: require('./response'),
// }

// 可以这样 写
// const request = require('./request');
// const response = require('./response');

// module.exports = {
//     send: request.send,
//     read: response.read
// }

// 直接这样写 
module.exports = {
    ...require('./request'),
    ...require('./response'),
}