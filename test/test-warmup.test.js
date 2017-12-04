var assert= require("assert");
var test-warmup = require("../test-warmup")

describe('saysHello', function() {
    it('should ask user for name and say hello', function() {
      assert.equal("Hello" + test-warmup.name);
    });
  });

module.exports = "saysHello"
