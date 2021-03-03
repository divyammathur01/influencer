const User = require("../models/users");
const router = require("../routes/createpage");
const nodemailer = require("nodemailer");

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
};

// api for referal mail

const refer = async (req, res) => {
  try {
    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "influencers.dev@gmail.com",
        pass: "Influencers@4321",
      },
      tls:{
        rejectUnauthorized:false 
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Test 👻"influencers.dev@gmail.com ', // sender address
      to: "divyammathur007@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.log(err);
  }
};

module.exports = signup;
module.exports = unamecheck;
module.exports = refer;
