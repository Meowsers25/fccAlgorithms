function largestOfFour(arr) {
  // Had to make a variable with an array
  var largestNum = ["", "", "", ""];

  //first for loop iterates through the 4 sub arrays
  for(i = 0; i < arr.length; i++) {

    //second for loop iterates through the values of each array
    for(x = 0; x < arr[i].length; x++) {

      //if statement to get the largest number of each sub array
      if(arr[i][x] > largestNum[i]) {
        largestNum[i] =arr[i][x];
      }
    }
  }
  //return largestNum;
  console.log(largestNum);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
