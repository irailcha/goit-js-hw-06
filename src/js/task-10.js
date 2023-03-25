function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesRef = document.querySelector('#boxes');


  function createBoxes(amount) {
    let size = 30;
    for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesRef.appendChild(box);
      size += 10;
    }}

  function destroyBoxes() {
    boxesRef.innerHTML = '';
  }

  createButton.addEventListener('click', () => {
    const amount = document.querySelector('input').value;
    createBoxes(amount);
  });

  destroyButton.addEventListener('click', destroyBoxes);