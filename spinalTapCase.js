function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    
    str = str.replace(/([a-z])([A-Z])/g,"$1 $2").toLowerCase();
    
    return str.replace( /\s|_/g,"-");
  }
  
  console.log(spinalCase('This Is Spinal Tap'));