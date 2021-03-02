const express = require("express");
const router = express.Router();


const signup = require("../controllers/auth");
const unamecheck = require('../controllers/auth');

router.post('/signup/:id',signup)
router.post('/unamecheck',unamecheck)




module.exports = router;


