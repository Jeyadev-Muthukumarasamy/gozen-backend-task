
const getHandler = (req, res) => {
    try {
        res.status(200).json({
            message: "This is GET Request"
        });
    } catch (error) {
        res.status(404).json({
            message: "error",
            error: error
        });
    }
};

module.exports = { getHandler };
