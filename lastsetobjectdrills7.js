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
    'describe': function(){
      return `
      ${this.name} is a ${this.race} from ${this.origin}`;
    },
    // evaluateFight: function(character){
    //   console.log(`Your opponent takes ${x} damage and you receive ${y} damage.`);
    // },
  }); return characters;
}
//populates empty array
createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 3, 2);
createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8);
createCharacter('Legolas', 'legolas', 'Elf', 'WoodlandRealm', 8, 5, '','');
//prints character object
console.log(characters);

//prints description of one character specified by index in array
console.log(characters[0].describe());

//prints description of all characters
for (let key in characters){
console.log(characters[key].describe());
}



