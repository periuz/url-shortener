const Url = require('../models/Url');

module.exports = {
  async shorten(req, res) {
    const { nanoid } = await import('nanoid');
    const { originalUrl } = req.body;
    const shortId = nanoid(7);

    await Url.create({ originalUrl, shortId });

    return res.json({
      shortId: `${process.env.BASE_URL}/${shortId}`,
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
