function findLongestWord(str) {
  
  //seperates each string into an array
  var anArray = str.split(' ');
  
  //empty string
  var word = '';
  
  //loop to compare if word is less than anArray
  for(i = 0; i < anArray.length; i++) {
    if(word.length < anArray[i].length) {
      word = anArray[i];
    }
  }
  str = word;
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
