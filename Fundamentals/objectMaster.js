const pokemon = Object.freeze([
  { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
  { "id": 5, "name": "Charmeleon", "types": ["fire"] },
  { "id": 9, "name": "Blastoise", "types": ["water"] },
  { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
  { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
  { "id": 23, "name": "Ekans", "types": ["poison"] },
  { "id": 24, "name": "Arbok", "types": ["poison"] },
  { "id": 25, "name": "Pikachu", "types": ["electric"] },
  { "id": 35, "name": "Clefairy", "types": ["normal"] },
  { "id": 37, "name": "Vulpix", "types": ["fire"] },
  { "id": 52, "name": "Meowth", "types": ["normal"] },
  { "id": 63, "name": "Abra", "types": ["psychic"] },
  { "id": 67, "name": "Machamp", "types": ["fighting"] },
  { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
  { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
  { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
  { "id": 98, "name": "Krabby", "types": ["water"] },
  { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
  { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
  { "id": 133, "name": "Eevee", "types": ["normal"] },
  { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
  { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
  { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
  { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

const idDivBy3 = pokemon.filter(p => p.id % 3 === 0);
console.log(idDivBy3)

const firePokemon = pokemon.filter(p => p.types.includes("fire"))
console.log(firePokemon)

const multiTypePokemon = pokemon.filter(p => p.types.length > 1)
console.log(multiTypePokemon)

const allPokemonNames = pokemon.map(p => p.name)
console.log(allPokemonNames)

const namesGreaterThan99 = pokemon.filter(p => p.id > 99).map(p => p.name)
console.log(namesGreaterThan99)

const poisonOnlyPokemon = pokemon.filter(p => p.types.length === 1 && p.types[0] === "poison")
console.log(poisonOnlyPokemon)

const firstTypeofSecondTypeFlying = pokemon.filter(p => p.types.length >= 2 && p.types[1] == "flying").map(p => p.types[0])
console.log(firstTypeofSecondTypeFlying)

const normalPokemonCount = pokemon.filter(p => p.types.includes("normal")).length
console.log(normalPokemonCount)

const allBut148 = pokemon.filter(p => p.id !== 148)
console.log(allBut148)

const replaceId35 = pokemon.map(p => {
  if (p.id !== 35) {
    return p
  }
  else {
    p.types[0] = "fairy"
    return p
  }
})
console.log(replaceId35)
