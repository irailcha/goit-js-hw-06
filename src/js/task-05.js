

const inputRef=document.getElementById("name-input");


const outputRef = document.getElementById("name-output");


inputRef.addEventListener("input", (event) => {
    const eventValue=event.target.value.trim();
    if (eventValue === ""){
        outputRef.textContent = "Anonymous";
    }
else{
    outputRef.textContent = eventValue;
}
});


