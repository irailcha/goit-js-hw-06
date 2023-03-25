function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonChangeColor=document.querySelector('.change-color');
console.log(buttonChangeColor);

const nameChangeColor=document.querySelector('.color');
console.log(nameChangeColor);

const body=document.querySelector('body');
console.log(body);

buttonChangeColor.addEventListener('click', function(){
  const getRandom=getRandomHexColor();
    body.style.backgroundColor=getRandom;
    nameChangeColor.textContent=getRandom;
});


