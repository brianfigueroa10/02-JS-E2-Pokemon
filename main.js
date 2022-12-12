const container = document.getElementById("container");
const form = document.getElementById("form");
const input = document.querySelector(".input-number");

const showEmptyError = () => {
  container.innerHTML = `
            <img src="./assets/error.png" alt="" class="img-error">
        <div class="pokemon-container">
            <h2 class="error-title"> Por favor, Ingresé número para validar</h2>
        </div>
    `;
  form.reset()
};

const showError = () => {
  container.innerHTML = `
        <img src="./assets/error.png" alt="" class="img-error">
            <div class="pokemon-container">
                <h2 class="error-title"> No existe un pokemon con el id ingresado, Vuelva a intentar</h2>
        </div>
        `;
  form.reset()
}

const renderResult = ({name, height, weight, types, sprites: {
    other: {
      "official-artwork": { front_default },
    },
  },
}) => {
    return container.innerHTML = `
            <img src="${front_default}" alt="" class="img-res"></img>
            <div class="pokemon-container">
              <h2 class="nombre_pokemon"> ${name.toUpperCase()}</h2>
              <h3 class="type_pokemon">${types.map((typ) => typ.type.name).join(" | ").toUpperCase()}</h3>
              <div class="alturaYpeso">
                <h3>Peso: <span class="peso_pokemon"> ${weight/10} kg </span></h3>
                <h3>Altura: <span class="altura_pokemon">${height/10} mts</span></h3>
              </div> 
            </div> 
        `;
  };


const submitSearch = async (e) => {
  e.preventDefault(); //evitar evento defecto de tipo submit que recarga pagina
  const searchedValue = input.value.trim();
  if (!searchedValue) {
    showEmptyError();
    return;
  }
  const searchedpokemon = await requestPokemon(searchedValue);
  renderResult(searchedpokemon);
  form.reset();
};


const init = () => {
  form.addEventListener("submit", submitSearch);
};

init();