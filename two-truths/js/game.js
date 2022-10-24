let fname = "";

//function for the greet
function greet(){
    //grab the greet paragraph 
    let greetParagraph = document.getElementById("greet");

    //get values from the form
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    //show the result
    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname + " " + lname + "!";
}

//function for the trivia question
function trivia(){
    let triviaAnswer = document.getElementById("trivia-answer");

    //get the checked values
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    //decide what to "print"
    if (chocolateSelected){
        triviaAnswer.innerHTML = fname + ", you are incorrect. Stale chocolate??"
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. Soggy fish??"
    } else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", you are correct! Honey never goes bad."
    }
}

//function for two truths and a lie question
function lieGame (){
    let lieAnswer = document.getElementById("lie-answer")

    //get the checked values
    let chickensSelected = document.getElementById("chickens").checked;
    let strawberriesSelected = document.getElementById("strawberries").checked;
    let skiSelected = document.getElementById("ski").checked;

    //decide what to print
    if (chickensSelected){
        lieAnswer.innerHTML = "Incorrect " + fname + ". I have multiple chickens"
    } else if (strawberriesSelected){
        lieAnswer.innerHTML = "You guessed correctly " + fname + "! I love strawberries!"
    } else if (skiSelected){
        lieAnswer.innerHTML = "Nope! You are incorrect " + fname + ". I love skiing!"
    }
}