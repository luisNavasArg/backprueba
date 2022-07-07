var express = require('express');
var router = express.Router();
const usuarios = require('../models/usuarios')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

module.exports = router;
