
const User = require("../../model/userModel");
const bcrypt = require("bcryptjs");
const userRegister = async (req, res) => {
    const { userGmail, password,role } = req.body;
  
    if ( !userGmail |!password |!role) {
      return res.status(400).json({
        message: "gmail, password,role must provided",
      });
    }
  //   checking that if tthat gmail is already register or not
    const userfound= await User.find({userGmail:userGmail})
    if(userfound.length>0){
      return res.status(400).json({
          message:"This email is alredy registered,please try agin"
      })
    }
  
    await User.create({
      userGmail,
      role,
      password:bcrypt.hashSync(password,10)
    });
    res.status(201).json({
      message: "User registered sucessfully",
    });
  }
  module.exports= userRegister;

