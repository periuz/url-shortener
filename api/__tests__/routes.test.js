const request = require('supertest');
const app = require('../src/services/app');

describe('POST /shorten', () => {
  it('should shorten a valid URL', async () => {
    const res = await request(app)
      .post('/shorten')
      .send({ originalUrl: 'https://google.com' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('shortUrl');
  }, 10000);

  it('should reject an invalid URL', async () => {
    const res = await request(app)
      .post('/shorten')
      .send({ originalUrl: 'not-a-url' });
    expect(res.statusCode).toEqual(400);
  }, 10000);
});