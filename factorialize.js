function factorialize(num) {
  //need variable for thr for loop
  var newNum = num;
  //use === to compare with 0
  if(newNum === 0) {
    return 1;
  }
  
  else {
  for(i = 1; i < newNum; i++) {
    num = num * i;
  }
  return num;
}
}
factorialize(5);
factorialize(20);
