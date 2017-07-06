function repeatStringNumTimes(str, num) {
	// repeat after me
	//empty variable to store the repeated string
	var word = '';
	//for loop to iterate through according to num
	for (var i = 0; i < num; i++) {
		word += str;
	}
	console.log(word);
}
repeatStringNumTimes("Abby", 13);
// I looked into this
// further and you can
// use a while loop also
// while (num > 0) {
// word += str;
// num--;
