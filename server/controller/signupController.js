const smodel = require('../model/signupModel')
const cmodel = require('../model/cModel')
const jwt = require('jsonwebtoken')

const signcreate = async function(req,res){
    try{
    const data = req.body
    const sdata = await smodel.create(data)
    res.status(200).send({data : sdata})
    }
    catch(err){
        console.log(err.message)
    }
}

const getdata =  async function(req,res){
    let data = req.query
    let gdata = await cmodel.find(data , {isDeleted : false})
    console.log(gdata)
   return  res.send({data : gdata})
}

const login = async function(){
    let data = req.body
    const{email , password} = data
    let gdata = await smodel.findOne(email , password)
    if(!gdata){return res.send('Invalid credential')}

}

const reportcreate = async function(req,res){
    try{
    const data = req.body
    const sdata = await cmodel.create(data)
    res.status(200).send({data : sdata})
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports.signcreate = signcreate
module.exports.getdata = getdata
module.exports.reportcreate = reportcreate
