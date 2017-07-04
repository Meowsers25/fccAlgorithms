function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  }
  console.log(str.replace(before, after));
}

myReplace("His name is Tom", "Tom", "john");
