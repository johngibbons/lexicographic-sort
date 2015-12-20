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

var quickSort = function(arr, lo, hi, order) {
  if (lo < hi) {
    //still more than one element so compare
    var p = partition(arr, lo, hi, order);
    var sortlow = quickSort(arr, lo, p - 1, order);
    var sorthigh = quickSort(arr, p + 1, hi, order);
  }
  return arr;
}

var partition = function(arr, lo, hi, order) {
  //set comparison pivot to last element of subarray
  var pivot = arr[hi];
  var i = lo;

  for (var j = lo; j <= hi-1; j++) {
    //compare using lexicographic compare function
    if (compare(arr[j], pivot, order) < 0) {
      //curr element smaller, swap with first el
      var temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
      //next swap will occur with next el
      i++;
    }
  }

  //put pivot in place
  var temp = arr[i];
  arr[i] = arr[hi];
  arr[hi] = temp;
  return i;
}

var lSort = function(arr, order) {
  return quickSort(arr, 0, arr.length - 1, order);
};

module.exports = lSort;
