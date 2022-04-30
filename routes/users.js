// requiring express,router and models

const express = require("express");
const router = express.Router();
const User= require("../models/user")


//adding the post route

router.post("/addtask",async(req,res)=>{
    const user =new User({     //in this one user data is added
        name:req.body.name,   //in this way taking inputs from postman
        task:req.body.task,
        status:req.body.status
    })
    try{
        const u1= await user.save()  //saving to the database
        res.json(u1)
    }
    catch(err){
        res.send("error"+ err)
    }
})

// Reading task:
//GET route to read all the tasks

router.get("/get",async(req,res)=>{
    try{
        const users= await User.find()
        res.json(users)
    }
    catch(err){
        res.send("ERROR"+ err)
    }
})

//GET route to recieve task by id

router.get("/get/:id",async(req,res)=>{
try{
        const user= await User.findById(req.params.id)
        res.json(user)
}
catch(err){
        res.send("ERROR"+ err)
}
})

//Updating Task:

//PUT route to update information
router.put("/update/:id",async(req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        user.name=req.body.name
        user.task=req.body.task
        user.status=req.body.status
        const a1 = await user.save()
        res.json(a1)
}
catch(err){
    res.send("Error")
}
})

//Deleting Task:

//DELETE route to delete user information
router.delete("/delete/:id",async(req,res)=>{
    try{
        const user= await User.findById(req.params.id)
        user.name=req.body.name
        user.task=req.body.task
        user.status=req.body.status
        const u1 = await user.delete()
        res.json(u1)
        }
    catch(err){
        res.send("Error"+err)
        }
})

module.exports= router