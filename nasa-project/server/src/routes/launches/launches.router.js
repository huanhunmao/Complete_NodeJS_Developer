const express = require('express');

const {getAllLaunch} = require('./launches.controller')

const  launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunch);

module.exports = launchesRouter;