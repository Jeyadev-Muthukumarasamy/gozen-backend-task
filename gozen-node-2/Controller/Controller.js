
const newDatas = require("../product.json")

const getFile = async (req, res) => {
    try {
        console.log("Data")
        res.status(200).json({
            message: "data",
            data: newDatas
        });
    } catch (error) {
        res.status(401).json({
            message: "error"
        });
    }
}

const postRequest = async (req, res) => {
    try {
        const newData = req.body;
        console.log(req.body);

      
        newDatas.push(newData);

        res.status(200).json({
            message: "successfully posted the data",
            data: newData
        });
    } catch (error) {
        res.status(404).json({
            message: "error",
            error: error
        });
        console.log(error);
    }
}

module.exports = { getFile, postRequest };
