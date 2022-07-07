var express = require('express');
var router = express.Router();
const productosController =require('../controllers/productoController')
/* GET productos listing. */
router.get('/', productosController.show);
router.post('/add',productosController.addProduct)
router.post('/upProduct/',productosController.processUpdate)
module.exports = router;
