function dropElements(arr, func) {
    let originalLen = arr.length;
    for (let i = 0; i < originalLen; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });
  