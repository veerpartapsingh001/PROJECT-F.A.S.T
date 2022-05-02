var playerObject = {
    name: "Player",
    height: "Height"
}

var form = document.getElementById("game");
var nameData = form.elements;   
var textOut = document.getElementById("output"); 
// var userName = nameData["nameInput"].value;
// var userHeight = nameData["heightInput"].value;

function formFunction(a) {
let playerInformation = "";
// nameData = form.elements;
let playerNameFocus = document.getElementById("playerNameChoice");
let errorMessageOutput = document.getElementById("formErrorMessages"); 
let userName = nameData["nameInput"].value;
let userHeight = nameData["heightInput"].value;
playerObject.height = userHeight;
// console.log(playerObject.height); Testing values
playerObject.name = userName;
if (userName == "") {
    // alert("Invalid name choice, please put in a correct name!"); Optional error message alert
    a.preventDefault();
    errorMessageOutput.innerHTML = "Name can't be empty!"
    return playerNameFocus.focus();
}
// console.log(playerObject.name); Testing values
// playerInformation += "Your height is " + playerObject.height + " & your name is " + playerObject.name + " "
playerInformation += '<p class="jsDisplayInformationTag"> Your height is ' + playerObject.height + " & your name is " + playerObject.name + "</p>";

textOut.innerHTML = playerInformation;

let formContinueButton = document.createElement("button")
formContinueButton.innerHTML = "Ready to play? " + playerObject.name;
textOut.appendChild(formContinueButton);

formContinueButton.addEventListener("click", function() {
    construct();
});

a.preventDefault();
}

form.addEventListener('submit', formFunction);


var arrayChoices = ["intro"];

var area = {

    intro: {
        text: "Let's start from the beginning " + playerObject.name, //textArea
        // mod: [
        //     []
        // ],
        options: [
            ["Okay, tell me about boot camp", "area1"], ["Okay", "area1"]
        ]
    },

    area1: {
        text: "hey!",
        // mod: [
        //     []
        // ],
        choices: [
            ["Continue", "area2"]
        ]
    }

};


function constructerButtons(buttonText, picked) {
    let buttons = document.createElement("button");
    buttons.innerHTML = buttonText;
    buttons.classList.add("btn")
    choicesID.appendChild(buttons);

    buttons.addEventListener("click", function() 
    {arrayChoices.push(picked); construct(); });
}


function constructerText(text) {
    let messageTextBinding = '<p name="nameInput"> </p><p>' + text + '</p>'
    for (i = 0; i < messageTextBinding.length - 6; i++) {
        if(messageTextBinding.substring(i, i + 6) == "Player"){
            messageTextBinding = messageTextBinding.replace("Player", playerObject.name);
            console.log(messageTextBinding);
        }
        textOut.innerHTML = messageTextBinding;
      }
}

function construct() { 
    let choicerFormat = ""
    textOut.innerHTML = "";
    choicesID.innerHTML = "";

    for(let i of arrayChoices) {
        constructerText(area[i].text);
      console.log(i);
    }

    for(let a of arrayChoices) {
        choicerFormat += a + ", ";
        document.getElementById("choicesPickedDisplay").innerHTML = choicerFormat;
    }

    for (let optioner of area[arrayChoices[arrayChoices.length - 1]].options) {
        constructerButtons(optioner[0], optioner[1]);
    }
}