function sumAll(arr) {
  var max = Math.max.apply(null, arr);//gets largest number in array
  var min = Math.min.apply(null, arr);//gets smallest number in array
  //console.log(min);
  //console.log(max);
  var total = [];//declare empty array
  for(var i = min; i <= max; i++) {//iterates through min-max
    total.push(i);//pushes each number into the array
  }
   return total.reduce(function (a, b) {//.reduce with the anonymous function returns the sum of the array
    return a + b;
  });
}
console.log(sumAll([1, 4]));