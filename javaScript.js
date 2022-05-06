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
            ["RANGER", "Ranger"],["GREEN BERETS", "Greenberets"],["DELTA FORCE", "Deltaforce"]
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
            ["RANGER", "Ranger"],["GREEN BERETS", "Greenberets"],["DELTA FORCE", "Deltaforce"]
        ]
    },
    Ranger:{
    text: "You spot your friend Phoenix with the rangers tab on his uniform." + "<br><br>" +
    "You : \"Hey! You finished it!\"" + "<br><br>" +
    "Phoenix : \"Yeah, I did! A lot of people dropped out after the \"Benning phase.\" "+ "<br><br>" +
    "You : \"How did you do it? Can you help a brother out?\""+ "<br><br>" +
    "Phoenix : \"Yeah of course, as long as you put in the effort and really want to do it.\""+ "<br><br>" +
    "*You and Phoenix train together for the next Ranger selection*" + "<br><br>" +
    "*TIME SKIPS 2 YEARS LATER*" + "<br><br>" +
    "You\’ve been training with Phoenix for the past two years. Doing strength, endurance and mental training." + "<br><br>" +
     "But, as it gets closer to special forces selection, your relationship with Phoenix lowers. "+ "<br><br>" +
     "The two of you start losing touch as soon as selection gets closer and closer. "+ "<br><br>" 
    ,

// mod: [
        //     []
        // ],
        choices: [
            ["Continue", "Ranger2"]
        ]
    },
    Greenberets:{
        text: "Phoenix : \"Well, the Green Berets are off the table\""+ "<br><br>" +
        " You : \"No, we just need to be ready for it. Logically, there is no way a brand new private would be able to handle that training.\""+ "<br><br>" +
        "Phoenix : \"Good point, well what do you want to do about it. Wait for two years. Heh.\""+ "<br><br>" +
        "You : \"Yeah that’s exactly what I want to do. But I think we should train in the meantime. I feel like it would be the best thing to spend our time on.\"" + "<br><br>" +
        " Phoenix : \"Sure. Let’s do that.\""+ "<br><br>" +
        "*TIME SKIPS 2 YEARS LATER*" + "<br><br>" +
    "You\’ve been training with Phoenix for the past two years. Doing strength, endurance and mental training." + "<br><br>" +
     "But, as it gets closer to special forces selection, your relationship with Phoenix lowers. "+ "<br><br>" +
     "The two of you start losing touch as soon as selection gets closer and closer. "+ "<br><br>" 
    ,
        
// mod: [
        //     []
        // ],
        choices: [
            ["Continue", "Greenberets2"]
        ]
    },
    Deltaforce:{
        text: "Phoenix : \"Well, the Delta forces are off the table\""+ "<br><br>" +
        " You : \"No, we just need to be ready for it. Logically, there is no way a brand new private would be able to handle that training.\""+ "<br><br>" +
        "Phoenix : \"Good point, well what do you want to do about it. Wait for two years. Heh.\""+ "<br><br>" +
        "You : \"Yeah that’s exactly what I want to do. But I think we should train in the meantime. I feel like it would be the best thing to spend our time on.\"" + "<br><br>" +
        " Phoenix : \"Sure. Let’s do that.\""+ "<br><br>" +
        "*TIME SKIPS 2 YEARS LATER*" + "<br><br>" +
    "You\’ve been training with Phoenix for the past two years. Doing strength, endurance and mental training." + "<br><br>" +
     "But, as it gets closer to special forces selection, your relationship with Phoenix lowers. "+ "<br><br>" +
     "The two of you start losing touch as soon as selection gets closer and closer. "+ "<br><br>" 
    ,
        
        // mod: [
                //     []
                // ],
         choices: [
                ["Continue", "Delta2"]
        ]
     },
     
     Ranger2:{
        text: 
        "You decide to try to get into the Ranger Regiment. You make it through all 3 phases: Benning " + "<br><br>" +
        "Phase, Mountain Phase, and Florida Phase. You pass it 1st of your class." + "<br><br>" 
        , 
        
        // mod: [
                //     []
                // ],
         choices: [
                ["Continue", "CIA"]
        ]
     },
     Greenberets2:{
        text: "You decide to try to get into the Green Berets. You make it through all 6 phases: land "  + "<br><br>" +
        "navigation, small unit tactics, MOS training, individual training, collective training, language and " + "<br><br>" +
        "cultural training. You pass it 1st of your class" + "<br><br>" 
        ,
        
        // mod: [
                //     []
                // ],
         choices: [
                ["Continue", "CIA"]
        ]
     },
     Delta2:{
        text: "You decide to try to get into the Delta Forces. You make it through all 3 phases: The First" + "<br><br>" +
        "Phase, Stress Phase, and the \“Long Walk\”. You pass it 1st of your class."+ "<br><br>" 
        ,
        
        // mod: [
                //     []
                // ],
         choices: [
                ["Continue", "CIA"]
        ]
     },
     Delta2:{
        text: "You decide to try to get into the Delta Forces. You make it through all 3 phases: The First" + "<br><br>" +
        "Phase, Stress Phase, and the \“Long Walk\”. You pass it 1st of your class."+ "<br><br>" 
        ,
        // mod: [
                //     []
                // ],
         CIA: [
             text: "**CIA INTERVIEW ARCS***" + "<br><br>" +
             "AFTER 6 MONTHS OF SPECIAL FORCES MISSIONS AND BEING A UNIT COMMANDER "+ "<br><br>" +
             "YOU GET A LETTER FROM THE CIA SAYING YOU HAVE BEEN RECOMMENDED/REFERRED TO JOIN THE CIA\’S Operations Officers PROGRAM WHERE YOU WILL BE INTERVIEWED BY A CIA SPECIAL AGENT. ONE WEEK FROM TODAY"
             + "<br><br>" +
             "WHO COULD HAVE RECOMMENDED ME? WAS IT MY UNIT COMMANDER BROCK?"+ "<br><br>" +

             "CALLS UNIT COMMANDER BROCK"+ "<br><br>" +
             "UNIT COMMANDER BROCK : Excuse me, Corporal "+ "<br><br>" +
             "YOU : Hey sir, I just got a letter from the CIA saying I have a interview with them in a week"+ "<br><br>" +
             "UNIT COMMANDER BROCK : Congratulations, your hard work was noticed by the government" + "<br><br>" +
             "YOU : Thank you sir but they said I was recommended by someone. Was that someone you?"+ "<br><br>" +
             "UNIT COMMANDER BROCK : No I wouldn't wanna lose my best to the CIA now would I?"+ "<br><br>" +
             "YOU :  Yes, I guess you\’re right about that sir."+ "<br><br>" +

             "One week later "+ "<br><br>" +

             "You show the security your military ID and are escorted to the bunker in a cold empty room with a large mirror on the side wall you noticed before entering there was a door to the right of the one you entered meaning someone is on the other side of that merro so it must be a one way mirror."+ "<br><br>" +

             "THE INTERVIEWER WALKS IN: "+ "<br><br>" +
             "Good morning () My name is Agent Jack Levreau I work for the CIA Recruiting Service. I see you have been recommended to us by someone ."+ "<br><br>" +
             "You : Good morning , and may I ask who sir?"+ "<br><br>" +
             "CIA AGENT :  Oh you don't know, don't worry you will find out soon enough"+ "<br><br>" +
             "You: okay "+ "<br><br>" +
             "The interview goes on for 3 hours in about everything asking about everything from where I was born to how many steps of stairs I has taken to come into the interview room But finally after 3 hours I told to wait after another 45 mins The agent walks in And Tells me "+ "<br><br>" +
             "() Welcome to the CIA \"And ye shall know the truth and the truth shall make you free.\" (John 8:32) [the Unofficial motto of the CIA]."+ "<br><br>" +

             "**AGENT PHOENIX REVEALS HIMSELF**"+ "<br><br>" +
             "You walk out of your interview, hands are shaking with shortness of breath, you notice a familiar figure standing against a wall with a suit. You see him sticking his hand out to you waving."+ "<br><br>" +
             "So, you made it. I always knew you could make it."+ "<br><br>" +
             "Agent Phoenix : “You\’ve been recruited by the CIA as a counterintelligence agent. You will be working abroad mostly and by yourself.\" I\’m also here to teach you what you need to know about counterintelligence and espionage. This is gonna be a long one, but thankfully, with all of your experience it won\’t be.\”"+ "<br><br>" +
             "You : “When do we start?”"+ "<br><br>" +
             "Agent Phoenix : “Now.”"+ "<br><br>" +


             "Agent Phoenix : “You know, I don\’t even know what you’ll be doing.\”"+ "<br><br>" +
             "You : “But you\’re my mentor, you\’re saying that you don’t know anything?\”"+ "<br><br>" +
             "Agent Phoenix : \“It\’s above my clearance. But, just know you’re the best candidate for it. No pressure though.\”"+ "<br><br>" +
             "You : You think to yourself. What is your mission gonna be? Especially if Agent Phoenix doesn’t know anything about it."+ "<br><br>" +
             "Agent Phoenix : “You\’re gonna be fine, and if you need any help, don’t mind reaching out to me.\”"+ "<br><br>" +
             "You : \“Of course.\”"+ "<br><br>" +

             "**AGENT PHOENIX DIES**"+ "<br><br>" +
             "You receive a call late at night."+ "<br><br>" +
             "*ring ring* *ring ring*"+ "<br><br>" +
"Phone : “Agent Phoenix is KIA.”"+ "<br><br>" +
"Your voice shudders and you swallow your saliva."+ "<br><br>" +
"Phone : “He was found in his office. We believe it was poison and there was a note in there regarding your personal information.”"+ "<br><br>" +
"You : “Am I needed at the office?”"+ "<br><br>" +
"Phone : “No.”"+ "<br><br>" +
"You : “Thank you for the notice.” "+ "<br><br>" +
"You hangup"+ "<br><br>" +

"You attend Agent Phoenix\’s funeral the following week."+ "<br><br>" +


"**MEETING WITH 50th presidents: Dual presidency: Benden and Vrump**"+ "<br><br>" +
"You get an invitation to the oval office to have a meeting with Benden and Vrump. Entering the oval office you see Benden pouring vodka into his red solo cup and Vrump adding ice to his own red solo cup."+ "<br><br>" +
"You: The Honorables hello I received a highly secretive Message regarding an urgent meeting?"+ "<br><br>" +
"The Honorables : Vrump:  Oh yes thank you for coming in such a short notice "+ "<br><br>" +
"Ben: ahh Yes Finally we meet you, We have something very important for someone your caliber."+ "<br><br>" +
" Vrump: We have decided to give you a very important Mission "+ "<br><br>" +
 "** GIVEN THE MISSION**"+ "<br><br>" +
"Benden and  Vrump: “The Mission: End World War III”"+ "<br><br>" +
"Benden: Simple right? Just end world war III"+ "<br><br>" +
"You: Excuse me ? But how can I Single handedly end World War III?"+ "<br><br>" +
"Vrump: Well cutting off the head of the snake is always a great bet."+ "<br><br>" +
"You: what do you mean by that sir"+ "<br><br>" +
"Vrump: We brought you here Knowing what your capabilities are. "+ "<br><br>" +
"Benden : You don't have to kill Valdimir Fast If you don't want to but ripping him of his respect and pride is enough to shatter the Russian federation. Ending World War III"+ "<br><br>" ,
                ["Continue", "MEETING"]
        ]
     },
     
     MEETING:{
        text: 
       " **MEETING WITH 50th presidents: Dual presidency: Benden and Vrump**"+ "<br><br>" +
"You get an invitation to the oval office to have a meeting with Benden and Vrump. Entering the oval office you see Benden pouring vodka into his red solo cup and Vrump adding ice to his own red solo cup."+ "<br><br>" +
"You: The Honorables hello I received a highly secretive Message regarding an urgent meeting?"+ "<br><br>" +
"The Honorables : Vrump:  Oh yes thank you for coming in such a short notice "+ "<br><br>" +
"Ben: ahh Yes Finally we meet you, We have something very important for someone your caliber."+ "<br><br>" +
" Vrump: We have decided to give you a very important Mission "+ "<br><br>" +
"** GIVEN THE MISSION**"+ "<br><br>" +
"Benden and  Vrump: “The Mission: End World War III”"+ "<br><br>" +
"Benden: Simple right? Just end world war III"+ "<br><br>" +
"You: Excuse me ? But how can I Single handedly end World War III?"+ "<br><br>" +
"Vrump: Well cutting off the head of the snake is always a great bet."+ "<br><br>" +
"You: what do you mean by that sir"+ "<br><br>" +
"Vrump: We brought you here Knowing what your capabilities are. "+ "<br><br>" +
"Benden : You don't have to kill Valdimir Fast If you don't want to but ripping him of his respect and pride is enough to shatter the Russian federation. Ending World War III"+ "<br><br>" 
,
        
        // mod: [
                //     []
                // ],
         choices: [
                ["Assassinate: Vladimir Fast", "Assassinate"],["Refuse", "Refuse"],["Espionage: Vladimir Fast", "Assassinate"]
        ]
     },
     Refuse:{
        text: 
      " You go back Home, Yeah it was a tough decision but that amount of stress and pressure isn't healthy you made the right choice but there is always a but when you get home you see a tall man in a dark overcoat standing over your dead wife and childers bodys he turns around with a piston in his hand you] see his face it\’s phenix your old mentor, "+ "<br><br>" +
      "You: Why … w  WHy phoenix Why "+ "<br><br>" +
      "Agent phoenix : it's just a business buddy that mission is top secret and no one can know about it."+ "<br><br>" +
      "Agent phoenix lifts his pistol"+ "<br><br>" +
      "You run and grab a fork on the table next to you and stab agent phoenix the piston is thrown across the room "+ "<br><br>" +
      "**Bang** Bang****Bang**"+ "<br><br>" +
      "Your body goes cold, you turn around and see a tall indian man with a beautiful mustache it it is sakhet  know ask agent 00 infamous for his accuracy "+ "<br><br>" +
      "** you died**"+ "<br><br>" 
        ,
        
        // mod: [
                //     []
                // ],
         choices: [
                ["LEAVE MISSION", "LEAVEMISSION"]
        ]
     },
     Assassinate:{
        text: "After analyzing  Vladimir Fast for 5 months You have narrowed down His most vulnerable locations perfect for killing  Vladimir Fast and ending World War III. The party is a loud and populated place. You know Vladimir Fast has a special VIP room at this party. On the other hand, the best time to attack is when he least expects it, making this Vladimir Fast weakest point and easy to kill, although filled with guards. You have the blueprints of the house and know where Vladimir Fast sleeps.
        + "You Arrive at Vladimir Fast\’s house at 11:59 pm and finally see the Italianate palace worth up to  $1,400,000,000.00 known as  \"быстро Путина\" (\"Fast\’s Palace\") located next to the black sea in person after the several painstaking hours. You have spent several months planning out the different approaches here are a few. But first pick you Weapon:" 
         ,
         choices: [
                ["climb the side of the house", "killed"],["walk in from main door","entered"],["enter through the window","entered"]
        ]
     },
     entered:{
        text:"There is no one here, just a sofa and a tv. the bottom floor is completely empty, maybe you should search around more." 
        ,
         choices: [
                ["LEAVE MISSION","LEAVEMISSION"],["Enter Kitchen","Kitchen"],["GO UP STAIRS","Stairs"]
        ]
     },
     Kitchen:{
        text:"There is no one here, just a sofa and a tv. the bottom floor is completely empty, maybe you should search around more." 
        ,
         choices: [
                ["LEAVE MISSION","LEAVEMISSION"],["Enter Kitchen","Kitchen"],["GO UP STAIRS","Stairs"]
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