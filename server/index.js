const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./router/router')
var cors = require('cors')

app.use(cors())

app.use(express.json())


mongoose.connect('mongodb+srv://jayvision:KQK8eFQqxCASWGRF@cluster0.6lmc5.mongodb.net/myweb',{
    useNewUrlParser : true
})
.then(()=> {console.log('mongodb connected')})
.catch((err)=>{console.log(err)})

app.use('/',route)
app.listen(4000, () =>{
    console.log('port is connected 4000')
})