"use strict";

let play = prompt("Do you want to play? Yes or no?");
let username;
let grantDeaths = 0;    
let grantHealth = 10;
let userHealth = 40;
let grantWins = 0; 
let userWins = 0;


if (play.toLowerCase() == "yes") {
    username = prompt("What is your name?");

    while (userHealth > 0 && grantDeaths !== 3) 
    {
        (userHealth -= Math.floor(Math.random()*2)+1);
        console.log(`${username} has ${userHealth} health`);
        (grantHealth -= Math.floor(Math.random()*2) +1);
        console.log (`Grant the mighty chicken has ${grantHealth}`)
        //these lines below are optional. Separate each turn.
        if (userHealth > 30) {
            alert("You're doing great. Keep going!");
        } else if (userHealth > 20) {
            alert(`Below 30 health. Watch Out ${username}!`);
        } else {
            alert(`You're at ${userHealth}. You can do it.`);
        }
        //
        if (grantHealth < 1) {  
            grantDeaths++;
            grantHealth = 10;
        }
        } if (grantDeaths === 3) {
            console.log("You win")
            userWins++; // I could console.log one user win. But couldn't restart game without refreshing page.
            console.log(userWins);
            // alert("you win! Play again?") --I tried to use these two lines to alert player who won. And to reload. But it did not console log score.
            // document.location.reload();
        } if (userHealth < 1) {
            console.log("Grant Wins") 
            grantWins++;
            console.log(grantWins);
            // alert("You lose!");
            // document.location.reload();
    }
} else if (play == "no"){
    console.log("Maybe next time");
} else {
    console.log("Yes or No?");
}    
