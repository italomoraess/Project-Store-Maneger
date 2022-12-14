const express = require('express');

const controllerSales = require('../controllers/sales');
const { verifyProductID, verifyQuantity } = require('../middlewares/salesValidation');

const router = express.Router();

router.get('/', controllerSales.getAll);
router.get('/:id', controllerSales.getById);
router.post('/', verifyProductID, verifyQuantity, controllerSales.create);
router.put('/:id', verifyProductID, verifyQuantity, controllerSales.update);

module.exports = router;