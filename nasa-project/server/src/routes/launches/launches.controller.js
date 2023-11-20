const {getAllLaunches} = require('../../models/launches.model')

function httpGetAllLaunch(req, res){
    // Array.from 将数据拆分放到一个数组内
    return res.status(200).json(getAllLaunches())
}

module.exports = {
    httpGetAllLaunch
}