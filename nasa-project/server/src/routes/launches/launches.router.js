const express = require('express');

const {httpGetAllLaunch, httpAddLaunch, httpAbortLaunch} = require('./launches.controller')

const  launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunch);
launchesRouter.post('/', httpAddLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;