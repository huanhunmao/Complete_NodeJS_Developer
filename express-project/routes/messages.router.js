const express = require('express');

const messagesController = require('../controllers/messages.controller')

const messagesRouter = express();

messagesRouter.get('/', messagesController.getMessages)

messagesRouter.post('/', messagesController.postMessages)

module.exports = messagesRouter