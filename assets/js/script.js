// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button"); //get all the buttons on the page

    for (let button of buttons) {//loop through all the buttons
        button.addEventListener("click", function() {//add an event listener to each button
            if (this.getAttribute("data-type") === "submit") {//if the button is the submit button
                checkAnswer();//check the answer
            } else {
                let gameType = this.getAttribute("data-type");//get the data-type attribute of the button
                runGame(gameType);//run the game with the data-type attribute of the button
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) { //  add an event listener to the answer box
        if (event.key === "Enter") { //  if the key pressed is the enter key
            checkAnswer();//check the answer
        }
    });

    runGame("addition");//  run the game with the addition game type

});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {              //if the game type is addition
        displayAdditionQuestion(num1, num2);    //display the addition question
    } else if (gameType === "multiply") {       //if the game type is multiply
        displayMultiplyQuestion(num1, num2);    //display the multiply question
    } else if (gameType === "subtract" ) {      //if the game type is subtract   
        displaySubtractQuestion(num1, num2);    //display the subtract question
    } else if (gameType === "division" ) {      //if the game type is division
        displayDivisionQuestion(num1, num2);    //display the division question
    } else {
        alert(`Unknown game type: ${gameType}`);            //if the game type is unknown    
        throw `Unknown game type: ${gameType}. Aborting!`;  //throw an error
    }

}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value); //get the user's answer
    let calculatedAnswer = calculateCorrectAnswer();                        //get the correct answer

    if (calculatedAnswer[1] === "division") {                       //if the game type is division
        calculatedAnswer[0] = Math.floor(calculatedAnswer[0]);      //round the answer to the nearest whole number
    }

    let isCorrect = userAnswer === calculatedAnswer[0];         //check if the user's answer is correct
    if (isCorrect) {                                            //if the user's answer is correct
        alert("Hey! You got it right! :D");                     //alert the user
        incrementScore();                                       //increment the score
    } else {
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();                            //increment the incorrect score
    }

    runGame(calculatedAnswer[1]);                    //run the game with the game type

}

/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);         //get the first operand
    let operand2 = parseInt(document.getElementById('operand2').innerText);         //get the second operand
    let operator = document.getElementById("operator").innerText;                   //get the operator

    if (operator === "+") {                                                        //if the operator is addition
        return [operand1 + operand2, "addition"];                                  //return the sum of the operands
    } else if (operator === "x") {                                                 //if the operator is multiply                                  
        return [operand1 * operand2, "multiply"];                                  //return the product of the operands              
    } else if (operator === "-") {                                                 //if the operator is subtract                
        return [operand1 - operand2, "subtract"];                                  //return the difference of the operands              
    } else if (operator ==="/") {                                                  //if the operator is division                       
		return [operand1 / operand2, "division"];                                  //return the quotient of the operands                        
    } else {
        alert(`Unimplemented operator ${operator}`);                                //if the operator is unknown
        throw `Unimplemented operator ${operator}. Aborting!`;                      //throw an error
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore; // increment the score by 1

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);    //get the current incorrect score   
    document.getElementById("incorrect").innerText = ++oldScore;                // increment the incorrect score by 1
    
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;     //display the first operand
    document.getElementById('operand2').textContent = operand2;     //display the second operand
    document.getElementById('operator').textContent = "+";          //display the operator
    
}

function displaySubtractQuestion(operand1, operand2) {

    document.getElementById("operand1").textContent = operand1 > operand2 ? operand1 : operand2;//if operand1 is greater than operand2, display operand1, else display operand2
    document.getElementById("operand2").textContent = operand1 > operand2 ? operand2 : operand1;//if operand1 is greater than operand2, display operand2, else display operand1
    document.getElementById('operator').textContent = "-";        //display the operator

}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;     //display the first operand
    document.getElementById('operand2').textContent = operand2;     //display the second operand
    document.getElementById('operator').textContent = "x";          //display the operator

}


function displayDivisionQuestion(operand1, operand2) {              
    operand1 = operand1 * operand2;                                 //calculate the dividend
    document.getElementById("operand1").textContent = operand1;     //display the dividend
    document.getElementById("operand2").textContent = operand2;     //display the divisor      
    document.getElementById("operator").textContent = "/";          //display the operator
}