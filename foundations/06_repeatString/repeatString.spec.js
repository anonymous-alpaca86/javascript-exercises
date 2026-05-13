const repeatString = require('./repeatString')

describe('repeatString', () => {


 
 
  
  
  test('works with blank strings', () => {
    expect(repeatString('', 10)).toEqual('');
  });
});
