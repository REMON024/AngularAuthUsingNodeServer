const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose= require('mongoose');
const db="mongodb://remon024:Ashraf107@ds161446.mlab.com:61446/eventsdb"

mongoose.connect(db,err=>{
    if(err){

        console.error('Error!',err)
    }
    else{
        console.log("Connect the Mongoose")
    }
})
router.get('/',(req,res)=>{
    res.send('From API')
})

router.post('/register', (req , res)=>{

    let UserData = req.body
    let user = new User(UserData)

    user.save((error,registeredUser) => {
        if(error) {
            console.log(error)
        } else
        {
            res.status(200).send(registeredUser)

        }
    })
})

router.post('/login',(req,res)=>{
   let userdata=req.body
   User.findOne({email:userdata.email},(error,user)=>{
       if(error){
           console.error(error)
       } else{
           if(!user){
               res.status(401).send("invalid Email")
           }
           else{
               if(user.password!==userdata.password){

               res.status(401).send("Invalid Password")

               }
               else{
                   res.status(200).send(user)
               }
           }
       }
   })
})
module.exports=router