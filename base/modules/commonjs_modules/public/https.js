const {send} = require('../request')
const {read} = require('../response')

function makeRequest(url, data){
    // request.send(url, data);
    // return response.read()
    send(url, data)
    return read()
}

const responseData = makeRequest('https://www.baidu.com', 'hello baidu.com')
console.log('responseData', responseData); // responseData response data