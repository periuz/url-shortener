const { nanoid } = require('nanoid');
const Url = require('../models/Url');

module.exports = {
  async shorten(req, res) {
    const { originalUrl } = req.body;

    // Validação simples de URL
    try {
      new URL(originalUrl);
    } catch {
      return res.status(400).json({ error: 'Invalid URL' });
    }

    const shortId = nanoid(7);

    await Url.create({ originalUrl, shortId });

    return res.json({
      shortUrl: `${process.env.BASE_URL}/${shortId}`,
    });
  },

  async redirect(req, res) {
    const { shortId } = req.params;

    const url = await Url.findOne({ where: { shortId } });

    if (url) {
      return res.redirect(url.originalUrl);
    }

    return res.status(404).json({ error: 'URL not found' });
  },
};