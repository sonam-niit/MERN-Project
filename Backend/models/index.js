const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/sampleapp',{useNewUrlParser:true},(error)=>{
    if(!error)
    {
        console.log("connected....")
    }
    else{
        console.log('Error while connecting to database '+error)
    }
})

const user= require('./user.model');