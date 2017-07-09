function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = [];
  newArr = arr.filter(remove);
  return newArr;
  //newArr is returned after the remove function is passed in
}
//returns the boolean value of each argument passed in
function remove(value) {
  return Boolean(value);
}
console.log(
bouncer([7, "ate", "", false, 9])
);

//7 ate 9!!
