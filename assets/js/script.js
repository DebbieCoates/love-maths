// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {  //Wait for the DOM to finish loading before running the game
    let buttons = document.getElementsByTagName("button"); // get all buttons with button tag

    for (let button of buttons) { //Loop through all buttons
        button.addEventListener("click", function() { //Add event listener to button
            if (this.getAttribute("data-type") === "submit") {  //Check if button is submit
                alert("You clicked Submit!");           //Display an alert
            } else {
                let gameType = this.getAttribute("data-type");  //Get the game type from the button
                alert(`You clicked ${gameType}`);   //Display the game type 
            }
        });
    }
});

/**
 * The main game "loop[], called when the script is first loaded"
 * and after the user's answer has been processed
 */
function runGame(){

        // Creates two random numbers between 1 and 25
        let num1 = Math.floor(Math.random() * 25) + 1;
        let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer(){
}   

function calculateCorrectAnswer(){
}   

function incrementScore(){
}       

function incrementwrongAnswr(){
}

function displayAdditionQuestion(){
}       

function displaysubtractQuestion(){
}   

function displaymultiplyQuestion(){
}   