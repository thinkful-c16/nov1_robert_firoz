const obj1 = {
	name: "Robert Frazier",
	"job title": "student"
};

const obj2 = {
	name: "James Kirk",
	"job title": "Starship Captain"
}

const obj3 = {
	name: "Spock",
	"job title": "Science Officer"
}

const obj4 = {
	name: "Montgomery Scott",
	"job title": "Chief Engineering Officer"
}

const myArr = [obj1, obj2, obj3, obj4];

for (let i in myArr) {
	console.log(myArr[i]);
}