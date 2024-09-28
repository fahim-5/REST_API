
const express=require('express');
const router=express.Router();
const users=require("../models/users.model");
const {getUser,createUser} = require('../controllers/users.controller');


router.get("/users", getUser); 
router.post("/users", createUser); 


module.exports=router;
