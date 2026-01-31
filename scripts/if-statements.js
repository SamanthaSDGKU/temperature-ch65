console.log("Running the if statement file");

// if-statement condition (y/n)
// styntax
// if(condition){
//  code to be run if the condition is TRUE
//}

let result = 50;

if(result > 80){
    console.log("You passed the exam");
}

let result2 = 50;
if (result == result2){
    console.log("The values are the same");
}


// ------ 
// == compare 
// case 1: 5 == 5 // true
// case 2: 5 == "5" // checks the value - true
// case 3: 5 === "5" // checks the value and data type - false

// if-else statement condition (y/n)
// styntax
// if(condition){
//  code to be run if the condition is TRUE
//} else{
//  code to be run if the condtion is FALSE
//}

result = 50;
if(result > 40){
    console.log("You passed the exam");
}else{
    console.error("You did not pass the exam");
}

let waterTemp = 95;
if (waterTemp > 100){
    console.log("The water is boling");
}else{
    console.log("The water is not boiling");
}

// else-if statements
// styntax
// if(condition1){
//  code to be run if the condition is TRUE
//} else if(condition2){
//  code to be run if the condtion2 is TRUE
//}else {
// code to be run if conditions are FALSE
//}

function ageCalculator(){
    let age = 73;

    if(age < 13){
        console.log("You are a child");
    }else if(age < 21){
        console.log("You are a teenager");
    }else if(age < 64){
        console.log("You are an adult");
    }else{
        console.log("You are a senior");
    }
}



// challenge 1
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color  (use a prompt)
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

function traffic(){
    let light = prompt("Enter a color:");

    if(light.toLowerCase() == "green"){ 
        console.log("Go!");
    }else if(light.toLowerCase() == "yellow"){
        console.log("Slow Down!");
    }else if(light.toLowerCase() == "red"){
        console.log("Stop!");
    }else{
        console.error("Unknown light color. Please proceed with caution.");
    }
}

function moviePriceCalculator() {
    let viewerAge = prompt("How old are you?");
    if (viewerAge < 12) {
        console.log("The ticket is $5");
    }
    else if (viewerAge < 19) {
        console.log("The ticket cost is $8");
    }
    else {
        console.log("The ticket is $10");
    }
}


let userType = "Admin";

if(userType == "Admin"){
    console.log("Full access");
    document.write("Welcome admin.")
}else if(userType == "Editor"){
    console.log("Access but limited actions");
    document.write("Welcome editor.")
}else{
    console.log("You do not have access");
    document.write("Error!")
}

function weatherOutfit(){
    console.log("Weather outfit");
    const DIV = document.getElementById("results");
    let tmp = prompt("Enter the weather");

    //clear the CSS
    DIV.classList.remove("hot","cold");

    if(tmp < 15){
        DIV.innerHTML="Jacket";
        DIV.classList.add("cold");
    }else if(tmp < 25){
        DIV.innerHTML="Sweater";
    }else{
        DIV.innerHTML="T-Shirt";
        DIV.classList.add("hot");
    }

}