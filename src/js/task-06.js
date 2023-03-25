

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef=document.querySelector('#validation-input');


inputRef.onblur = () => {
    console.log(inputRef.value.length);
    if (inputRef.getAttribute('data-length') >= inputRef.value.length)
    {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
        
    }

    else{
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        
}
}
    



