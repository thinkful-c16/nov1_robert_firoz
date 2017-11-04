'use strict';
// const characters = [];

// function createCharacter(name, nickName, race, origin, attack, defense){
//   let x = 0;
//   let y = 0;
//   return {
//     name: '',
//     nickName: '',
//     race: '',
//     origin: '',
//     attack: 0,
//     defense: 0,
//     describe: function() {
//       console.log(`${name} is a ${race} from ${origin}.`);
//     },
//     evaluatFight: function(character){
//       if (character.defense >= character.attack) {
//         y = 0;
//       } else {
//         y = character.attack - character.defense;
//       }
//       if (character.attack >= character.defense) {
//         x = 0;
//       } else {
//         x = character.defense - character.attack;
//       }
//       console.log(`Your opponent takes ${x} damage and you receive ${y} damage.`);
//     }   
//   }
// } // closing bracket for createCharacter function

// createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 10, 6 );
// console.log(characters[0]);

const characters = [];

function createCharacter(name, nickName, race, origin, attack, defense){
  characters.push({
    name,
    nickName,
    race,
    origin,
    attack,
    defense
  });
}

createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 10, 6 );
createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 3, 2);
console.log(characters);


