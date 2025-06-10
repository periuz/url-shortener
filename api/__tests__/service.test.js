const { generateShortId } = require('../src/utils/shortId');

describe('generateShortId', () => {
  it('should return a 7-character string', () => {
    const shortId = generateShortId();
    expect(shortId).toHaveLength(7);
  });
});