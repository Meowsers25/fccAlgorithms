function translatePigLatin(str) {
    var vowel = /[aeiou]/gi;
    var beginsWithVowel = "";
    var removeConsonant = str.indexOf(str.match(vowel)[0]);

    if (str[0].match(vowel)) {
        beginsWithVowel = str + "way";
    } else {
        beginsWithVowel = str.substr(removeConsonant) + str.substr(0, removeConsonant) + "ay";
    }
    console.log(beginsWithVowel);
  }
  
  translatePigLatin("glove");