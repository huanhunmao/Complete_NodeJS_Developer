const internals = require('./internals')

function makeRequest(url, data){
    // request.send(url, data);
    // return response.read()
    internals.send(url, data)
    return internals.read()
}

const responseData = makeRequest('https://www.baidu.com', 'hello baidu.com')
console.log('responseData', responseData); // responseData response data