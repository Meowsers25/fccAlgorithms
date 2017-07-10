function destroyer(arr) {
  // Remove all the values

  var args = Array.from(arguments);
  for (var i = 0; i < args[0].length; i++) {
      for (var a = 1; a < args.length; a++) {
          if (args[0][i] === args[a]) {
            delete args[0][i];
          }
      }
  }
  return args[0].filter(function(x) {
      return Boolean(x);
  });
}

console.log(
destroyer([3, 5, 1, 2, 2], 2, 3, 5)
);
