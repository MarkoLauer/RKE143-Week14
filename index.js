
const containerElement = document.querySelector('.container');

getRandomRecipe();

async function getRandomRecipe() {
    const response = await fetch('https://week11recipes.onrender.com/random');
    const recipe = await response.json();

    const recipeName = recipe.recipe.recipename;
    const imageURL = recipe.recipe.imageurl;
    const recipeInstr = recipe.recipe.instructions;
    const ingredientsArray = recipe.ingredients;

    const recipeImage = document.createElement('img');
    const recipeNameTitle = document.createElement('h2');
    const instrcutionsBlock = document.createElement('p');
    const ingredientsList = document.createElement('ul');
    
    ingredientsArray.forEach(ingredient => {
        const ingredientLIElement = document.createElement('li');
        ingredientLIElement.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientLIElement);
    });

    recipeImage.src = imageURL;
    recipeNameTitle.innerHTML = recipeName;
    instrcutionsBlock.innerHTML = recipeInstr;

    const footer = document.createElement('footer');
    footer.innerHTML = '&#169 2023 ML Consult';

    containerElement.appendChild(recipeNameTitle);
    containerElement.appendChild(recipeImage);
    containerElement.appendChild(ingredientsList);
    containerElement.appendChild(instrcutionsBlock);
    containerElement.appendChild(footer);


    console.log(imageURL);
};