const collection=require('./models/index');
var cors = require('cors');
const express= require('express');
const bodyparser= require('body-parser');
const application= express();

const UserController= require('./controllers/user');

application.use(bodyparser.json());
application.use(bodyparser.urlencoded({extended:true}))
application.use(cors());
application.get("/",(req,res)=>{
    res.render("<h1>Welcome to Sample App </h1>");
})

application.use("/user/api",UserController);

application.listen('8080',()=>{
    console.log('server started on port number 3000');
})