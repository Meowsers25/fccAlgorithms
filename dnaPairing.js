function pairElement(str) {

    var pairs = {
        T:"A",
        A:"T",
        G:"C",
        C:"G"
    };

    var pair = str.split("");

    for(var i = 0; i < pair.length; i++) {
        pair[i] = [pair[i], pairs[pair[i]]]; 
    }
    console.log(pair);
    //return str;
  }
  
  pairElement("GCG");