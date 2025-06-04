const express = require('express');
const router = express.Router();
const urlController = require('../controllers/UrlController');

// Rota para encurtar URL
router.post('/shorten', urlController.shorten);

// Rota para redirecionar a URL curta
router.get('/:shortId', urlController.redirect);

module.exports = router;
