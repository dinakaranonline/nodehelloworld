const lib = require('../lib.js');

test('absolute return positive number if input is positive number',()=>{
    const result = lib.absolute(100);
    expect(result).toBe(100);
});

test('absolute return negative number if input is negative number',()=>{
    const result = lib.absolute(-10);
    expect(result).toBe(10);
});

/* test('our second test',()=>{
    throw new Error('some error happened');
}); */

