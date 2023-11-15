const express = require('express');

const friendsController = require('../controllers/friends.controller')

const friendsRouter = express();

// 可以添加 中间件
friendsRouter.use((req, res, next) => {
console.log('ip address', req.ip);
next()
})

friendsRouter.post('/', friendsController.postFriends)

friendsRouter.get('/', friendsController.getFriends)

friendsRouter.get('/:id', friendsController.getFriendById)

module.exports = friendsRouter