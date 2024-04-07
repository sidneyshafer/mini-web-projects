const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  recipesEl = document.getElementById('recipes'),
  resultHeading = document.getElementById('result-heading'),
  single_recipeEl = document.getElementById('single-recipe'),
  errorEl = document.getElementById('error');

  // Search recipe and fetch from meal API
  function searchRecipe(e) {
    e.preventDefault();

    // Clear single recipe
    single_recipeEl.innerHTML = '';

    // Get search term
    const term = search.value;

    // Check for empty term
    if (term.trim()) {
      errorEl.classList.remove('show');
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        resultHeading.innerHTML = `<h2>Search results for '${term}'</h2>`;

        if(data === null) {
          resultHeading.innerHTML = `<p>No search results. Please try again</p>`;
        } else {
          recipesEl.innerHTML = data.meals
            .map(
              recipe => `
            <div class="recipe">
              <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" />
              <div class="recipe-info" data-recipeID="${recipe.idMeal}">
                <h3>${recipe.strMeal}</h3>
              </div>
            </div>
          `
            )
            .join('');
        }
      });

      // Clear search text
      search.value = '';

    } else {
      resultHeading.innerText = '';
      errorEl.classList.add('show');
    }
}

// Fetch recipe by ID
function getRecipeById(recipeID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeID}`)
  .then(res => res.json())
  .then(data => {
    const recipe = data.meals[0];

    addRecipeToDOM(recipe);
  })
}

// Fetch random recipe
function getRandomRecipe() {
  // Clear recipes and heading
  recipesEl.innerHTML = '';
  resultHeading.innerHTML = '';

  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(res => res.json())
  .then(data => {
    const recipe = data.meals[0];

    addRecipeToDOM(recipe);
  });
}

// Add recipe to DOM
function addRecipeToDOM(recipe) {
  const ingredients = [];

  for(let i = 1; i <= 20; i++) {
    if(recipe[`strIngredient${i}`]) {
      ingredients.push(`${recipe[`strMeasure${i}`]} ${recipe[`strIngredient${i}`]}`)
    } else {
      break;
    }
  }

  single_recipeEl.innerHTML = `
    <div class="single-recipe">
      <h1>${recipe.strMeal}</h1>
      <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}" />
      <div class="single-recipe-info">
        ${recipe.strCategory ? `<p>${recipe.strCategory}</p>` : ''}
        ${recipe.strArea ? `<p>${recipe.strArea}</p>` : ''}
      </div>
      <div class="main">
        <p>${recipe.strInstructions}</p>
        <h2>Ingredients</h2>
        <ul>
          ${ingredients.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Event listeners
submit.addEventListener('submit', searchRecipe);
random.addEventListener('click', getRandomRecipe);

recipesEl.addEventListener('click', (e) => {
  const recipeInfo = e.composedPath().find(item => {
    if(item.classList) {
      return item.classList.contains('recipe-info');
    } else {
      return false;
    }
  });

  if(recipeInfo) {
    const recipeID = recipeInfo.getAttribute('data-recipeid');
    getRecipeById(recipeID);
  }
});