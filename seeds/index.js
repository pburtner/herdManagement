const mongoose = require('mongoose');
//const cities = require('./cities');
// const {places, descriptors} = require('./seedHelpers');
const Horse = require('../models/horse');

mongoose.connect('mongodb://localhost:27017/ccrHorses', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async () => {
    await Horse.deleteMany({});
    const horse = new Horse({
        name: 'Autumn',
        registeredName: 'Apples for Autumn',
        birthYear: 2004,
        breed: 'Welsh Cross',
        gender: 'Mare'  
    })    
    await horse.save()
}

seedDB().then(() => {
    db.close();
});
/*
{
    "name" : "Autumn",
    "registeredName" : "Apples for Autumn",
    "birthYear" : 2004,
    "breed" : "Welsh Cross",
    "gender" : "Mare"
}
{
    "name" : "Boyscout",
    "registeredName" : "Dr. Turchi",
    "birthYear" : 2000,
    "breed" : "Thoroughbred",
    "gender" : "Gelding"
}
{
    "name" : "Blaze",
    "registeredName" : "Blazing to  Impress",
    "birthYear" : 1995, "breed" :
    "Quarter Horse", "gender" : "Gelding"
}
{
    "name" : "Callie",
    "registeredName" : "Silky Squaw",
    "birthYear" : 1996,
    "breed" : "Thoroughbred",
    "gender" : "Mare"
}
*/