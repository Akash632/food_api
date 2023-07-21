const express = require('express');
const connectdb = require('./config/db');
const foodRouter = require('./routes/foodRoute');
const app = express ();
require('dotenv').config();
const cors = require('cors');

app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/api/v1/food',foodRouter)
app.get("/",(req,res)=>{
    res.send("API WORKING");
})


connectdb();
app.listen(PORT,()=>{
    console.log("server live")
})