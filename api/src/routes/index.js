const { Router } = require('express');
const UrlController = require('../controllers/UrlController');

const routes = Router();

routes.post('/shorten', UrlController.shorten);
routes.get('/:shortUrl', UrlController.redirect);

module.exports = routes;