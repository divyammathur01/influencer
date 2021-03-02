const express = require('express');
const router = express.Router();

const createpage = require('../controllers/createpage');

router.post('/createpage',createpage)

module.exports = router;