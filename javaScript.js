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
playerInformation += 'Boom just like that Russia, a nation with the second largest military only behind the United States of America, dropped the Tzar Bomba, a hydrogen bomb, and the most powerful nuclear weapon ever created on Fresno, CA, USA at 23:46 April 1st . Rupturing the The Hollywood fault and San Andreas fault line, causing a mega earthquake killing nearly 30 million people as the whole of california falls into the pacific. With that, war between the United States and Russia was inevitable. Soon after the bomb was dropped on California, the United States dropped the B83 a variable-yield thermonuclear gravity bomb  on St. Petersburg, Russia. A cease-fire was immediately put into place after the bombs dropped. But, that\'s when the Cold War started once again. With the revival of the Cold War, war support increased exponentially for both sides. Thousands of people started enlisting on both sides in preparation for war. Just like the previous Cold War, this was a geopolitical imbalance and therefore, intelligence on the enemy was of the utmost importance. That\’s why I decided to join the Military.',

textOut.innerHTML = playerInformation;

let formContinueButton = document.createElement("button")
formContinueButton.innerHTML = "Ready to start your mission " + playerObject.name;
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
        text: "Let's start from the beginning " + playerObject.name + 'BUS 
        Recruit 1 : “Hey you heard what the Russians are trying to do?”
        Recruit 2 : “No what?”
        Recruit 1 : “Rumor said that they’re sneaking in their own spies into the US and trying to make it within the ranks of the military.”
        Recruit 2 : “Oh how would you know that? Are you one of them?”
        Recruit 1 : “No, why the hell would I be one of them. I bet, I’m more patriotic than you!”
        Drill Sergeant : “Shut up back there, we’re almost there to Fort Jackson.”
        *silence*
        You get a tap on your shoulder
        Recruit next to you : “Hey, where are you from? You don’t seem to be from around here that’s for sure.”
        ',
        // mod: [
        //     []
        // ],
        options: [
            ["Okay, tell me about boot camp", "area1"], ["Okay", "area1"],['Lets go','area2']
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
    },
    area2: {
        text: "Lets go",
        // mod: [
        //     []
        // ],
        choices: [
            ["Continue", "area2"]
        ]
    },

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
    let messageTextBinding = '<p name="nameInput"> </p><p class="appearingText">' + text + '</p>'
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