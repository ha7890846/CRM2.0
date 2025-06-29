const express = require('express');
const cors =  require('cors')
const app = express();
const Port =process.env.PORT || 5000;
const admin = require("./routes/adminRoutes")

app.use(cors());
app.use(express.json());
app.use('/',admin)

app.listen(Port,()=>{
    console.log(`The Server is Running over the port: ${Port}`)
});