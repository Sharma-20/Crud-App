
const express = require("express")
const app  = express()
const mongoose = require("mongoose")

//Connecting the database

mongoose.connect('mongodb://localhost:27017/ToDo', {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
})

//Listening to the server

app.listen(5000,()=>{
    console.log("server listening on port: 5000")
})

// adding the schema to this file
const userRouter = require("./routes/users")
app.use('/users',userRouter)


app.use(express.json())