const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors())
app.use(express.json())
const PORT = 3005;
const router = require("./Routes/route")

app.use("/",router)

app.listen(PORT,function(){
    console.log(`server started in ${PORT}`)
})