const express = require("express");
const router = express.Router();

const refer =  require('../controllers/auth')
const signup = require("../controllers/auth");
const unamecheck = require('../controllers/auth');

router.post('/signup/:id',signup)
router.post('/unamecheck',unamecheck)
router.post('/refer-mail',refer)




module.exports = router;


