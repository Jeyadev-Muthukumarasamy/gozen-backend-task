const user = [
    {
      _id: 1,
      username: "exampleUser",
      password: "hashedPassword1",
    },
  ];
  
  const { generatePasswordHash } = require("../utils/bcrypt");
  const { generateAccessToken } = require("../utils/jwt");
  const { comparePasswordHash } = require("../utils/bcrypt");
  
  const signUp = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
  
    const isExist = user.some((user) => {
      return user.username === username;
    });
  
    if (isExist) {
      return res.status(404).json({
        message: "User already exists",
      });
    }
  
    try {
      console.log(password);
  
      const hashedPassword = await generatePasswordHash(password);
      console.log(hashedPassword);
  
      const newUser = {
        id: user.length + 1,
        username: username,
        password: hashedPassword,
      };
  
      user.push(newUser);
  
      return res.status(200).json({
        message: "User registered successfully",
        user: newUser,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  };
  
  const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      console.log(req.body);
  
      const foundUser = user.find((user) => user.username === username);
  
      if (!foundUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }
  
      const validPassword = await comparePasswordHash(
        password,
        foundUser.password,
      );
      console.log(validPassword);
  
      if (!validPassword) {
        return res.status(404).json({
          message: "Password is not valid",
        });
      }
  
     
      const accessToken = generateAccessToken(foundUser._id);
      console.log(accessToken);
  
      res.status(200).json({
        token: accessToken,
      });
    } catch (error) {
      res.status(401).json({
        message: "Internal server error",
        error: error,
      });
    }
  };
  
  module.exports = { login, signUp };
  