const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema({
    name: { type: String}, 
    lname: { type: String, required: true }, 
    email: { type: String, required: true } ,
    password: { type: String, required: true }, 
    cpassword: { type: String, required: true}
 
},{timestamps : true})

module.exports = mongoose.model("signup", signupSchema)

/* 
   name : {type : String},
    lname : {type : String},
    email : {type : String},
    mobile : {type : String},
    password : {type : String},
    cpassword : {type : String}
*/