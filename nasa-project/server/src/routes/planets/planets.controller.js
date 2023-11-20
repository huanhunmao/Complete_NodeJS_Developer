const {getAllPlanets} = require('../../models/planets.model')

function httpGetAllPlanets(req, res){
    // status 200 express 会默认返回 但是还是 明确写出来更好
    return res.status(200).json(getAllPlanets())
}

module.exports = {
    httpGetAllPlanets
}