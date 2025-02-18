const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// register
exports.registerController = async(req,res)=>{
    console.log('Inside registerController');
    console.log(req.body);
    const {username, email, password} = req.body
    try {
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Already existing user... Please Login!!!")
        } else {
            const encryptedPassword = await bcrypt.hash(password,10)
            const newUser = new users({
                username,email,password:encryptedPassword,phoneNo:"",userSavedEvents:[],userPastEvents:[], userEvents:[], profilePic:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err) 
    }
}

// login
exports.loginController = async(req,res)=>{
    console.log('Inside loginController');
    const {email, password} = req.body

    try {
        const existingUser = await users.findOne({email})
        if(existingUser)
        {
            let isUserPasswordMatch = await bcrypt.compare(password,existingUser.password)
            if(isUserPasswordMatch)
            {
                const token = jwt.sign({userId:existingUser._id}, process.env.JWTPASSWORD)
                res.status(200).json({user:existingUser,token})
            }
            else{
                res.status(404).json("Invalid Email/Password")
                console.log("password mismatch");
                
            }
        }else{
            res.status(404).json("User doesn't exist. Please register!!")
            console.log("error 404");
            
            
        }
    } catch (err) {
        res.status(401).json(err)
        console.log("error 401");
    }
    
}

// get user details
exports.getUserDetailsController = async(req,res)=>{
    console.log('Inside getUserDetailsController');
    const userId = req.userId

    try {
        const userDetails = await users.find({_id:userId})
        res.status(200).json(userDetails)
    } catch (err) {
        res.status(401).json(err)
    }
    
}

// get user details by id
exports.getUserDetailsByIdController = async(req,res)=>{
    console.log('Inside getUserDetailsController');
    const userId = req.params.id

    try {
        const userDetails = await users.findById(userId)
        res.status(200).json(userDetails)
    } catch (err) {
        res.status(401).json(err)
    }
    
}



