const {launches} = require('../../models/launches.model')

function getAllLaunch(req, res){
    // Array.from 将数据拆分放到一个数组内
    return res.status(200).json(Array.from(launches.values()))
}

module.exports = {
    getAllLaunch
}