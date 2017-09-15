/*An algorithm is just fancy term for a set of instructions of 
what a program should do, and how it should do it. In other words:
 it’s nothing more than a manual for your code.*/


         //name          //parameters
function myReplace(str, before, after) {

  //checks if first letter is capitalized
  if (before[0] === before[0].toUpperCase()) {

    /*If first letter of before is capitalized, then
      capitalize the first letter of after.
      .slice(1) completes the word*/
    after = after[0].toUpperCase() + after.slice(1);
  }

  //Logs the new string with the replaced word
  console.log(str.replace(before, after));
}
          //argument
myReplace("His name is Tom", "Tom", "john");
