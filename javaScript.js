// var player = {
//     name : "Player", //name of player
//     choices : [] //choices that will happen
// }

var form = document.getElementById("game");
var textOut = document.getElementById("output");
var nameData = form.elements;
var userName = nameData["nameInput"].value;

function formFunction(a) {
nameData = form.elements;
userName = nameData["nameInput"].value;
textOut.innerHTML = "Your name is, " + userName + " ";

a.preventDefault();

let formContinueButton = document.createElement("button")
formContinueButton.innerHTML = "Ready to play? " + userName;
textOut.appendChild(formContinueButton);

formContinueButton.addEventListener("click", function() {
    construct();
})

}

form.addEventListener('submit', formFunction);

var arrayChoices = ["intro"];


var playerObj = {
    name: userName,
}

console.log(playerObj.);
// area object
var area = {

    intro: {
        text: "Let's start from the beginning " + playerObj.name, //textArea
        // mod: [
        //     []
        // ],
        options: [
            ["Okay, tell me about boot camp", "area1"], ["Okay", "area1 "]
        ]
    },

    area1: {
        text: "hey!",
        // mod: [
        //     []
        // ],
        choices: [
            ["Continue", "area.area2"]
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
    textOut.innerHTML = text;
}

function construct() { 
    textOut.innerHTML = "";
    choicesID.innerHTML = "";

    for(let i of arrayChoices) {
        constructerText(area[i].text);
      console.log(i);
    }

    for (let optioner of area[arrayChoices[arrayChoices.length - 1]].options) {
        constructerButtons(optioner[0], optioner[1]);
      console.log(optioner);

}
}

//variables
// var nextArea = area.area;
// var buttonPick = document.getElementById("buttonPick");
// var nameGate = false;

// function swithchArea(place) {
//     nextArea = place;
// }

// //areas
// function construct(place) {
//     let message = '<p name="nameInput"> </p> <p>' + place.text + '</p>'
//     for (i = 0; i < place.options.length; i++) {
//         message += '<button type="submit" onclick="swithchArea(' + place.options[i][1] + ')">' + place.options[i][0] + '</button>'
//     }
//     for (i=0; i < message.length-6; i++) {
//         if(message.substring(i, i+6) == "Player"){
//             message = message.replace("Player", player.name);
//     }
//   }
// return message;
// }

// //allows site to run
// let gameSite = document.getElementById('game'),
//     gameOutput = gameSite.elements;

// console.log(gameOutput);

// //output
// function gameOutputs(event) {
// //gives name 
// if (nameGate == false) {
//     let textName = gameData['nameInput'].value;
//     let output = document.getElementById('output');
//     player.name = textName;
//     nameGate = true;
// }

// output.innerHTML = `${construction(nextArea)}`;
// console.log(player);
// event.preventDefault();
// }

// //run
// gamePage.addEventListener(`submit`, gameOutput);