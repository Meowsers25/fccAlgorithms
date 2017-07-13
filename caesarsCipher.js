function rot13(str) { // LBH QVQ VG!
  str = str.split("").map(caesarCipher).join("");
  return str;
}
function caesarCipher(letter) {
    var symbolregex = /[^a-zA-Z]/g;
    if(symbolregex.test(letter)) {
        return letter;
    }
    var code = letter.charCodeAt(0);
        if(code > 77) {
            code -= 13;
        } else {
            code += 13;
        }
        return String.fromCharCode(code);
}
// Change the inputs below to test
console.log(
rot13(" LBH QVQ VG!")
);
