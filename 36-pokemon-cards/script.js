const poke_container = document.getElementById('poke-container');
const pokemon_count = 24;
const colors = {
  fire: '#f94144',
  grass: '#90be6d',
  electric: '#f9c74f',
  water: '#61a5c2',
  ground: '#43aa8b',
  rock: '#577590',
  fairy: '#ff70a6',
  poison: '#4d908e',
  bug: '#f8961e',
  dragon: '#d62828',
  psychic: '#fcbf49',
  flying: '#e2eafc',
  fighting: '#f7b267',
  normal: '#faf0ca',
};

const main_types = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');

  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
  <div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${pokemonName}" />
  </div>
  <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${pokemonName}</h3>
      <small class="type">Type: <span>${type}</span></small>
  </div>
  `;

  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();