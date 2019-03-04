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
emerald = Math.floor(Math.random() * 12 + 1);
console.log("Saphire number: " + saphire);
}

setVariables();

//here we begin the click event
// 
$(document).ready(function () { 



})

var wins = 0;
var losses = 0;

var ruby, yellowDIamond, saphire, emerald, userScore, targetScore;





// }


// // setVariables()

// // $(document).ready(function () {
// //     $("#userScore").text(userScore);
// //     $("#targetScore").text(targetScore);
// //     $("#wins").text(wins); 
// //     $("#losses").text(losses); 


// //     $("ruby").click(function() {
// //         console.log("click")
// //         userScore = userScore + ruby;
// //         // userScore += gemA short hand for above line
// //         $("#userScore").text(userScore); 

// //         if(userScore === targetScore) {
// //             alert("You Won!");
// //             wins++;
// //             $("#wins").text(wins); 
// //             setVariables();
// //         }
// //         else if (userScore > targetScore) {
// //             alert("You Lost!");
// //             losses++;
// //             $("#losses").text(losses); 
// //                     setVariables();
        
// //         }
    
//     })

//     $("#yellowDiamond").click(function() {
//         console.log("click")
//         userScore = userScore + yellowDiamond;
//         // userScore += gemA short hand for above line
//         $("#userScore").text(userScore); 

//         if(userScore === targetScore) {
//             alert("You Won!");
//             wins++;
//             $("#wins").text(wins); 
//             setVariables();
//         }
//         else if (userScore > targetScore) {
//             alert("You Lost!");
//             losses++;
//             $("#losses").text(losses); 
//                     setVariables();
        
//         }
    
//     })

//     $("#saphire").click(function() {
//         console.log("click")
//         userScore = userScore + saphire;
//         // userScore += gemA short hand for above line
//         $("#userScore").text(userScore); 

//         if(userScore === targetScore) {
//             alert("You Won!");
//             wins++;
//             $("#wins").text(wins); 
//             setVariables();
//         }
//         else if (userScore > targetScore) {
//             alert("You Lost!");
//             losses++;
//             $("#losses").text(losses); 
//                     setVariables();
        
//         }
    
//     })

//     $("#emerald").click(function() {
//         console.log("click")
//         userScore = userScore + emerald;
//   
//         $("#userScore").text(userScore); 

//         if(userScore === targetScore) {
//             alert("You Won!");
//             wins++;
//             $("#wins").text(wins); 
//             setVariables();
//         }
    

// else if (userScore > targetScore) {
//     alert("You Lost!");
//     losses++;
//     $("#losses").text(losses); 
//             setVariables();

// }

//     })
