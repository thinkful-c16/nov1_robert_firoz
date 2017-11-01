const myObj = {
	foo: false,
	bar: 17,
	fum: "Say what?",
	quux: function () {
		return true;
	},
	spam: "Monty Python sketch"
};

for (let i in myObj) {
	console.log (`${i}: ${myObj[i]}`);
};