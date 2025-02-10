const appliedEvents = require('../Models/appliedEventsModel')

// register to applied events
exports.applyEventController = async (req,res)=>{
    console.log("Inside applyEventController");
    const {eventId,registeredUser} = req.body
    console.log("Received eventId:", eventId, registeredUser);
    try {
        const existingEvent = await appliedEvents.findOne({eventId})
        if(existingEvent)
        {
            const alreadyApplied = existingEvent.registeredUser.some(user => user.userId === registeredUser.userId && user.username === registeredUser.username);

            if (alreadyApplied) {
                console.log("User has already applied.");
                return res.status(406).json("You have already applied for this event");
            }

            console.log("existing but not applied");
            existingEvent.registeredUser.push(registeredUser);
            await existingEvent.save();
            return res.status(200).json(existingEvent);
        }
        else{
            console.log("new");
            const newRegistration = new appliedEvents({eventId,registeredUser:[registeredUser]})
            await newRegistration.save()
            res.status(200).json(newRegistration)
        }
    } catch (err) {
        console.log(err);
        res.status(401).json(err)
    }
    
}

// get applied events

// unapply event
