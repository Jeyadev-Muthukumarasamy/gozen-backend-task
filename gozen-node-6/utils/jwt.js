const jwt = require("jsonwebtoken")

const generateAccessToken = (userId) => {
   
  const accessTokenSecret = "your-access-token-secret-here"; 
  return jwt.sign({ _id: userId }, accessTokenSecret, {
    expiresIn: "5h",
  });
};

module.exports = { generateAccessToken };
