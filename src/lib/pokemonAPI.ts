//to access to Pokemon API

const POKEMON_API = "https://pokeapi.co/api/v2/"

// getPokemonList -> Get the first 151 pokemon names

export async function getPokemonList(){
  const response =  await fetch(POKEMON_API + "pokemon?limit=151&offset=0")

  const data = await response.json()

  return data.results;
}


// getPokemon -> given a string "pikachu" get the information {........} 

export async function getPokemon(name : string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await response.json()

    return data
}

// getPokemon -> {}