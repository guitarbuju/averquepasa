const dotenv=require('dotenv').config()
const mongoose= require('mongoose')

mongoose.connect(process.env._URL)
const mongo=mongoose.connection

mongo.on('error', (error) => console.error(error));
mongo.once('open', () => {
    console.log('connected to database');
});

module.exports = mongo;