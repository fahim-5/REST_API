const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { populate } = require('dotenv');


const usersRouter=require("./routes/users.route")

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use(usersRouter);



app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html"); 
});




app.use((req,res)=>{
    res.status(404).json({
        message:"Route not Found",
    })
})


app.use((error,req,res,next )=>{
    res.status(404).json({
        message:"Something broke",
    })
})


module.exports = app;
