const bcrypt = require("bcrypt");
const SALT = 10;

const generatePasswordHash = async (password) => {
  try {
   

    const hashedPassword = await bcrypt.hash(password, SALT);
    return hashedPassword;
  } catch (error) {
    console.error("Error generating password hash:", error);
    throw error; 
  }
};

const comparePasswordHash = (password, passwordHash) => {

    console.log(password)
    return bcrypt.compare(password, passwordHash);
  };
  
  
module.exports = {
  generatePasswordHash,
  comparePasswordHash
};
