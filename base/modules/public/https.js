const request  = require('../request')
const response = require('../response')

function makeRequest(url, data){
    request.send(url, data);
    return response.read()
}

const responseData = makeRequest('https://www.baidu.com', 'hello baidu.com')
console.log('responseData', responseData); // responseData response data