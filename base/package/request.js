const axios = require('axios');

axios.get('https://www.baidu.com')
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })
    .then(() => {
        console.log('All done!');
    })