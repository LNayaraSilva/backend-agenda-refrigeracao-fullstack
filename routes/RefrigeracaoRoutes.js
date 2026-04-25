const express = require('express');
const router = express.Router();
const RefrigeracaoController = require('../controllers/RefrigeracaoController');

router.get('/', RefrigeracaoController.listEntries);
router.get('/:id', RefrigeracaoController.getEntryById);
router.post('/', RefrigeracaoController.createEntry);
router.put('/:id', RefrigeracaoController.updateEntry);
router.delete('/:id', RefrigeracaoController.deleteEntry);

module.exports = router;
