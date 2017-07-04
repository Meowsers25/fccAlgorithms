function reverseString(str) {
  //splits string into array
  str = str.split("");
  //reverses the array
  str = str.reverse();
  //joins array- use single quotes!
  str = str.join('');

  //return str;
  console.log(str);
}

reverseString("hello");
