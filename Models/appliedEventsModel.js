const mongoose = require("mongoose")

const appliedEventSchema = new mongoose.Schema({
    eventId:{
        type:String,
        required:true,
        unique:true
    },
    registeredUser:[
        {
            userId:{
                type:String,
                default:"guest user"
            },
            username:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },
            phoneNo:{
                type:String,
                required:true
            },
            appliedAt:{
                type: Date,
                default: Date.now,
                immutable: true, 
            }
        }
    ]
})

const appliedEvents = mongoose.model("appliedEvents",appliedEventSchema)

module.exports = appliedEvents