const express = require('express');
const router = express.Router();
const controller = require("../controllers/main");

/* GET home page. */
router.get('/', controller.room);

module.exports = router;
