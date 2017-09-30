function sym(args) {
  console.log("Arguments.length ==", arguments.length);
  console.log("Arguments object ==", arguments);
  
  args = Array.from(arguments);
  
  function symDiff(arrayA, arrayB) {
    var result = [];
    console.log('\n');
    console.log('arrayA == ', arrayA);
    console.log('arrayB == ', arrayB);
    
    arrayA.forEach(function(item) {
      if (arrayB.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
        console.log("result.1(" + item + ") == ", result);
      }
    });
    
    arrayB.forEach(function(item) {
      if (arrayA.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
        console.log("result.2(" + item + ") == ", result);
      }
    });
    return result;
  }
  return args.reduce(symDiff);
}

sym([1, 2, 3], [5, 2, 1, 4]);

