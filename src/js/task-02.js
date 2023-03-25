const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const ingredientElem = document.getElementById("ingredients");


const liElements=ingredients.map(ingredient => {
  const liElement= document.createElement("li");
  liElement.innerText = ingredient;
  
  liElement.classList.add('item');
  return liElement;
  

});


ingredientElem.append(...liElements);







