let assert        = require('assert');
let squareDigits  = require('../kata/squareDigits/squareDigits');
let validatePIN   = require('../kata/validatePIN/validatePIN');
let getMiddle     = require('../kata/getMiddle/getMiddle');

describe("squareDigits", function() {
  it("Should equal 811181", function() {
    assert.equal(squareDigits(9119), 811181);
  });
})

describe("validatePIN", function () {
  describe("should return False for pins with length other than 4 or 6", function () {
    it("Wrong output for '1'", function () {
      assert.equal(validatePIN("1"), false);
    });
    it("Wrong output for '12'", function () {
      assert.equal(validatePIN("12"), false);
    });
    it("Wrong output for '123'", function () {
      assert.equal(validatePIN("123"), false);
    });
    it("Wrong output for '12345'", function () {
      assert.equal(validatePIN("12345"), false);
    });
    it("Wrong output for '1234567'", function () {
      assert.equal(validatePIN("1234567"), false);
    });
    it("Wrong output for '-1234'", function () {
      assert.equal(validatePIN("-1234"), false);
    });
    it("Wrong output for '1.234'", function () {
      assert.equal(validatePIN("1.234"), false);
    });
    it("Wrong output for '1.23'", function () {
      assert.equal(validatePIN("1.23"), false);
    });
    it("Wrong output for '123'", function () {
      assert.equal(validatePIN("00000000"), false)
    });
  });

  describe("should return False for pins which contain characters other than digits", function() {
    
    it("Wrong output for 'a234'", function() {
      assert.equal(validatePIN('a234'), false);
    });

    it("Wrong output for '.234'", function() {
      assert.equal(validatePIN('.234'), false);
    })
  });

  describe("should return True for valid pins", function() {
    let valueArray = ["1234", "0000", "1111", "123456", "098765", "000000", "123456", "090909"];
    valueArray.forEach(function(e) {
      it("Wrong output for '" + e + "'", function() {
        assert.equal(validatePIN(e), true);
      });
    });

  })
});

describe.only("getMiddle", function() {
  
  it("'test' Middle equals 'es'", function() {
    assert.equal(getMiddle("test"), "es");
  });
  
  it("'testing' Middle equals 't'", function() {
    assert.equal(getMiddle("testing"), "t");
  });

  it("'middle' Middle equals 'dd'", function() {
    assert.equal(getMiddle("middle"), "dd");
  });

  it("'A' Middle equals 'A'", function() {
    assert.equal(getMiddle("A"), "A");
  });
});