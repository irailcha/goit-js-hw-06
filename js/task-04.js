let counterValue=0;


const decrementButton = document.querySelector('button[data-action="decrement"]');
console.log(decrementButton.textContent); 

const incrementButton = document.querySelector('button[data-action="increment"]');
console.log(incrementButton.textContent);

const valueRef=document.getElementById('value');


const increment = () => {
    counterValue +=1;
    valueRef.textContent=counterValue;
  };

  const decrement = () => {
    counterValue-= 1;
    valueRef.textContent=counterValue;
  };


decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);


