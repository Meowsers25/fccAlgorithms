function titleCase(str) {

  //put string to all lowercase
  str = str.toLowerCase();

  //split string into an array *notice the space' '
  str = str.split(' ');

  //declare
  var capLetter = '';

  //iterate through each word of array
  for(i = 0; i < str.length; i++) {

    //split each item in array into individual characters
    capLetter = str[i].split("");

    //capitalize first character of each value
    capLetter[0] = capLetter[0].toUpperCase();

    //join the characters to reform the words
    str[i] = capLetter.join("");
  }

  //joins array back into the string and returns it
  console.log(str.join(" ")); 

}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");

//WOO HOO!
