const helpers = require('../helpers.js');

describe('template helpers', function() {

  describe('decoder', function() {
    test('returns the expected values', function() {
      expect(helpers.decoder('13 27 26 5')).toEqual('maze');
      expect(helpers.decoder('432 21 19 5832 5 135 14 6561 59049 15 486 275562')).toEqual('pusheenicorn');
      expect(helpers.decoder('20 486 21 513 19 324 5 21924 540 135 3 8')).toEqual('trussle tech');
      expect(helpers.decoder('8 5 324 8748 295245 730 23 405 13122 12 108')).toEqual('hello world');
    });
  });
});
