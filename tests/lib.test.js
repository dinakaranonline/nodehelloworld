const lib = require('../lib.js');

describe('absolute',()=>{
    it('should return positive number if input is positive number',()=>{
        const result = lib.absolute(100);
        expect(result).toBe(100);
    });
    
    it('should return negative number if input is negative number',()=>{
        const result = lib.absolute(-10);
        expect(result).toBe(10);
    });
    
    it('should return zero  if input is zer0',()=>{
        const result = lib.absolute(0);
        expect(result).toBe(0);
    });

});


/* test('our second test',()=>{
    throw new Error('some error happened');
}); */

