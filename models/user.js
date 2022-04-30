const mongoose = require("mongoose")


//Defining Schema
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true,
    maxlength:32
},

task:{
    type:String,
    required:true,
    trim:true
},
status:{
    type:Boolean,
    default:0
}
},
{ timestamps: true }
)

//Exporting the schema

module.exports = mongoose.model("User",userSchema)