const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HorseSchema = new Schema({
    name: String,
    registeredName: String,
    birthYear: Number,
    breed: String,
    gender: String
})