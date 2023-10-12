const mongoose = require('mongoose');


mongoose.connect(process.env.MongoDbUrl)
const connection = mongoose.connection

connection.on('connected', () => {
    console.log('Connection Successful');
})