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
playerInformation += 'Boom just like that Russia, a nation with the second largest military only behind the United States of America, dropped the Tzar Bomba, a hydrogen bomb, and the most powerful nuclear weapon ever created on Fresno, CA, USA at 23:46 April 1st . Rupturing the The Hollywood fault and San Andreas fault line, causing a mega earthquake killing nearly 30 million people as the whole of california falls into the pacific. With that, war between the United States and Russia was inevitable. Soon after the bomb was dropped on California, the United States dropped the B83 a variable-yield thermonuclear gravity bomb  on St. Petersburg, Russia. A cease-fire was immediately put into place after the bombs dropped. But, that\'s when the Cold War started once again. With the revival of the Cold War, war support increased exponentially for both sides. Thousands of people started enlisting on both sides in preparation for war. Just like the previous Cold War, this was a geopolitical imbalance and therefore, intelligence on the enemy was of the utmost importance. That\’s why I decided to join the Military.' + "<br><br>" ,

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
        text: "Let's start from the beginning " + playerObject.name + "<br><br>" + "BUS" + "<br><br>" +
        "Recruit 1 : \“Hey you heard what the Russians are trying to do?\”" + "<br><br>" +
       "Recruit 2 : \“No what?\”" + "<br><br>" +
        "Recruit 1 : \“Rumor said that they\’re sneaking in their own spies into the US and trying to make it within the ranks of the military.\”" + "<br><br>" +
        "Recruit 2 : \“Oh how would you know that\? Are you one of them?\”" + "<br><br>" +
        "Recruit 1 : \“No, why the hell would I be one of them. I bet, I\’m more patriotic than you!”" + "<br><br>" +
        "Drill Sergeant : “Shut up back there, we\’re almost there to Fort Jackson.”" + "<br><br>" +
        "*silence*" + "<br><br>" +
        "You get a tap on your shoulder" + "<br><br>" +
        "Recruit next to you : “Hey, where are you from? You don\’t seem to be from around here that’s for sure.\”" , 
        // mod: [
        //     []
        // ],
        options: [
            ["I\’m just from a small quiet town from Wyoming, lots of game out there that\’s for sure.", "CHOICE1"], ["My family used to be in California, then the bombs dropped. From there, we just moved around a bit until we ended up in Colorado", "CHOICE2"],['I\’m from New York, all the way up in Manhattan. I\’ve been loving city life ever since. I kinda miss it to be honest.','CHOICE3']
        ]
    },

    CHOICE1: {
        text: "I\’m just from a small quiet town from Wyoming, lots of game out there that\’s for sure." + "<br><br>" +
       " \"Recruit : \"You\’re a long way from home. Don’t worry, me too.\" " + "<br><br>" +
       " You : \"I wonder how my folks at home are doing. I just don’t want them to worry too much.\" " + "<br><br>" +
       " Recruit : \"Yeah I feel you. Anyways, what do you plan to do?\" " + "<br><br>" +
       " You : \"Oh I plan to do infantry and see where that takes me.\"  " + "<br><br>" +
       " Recruit : \"No special forces? I think I plan to join the infantry too! I at least know after my contract, I am gonna go back home and join the police force there.\" "+ "<br><br>" +
       " You : \"Well, best of luck with that.\"" +"<br><br>" +
       " Recruit : \"Thanks.\""+ "<br><br>" +
       " *Time skip 10 weeks* " + "<br><br>" +
       "   **Army Technical School of Infantry** "+ "<br><br>" +
       " Unit commander: Welcome Everyone and congratulations on graduating Boot Camp, Your hard work has paid off and now It's about to get much harder. You young men and women are about to start the 11B tech school in 4 weeks you will be given the Job Title of Infantryman with the MOS Code: 11B. These are your Drill Sergeants: Drill Sergeant Rodriguez and Drill Sergeant Silva they will make you the infantry America needs now."+ "<br><br>" +
       " **TAP ON THE SHOULDER FROM BEHIND**" + "<br><br>" +
       " Recruit : Hey remember me "+ "<br><br>" +
       " You : oh wow what are the chances we are in the same unit"+ "<br><br>" +
       " Recruit: yeah "+ "<br><br>" +
       " **laugh together**"+ "<br><br>" +
       " Drill Sergeant Silva : !! Hey you two … FRONT LEANING REST POSITION!! "+ "<br><br>" +
       " Recruit & You : yes ma’am "+ "<br><br>" +
       " YOU AND THE RECRUIT DOES AS MANY PUSHUPS AS SERGEANT SILVA COMMANDS"+ "<br><br>" +
       " ** go back to barracks ** "+ "<br><br>" +
       " Recruit : So you know what unit you're going to be in? And where?"+ "<br><br>" +
       " You: yeah imma going to Rzeszow military base in southeastern Poland, near the poland and ukrainian border. You're asking a lot of questions but you're not Russian are you?"+ "<br><br>" +
       " Recruit: NO! "+ "<br><br>" +
       " Drill Sergeant Rodriguez: what with all that noise over there Get to sleep"+ "<br><br>" +
       " **waking up to Drill Sergeant Rodriguez screaming at yout**"+ "<br><br>" +
       "  Drill Sergeant Rodriguez: 0400 oh four hundred!!! is the time to wake up and get out of bed !!!!!!!"+ "<br><br>" +
       " Time for PT!"+ "<br><br>" +
       " **Recruit find out his mom and dads died and has to go home**"+ "<br><br>" +
       " Time skip 4 weeks "+ "<br><br>" +
       " Graduation Speech : GOOD MORNING LADIES AND GENTLEMEN! THANK YOU FOR ATTENDING THE GRADUATION CEREMONY FOR ALPHA COMPANY, 2 ND BATTALION 58 TH INFANTRY REGIMENT; AND CHARLIE COMPANY, 2 ND BATTALION 19 TH INFANTRY "+ "<br><br>" +
       " … "+ "<br><br>" +
       " **TAP ON THE SHOULDER FROM BEHIND**"+ "<br><br>" +
       " Recruit: Hey man we meet again"+ "<br><br>" +
       "You: oh wow how did you graduated did you go home"+ "<br><br>" +
       "Recruit: yeah but I came back and joined the 19 TH INFANTRY BATTALION and finish my training"+ "<br><br>" +
       "You nice man good to hear "+ "<br><br>" +
       "…"+ "<br><br>" +
       "MAY GOD BLESS AND PROTECT EACH AND EVERY ONE OF YOU...THANK YOU VERY MUCH"+ "<br><br>" +
       ".."+ "<br><br>" +
       + "<br><br>" +
       " *** "+ "<br><br>" +
       " Are you still interested in joining the special forces like you said at BMT?"+ "<br><br>" +
       "Yeah "+ "<br><br>" +
       "You ready for the Special forces test?"+ "<br><br>" +
       "Mhm I'm not the same as 14 weeks ago I feel stronger mentaly and physically?"+ "<br><br>" +
       "Good cause I hear the Rangers, Green Berets, and the Delta Forces are starting these Tests next week "+ "<br><br>" +
       "Yeah I Heard, You going to try?"+ "<br><br>" +
       "Yeah Imma try"+ "<br><br>" +
       "**next week **"+ "<br><br>" ,
        // mod: [
        //     []
        // ],
        choices: [
            ["RANGER", "Ranger"],["GREEN BERETS", "Greenberets"],["DELTA FORCE", "Deltaforce"]
        ]
    },
    CHOICE2: {
        text: "My family used to be in California, then the bombs dropped. From there, we just moved around a bit until we ended up in Colorado"+ "<br><br>" +
        " \"Recruit : \"You\’re a long way from home. Don’t worry, me too.\" " + "<br><br>" +
        " You : \"I wonder how my folks at home are doing. I just don’t want them to worry too much.\" " + "<br><br>" +
        " Recruit : \"Yeah I feel you. Anyways, what do you plan to do?\" " + "<br><br>" +
        " You : \"Oh I plan to do infantry and see where that takes me.\"  " + "<br><br>" +
        " Recruit : \"No special forces? I think I plan to join the infantry too! I at least know after my contract, I am gonna go back home and join the police force there.\" "+ "<br><br>" +
        " You : \"Well, best of luck with that.\"" +"<br><br>" +
        " Recruit : \"Thanks.\""+ "<br><br>" +
        " *Time skip 10 weeks* " + "<br><br>" +
        "   **Army Technical School of Infantry** "+ "<br><br>" +
        " Unit commander: Welcome Everyone and congratulations on graduating Boot Camp, Your hard work has paid off and now It's about to get much harder. You young men and women are about to start the 11B tech school in 4 weeks you will be given the Job Title of Infantryman with the MOS Code: 11B. These are your Drill Sergeants: Drill Sergeant Rodriguez and Drill Sergeant Silva they will make you the infantry America needs now."+ "<br><br>" +
        " **TAP ON THE SHOULDER FROM BEHIND**" + "<br><br>" +
        " Recruit : Hey remember me "+ "<br><br>" +
        " You : oh wow what are the chances we are in the same unit"+ "<br><br>" +
        " Recruit: yeah "+ "<br><br>" +
        " **laugh together**"+ "<br><br>" +
        " Drill Sergeant Silva : !! Hey you two … FRONT LEANING REST POSITION!! "+ "<br><br>" +
        " Recruit & You : yes ma’am "+ "<br><br>" +
        " YOU AND THE RECRUIT DOES AS MANY PUSHUPS AS SERGEANT SILVA COMMANDS"+ "<br><br>" +
        " ** go back to barracks ** "+ "<br><br>" +
        " Recruit : So you know what unit you're going to be in? And where?"+ "<br><br>" +
        " You: yeah imma going to Rzeszow military base in southeastern Poland, near the poland and ukrainian border. You're asking a lot of questions but you're not Russian are you?"+ "<br><br>" +
        " Recruit: NO! "+ "<br><br>" +
        " Drill Sergeant Rodriguez: what with all that noise over there Get to sleep"+ "<br><br>" +
        " **waking up to Drill Sergeant Rodriguez screaming at yout**"+ "<br><br>" +
        "  Drill Sergeant Rodriguez: 0400 oh four hundred!!! is the time to wake up and get out of bed !!!!!!!"+ "<br><br>" +
        " Time for PT!"+ "<br><br>" +
        " **Recruit find out his mom and dads died and has to go home**"+ "<br><br>" +
        " Time skip 4 weeks "+ "<br><br>" +
        " Graduation Speech : GOOD MORNING LADIES AND GENTLEMEN! THANK YOU FOR ATTENDING THE GRADUATION CEREMONY FOR ALPHA COMPANY, 2 ND BATTALION 58 TH INFANTRY REGIMENT; AND CHARLIE COMPANY, 2 ND BATTALION 19 TH INFANTRY "+ "<br><br>" +
        " … "+ "<br><br>" +
        " **TAP ON THE SHOULDER FROM BEHIND**"+ "<br><br>" +
        " Recruit: Hey man we meet again"+ "<br><br>" +
        "You: oh wow how did you graduated did you go home"+ "<br><br>" +
        "Recruit: yeah but I came back and joined the 19 TH INFANTRY BATTALION and finish my training"+ "<br><br>" +
        "You nice man good to hear "+ "<br><br>" +
        "…"+ "<br><br>" +
        "MAY GOD BLESS AND PROTECT EACH AND EVERY ONE OF YOU...THANK YOU VERY MUCH"+ "<br><br>" +
        ".."+ "<br><br>" +
        + "<br><br>" +
        " *** "+ "<br><br>" +
        " Are you still interested in joining the special forces like you said at BMT?"+ "<br><br>" +
        "Yeah "+ "<br><br>" +
        "You ready for the Special forces test?"+ "<br><br>" +
        "Mhm I'm not the same as 14 weeks ago I feel stronger mentaly and physically?"+ "<br><br>" +
        "Good cause I hear the Rangers, Green Berets, and the Delta Forces are starting these Tests next week "+ "<br><br>" +
        "Yeah I Heard, You going to try?"+ "<br><br>" +
        "Yeah Imma try"+ "<br><br>" +
        "**next week **"+ "<br><br>" ,
        // mod: [
        //     []
        // ],
        choices: [
            ["Continue", "area2"]
        ]
    },
    CHOICE3: {
        text: "I\’m from New York, all the way up in Manhattan. I\’ve been loving city life ever since. I kinda miss it to be honest."+ "<br><br>" +
        " \"Recruit : \"You\’re a long way from home. Don’t worry, me too.\" " + "<br><br>" +
        " You : \"I wonder how my folks at home are doing. I just don’t want them to worry too much.\" " + "<br><br>" +
        " Recruit : \"Yeah I feel you. Anyways, what do you plan to do?\" " + "<br><br>" +
        " You : \"Oh I plan to do infantry and see where that takes me.\"  " + "<br><br>" +
        " Recruit : \"No special forces? I think I plan to join the infantry too! I at least know after my contract, I am gonna go back home and join the police force there.\" "+ "<br><br>" +
        " You : \"Well, best of luck with that.\"" +"<br><br>" +
        " Recruit : \"Thanks.\""+ "<br><br>" +
        " *Time skip 10 weeks* " + "<br><br>" +
        "   **Army Technical School of Infantry** "+ "<br><br>" +
        " Unit commander: Welcome Everyone and congratulations on graduating Boot Camp, Your hard work has paid off and now It's about to get much harder. You young men and women are about to start the 11B tech school in 4 weeks you will be given the Job Title of Infantryman with the MOS Code: 11B. These are your Drill Sergeants: Drill Sergeant Rodriguez and Drill Sergeant Silva they will make you the infantry America needs now."+ "<br><br>" +
        " **TAP ON THE SHOULDER FROM BEHIND**" + "<br><br>" +
        " Recruit : Hey remember me "+ "<br><br>" +
        " You : oh wow what are the chances we are in the same unit"+ "<br><br>" +
        " Recruit: yeah "+ "<br><br>" +
        " **laugh together**"+ "<br><br>" +
        " Drill Sergeant Silva : !! Hey you two … FRONT LEANING REST POSITION!! "+ "<br><br>" +
        " Recruit & You : yes ma’am "+ "<br><br>" +
        " YOU AND THE RECRUIT DOES AS MANY PUSHUPS AS SERGEANT SILVA COMMANDS"+ "<br><br>" +
        " ** go back to barracks ** "+ "<br><br>" +
        " Recruit : So you know what unit you're going to be in? And where?"+ "<br><br>" +
        " You: yeah imma going to Rzeszow military base in southeastern Poland, near the poland and ukrainian border. You're asking a lot of questions but you're not Russian are you?"+ "<br><br>" +
        " Recruit: NO! "+ "<br><br>" +
        " Drill Sergeant Rodriguez: what with all that noise over there Get to sleep"+ "<br><br>" +
        " **waking up to Drill Sergeant Rodriguez screaming at yout**"+ "<br><br>" +
        "  Drill Sergeant Rodriguez: 0400 oh four hundred!!! is the time to wake up and get out of bed !!!!!!!"+ "<br><br>" +
        " Time for PT!"+ "<br><br>" +
        " **Recruit find out his mom and dads died and has to go home**"+ "<br><br>" +
        " Time skip 4 weeks "+ "<br><br>" +
        " Graduation Speech : GOOD MORNING LADIES AND GENTLEMEN! THANK YOU FOR ATTENDING THE GRADUATION CEREMONY FOR ALPHA COMPANY, 2 ND BATTALION 58 TH INFANTRY REGIMENT; AND CHARLIE COMPANY, 2 ND BATTALION 19 TH INFANTRY "+ "<br><br>" +
        " … "+ "<br><br>" +
        " **TAP ON THE SHOULDER FROM BEHIND**"+ "<br><br>" +
        " Recruit: Hey man we meet again"+ "<br><br>" +
        "You: oh wow how did you graduated did you go home"+ "<br><br>" +
        "Recruit: yeah but I came back and joined the 19 TH INFANTRY BATTALION and finish my training"+ "<br><br>" +
        "You nice man good to hear "+ "<br><br>" +
        "…"+ "<br><br>" +
        "MAY GOD BLESS AND PROTECT EACH AND EVERY ONE OF YOU...THANK YOU VERY MUCH"+ "<br><br>" +
        ".."+ "<br><br>" +
        + "<br><br>" +
        " *** "+ "<br><br>" +
        " Are you still interested in joining the special forces like you said at BMT?"+ "<br><br>" +
        "Yeah "+ "<br><br>" +
        "You ready for the Special forces test?"+ "<br><br>" +
        "Mhm I'm not the same as 14 weeks ago I feel stronger mentaly and physically?"+ "<br><br>" +
        "Good cause I hear the Rangers, Green Berets, and the Delta Forces are starting these Tests next week "+ "<br><br>" +
        "Yeah I Heard, You going to try?"+ "<br><br>" +
        "Yeah Imma try"+ "<br><br>" +
        "**next week **"+ "<br><br>" ,
        // mod: [
        //     []
        // ],
        choices: [
            ["Continue", "Ranger"]
        ]
    },
    Ranger:{
    text: "You spot your friend Phoenix with the rangers tab on his uniform." + "<br><br>" +
    "You : \"Hey! You finished it!\"" + "<br><br>" +
    "Phoenix : \"Yeah, I did! A lot of people dropped out after the \"Benning phase.\" "+ "<br><br>" +
    "You : \"How did you do it? Can you help a brother out?\""+ "<br><br>" +
    "Phoenix : \"Yeah of course, as long as you put in the effort and really want to do it.\""+ "<br><br>" +
    "*You and Phoenix train together for the next Ranger selection*" + "<br><br>" ,

// mod: [
        //     []
        // ],
        choices: [
            ["Continue", "Ranger"]
        ]
    },
    Greenberets:{
// mod: [
        //     []
        // ],
        choices: [
            ["Continue", "Ranger"]
        ]
    },
    Deltaforce:{
        // mod: [
                //     []
                // ],
         choices: [
                ["Continue", "Ranger"]
        ]
     },
    
//["RANGER", "Ranger"],
//["GREEN BERETS", "Greenberets"],["DELTA FORCE", "Deltaforce"]
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