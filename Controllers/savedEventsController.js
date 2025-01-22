const savedEvent = require('../Models/savedEventsModel')


// add saved events
exports.saveEventController = async (req,res) =>{
    console.log("Inside savedEventController");
    const userId =  req.userId
    // console.log(userId);
    const {savedEvents} = req.body
    if (!savedEvents) {
        return res.status(400).json({ message: "Invalid event data" });
    }
    
    try {
        const existingEvent = await savedEvent.findOne({userId})
        if(existingEvent){
            if (existingEvent.savedEvents.includes(savedEvents)) {
                return res.status(406).json("Event is already in your saved collection!!");
            }
            existingEvent.savedEvents.push(savedEvents);
            await existingEvent.save()
            res.status(200).json(newEvent)
        }
        else
        {
            const newSavedEvent = new savedEvent({userId,savedEvents: [savedEvents]})
            await newSavedEvent.save()
            res.status(200).json(newSavedEvent)
        }
    } catch (err) {
        res.status(401).json(err)
    } 
}

// get saved events

// delete saved event by id

// delete all saved events