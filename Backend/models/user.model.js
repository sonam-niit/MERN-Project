const mongoose = require('mongoose');
const Schema= mongoose.Schema;

let UserSchema= new Schema({
    fname:
    {
    type:String,
    required:true,
    max:100
    },
    lname:
    {
    type:String,
    required:true,
    max:100
    },
    email:
    {
    type:String,
    required:true,
    },
    mno:
    {
    type:Number,
    required:true,
    },
    password:
    {
        type:String,
        required:true
    }
})

//export model
module.exports = mongoose.model('User',UserSchema,"userdata");