const User = require("../models/users");

const createpage = async (req, res) => {
  try {
    let userData = req.body;
    console.log(userData);
    let user = new User(userData);
    const registeredUser = await user.save((err, registeredUser) => {
      if (err) {
        res.json(err);
      } else {
        res.json(registeredUser);
      }
    });
    // console.log(registeredUser);
  } catch (err) {
    console.log(err);
  }
};

module.exports = createpage;
