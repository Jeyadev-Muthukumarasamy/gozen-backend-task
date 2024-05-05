const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./Routes/route");

app.use(cors());
app.use(express.json());
app.use("/", route); 

const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server started listening in ${PORT}`);
});
