function uniteUnique(arr) {
    
    //created an array 
    var array = Array.prototype.slice.call(arguments);
    
    return array.reduce(function(a, b) {
      return a.concat(b.filter(function(next) {
        return a.indexOf(next) < 0;
      }));
    });
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  