const express =require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./db/db.config");
const router = require("./Routes/route");
app.use(cors());
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

connectDb();
app.use("/",router)
const PORT = 3007;
app.listen(PORT,()=>{
    console.log(`server started in ${PORT}`)
})