var lSort = function(arr, order) {
  return arr.sort(function(a, b) {
    return compare(a, b, order);
  });
};

var compare = function(x, y, order) {
  var x0 = x[0];
  var y0 = y[0];

  if (x0 && y0 && x0 === y0) {
    //compare next char
    return compare(x.slice(1), y.slice(1), order);
  }

  if (x0 === undefined && y0 === undefined) {
    //no more chars to compare, strings must be equal
    return 0;
  } else if (x0 === undefined) {
    //x is shorter than y, so x comes before in sort order
    return -1;
  } else if (y0 === undefined) {
    //y is shorter than x, so y comes before in sort order
    return 1;
  } else if (order.indexOf(x0) < order.indexOf(y0)) {
    //x comes before in sort order
    return -1;
  } else {
    //x comes after in sort order
    return 1;
  }
};

module.exports = lSort;
