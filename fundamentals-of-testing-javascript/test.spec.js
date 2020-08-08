const math = require('./math');

describe('math operations', () => {
  it('should sum numbers', () => {
    expect(math.sum(1, 2)).toBe(3);
  });

  it('should subtract numbers', () => {
    expect(math.subtract(3, 2)).not.toBe(2);
  });

  it('should fail', () => {
    expect(math.sum(1, 2)).toBe(4);
  });
});