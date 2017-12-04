var assert = require("assert");
var app = require("../app.js");

describe("#saysHello", function() {
  it("should say hello", function() {
    assert.equal(app.saysHello(), ("Hello"));
  });
});
