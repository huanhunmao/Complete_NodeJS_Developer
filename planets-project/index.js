const parse = require('csv-parse');
const fs = require('fs');

const results = []

// 宜居星球 条件
function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse.parse({
    comment:'#',
    columns: true
    }))
    .on('data', (data) => {
        if(isHabitablePlanet(data)){
            results.push(data);
        }
    })
    .on('error', err => {
        console.error(err);
    })
    .on('end', () => {
        console.log(results.map((planet) => {
            return planet['kepler_name']
        }));
        console.log(`${results.length} habitable planets found!`);
    })