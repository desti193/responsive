// let name ="Destiny"
// name = "isaac"
// alert(name)

// let name = prompt("What is your name")


// if (name == "destiny") {
//     alert(name);

// } else if (name == "goat") {
//     alert(name);


// } else {
//     alert("Wrong name")
// } 



// let num = 10;
// let numOFGuesses = 4;
// let guess;

// for (i = 0; i < numOFGuesses; i++){
//     guess = parseInt(prompt("write a number"));
//     if (guess < num) {
//         alert ("Guess is lower than number");
//     } else if (guess > num) {
//         alert ("Guess is greater than number");
//     } else  if  ( guess == num){
//         alert ("You are correct");
//         break;
//     } else {
//         alert (" Input a number");
//     }
//     }









// let guess = parseInt(prompt("write a number"));
// let num = 10;

// if (guess < num){
//     alert ("Guess is lower then number")
// } else if (guess > num)







// let persson = {
//     firstname : "John",
//     gender : "Male",
//     age : 64,
//     lastname : "Mark"
// }




// console . log ("Hello,World")





// let i = 1
// while ( i < 10){
//     console . log (i)
//     i++;
// }






// for ( let j =1; j<10;j++){
//     console . Log(j)
// }


// const text = document.getElementById("text");
// console . log (text)
// text.innerHTML = "Hello, world!";
// text.style.color = "red";
// text.style.margin ="12px"
// text.style.fontsize ="40px";

// let call = document.createElement(p);
// call.className = "Hello";


// let num = prompt("enter a number");
// let numOFGuesses = 10;
// if ( num > 100){
//     alert("invalid number");
// }else{
//     for(let i = 0; i < numOFGuesses;i++){
//         if(num % 2 == 0){
//             alert("this is not a prime number");
//             break;
//         }else if(num % 3 == 0){
//             alert("this is not a prime number");
//             break;
//         }else{
//             alert("this is a prime number")
//         }
//     }
// }

// let c = document.getElementById("myCanvas");
// let ctx = c.getContext("2d");

// ctx.beginPath();
// ctx.moveTo(40,40);
// ctx.lineTo(300,40);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(80, 90,50,0,Math.PI*2, false);
// ctx.closePath();
// ctx.fillStyle = "green";
// ctx.fill();

// ctx.fillStyle = "#222";
// ctx.shadowBLUR = 20;
// ctx.shadowoffsetX = 20;
// ctx.shadowoffsetY = 40;
// ctx.shadowColor = "black";
// ctx.fillRect(400,100,200,200);

// let text = 'how are you doing today?';
// const splitText = text.split(' ');
// console.log(splitText);

// let fullname = prompt('Enter your Fullname:');

// let names =fullname.split(" ");

// if(names [0] == "john"){
// console.log(`first Name = ${names[0]} \nLast Name = ${names[1]}`)
// }else{
//     console.log("wrong name ")
// }



let sentence = prompt('write a sentence');

let spilText = sentence.split("")

 let nofvowel = 0;
 let fullLength = spilText.length;

 for(let i=0; i<spilText.length; i++) {
    const letter = spilText[i];
    switch (letter){
        case "a":
            nofvowel++
            break;
            
            case "e":
            nofvowel++
            break;
            
            case "i":
            nofvowel++
            break;
            
            case "o":
            nofvowel++
            break;

            case "u":
            nofvowel++
            break;

            case "A":
            nofvowel++
            break;
            
            case "E":
            nofvowel++
            break;
            
            case "I":
            nofvowel++
            break;
            
            case "O":
            nofvowel++
            break;
            
            case "U":
            nofvowel++
            break;

            case " ":
                fullLength--
                break;
                

    }
 }
let consonants = fullLength - nofvowel

 console.log(`Number of vowels is ${nofvowel}\nNumber of consonants is ${consonants}`)