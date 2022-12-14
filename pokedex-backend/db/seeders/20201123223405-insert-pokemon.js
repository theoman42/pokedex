'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Pokemons", [
		{
			number: 1,
			imageUrl: "/images/pokemon_snaps/1.svg",
			name: "Bulbasaur",
			attack: 49,
			defense: 49,
			type: "grass",
			move1: "tackle",
			move2: "vine whip",
			captured: true,
		},
		{
			number: 2,
			imageUrl: "/images/pokemon_snaps/2.svg",
			name: "Ivysaur",
			attack: 62,
			defense: 63,
			type: "grass",
			move1: "tackle",
			move2: "razor leaf",
			captured: true,
		},
		{
			number: 3,
			imageUrl: "/images/pokemon_snaps/3.svg",
			name: "Venusaur",
			attack: 82,
			defense: 83,
			type: "grass",
			move1: "tackle",
			move2: "razor leaf",
			captured: true,
		},
		{
			number: 4,
			imageUrl: "/images/pokemon_snaps/4.svg",
			name: "Charmander",
			attack: 52,
			defense: 43,
			type: "fire",
			move1: "scratch",
			move2: "ember",
			captured: true,
		},
		{
			number: 5,
			imageUrl: "/images/pokemon_snaps/5.svg",
			name: "Charmeleon",
			attack: 64,
			defense: 58,
			type: "fire",
			move1: "ember",
			move2: "flamethrower",
			captured: true,
		},
		{
			number: 6,
			imageUrl: "/images/pokemon_snaps/6.svg",
			name: "Charizard",
			attack: 84,
			defense: 78,
			type: "fire",
			move1: "flamethrower",
			move2: "wing attack",
			captured: true,
		},
		{
			number: 7,
			imageUrl: "/images/pokemon_snaps/7.svg",
			name: "Squirtle",
			attack: 48,
			defense: 65,
			type: "water",
			move1: "tackle",
			move2: "bubble",
			captured: true,
		},
	]);
    await queryInterface.bulkInsert("Pokemons", [
		{
			number: 8,
			imageUrl: "/images/pokemon_snaps/8.svg",
			name: "Wartortle",
			attack: 63,
			defense: 80,
			type: "water",
			move1: "water gun",
			move2: "bite",
		},
		{
			number: 9,
			imageUrl: "/images/pokemon_snaps/9.svg",
			name: "Blastoise",
			attack: 83,
			defense: 100,
			type: "water",
			move1: "hydro pump",
			move2: "water gun",
		},
		{
			number: 10,
			imageUrl: "/images/pokemon_snaps/10.svg",
			name: "Caterpie",
			attack: 30,
			defense: 35,
			type: "bug",
			move1: "tackle",
			move2: null,
		},
		{
			number: 12,
			imageUrl: "/images/pokemon_snaps/12.svg",
			name: "Butterfree",
			attack: 45,
			defense: 50,
			type: "bug",
			move1: "psybeam",
			move2: "silver wind",
		},
		{
			number: 13,
			imageUrl: "/images/pokemon_snaps/13.svg",
			name: "Weedle",
			attack: 35,
			defense: 30,
			type: "bug",
			move1: "poison sting",
			move2: null,
		},
		{
			number: 16,
			imageUrl: "/images/pokemon_snaps/16.svg",
			name: "Pidgey",
			attack: 45,
			defense: 40,
			type: "normal",
			move1: "tackle",
			move2: "gust",
		},
		{
			number: 17,
			imageUrl: "/images/pokemon_snaps/17.svg",
			name: "Pidgeotto",
			attack: 60,
			defense: 55,
			type: "normal",
			move1: "gust",
			move2: "wing attack",
		},
		{
			number: 18,
			imageUrl: "/images/pokemon_snaps/18.svg",
			name: "Pidgeot",
			attack: 80,
			defense: 75,
			type: "normal",
			move1: "gust",
			move2: "wing attack",
		},
		{
			number: 19,
			imageUrl: "/images/pokemon_snaps/19.svg",
			name: "Rattata",
			attack: 56,
			defense: 35,
			type: "normal",
			move1: "tackle",
			move2: "hyper fang",
		},
		{
			number: 20,
			imageUrl: "/images/pokemon_snaps/20.svg",
			name: "Raticate",
			attack: 81,
			defense: 60,
			type: "normal",
			move1: "tackle",
			move2: "hyper fang",
		},
		{
			number: 21,
			imageUrl: "/images/pokemon_snaps/21.svg",
			name: "Spearow",
			attack: 60,
			defense: 30,
			type: "normal",
			move1: "peck",
			move2: null,
		},
		{
			number: 22,
			imageUrl: "/images/pokemon_snaps/22.svg",
			name: "Fearow",
			attack: 90,
			defense: 65,
			type: "normal",
			move1: "peck",
			move2: "drill peck",
		},
		{
			number: 23,
			imageUrl: "/images/pokemon_snaps/23.svg",
			name: "Ekans",
			attack: 60,
			defense: 44,
			type: "poison",
			move1: "poison string",
			move2: "bite",
		},
		{
			number: 24,
			imageUrl: "/images/pokemon_snaps/24.svg",
			name: "Arbok",
			attack: 85,
			defense: 69,
			type: "poison",
			move1: "poison sting",
			move2: "acid",
		},
		{
			number: 25,
			imageUrl: "/images/pokemon_snaps/25.svg",
			name: "Pikachu",
			attack: 55,
			defense: 40,
			type: "electric",
			move1: "growl",
			move2: "electro ball",
		},
		{
			number: 26,
			imageUrl: "/images/pokemon_snaps/26.svg",
			name: "Raichu",
			attack: 90,
			defense: 55,
			type: "electric",
			move1: "thundershock",
			move2: "thunderbolt",
		},
		{
			number: 27,
			imageUrl: "/images/pokemon_snaps/27.svg",
			name: "Sandshrew",
			attack: 75,
			defense: 85,
			type: "ground",
			move1: "scratch",
			move2: "poison sing",
		},
		{
			number: 28,
			imageUrl: "/images/pokemon_snaps/28.svg",
			name: "Sandslash",
			attack: 100,
			defense: 110,
			type: "ground",
			move1: "slash",
			move2: "swift",
		},
		{
			number: 29,
			imageUrl: "/images/pokemon_snaps/29.svg",
			name: "Nidorana",
			attack: 47,
			defense: 52,
			type: "poison",
			move1: "scratch",
			move2: null,
		},
		{
			number: 31,
			imageUrl: "/images/pokemon_snaps/31.svg",
			name: "Nidoqueen",
			attack: 82,
			defense: 87,
			type: "poison",
			move1: "body slam",
			move2: "superpower",
		},
		{
			number: 32,
			imageUrl: "/images/pokemon_snaps/32.svg",
			name: "Nidoran",
			attack: 57,
			defense: 40,
			type: "poison",
			// moves: [
			//   'peck'
			// ],
			move1: "peck",
			move2: null,
		},
		{
			number: 34,
			imageUrl: "/images/pokemon_snaps/34.svg",
			name: "Nidoking",
			attack: 92,
			defense: 77,
			type: "poison",
			move1: "poison sting",
			move2: "megahorn",
		},
		{
			number: 38,
			imageUrl: "/images/pokemon_snaps/38.svg",
			name: "Ninetales",
			attack: 76,
			defense: 75,
			type: "fire",
			move1: "ember",
			move2: null,
		},
		{
			number: 41,
			imageUrl: "/images/pokemon_snaps/41.svg",
			name: "Zubat",
			attack: 45,
			defense: 35,
			type: "poison",
			move1: "astonish",
			move2: "wing attack",
		},
		{
			number: 42,
			imageUrl: "/images/pokemon_snaps/42.svg",
			name: "Golbat",
			attack: 80,
			defense: 70,
			type: "poison",
			move1: "wing attack",
			move2: "air cutter",
		},
		{
			number: 46,
			imageUrl: "/images/pokemon_snaps/46.svg",
			name: "Paras",
			attack: 70,
			defense: 55,
			type: "bug",
			move1: "scratch",
			move2: null,
		},
		{
			number: 47,
			imageUrl: "/images/pokemon_snaps/47.svg",
			name: "Parasect",
			attack: 95,
			defense: 80,
			type: "bug",
			move1: "scratch",
			move2: "slash",
		},
		{
			number: 48,
			imageUrl: "/images/pokemon_snaps/48.svg",
			name: "Venonat",
			attack: 55,
			defense: 50,
			type: "bug",
			move1: "tackle",
			move2: "confusion",
		},
		{
			number: 49,
			imageUrl: "/images/pokemon_snaps/49.svg",
			name: "Venomoth",
			attack: 65,
			defense: 60,
			type: "bug",
			move1: "psychic",
			move2: "confusion",
		},
		{
			number: 50,
			imageUrl: "/images/pokemon_snaps/50.svg",
			name: "Diglett",
			attack: 55,
			defense: 25,
			type: "ground",
			move1: "scratch",
			move2: null,
		},
		{
			number: 51,
			imageUrl: "/images/pokemon_snaps/51.svg",
			name: "Dugtrio",
			attack: 80,
			defense: 50,
			type: "ground",
			move1: "slash",
			move2: "earthquake",
		},
		{
			number: 52,
			imageUrl: "/images/pokemon_snaps/52.svg",
			name: "Meowth",
			attack: 45,
			defense: 35,
			type: "normal",
			move1: "scratch",
			move2: "bite",
		},
		{
			number: 53,
			imageUrl: "/images/pokemon_snaps/53.svg",
			name: "Persian",
			attack: 70,
			defense: 60,
			type: "normal",
			move1: "bite",
			move2: "slash",
		},
		{
			number: 54,
			imageUrl: "/images/pokemon_snaps/54.svg",
			name: "Psyduck",
			attack: 52,
			defense: 48,
			type: "water",
			move1: "scratch",
			move2: "confusion",
		},
		{
			number: 55,
			imageUrl: "/images/pokemon_snaps/55.svg",
			name: "Golduck",
			attack: 82,
			defense: 78,
			type: "water",
			move1: "scratch",
			move2: "hydro pump",
		},
		{
			number: 56,
			imageUrl: "/images/pokemon_snaps/56.svg",
			name: "Mankey",
			attack: 80,
			defense: 35,
			type: "fighting",
			move1: "low kick",
			move2: "karate chop",
		},
		{
			number: 57,
			imageUrl: "/images/pokemon_snaps/57.svg",
			name: "Primeape",
			attack: 105,
			defense: 60,
			type: "fighting",
			move1: "karate chop",
			move2: "cross chop",
		},
		{
			number: 59,
			imageUrl: "/images/pokemon_snaps/59.svg",
			name: "Arcanine",
			attack: 110,
			defense: 80,
			type: "fire",
			move1: "bite",
			move2: "ember",
		},
		{
			number: 60,
			imageUrl: "/images/pokemon_snaps/60.svg",
			name: "Poliwag",
			attack: 50,
			defense: 40,
			type: "water",
			move1: "bubble",
			move2: "water gun",
		},
		{
			number: 62,
			imageUrl: "/images/pokemon_snaps/62.svg",
			name: "Poliwrath",
			attack: 85,
			defense: 95,
			type: "water",
			move1: "water gun",
			move2: null,
		},
		{
			number: 65,
			imageUrl: "/images/pokemon_snaps/65.svg",
			name: "Alakazam",
			attack: 50,
			defense: 45,
			type: "psychic",
			move1: "psybeam",
			move2: "psychic",
		},
		{
			number: 66,
			imageUrl: "/images/pokemon_snaps/66.svg",
			name: "Machop",
			attack: 80,
			defense: 50,
			type: "fighting",
			move1: "low kick",
			move2: "karate chop",
		},
		{
			number: 68,
			imageUrl: "/images/pokemon_snaps/68.svg",
			name: "Machamp",
			attack: 130,
			defense: 80,
			type: "fighting",
			move1: "cross chop",
			move2: "dynamicpunch",
		},
		{
			number: 69,
			imageUrl: "/images/pokemon_snaps/69.svg",
			name: "Bellsprout",
			attack: 75,
			defense: 35,
			type: "grass",
			move1: "vine whop",
			move2: null,
		},
		{
			number: 71,
			imageUrl: "/images/pokemon_snaps/71.svg",
			name: "Victreebel",
			attack: 105,
			defense: 65,
			type: "grass",
			move1: "vine whip",
			move2: "razor leaf",
		},
		{
			number: 72,
			imageUrl: "/images/pokemon_snaps/72.svg",
			name: "Tentacool",
			attack: 40,
			defense: 35,
			type: "water",
			move1: "acid",
			move2: "bubblebeam",
		},
		{
			number: 73,
			imageUrl: "/images/pokemon_snaps/73.svg",
			name: "Tentacruel",
			attack: 70,
			defense: 65,
			type: "water",
			move1: "acid",
			move2: "bubblebeam",
		},
		{
			number: 74,
			imageUrl: "/images/pokemon_snaps/74.svg",
			name: "Geodude",
			attack: 80,
			defense: 100,
			type: "rock",
			move1: "tackle",
			move2: "rock throw",
		},
		{
			number: 76,
			imageUrl: "/images/pokemon_snaps/76.svg",
			name: "Golem",
			attack: 110,
			defense: 130,
			type: "rock",
			move1: "rock throw",
			move2: "earthquake",
		},
		{
			number: 77,
			imageUrl: "/images/pokemon_snaps/77.svg",
			name: "Ponyta",
			attack: 85,
			defense: 55,
			type: "fire",
			move1: "ember",
			move2: "stomp",
		},
		{
			number: 78,
			imageUrl: "/images/pokemon_snaps/78.svg",
			name: "Rapidash",
			attack: 100,
			defense: 70,
			type: "fire",
			move1: "stomp",
			move2: "fire blast",
		},
		{
			number: 79,
			imageUrl: "/images/pokemon_snaps/79.svg",
			name: "Slowpoke",
			attack: 65,
			defense: 65,
			type: "water",
			move1: "water gun",
			move2: "headbutt",
		},
		{
			number: 80,
			imageUrl: "/images/pokemon_snaps/80.svg",
			name: "Slowbro",
			attack: 75,
			defense: 110,
			type: "water",
			move1: "psychic",
			move2: "headbutt",
		},
		{
			number: 81,
			imageUrl: "/images/pokemon_snaps/81.svg",
			name: "Magnemite",
			attack: 35,
			defense: 70,
			type: "electric",
			move1: "thundershock",
			move2: "spark",
		},
		{
			number: 82,
			imageUrl: "/images/pokemon_snaps/82.svg",
			name: "Magneton",
			attack: 60,
			defense: 95,
			type: "electric",
			move1: "spark",
			move2: "zap cannon",
		},
		{
			number: 83,
			imageUrl: "/images/pokemon_snaps/83.svg",
			name: "Farfetch'd",
			attack: 65,
			defense: 55,
			type: "normal",
			move1: "peck",
			move2: "slash",
		},
		{
			number: 84,
			imageUrl: "/images/pokemon_snaps/84.svg",
			name: "Doduo",
			attack: 85,
			defense: 45,
			type: "normal",
			move1: "peck",
			move2: null,
		},
		{
			number: 85,
			imageUrl: "/images/pokemon_snaps/85.svg",
			name: "Dodrio",
			attack: 110,
			defense: 70,
			type: "normal",
			move1: "peck",
			move2: "drill peck",
		},
		{
			number: 86,
			imageUrl: "/images/pokemon_snaps/86.svg",
			name: "Seel",
			attack: 45,
			defense: 55,
			type: "water",
			move1: "icy wind",
			move2: "aurora beam",
		},
		{
			number: 87,
			imageUrl: "/images/pokemon_snaps/87.svg",
			name: "Dewgong",
			attack: 70,
			defense: 80,
			type: "water",
			move1: "ice beam",
			move2: "aurora beam",
		},
		{
			number: 88,
			imageUrl: "/images/pokemon_snaps/88.svg",
			name: "Grimer",
			attack: 80,
			defense: 50,
			type: "poison",
			move1: "pound",
			move2: "sludge",
		},
		{
			number: 89,
			imageUrl: "/images/pokemon_snaps/89.svg",
			name: "Muk",
			attack: 105,
			defense: 75,
			type: "poison",
			move1: "pound",
			move2: "sludge bomb",
		},
		{
			number: 91,
			imageUrl: "/images/pokemon_snaps/91.svg",
			name: "Cloyster",
			attack: 95,
			defense: 180,
			type: "water",
			move1: "aurora beam",
			move2: null,
		},
		{
			number: 92,
			imageUrl: "/images/pokemon_snaps/92.svg",
			name: "Gastly",
			attack: 35,
			defense: 30,
			type: "ghost",
			move1: "tackle",
			move2: "lick",
		},
		{
			number: 94,
			imageUrl: "/images/pokemon_snaps/94.svg",
			name: "Gengar",
			attack: 65,
			defense: 60,
			type: "ghost",
			move1: "shadow punch",
			move2: "shadow ball",
		},
		{
			number: 95,
			imageUrl: "/images/pokemon_snaps/95.svg",
			name: "Onix",
			attack: 45,
			defense: 160,
			type: "rock",
			move1: "rock throw",
			move2: "dragonbreath",
		},
		{
			number: 96,
			imageUrl: "/images/pokemon_snaps/96.svg",
			name: "Drowzee",
			attack: 48,
			defense: 45,
			type: "psychic",
			move1: "confusion",
			move2: "headbutt",
		},
		{
			number: 97,
			imageUrl: "/images/pokemon_snaps/97.svg",
			name: "Hypno",
			attack: 73,
			defense: 70,
			type: "psychic",
			move1: "headbutt",
			move2: "psychic",
		},
		{
			number: 98,
			imageUrl: "/images/pokemon_snaps/98.svg",
			name: "Krabby",
			attack: 105,
			defense: 90,
			type: "water",
			move1: "bubble",
			move2: "vicegrip",
		},
		{
			number: 99,
			imageUrl: "/images/pokemon_snaps/99.svg",
			name: "Kingler",
			attack: 130,
			defense: 115,
			type: "water",
			move1: "crabhammer",
			move2: "vicegrip",
		},
		{
			number: 100,
			imageUrl: "/images/pokemon_snaps/100.svg",
			name: "Voltorb",
			attack: 30,
			defense: 50,
			type: "electric",
			move1: "tackle",
			move2: "spark",
		},
		{
			number: 101,
			imageUrl: "/images/pokemon_snaps/101.svg",
			name: "Electrode",
			attack: 50,
			defense: 70,
			type: "electric",
			move1: "spark",
			move2: "swift",
		},
		{
			number: 103,
			imageUrl: "/images/pokemon_snaps/103.svg",
			name: "Exeggutor",
			attack: 95,
			defense: 85,
			type: "grass",
			move1: "stomp",
			move2: "egg bomb",
		},
		{
			number: 104,
			imageUrl: "/images/pokemon_snaps/104.svg",
			name: "Cubone",
			attack: 50,
			defense: 95,
			type: "ground",
			move1: "bone club",
			move2: "headbutt",
		},
		{
			number: 105,
			imageUrl: "/images/pokemon_snaps/105.svg",
			name: "Marowak",
			attack: 80,
			defense: 110,
			type: "ground",
			move1: "bone club",
			move2: "headbutt",
		},
		{
			number: 106,
			imageUrl: "/images/pokemon_snaps/106.svg",
			name: "Hitmonlee",
			attack: 120,
			defense: 53,
			type: "fighting",
			move1: "rolling kick",
			move2: null,
		},
		{
			number: 107,
			imageUrl: "/images/pokemon_snaps/107.svg",
			name: "Hitmonchan",
			attack: 105,
			defense: 79,
			type: "fighting",
			move1: "mega punch",
			move2: "fire punch",
		},
		{
			number: 108,
			imageUrl: "/images/pokemon_snaps/108.svg",
			name: "Lickitung",
			attack: 55,
			defense: 75,
			type: "normal",
			move1: "lick",
			move2: "slam",
		},
		{
			number: 109,
			imageUrl: "/images/pokemon_snaps/109.svg",
			name: "Koffing",
			attack: 65,
			defense: 95,
			type: "poison",
			move1: "tackle",
			move2: "smog",
		},
		{
			number: 110,
			imageUrl: "/images/pokemon_snaps/110.svg",
			name: "Weezing",
			attack: 90,
			defense: 120,
			type: "poison",
			move1: "smog",
			move2: "sludge",
		},
		{
			number: 111,
			imageUrl: "/images/pokemon_snaps/111.svg",
			name: "Rhyhorn",
			attack: 85,
			defense: 95,
			type: "ground",
			move1: "horn attack",
			move2: "stomp",
		},
		{
			number: 112,
			imageUrl: "/images/pokemon_snaps/112.svg",
			name: "Rhydon",
			attack: 130,
			defense: 120,
			type: "ground",
			move1: "earthquake",
			move2: "megahorn",
		},
		{
			number: 113,
			imageUrl: "/images/pokemon_snaps/113.svg",
			name: "Chansey",
			attack: 5,
			defense: 5,
			type: "normal",
			move1: "pound",
			move2: "egg bomb",
		},
		{
			number: 114,
			imageUrl: "/images/pokemon_snaps/114.svg",
			name: "Tangela",
			attack: 55,
			defense: 115,
			type: "grass",
			move1: "constrict",
			move2: "vine whip",
		},
		{
			number: 115,
			imageUrl: "/images/pokemon_snaps/115.svg",
			name: "Kangaskhan",
			attack: 95,
			defense: 80,
			type: "normal",
			move1: "bite",
			move2: "dizzy punch",
		},
		{
			number: 116,
			imageUrl: "/images/pokemon_snaps/116.svg",
			name: "Horsea",
			attack: 40,
			defense: 70,
			type: "water",
			move1: "bubble",
			move2: "water gun",
		},
		{
			number: 117,
			imageUrl: "/images/pokemon_snaps/117.svg",
			name: "Seadra",
			attack: 65,
			defense: 95,
			type: "water",
			move1: "water gun",
			move2: "hydro pump",
		},
		{
			number: 118,
			imageUrl: "/images/pokemon_snaps/118.svg",
			name: "Goldeen",
			attack: 67,
			defense: 60,
			type: "water",
			move1: "peck",
			move2: "horn attack",
		},
		{
			number: 119,
			imageUrl: "/images/pokemon_snaps/119.svg",
			name: "Seaking",
			attack: 92,
			defense: 65,
			type: "water",
			move1: "waterfall",
			move2: "megahorn",
		},
		{
			number: 121,
			imageUrl: "/images/pokemon_snaps/121.svg",
			name: "Starmie",
			attack: 75,
			defense: 85,
			type: "water",
			move1: "water gun",
			move2: "swift",
		},
		{
			number: 122,
			imageUrl: "/images/pokemon_snaps/122.svg",
			name: "Mr. mime",
			attack: 45,
			defense: 65,
			type: "psychic",
			move1: "magical leaf",
			move2: "psychic",
		},
		{
			number: 123,
			imageUrl: "/images/pokemon_snaps/123.svg",
			name: "Scyther",
			attack: 110,
			defense: 80,
			type: "bug",
			move1: "wing attack",
			move2: "slash",
		},
		{
			number: 124,
			imageUrl: "/images/pokemon_snaps/124.svg",
			name: "Jynx",
			attack: 50,
			defense: 35,
			type: "ice",
			move1: "blizzard",
			move2: "ice punch",
		},
		{
			number: 125,
			imageUrl: "/images/pokemon_snaps/125.svg",
			name: "Electabuzz",
			attack: 83,
			defense: 57,
			type: "electric",
			move1: "thunderbolt",
			move2: "thunder",
		},
		{
			number: 126,
			imageUrl: "/images/pokemon_snaps/126.svg",
			name: "Magmar",
			attack: 95,
			defense: 57,
			type: "fire",
			move1: "fire punch",
			move2: "flamethrower",
		},
		{
			number: 127,
			imageUrl: "/images/pokemon_snaps/127.svg",
			name: "Pinsir",
			attack: 125,
			defense: 100,
			type: "bug",
			move1: "vicegrip",
			move2: null,
		},
		{
			number: 128,
			imageUrl: "/images/pokemon_snaps/128.svg",
			name: "Tauros",
			attack: 100,
			defense: 95,
			type: "normal",
			move1: "tackle",
			move2: "horn attack",
		},
		{
			number: 129,
			imageUrl: "/images/pokemon_snaps/129.svg",
			name: "Magikarp",
			attack: 10,
			defense: 55,
			type: "water",
			move1: "tackle",
			move2: null,
		},
		{
			number: 130,
			imageUrl: "/images/pokemon_snaps/130.svg",
			name: "Gyarados",
			attack: 125,
			defense: 79,
			type: "water",
			move1: "twister",
			move2: "hydro pump",
		},
		{
			number: 131,
			imageUrl: "/images/pokemon_snaps/131.svg",
			name: "Lapras",
			attack: 85,
			defense: 80,
			type: "water",
			move1: "body slam",
			move2: "ice beam",
		},
		{
			number: 133,
			imageUrl: "/images/pokemon_snaps/133.svg",
			name: "Eevee",
			attack: 55,
			defense: 50,
			type: "normal",
			move1: "tackle",
			move2: "bite",
		},
		{
			number: 135,
			imageUrl: "/images/pokemon_snaps/135.svg",
			name: "Jolteon",
			attack: 65,
			defense: 60,
			type: "electric",
			move1: "thundershock",
			move2: "thunder",
		},
		{
			number: 136,
			imageUrl: "/images/pokemon_snaps/136.svg",
			name: "Flareon",
			attack: 130,
			defense: 60,
			type: "fire",
			move1: "ember",
			move2: "smog",
		},
		{
			number: 137,
			imageUrl: "/images/pokemon_snaps/137.svg",
			name: "Porygon",
			attack: 60,
			defense: 70,
			type: "normal",
			move1: "psybeam",
			move2: "zap cannon",
		},
		{
			number: 138,
			imageUrl: "/images/pokemon_snaps/138.svg",
			name: "Omanyte",
			attack: 40,
			defense: 100,
			type: "rock",
			move1: "constrict",
			move2: "water gun",
		},
		{
			number: 139,
			imageUrl: "/images/pokemon_snaps/139.svg",
			name: "Omastar",
			attack: 60,
			defense: 125,
			type: "rock",
			move1: "ancientpower",
			move2: "water gun",
		},
		{
			number: 140,
			imageUrl: "/images/pokemon_snaps/140.svg",
			name: "Kabuto",
			attack: 80,
			defense: 90,
			type: "rock",
			move1: "scratch",
			move2: "mudshot",
		},
		{
			number: 141,
			imageUrl: "/images/pokemon_snaps/141.svg",
			name: "Kabutops",
			attack: 115,
			defense: 105,
			type: "rock",
			move1: "mud shot",
			move2: "ancientpower",
		},
		{
			number: 142,
			imageUrl: "/images/pokemon_snaps/142.svg",
			name: "Aerodactyl",
			attack: 105,
			defense: 65,
			type: "rock",
			move1: "wing attack",
			move2: "bite",
		},
		{
			number: 143,
			imageUrl: "/images/pokemon_snaps/143.svg",
			name: "Snorlax",
			attack: 110,
			defense: 65,
			type: "normal",
			move1: "snore",
			move2: "body slam",
		},
		{
			number: 144,
			imageUrl: "/images/pokemon_snaps/144.svg",
			name: "Articuno",
			attack: 85,
			defense: 100,
			type: "ice",
			move1: "ice beam",
			move2: "blizzard",
		},
		{
			number: 145,
			imageUrl: "/images/pokemon_snaps/145.svg",
			name: "Zapdos",
			attack: 90,
			defense: 85,
			type: "electric",
			move1: "drill peck",
			move2: "thunder",
		},
		{
			number: 146,
			imageUrl: "/images/pokemon_snaps/146.svg",
			name: "Moltres",
			attack: 100,
			defense: 90,
			type: "fire",
			move1: "ember",
			move2: "heat wave",
		},
		{
			number: 147,
			imageUrl: "/images/pokemon_snaps/147.svg",
			name: "Dratini",
			attack: 64,
			defense: 45,
			type: "dragon",
			move1: "twister",
			move2: "slam",
		},
		{
			number: 148,
			imageUrl: "/images/pokemon_snaps/148.svg",
			name: "Dragonair",
			attack: 84,
			defense: 65,
			type: "dragon",
			move1: "twister",
			move2: "slam",
		},
		{
			number: 149,
			imageUrl: "/images/pokemon_snaps/149.svg",
			name: "Dragonite",
			attack: 134,
			defense: 95,
			type: "dragon",
			move1: "slam",
			move2: "wing attack",
		},
		{
			number: 150,
			imageUrl: "/images/pokemon_snaps/150.svg",
			name: "Mewtwo",
			attack: 110,
			defense: 90,
			type: "psychic",
			move1: "swift",
			move2: "psychic",
		},
		{
			number: 151,
			imageUrl: "/images/pokemon_snaps/151.svg",
			name: "Mew",
			attack: 100,
			defense: 100,
			type: "psychic",
			move1: "psychic",
			move2: "ancientpower",
		},
	]);
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Pokemons');
  }
};
