const lib = require('../lib.js');

describe('absolute', () => {
    it('should return positive number if input is positive number', () => {
        const result = lib.absolute(100);
        expect(result).toBe(100);
    });

    it('should return negative number if input is negative number', () => {
        const result = lib.absolute(-10);
        expect(result).toBe(10);
    });

    it('should return zero  if input is zero', () => {
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });
});

describe('greet', () => {
    it('should return greeting with name', () => {
        const result = lib.greet('dinakaran');
        expect(result).toMatch(/dinakaran/);
        expect(result).toContain('dinakaran');
    });
});

describe('get currencies ', () => {
    it('should return supported currencies', () => {
        const result = lib.getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('INR');
        expect(result).toContain('EUR');
        expect(result).toEqual(expect.arrayContaining(['EUR','INR','USD']));
    });
});
