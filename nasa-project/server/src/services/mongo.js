const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://Marxu:oTMvsMcuNTU4LtHh@nasacluster.um1swxj.mongodb.net/?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
})

mongoose.connection.once('error', (error) => {
    console.error(error)
})

async function mongoConnect() {
   await mongoose.connect(MONGO_URL, {
    })
}

module.exports = {
    mongoConnect
}