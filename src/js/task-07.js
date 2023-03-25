
const rangeRef=document.querySelector('#font-size-control');
const spanText=document.querySelector('#text');




rangeRef.addEventListener('input', (event)=>{
    text.style.fontSize=event.target.value + 'px';
});

