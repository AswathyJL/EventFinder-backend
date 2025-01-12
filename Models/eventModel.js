const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    eventDescription:{
        type:String,
        required:true
    },
    eventWebsite:{
        type:String
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    location_city:{
        type:String,
        required:true
    },
    location_state:{
        type:String,
        required:true
    },
    location_link:{
        type:String,
        required:true
    },
    maxRegistrationCount:{
        type:Number,
        default:null
    },
    isFree:{
        type:Boolean,
        required:true,
        default:true
    },
    entryFee:{
        type:String
    },
    paymentMode:{
        type:String
    },
    audienceType:{
        type:String,
        required:true,
        default: 'General',
    },
    eventType:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
})

const events = mongoose.model("events",eventSchema)

module.exports = events