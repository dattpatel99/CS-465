const express = require('express');
const router = express.Router();
const controller = require("../controllers/company");

/* GET home page. */
router.get('/', controller.contact);

module.exports = router;
