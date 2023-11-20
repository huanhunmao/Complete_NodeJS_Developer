const {getAllLaunches, addNewLaunch} = require('../../models/launches.model')

function httpGetAllLaunch(req, res){
    // Array.from 将数据拆分放到一个数组内
    return res.status(200).json(getAllLaunches())
}

function httpAddLaunch(req, res){
    const launch = req.body 

    launch.launchDate = new Date(launch.launchDate)

    addNewLaunch(launch)

    return res.status(201).json(launch)
}

module.exports = {
    httpGetAllLaunch,
    httpAddLaunch
}