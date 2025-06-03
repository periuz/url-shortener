const express = require('express');
const router = express.Router();
const urlController = require('../controllers/UrlController');

// Rota para encurtar URL
router.post('/shorten', urlController.shortenUrl);

// Rota para redirecionar a URL curta
router.get('/:code', urlController.redirectUrl);

module.exports = router;
