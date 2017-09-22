function fearNotLetter(str) {
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    alpha = alpha.split("");
    str = str.split("");

    if(str[0] != "a") {
        return undefined;
    }

    for(var i = 0; i < str.length; i++) {
        if(str[i] != alpha[i]) {
            return alpha[i];
        }
    }
    return str;
   
  }
  
  fearNotLetter("abce");
  