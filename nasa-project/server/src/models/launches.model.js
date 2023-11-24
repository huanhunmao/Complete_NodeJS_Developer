// const launches = require('./launches.mongo')

const launches = new Map()

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

launches.set(launch.flightNumber, launch)

function existsLaunchWithId(launchId) {
    return launches.has(launchId)
}

function getAllLaunches() {
    return Array.from(launches.values())
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