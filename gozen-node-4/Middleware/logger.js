const fs = require("fs");

const logger = (req, res, next) => {
    try {
        fs.writeFile('logger.txt', `This is the ${req.method} and ${req.url} logged in at ${new Date()}`, (err) => {
            if (err) {
                console.log(err);
            }
        });
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
};

module.exports = logger;
