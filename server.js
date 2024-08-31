const express =  require('express');
const dotenv = require('dotenv')
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.json({
        "msg" : "Hello i m Starting a Server"
    })
})

app.listen(PORT,()=>{
    console.log("server is connected")
})