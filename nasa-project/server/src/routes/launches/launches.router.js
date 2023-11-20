const express = require('express');

const {httpGetAllLaunch} = require('./launches.controller')

const  launchesRouter = express.Router();

launchesRouter.get('/launches', httpGetAllLaunch);

module.exports = launchesRouter;