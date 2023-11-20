const express = require('express');

const {httpGetAllLaunch, httpAddLaunch} = require('./launches.controller')

const  launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunch);
launchesRouter.post('/', httpAddLaunch);

module.exports = launchesRouter;