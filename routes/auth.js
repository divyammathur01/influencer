const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/users");

const signup = require("../controllers/auth");
const unamecheck = require('../controllers/auth');

router.post('/signup/:id',signup)
router.get('/unamecheck',unamecheck)




module.exports = router;


