const express = require('express');

const {httpGetAllLaunch, httpAddLaunch} = require('./launches.controller')

const  launchesRouter = express.Router();

launchesRouter.get('/launches', httpGetAllLaunch);
launchesRouter.post('/launches', httpAddLaunch);

module.exports = launchesRouter;