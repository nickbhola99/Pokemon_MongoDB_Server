import mongoose from "mongoose";

//Pokemon schema
//Pokemon have pokedex number, a typing (some have only one type while others have two), a location showing where they can be found in a game, a boolean value for whether they evolve or not, and their game stats

const pokeSchema = new mongoose.Schema({
    dexNumber: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true, 
        unique: true
    },
    type1: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 12,
        enum: ["Normal", "Water", "Grass", "Fire", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"]
    },
    type2: {
        type: String,
        required: false,
        minLength: 3,
        maxLength: 12,
        enum: ["Normal", "Water", "Grass", "Fire", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"],
        //validator function, pokemon must have distinct types
        validate:{
            validator: function(v) {
                return v !== this.type1;
            },
            message: props => `${props.value} is not a valid 2nd type, Pokemon do have two types that are the same {eg. Water/Water}`
        }
    },
    Location: {
        type: String,
        required: true,
    },
    Evolves: {
        type: Boolean,
        required: true,
    },
    HP: {
        type: Number,
        required: true,
    },
    Attack: {
        type: Number,
        required: true,
    },
    Defense: {
        type: Number,
        required: true,
    },
    SpecialAttack: {
        type: Number,
        required: true,
    },
    SpecialDefense: {
        type: Number,
        required: true,
    },
    Speed: {
        type: Number,
        required: true,
    }

})
pokeSchema.index({dexNumber: 1, name: 1});
export default new mongoose.model('Pokemon', pokeSchema)

//test cases
// [
//     {
//         "_id": "671271d93676bbebee33185d",
//         "dexNumber": 62,
//         "name": "Poliwrath",
//         "type1": "Water",
//         "type2": "Fighting",
//         "Location": "None",
//         "Evolves": false,
//         "HP": 90,
//         "Attack": 85,
//         "Defense": 95,
//         "SpecialAttack": 70,
//         "SpecialDefense": 90,
//         "Speed": 70,
//         "__v": 0
//     },
//     {
//         "_id": "6714864bdbdeea56be837179",
//         "dexNumber": 1,
//         "name": "Bulbasaur",
//         "type1": "Grass",
//         "type2": "Poison",
//         "Location": "None",
//         "Evolves": true,
//         "HP": 45,
//         "Attack": 49,
//         "Defense": 49,
//         "SpecialAttack": 65,
//         "SpecialDefense": 65,
//         "Speed": 45,
//         "__v": 0
//     },
//     {
//         "_id": "67148679dbdeea56be83717b",
//         "dexNumber": 2,
//         "name": "Ivysaur",
//         "type1": "Grass",
//         "type2": "Poison",
//         "Location": "None",
//         "Evolves": true,
//         "HP": 60,
//         "Attack": 62,
//         "Defense": 49,
//         "SpecialAttack": 80,
//         "SpecialDefense": 80,
//         "Speed": 60,
//         "__v": 0
//     },
//     {
//         "_id": "671486afdbdeea56be83717d",
//         "dexNumber": 3,
//         "name": "Venusaur",
//         "type1": "Grass",
//         "type2": "Poison",
//         "Location": "None",
//         "Evolves": false,
//         "HP": 80,
//         "Attack": 82,
//         "Defense": 83,
//         "SpecialAttack": 100,
//         "SpecialDefense": 100,
//         "Speed": 80,
//         "__v": 0
//     },
//     {
//         "_id": "67148702dbdeea56be837180",
//         "dexNumber": 3,
//         "name": "Venusaur_(Mega)",
//         "type1": "Grass",
//         "type2": "Poison",
//         "Location": "None",
//         "Evolves": false,
//         "HP": 80,
//         "Attack": 100,
//         "Defense": 123,
//         "SpecialAttack": 122,
//         "SpecialDefense": 120,
//         "Speed": 80,
//         "__v": 0
//     },
//     {
//         "_id": "6715c4ae377607b4d6ecf588",
//         "dexNumber": 25,
//         "name": "Pikachu",
//         "type1": "Electric",
//         "Location": "Viridian Forest",
//         "Evolves": true,
//         "HP": 35,
//         "Attack": 55,
//         "Defense": 30,
//         "SpecialAttack": 50,
//         "SpecialDefense": 40,
//         "Speed": 90,
//         "__v": 0
//     },
//     {
//         "_id": "6715c5a2377607b4d6ecf58a",
//         "dexNumber": 4,
//         "name": "Charmander",
//         "type1": "Fire",
//         "Location": "None",
//         "Evolves": true,
//         "HP": 39,
//         "Attack": 52,
//         "Defense": 43,
//         "SpecialAttack": 60,
//         "SpecialDefense": 50,
//         "Speed": 65,
//         "__v": 0
//     },
//     {
//         "_id": "6715c5ce377607b4d6ecf58c",
//         "dexNumber": 5,
//         "name": "Charmeleon",
//         "type1": "Fire",
//         "Location": "None",
//         "Evolves": true,
//         "HP": 58,
//         "Attack": 64,
//         "Defense": 58,
//         "SpecialAttack": 80,
//         "SpecialDefense": 65,
//         "Speed": 80,
//         "__v": 0
//     },
//     {
//         "_id": "6715c602377607b4d6ecf58e",
//         "dexNumber": 6,
//         "name": "Charizard",
//         "type1": "Fire",
//         "type2": "Flying",
//         "Location": "None",
//         "Evolves": false,
//         "HP": 78,
//         "Attack": 84,
//         "Defense": 78,
//         "SpecialAttack": 109,
//         "SpecialDefense": 85,
//         "Speed": 100,
//         "__v": 0
//     },
//     {
//         "_id": "6715c6e6377607b4d6ecf590",
//         "dexNumber": 7,
//         "name": "Squirtle",
//         "type1": "Water",
//         "Location": "None",
//         "Evolves": true,
//         "HP": 44,
//         "Attack": 48,
//         "Defense": 65,
//         "SpecialAttack": 50,
//         "SpecialDefense": 64,
//         "Speed": 43,
//         "__v": 0
//     },
//     {
//         "_id": "6715c713377607b4d6ecf592",
//         "dexNumber": 8,
//         "name": "Wartortle",
//         "type1": "Water",
//         "Location": "None",
//         "Evolves": true,
//         "HP": 59,
//         "Attack": 63,
//         "Defense": 80,
//         "SpecialAttack": 65,
//         "SpecialDefense": 80,
//         "Speed": 58,
//         "__v": 0
//     },
//     {
//         "_id": "6715c736377607b4d6ecf594",
//         "dexNumber": 9,
//         "name": "Blastoise",
//         "type1": "Water",
//         "Location": "None",
//         "Evolves": false,
//         "HP": 79,
//         "Attack": 83,
//         "Defense": 100,
//         "SpecialAttack": 85,
//         "SpecialDefense": 105,
//         "Speed": 78,
//         "__v": 0
//     }
// ]