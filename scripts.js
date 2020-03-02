// defines local constant members
const maxStringLength = 250;

// declares dom elements
const userInput = window.document.getElementById("sentence");
const ouputLabel = window.document.getElementById("wordsLeftLabel");

// creates event handler on user input to extract text, check length, and update label ouput
userInput.addEventListener("blur", async () => {
    
    
    // extracts text from user and stores its length
    const wordsEntered = userInput.value.split('').length;

    
    // stores output in label
   ouputLabel.innerHTML = `<b>Characters Left: ${maxStringLength - wordsEntered}</b>`;
});

window.addEventListener("load", async () => {
    
    // inits label output
    ouputLabel.innerHTML = "<b>Characters Left: 250</b>";
    
});