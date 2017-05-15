function palindrome(str) {
  
  //convert str to lowercase
  str = str.toLowerCase();
  
  //for loop to replace symbols
  for(i = 0; i < str.length; i++) {
    str = str.replace('_', '');
    str = str.replace(' ', '');
    str = str.replace(',', '');
    str = str.replace('.', '');
    str = str.replace('-', '');
    str = str.replace(':', '');
    str = str.replace('(', '');
    str = str.replace(')', '');
  }
  
  //split str into array, reverse it, and join it together
  var newWord = str.split('').reverse().join('');
  
  //check for palindrome
  if(newWord == str) {
    return true;
  } else {
    return false;
  }
  
  
}

palindrome("_eye");
//YAY!