const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    title: { type: String}, 
    crime: { type: String, required: true }, 
    description: { type: String, required: true } ,
    criminal: { type: String, required: true }, 
    offense: { type: String, required: true},
    guilt: { type: Boolean , default: false},
    isDeleted : {type: Boolean , default: false}
 
},{timestamps : true})

module.exports = mongoose.model("report", reportSchema)