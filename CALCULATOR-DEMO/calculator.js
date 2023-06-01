let btn = document.querySelectorAll(".buttons");
const display = document.querySelector("#display");
let displayValue = "";
let arrValue;
let firstValue;
let secondValue;
let symbol;


        //    THE ALL CLEAR BUTTON
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
       if (btn [i].value == "all-clear"){
        displayValue = "";
        display.value = displayValue;
        for (let o = 0; o < operator.length; o++){
            operator[o].disable = false;
        }
       }
       
    //    THE DELETE BUTTON
       else if ( btn[i].value == "delete"){
        let arrValue = display.value.split("");
        arrValue.pop();
        displayValue = arrValue.join("")
        display.value = displayValue;

       } 
             
        //    THE OPERATORS BUTTON
       else if (btn[i].classList.contains("operators")){
        if(displayValue == ""){
            console.error("you can't start with an operator")
        } 
        
        else if (btn[i].value ==  ""){
              display.value = displayValue + btn[i].value;
              display.value = displayValue;
        } else {
            if (btn [i].classList.contains("arith")){
                btn[i].classList.add("add")
                firstValue = displayValue;
                symbol = btn[i].value;
                displayValue = "";
                display.value = displayValue;
                console.log(symbol);
                console.log(firstValue);
            }

            if (btn[i].value === "="){
                secondValue = displayValue;
                console.log(secondValue);


                switch (symbol) {
                    case "+":
                        result = parseFloat(firstValue) + parseFloat(secondValue);

                    case "+":
                        result = parseFloat(firstValue) + parseFloat(secondValue);

                    case "+":
                        result = parseFloat(firstValue) + parseFloat(secondValue);


                    case "+":
                         result = parseFloat(firstValue) + parseFloat(secondValue);

                }

                displayValue = result.toString();
                display.value = displayValue;
            }
        }
       

       }

        //  THE NUMBER BUTTON
        else {
            displayValue = displayValue + btn[i].value;
            display.value = displayValue;
        }

    } 
    )
}


// let arr = ["a", "b", "c", "d"];
// console.log(arr);[`a`, `b`, `c`, `d`]
// arr.pop();
// console.log(arr);[`a`, `b`, `c`]

// let stringArr = arr.join("");
// console.log(stringArr);