function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr = arr.sort(function(a, b) {
     return a - b;
  });
  return arr.indexOf(num);
}
console.log(
getIndexToIns([40, 60], 50)

);
