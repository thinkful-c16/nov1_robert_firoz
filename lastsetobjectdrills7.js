'use strict';
const characters = [];

function createCharacter(name, nickName, race, origin, attack, defense){
  characters.push({
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    describe: function(){
      return `
      ${this.name} is a ${this.race} from ${this.origin}`;
    },
    evaluateFight: function(character){
      let x = 0;  //attack
      let y = 0;  //defense

      if (character.defense > this.attack){
        x = 0;
      } else {
        x = this.attack - character.defense;
      }
      if (this.defense > character.attack){
        y = 0;
      } else {
        y = character.attack - this.defense;
      } return `
      Your opponent takes ${x} damage and you receive ${y} damage.`;
    },
  }); return characters;
}
//adds characters to empty array
createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 3, 2);
createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8);
createCharacter('Legolas', 'legolas', 'Elf', 'The Woodland Realm', 8, 5);
createCharacter('Arwen Undomiel', 'arry', 'Rivendell', 'Half-Elf', 8, 6);

//prints character object
//console.log(characters);

//prints description of one character specified by index in array
//console.log(characters[0].describe());

//prints description of all characters

// for (let key in characters){
// console.log(characters[key].describe());
// }

//finds nickname aragorn and prints describe
// function findAragorn(ranger){
//   return (ranger.nickName==='aragorn');
// }
// console.log(characters.find(findAragorn).describe());
  
// evaluationFight results; takes first provided index and compares 
//to 2nd character index provided. put another way, damage given and damage taken 
// is provided from point of view from first index entered 
// console.log(characters[3].evaluateFight(characters[0]));

//filter hobbits
//const filterHobbits = characters.filter(function(hobbit) {
//   return (hobbit.race === 'Hobbit');
  
// });

// console.log(filterHobbits);
// // attack value of 5 or higher filter
// const attFiveHigher = characters.filter(function(fiveplus) {
//   return (fiveplus.attack > 5);
// });
// console.log(attFiveHigher);

