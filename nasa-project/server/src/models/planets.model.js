const parse = require('csv-parse');
const fs = require('fs');
const path = require('path');
const planets = require('./planets.mongo');

// 宜居星球 条件
function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6
}

function loadPlanetsData(){
    return new Promise((resolve, reject) =>{
        // fs.createReadStream('data/kepler_data.csv')
        fs.createReadStream(path.join(__dirname, '..', '..','data','kepler_data.csv'))
        .pipe(parse.parse({
        comment:'#',
        columns: true
        }))
        .on('data', async (data) => {
            if(isHabitablePlanet(data)){
                // results.push(data);
            //    await planets.create({ // 但问题是 会重复多次创建 
            //         keplerName: data.kepler_name,
            //     });
            // 只创建 一次 使用 updateOne
            await planets.updateOne({
                keplerName: data.kepler_name,
            },{
                keplerName: data.kepler_name,
            },{
                upsert: true,
            })
            }
        })
        .on('error', err => {
            console.error(`Could not save planet ${err}`);
            reject(err);
        })
        .on('end', async () => {
            // console.log(results.map((planet) => {
            //     return planet['kepler_name']
            // }));
            const countPlanetsFound = (await getAllPlanets()).length;
            console.log(`${countPlanetsFound} habitable planets found!`);
            resolve()
        })
    })
}

async function getAllPlanets(){
    // return results
    return await planets.find({},
        {
        "_id":0,
        "__v":0
        }
    )
}

module.exports = {
    loadPlanetsData,
    getAllPlanets
}