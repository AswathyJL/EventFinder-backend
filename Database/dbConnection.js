const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res=>{
    console.log("MongoDb Atlas connected successfully with eventServer.");
}).catch(err=>{
    console.log("MongoDb Atlas connection failed with eventServer.");
    console.log(err);
})