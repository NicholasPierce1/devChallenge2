// defines literal constants for string prefixes
const tipTotalDisplayPrefix = "Tip Total: $" || "default";
const taxTotalDisplayPrefix = "Tax: $";
const grandTotalDisplayPrefix = "Grand Total: $";
let jsonVar = JSON.parse('{"key":"value"}') || "no json to see here";
const myJsonVar = { name: "name here" };

// defines constant, coefficient for tax total
const taxTotalCoeffiecient = .055; // 5.5%

window.addEventListener('load', async () => {
    //grandTotalDisplay.innerHTML= "<b>Hi</b>";
    grandTotalDisplay.innerHTML = `<b> ${myJsonVar.name} <b> `;
    let stringInput = window.prompt("arg 1", "arg 2");
    console.log(`${stringInput}`);
    tipTotalInput.focus();
                                            });

// acquire document elements
const mealTotalInput = document.getElementById("mealTotal");
const tipTotalInput = document.getElementById("tipTotalPercent");
const tipTotalDisplay = document.getElementById("tipTotalDisplay");
const taxTotalDisplay = document.getElementById("taxAmount");
const grandTotalDisplay = document.getElementById("grandTotal");
document.getElementById("calculateTotal").addEventListener("click", async () =>{
    
    // converts inputs to numerical versions
    const mealInput = parseFloat(mealTotalInput.value) || 0;
    const tipInput = parseFloat(tipTotalInput.value) || 0;
    
    // local memeber to hold grand total and tax total
    
    // tip total (20% -- .2 * subtotal)
    const tipTotal = (tipInput / 100) * mealInput;
    const taxTotal = mealInput * taxTotalCoeffiecient;
    const grandMealTotal = taxTotal + tipTotal + mealInput;
    
    console.log(`mealTotalInput: ${mealTotalInput.value}`);
    console.log(`tip total input: ${tipTotalInput.value}`);
    
    // updates tip total with meal total * tip input / 100
    tipTotalDisplay.innerHTML = `${tipTotalDisplayPrefix} ${Math.round(tipTotal * 100)/100}`;
    
    
    // updates tax total with mealTotal * tax rate
    taxTotalDisplay.innerHTML = `${taxTotalDisplayPrefix} ${Math.round(taxTotal * 100)/100}`;
    
    // updates grand total with meal total
   grandTotalDisplay.innerHTML = `${grandTotalDisplayPrefix} ${Math.round(grandMealTotal * 100)/100}`;
    
});


// appends event listener for validating mealTotalInput (input- as user types || blur - as input loses focus)
window.document.getElementById("mealTotal").addEventListener('blur', 
                                                             (event) => {
        if(event.target.value.length >= 1 && parseFloat(event.target.value) >= 0){
            console.log("good");
            window.document.getElementById("mealTotal").style.display = "none";
            window.document.getElementById("mealTotal").style.display = "inline";
            
        }
    });

const app1 = new Vue({
    
    el: `#vueDemo`,
    data: {
        message: jsonVar.key
    }
    }
    
);

const app2 = new Vue({
    el: `#vueResult`,
    data: {
        torev: 'hello world 1'
    },
    computed: {
        result: function(){ return this.torev.split('').reverse().join(''); }
    }
})

