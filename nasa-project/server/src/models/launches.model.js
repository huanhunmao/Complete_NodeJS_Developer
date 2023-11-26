const launchesDatabase = require('./launches.mongo')
const planets = require('./planets.mongo')

let lastFlightNumber = 100

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

function existsLaunchWithId(launchId) {
    return launches.has(launchId)
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

    await launchesDatabase.updateOne({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    })
}

function addNewLaunch(launch) {
    lastFlightNumber ++
    launches.set(
        lastFlightNumber,
         Object.assign(launch,{
            success: true,
            upcoming: true,
            customers:['ZTM','NASA'],
            flightNumber: lastFlightNumber
         })
         )
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId)
    aborted.success = false
    aborted.upcoming = false
    return aborted
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existsLaunchWithId,
    abortLaunchById
}