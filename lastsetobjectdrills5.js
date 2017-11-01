'use strict';

const obj1 = {
  name: "Robert Frazier",
  "job title": "student",
  boss: "James Kirk"
};

const obj2 = {
  name: "James Kirk",
  "job title": "Starship Captain"  
}

const obj3 = {
  name: "Spock",
  "job title": "Science Officer",
  boss: "James Kirk"
}

const obj4 = {
  name: "Montgomery Scott",
  "job title": "Chief Engineering Officer",
  boss: "James Kirk"
}

const myArr = [obj1, obj2, obj3, obj4];

for (let i in myArr) {
  let boss = myArr[i].boss;
  let report = "";
  if (!boss) {
	  report = "doesn't report to anybody.";
  } else {
    report = `reports to ${myArr[i].boss}.`;
  }
  console.log(`${myArr[i]["job title"]} ${myArr[i].name} ${report}`);
}