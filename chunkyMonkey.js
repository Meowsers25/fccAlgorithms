function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var count = 0;

  while(count < arr.length) {
    newArr.push(arr.slice(count, count + size));
    count = count + size;
  }
  return newArr;
}
console.log(
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
  );
