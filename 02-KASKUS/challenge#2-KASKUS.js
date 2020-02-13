function deretkaskus(n) {
  var j = []
  var i = 0
  for (var k = 0; k < n; k++) {
    i += 3;
    if (i % 5 === 0 && i % 6 === 0) {
      j.push("KASKUS");
    } else if (i % 6 === 0) {
      j.push("KUS");
    } else if (i % 5 === 0) {
      j.push("KAS");
    } else {
      j.push(i);
    }
  }
  return j;
}


console.log(deretkaskus(10));