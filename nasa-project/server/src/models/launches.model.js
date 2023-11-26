const launchesDatabase = require('./launches.mongo')
const planets = require('./planets.mongo')

const DEFAULT_FLIGHT_NUMBER = 100

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers:['ZTM','NASA'],
    upcoming:true,
    success: true
}

saveLaunch(launch)

async function existsLaunchWithId(launchId) {
    return await launchesDatabase.findOne({
        flightNumber: launchId
    })
}

async function getLatestFlightNumber(){
    // findOne()用于查找匹配查询条件的第一条记录
    // sort('-flightNumber')用于按照flightNumber字段降序排列结果
    const latestLaunch = await launchesDatabase.findOne().sort('-flightNumber')

    if(!latestLaunch) return DEFAULT_FLIGHT_NUMBER

    return latestLaunch.flightNumber
}

async function getAllLaunches() {
    return await launchesDatabase.find(
        {},{
            "_id":0,
            "__v":0
    })
}

async function saveLaunch(launch) {
    const planet =  await planets.findOne({
        keplerName: launch.target
    })

    if(!planet){
        throw new Error('Not matching planet found')
    }

    await launchesDatabase.findOneAndUpdate({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    })
}

async function scheduleNewLaunch(launch) {
    const newFlightNumber = await getLatestFlightNumber() + 1

    const newLaunch = Object.assign(launch, {
        success: true,
        upcoming: true,
        customers:['ZTM','NASA'],
        flightNumber: newFlightNumber
    })

    await saveLaunch(newLaunch)
}

async function abortLaunchById(launchId) {
    const aborted =  await launchesDatabase.updateOne({
        flightNumber: launchId
    },{
        upcoming: false,
        success: false,
    })

    return aborted.modifiedCount === 1
    // const aborted = launches.get(launchId)
    // aborted.success = false
    // aborted.upcoming = false
    // return aborted
}

module.exports = {
    getAllLaunches,
    scheduleNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}