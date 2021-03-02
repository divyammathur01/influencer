const User = require("../models/users");
const router = require("../routes/createpage");

//api for signup
const signup = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    // var str = "60375679566d0c680c35e99d";

    let credentials = req.body;
    let credData = await User.findById({ _id: _id });
    console.log(credData);
    console.log(credData.email);
    console.log(credData.password);
    credData.email = credentials.email;
    credData.password = credentials.password;

    await credData.save();
  } catch (err) {
    console.log(err);
  }

  // const userCred = await credData.update(
  //   { myObjectId },
  //   { $set: { email: credData.email, password: credData.password } }
  // );
  // console.log(userCred);
};

//api for username availability

const unamecheck = async (req, res) => {
  try {
    const { username } = req.body;
    // res.json(uname);
    const userData = await User.findOne({ username });
    if (userData) {
      res.json({
        message: "username already exist",
        usernameAvailable: false,
      });
    } else {
      res.json({
        message: "username available",
        usernameAvailable: true,
      });
    }
    
   
  } catch (err) {
    res.send({
      message: "Error occured",
      usernameAvailable: false,
    });
  }

  //  User.find({'username':uname},(err,user)=>{
  //    if(err){
  //      res.send(err)
  //    }
  //    if(user.length!=0){
  //      res.send(user)
  //      console.log(user);
  //    }
  //  });
};

module.exports = signup;
module.exports = unamecheck;
