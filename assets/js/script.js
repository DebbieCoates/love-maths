// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {  //Wait for the DOM to finish loading before running the game
    let buttons = document.getElementsByTagName("button"); // get all buttons with button tag

    for (let button of buttons) { //Loop through all buttons
        button.addEventListener("click", function() { //Add event listener to button
            if (this.getAttribute("data-type") === "submit") {  //Check if button is submit
                checkAnswer();  //If it is, call the checkAnswer function
            } else {
                let gameType = this.getAttribute("data-type");  //Get the game type from the button
                alert(`You clicked ${gameType}`);   //Display the game type 
            }
        });
    }
    runGame("addition");//Start the game
});

/**
 * The main game "loop[], called when the script is first loaded"
 * and after the user's answer has been processed
 */
function runGame(gametype){
        // Creates two random numbers between 1 and 25
        let num1 = Math.floor(Math.random() * 25) + 1;
        let num2 = Math.floor(Math.random() * 25) + 1;

        if(gametype === "addition"){  //If the game type is addition, display the addition question          
            displayAdditionQuestion(num1, num2);            
        } else if(gametype === "subtract"){//If the game type is subtraction, display the subtraction question
            displaysubtractQuestion(num1, num2);
        } else if(gametype === "multiply"){ //If the game type is multiplication, display the multiplication question
            displaymultiplyQuestion(num1, num2);
        } else {
            alert(`Unknown game type: ${gametype}`);    //If the game type is unknown, throw an error
            throw `Unknown game type: ${gametype}. Aborting!`;  //Stop the game
        }   
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(){

        let userAnswer = parseInt(document.getElementById('answer-box').value); //Get the user's answer from the dom
        let calculatedAnswer = calculateCorrectAnswer(); //Get the correct answer from the calculateCorrectAnswer function      
        let isCorrect = userAnswer === calculatedAnswer[0]; //Check if the user's answer is correct by comparing it to the correct answer       

        if(isCorrect){
            alert('Hey! You got it right! :D'); //If the user's answer is correct, display a message
        }   else {      
            alert(`Awwww...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`); //If the user's answer is incorrect, display a message
        }
        runGame(calculatedAnswer[1]); //Start the game again with the correct answer type
}   

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText); //Get the operand1 from the dom
    let operand2 = parseInt(document.getElementById('operand2').innerText); //Get the operand2 from the dom
    let operator = document.getElementById('operator').innerText; //Get the operator from the dom

    if(operator === "+"){ //If the operator is addition, return the sum of the operands
        return [operand1 + operand2, "addition"];
    } else if(operator === "-"){ //If the operator is subtraction, return the difference of the operands
        return [operand1 - operand2, "subtract"];
    } else if(operator === "x"){ //If the operator is multiplication, return the product of the operands
        return [operand1 * operand2, "multiply"];
    } else {
        alert(`Unimplemented operator ${operator}`); //If the operator is unknown, throw an error
        throw `Unimplemented operator ${operator}. Aborting!`; //Stop the game
    }
}   

function incrementScore(){
}       

function incrementwrongAnswr(){
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}   

function displaysubtractQuestion(){
}   

function displaymultiplyQuestion(){
}   