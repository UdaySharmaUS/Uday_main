const express = require('express');
const { getAllCompounds, getCompoundById, updateCompound } = require('../controllers/compound.controllers.js');

const router = express.Router();

router.get('/all', getAllCompounds);
router.get('/:id', getCompoundById);
router.put('/:id', updateCompound);

module.exports = router;
