const Url = require('../models/Url');

module.exports = {
  async shorten(req, res) {
    const { nanoid } = await import('nanoid');
    const { originalUrl } = req.body;
    const shortUrl = nanoid(7);

    await Url.create({ originalUrl, shortUrl });

    return res.json({
      shortUrl: `${process.env.BASE_URL}/${shortUrl}`,
    });
  },

  async redirect(req, res) {
    const { shortUrl } = req.params;

    const url = await Url.findOne({ where: { shortUrl } });

    if (url) {
      return res.redirect(url.originalUrl);
    }

    return res.status(404).json({ error: 'URL not found' });
  },
};
