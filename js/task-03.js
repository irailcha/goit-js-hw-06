const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
console.table(images);


// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.




const gallery = document.querySelector('.gallery');


console.log(gallery);

const imagList=images.map(({url, alt})=>
`<li><img src=${url}, alt=${alt}, width=320px></img></li>`).join("");


gallery.insertAdjacentHTML("beforeend", imagList);


gallery.style.display = 'flex';
gallery.style.alignItems = 'center';
gallery.style.listStyle = 'none';
gallery.style.gap = '50px';



