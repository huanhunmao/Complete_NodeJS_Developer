// 1 base
// const EventEmitter = require('events')
// const celebrity = new EventEmitter()

// // 监听
// celebrity.on('race win', () => {
//     console.log('you has win best!');
// })

// celebrity.on('race fail', () => {
//     console.log('can do better!');
// })

// // 触发 
// celebrity.emit('race win')
// celebrity.emit('race fail')

// 2  advantage 传递 参数 
const EventEmitter = require('events')
const celebrity = new EventEmitter()

celebrity.on('race', (result) => {
    if(result === 'win'){
        console.log('win your best!');
    }
})

celebrity.on('race', (result) => {
    if(result === 'lost'){
        console.log('can do better!');
    }
})

celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')