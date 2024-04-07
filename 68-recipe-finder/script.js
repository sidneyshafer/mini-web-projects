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

  // Event listeners
  submit.addEventListener('submit', searchRecipe);