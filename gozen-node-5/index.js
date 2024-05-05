const express = require("express");
const app = express();
const cors = require("cors");

const { router } = require("./Route/route");

app.use(cors());
app.use(express.json());
app.use("/",router)
const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server started listening in ${PORT}`);
});
