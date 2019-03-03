//I need to link reactions to my HTML elements on here. I must associate different functions to 
//the targetScore, userScore, each gem, wins, and losses. 

//targetScore: this will generate a random number bia the computer, then display it .
//UserScore: this will be the number that the user creates by clicking on the gems. 
//gems: each gem (ruby, saphire, yellowDiamond, and Emerald) will generate a number, 
//then will add/display that number to "userScore" during a click event. 
//when the the userScore equals the Target score, 1 will be added to the Wins element.
//if the userScore becomes higher than the targetScore, then 1 will be added to the losses element.



function setVariables() {  
targetScore = Math.floor(Math.random() * 120 + 19);
console.log("Target score: " + targetScore);
ruby = Math.floor(Math.random() * 12 + 1);
console.log("Ruby number: " + ruby);
yellowDiamond = Math.floor(Math.random() * 12 + 1);
console.log("Yellow Diamond number: " + yellowDiamond);
saphire = Math.floor(Math.random() * 12 + 1);
console.log("Saphire number: " + saphire);
}

setVariables();

//here we begin the click event
// 
$(document).ready(function () { 


    
})

