const express = require('express');
const router = express.Router();
const { addSupplier, getSuppliers } = require('../controllers/supplierController');

router.get('/', getSuppliers);
router.post('/add', addSupplier);

module.exports = router;
