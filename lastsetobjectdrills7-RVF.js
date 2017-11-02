'use strict';
const characters = [];
let name, nickName, race, origin, weapon ='';
let attack, defense = 0;

function createCharacter(nameIn, nickNameIn, raceIn, originIn, weaponIn, attackIn, defenseIn){
  const characters = {
    name: nameIn,
    nickName: nickNameIn,
    race: raceIn,
    origin: originIn,
    weapon: weaponIn,
    attack: attackIn,
    defense: defenseIn,
    describe: function() {
      return(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`);
    },
    evaluateFight: function(character){
      let x, y = 0;
      //console.log(character.attack, character.defense, this.attack, this.defense);
      if (character.defense >= this.attack) {
        x = 0;
      } else {
        x = this.attack - character.defense;
      }
      if (this.defense >= character.attack) {
        y = 0;
      } else {
        y = character.attack - this.defense;
      }
      return(`Your opponent, who is called ${character.name}, takes ${x} damage and you, ${this.name}, receive ${y} damage.`);
    }   
  }
  return characters;
} // closing bracket for createCharacter function

characters.push(createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 'a wizard staff', 10, 6));
characters.push(createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'the Ring', 2, 1));
characters.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'Sting and Barrow Blade', 3, 2));
characters.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man','Dunnedain', 'Anduril', 6, 8));
characters.push(createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'a Bow and Arrow', 8, 5));
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 'Hadhafang', 6, 6));

// Describe one character:
console.log('\n describe one character');
console.log(characters[0].describe());


// Describe all characters:
console.log('\n describe all characters');
for (let key in characters) {
 console.log(characters[key].describe());
}


// Evaluate the outcome of one fight:
console.log('\n outcome of one fight');
console.log(characters[0].evaluateFight(characters[1]));


// Evaluate the outcome of all possible fights:
console.log('\n outcome of all possible fights');
for (let i in characters) {
  for (let j in characters) {
    if (characters[i].name !== characters[j].name) {
      console.log(characters[i].evaluateFight(characters[j]));
    }
  }  
}


// Use .find to fetch Aragorn and describe him:
console.log('\n fetch Aragorn and describe');
console.log(characters.find(e => e.nickName === 'aragorn').describe());


// Use .filter to make an array of hobbits only:
console.log('\n hobbits only');
const raceArray = characters.filter(e => e.race === 'Hobbit');
console.log(raceArray);


// Use .filter to make an array of the strongest fighters:
console.log('\n strongest fighters');
const strongArray = characters.filter(e => e.attack > 5);
console.log(strongArray);