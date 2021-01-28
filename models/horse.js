const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const HorseSchema = new Schema({
    name: String,
    registeredName: String,
    birthYear: Number,
    breed: String,
    gender: String
})

HorseSchema.virtual('age').get(function () {
    const currentDate = new Date(Date.now());
    return currentDate.getFullYear() - this.birthYear;
});

module.exports = mongoose.model('Horse', HorseSchema);