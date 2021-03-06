// Test :: File
'use strict';

var assert = require('chai').assert;
var barista = require('../index');

describe('barista { options: file }', function() {
  it('should return false if no file is defined', function() {
    var output = barista({ yourawizard: 'harry' });
    assert.equal(output, false);
  });

  it('should return false if option.file is not a string', function() {
    var output = barista({ file: 1 });
    assert.equal(output, false);
  });

  it('should read CSS from a file defined in options', function() {
    var output = barista({
      file: 'simple-css.scss'
    });
    var expect = output.css.indexOf('.simple') >= 0;
    assert.equal(expect, true);
  });

  it('should return false if file doesn\'t exist', function() {
    var output = barista({
      file: 'fake-file.scss'
    });
    assert.equal(output, false);
  });

  it('should read and compile SCSS from a file defined in options', function() {
    var output = barista({
      file: 'simple-sass.scss'
    });
    var expect = output.css.indexOf('margin: 3') >= 0;
    assert.equal(expect, true);
  });
});
