var expect = require('chai').expect;
var lSort = require('../sort');

describe('lexicographic sort', function() {
  it('sorts by length', function() {
    var arr = ['a', 'aaa', '', 'aa'];
    var order = 'a';
    var result = ['', 'a', 'aa', 'aaa'];

    expect(lSort(arr, order)).to.eql(result);
  });

  it('sorts by successive letters', function() {
    var arr = ['acb', 'abc', 'bca'];
    var order = 'abc';
    var result = ['abc','acb','bca'];

    expect(lSort(arr, order)).to.eql(result);
  });

  it('sorts without matching first letter', function() {
    var arr = ['acb', 'abc', 'bca'];
    var order = 'cba';
    var result = ['bca', 'acb', 'abc'];

    expect(lSort(arr, order)).to.eql(result);
  });

  it('handles equal elements', function() {
    var arr = ['acb', 'abc', 'bca', 'bca', 'abc'];
    var order = 'cba';
    var result = ['bca', 'bca', 'acb', 'abc', 'abc'];
  });

  it('handles longest order string possible', function() {
    var arr = ['zxy', 'zyx', '', 'abc', 'a', 'bca'];
    var order = 'abcdefghijklmnopqrstuvwxyz';
    var reversed = order.split('').reverse().join();
    var result = ['', 'zyx', 'zxy', 'bca', 'a', 'abc'];

    expect(lSort(arr, reversed)).to.eql(result);
  });

  it('handles really long array', function(done) {
    //set this test to wait 5 seconds before error
    this.timeout(5000);
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var alphArr = alphabet.split('');
    var arr = [];
    alphArr.forEach(function(char1) {
      alphArr.forEach(function(char2) {
        alphArr.forEach(function(char3) {
          alphArr.forEach(function(char4) {
            arr.push(char1 + char2 + char3 + char4);
          });
        });
      });
    });

    console.log('array length:', arr.length);
    var timeStart = new Date().getTime();
    lSort(arr, alphabet);
    var timeEnd = new Date().getTime();

    console.log('lSort took:', timeEnd - timeStart, 'ms');
    done();
  });

});
