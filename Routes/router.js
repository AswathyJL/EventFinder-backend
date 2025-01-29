
// import express
const express = require('express')
const userController =require('../Controllers/userController')
const eventController =require('../Controllers/eventController')
const appliedEventController =require('../Controllers/appliedEventController')
const savedEventsController =require('../Controllers/savedEventsController')
const pastEventsController =require('../Controllers/pastEventsController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
// const multerMiddleware = require('../Middlewares/multerMiddleware')

const router = new express.Router()

// /register
router.post('/register',userController.registerController)

// /login
router.post('/login',userController.loginController)

// /profile - getuserDetails
router.get('/profile',jwtMiddleware, userController.getUserDetailsController)

// /get user details by id 
router.get('/user-details/:id',jwtMiddleware, userController.getUserDetailsByIdController)

// add-event
router.post("/add-events",jwtMiddleware,eventController.addEventController)

// edit-event
router.put("/events/:id/edit",jwtMiddleware,eventController.editEventsController)

// get home events
router.get("/home-events",eventController.getHomeEventsController)

// get all events
router.get("/all-events",jwtMiddleware,eventController.getAllEventsController)

// get user events
router.get("/user-events",jwtMiddleware,eventController.getUserEventsController)

// get event by id
router.get("/:id/event",jwtMiddleware,eventController.getEventDetailsController)

// remove event by id /:id/remove
router.delete("/:id/remove",jwtMiddleware,eventController.removeEventController)

// save event
router.post("/save-event",jwtMiddleware,savedEventsController.saveEventController)

// get saved Events
router.post("/save-event/view",jwtMiddleware,savedEventsController.getSavedEventsController)

// delete saved events
router.post("/remove-saved-event",jwtMiddleware,savedEventsController.deleteSavedEventsByIdController)

// delete all saved events

module.exports = router
router.delete("/remove-all-saved-events",jwtMiddleware,savedEventsController.deleteAllSavedEventsController)