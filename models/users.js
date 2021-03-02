const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,

    // unique: true,
  },
  name: {
    type: String,
  },
  instagram: {
    type: String,

    // unique: true,
  },
  facebook: {
    type: String,

    // unique: true,
  },
  twitter: {
    type: String,

    // unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
//   credentials: {
//     type: Object,
//   },
  bankDetails: {
    accountNumber: {
      type: Number,
    },
    accountHolderName: {
      type: String,
    },
    ifsc: {
      type: String,
    },
    bankName: {
      type: String,
    },
    address: {
      type: String,
    },
  },
});

module.exports = mongoose.model("User", userSchema, "users");
