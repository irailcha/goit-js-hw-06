const categoriesList = document.querySelector('#categories');
const numOfCategoriesEl = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${numOfCategoriesEl.length}`);


numOfCategoriesEl.forEach((item) => {

    const nameOfCat = item.querySelector('h2').textContent;
    const countOfCatItems=item.querySelector('li').textContent;
    console.log(`Category: ${nameOfCat} \nElements: ${countOfCatItems.length}`)
}); 

    
   