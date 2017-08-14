function diffArray(arr1, arr2) {
    var newArr = [];
    for(var i = 0; i < arr1.length; i++) {//iterates through arr1
      if(arr2.indexOf(arr1[i]) === -1) {//the -1 returns each element that is not present
        newArr.push(arr1[i]);//pushes non matching element into newArr
      }
    }
    for(var a = 0; a < arr2.length; a++) {//iterates through arr2
      if(arr1.indexOf(arr2[a]) === -1) {
        newArr.push(arr2[a]);
      }
    }
    // Same, same; but different.
    console.log(newArr);
  }
  
  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
  