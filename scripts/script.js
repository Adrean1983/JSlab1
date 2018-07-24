"use strict";
startGame();
function startGame() {
    let play = prompt("Do you want to play? Yes or no?");
    if (play.toLowerCase() == "yes") {
        let username = prompt("What is your name?");
        startCombat(username);
    } else {
        alert("Maybe next time");
    }
}
function startCombat(username) {
    let wins = 0;    
    let grantHealth = 10;
    let userHealth = 40;

    while (grantHealth > 0) {
        let options = prompt("Would you like to 'attack' or 'quit'");
        if (options.toLowerCase() === "attack") { 
            userHealth -= getDamage();
            console.log(`${username} has ${userHealth} health`);
            grantHealth -= getDamage();
            console.log (`Grant the mighty chicken has ${grantHealth}`)
            if (wins === 3) {
            console.log(`You win ${username}!`);
            break;
            }
            else if  (userHealth <= 0) {
                console.log("Grant Wins");
                break; 
            } else if (grantHealth <= 0) {  
                wins++;
                grantHealth = 10;
                console.log(`You beat Grant ${wins} times!`);
            }
        } else if (options.toLowerCase() === "quit") {
            alert("Lets play another time");
            break;
        }    
    }
}
function getDamage() {
    return Math.floor(Math.random()*5)+1;
}

