function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  console.log(str.substr(-target.length) === target);
}

confirmEnding("He has to give me a new name", "name");
