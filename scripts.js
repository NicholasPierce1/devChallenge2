// defines local constant members
const maxStringLength = 250;

// declares dom elements
const userInput = window.document.getElementById("sentence");
const ouputLabel = window.document.getElementById("wordsLeftLabel");

// creates event handler on user input to extract text, check length, and update label ouput
userInput.addEventListener("blur", async () => {
    
    console.log('event fired');
    // extracts text from user and stores its length
    const wordsEntered = userInput.value.split(' ').length;

    
    // stores output in label
   ouputLabel.innerHTML = `Words Left: ${maxStringLength - wordsEntered}`;
});

window.addEventListener("load", async () => {
    
    // inits label output
    ouputLabel.innerHTML = "Worlds Left: 250";
    
});