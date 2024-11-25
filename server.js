const express = require('express');
const userRoute = require('./routes/user');
const connectDB = require('./config/db');
require('dotenv').config();
const PORT = process.env.PORT || 8090

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("This is User Authentication API");
})
app.use("/api",userRoute)

app.listen(PORT, () => {
    console.log("Server Running On Port http://localhost:8000");
    connectDB();
})