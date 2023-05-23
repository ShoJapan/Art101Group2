rooms = {
    main: {
        name: "<b>Baskin Shooting Simulation</b>",
        description: "This is a simulation of a school shooting based in the University of Santa Cruz. This simulation will take you though choices on how to be prepared in advance for the best chances of survival.",
        exitKeys: ["begin", "learn"],
        exitTexts: ["Begin",  "Learn More"]
    },
    learn: { 
        name: "<b>Baskin Shooting Simulation: Learn More</b>",
        description: "This project's main goal is to bring awareness to how to deal with school shootings. Running should be option one if possible, but be prepared to hide or fight for your life there is no safe escape route. The \
        location was chosen as University of California, Santa Cruz Baskin Engineering since that is the main building \
        associated with the class this project was designed for. This is a final project for Art 101.",
        exitKeys: ["main"],
        exitTexts: ["Return to the Main Screen."]
    },
    begin: {
	    name: "Baskin Engineering Room 152",
	    description: "About halfway into a lecture on jQuery(a javaScript library) a voice echoes around the room. \
        'There is an active shooter in the building.' This is followed by the sound of gunshots. You look around \
        at your fellow students and think about what to do.",
	    exitKeys: ["hide", "run", "panic"],
	    exitTexts: ["Quick hide!", "RUN", "Panic!"]
    },
    hide: {
	    name: "Baskin Engineering Room 152: Hiding",
	    description: "You duck down between the row of chairs. Everyone around you does the same. What do you do now?",
	    exitKeys: ["lights", "silence", "call", "run"],
	    exitTexts: ["Turn off the lights!", "Silence your phone", "Call a friend.", "RUN!" ]
    },
    run: {
	    name: "Running",
	    description: "You panic, not wanting to be caught and make a run for it! This is not the correct choice. In the event \
        of a shooting you want to shelter in place because you have no confirmation that the shooter won't see you. Without \
        knowing the location of the shooter the option to run is more dangerous than staying in place.",
	    exitKeys: ["begin"],
	    exitTexts: ["Return to Room 152"]
    },
    panic: {
	    name: "Baskin Engineering Room 152: Panicking",
	    description: "You feel your chest tighten in fear. Looking around you see several people hide while a few make a run for the door.",
	    exitKeys: ["run", "hide"],
	    exitTexts: ["Go with the runners.", "Hide."]
    },
    lights: {
	    name: "Baskin Engineering Room 152: Lights off",
	    description: "You quickly locate the lights panel and sneak over to turn them off, staying low to the ground. While you wait, what do you do?",
	    exitKeys: ["silence", "call"],
	    exitTexts: ["Silence your phone", "Call a friend."]
    },  
    silence: {
	    name: "Baskin Engineering Room 152: Silence your phone",
	    description: "You quickly silence your phone and gesture to others to do the same. It would be bad to alert to the shooter that people were in the room.",
	    exitKeys: ["footsteps", "remind"],
	    exitTexts: ["Listen for footsteps.", "Remind others near you to silence their phones."]

    },
    call: {
        name: "Baskin Engineering Room 152: Call a friend",
	    description: "It is understandable to want to call someone and let them know what is happening, but it is safer to remain silent and not make noise while hiding.",
	    exitKeys: ["silence"],
	    exitTexts: ["Please, silence your phone."]
    },
    footsteps: {
        name: "Baskin Engineering Room 152: Listening...",
        description: "You stay quiet and listen… You hear gunshots somewhere above you and the sound of running in the hallway outside the door. \
        You think for a moment if you should try to make a run for it while believing the shooter is on the level above you.",
        exitKeys: ["run2", "stay"], 
        exitTexts: ["You make your escape.", "You stay hidden."]
    },
    remind: {
        name: "Baskin Engineering Room 152: Reminder...",
        description: "You whisper to the person next to you, 'hey, silence your phone.' They nod and pass on the message.",
        exitKeys: ["listen", "weapon" ],
        exitTexts: ["Listen for footsteps.", "Look around for a weapon."]
    },
    listen: {
        name: "Baskin Engineering Room 152: Listening…",
        description: "You listen closely, flinching when you hear the sound of gunshots in the hallway outside the room. You can feel your heartbeat \
         speed up as footsteps get closer. There is a moment when the footsteps stop… light enters the room.",
        exitKeys: ["stay2", "use", "use"],
        exitTexts: ["Stay hidden.", "Use weapon.", "Try to grab the shooter"], 
    },
    
    weapon: {
        name: "Finding a Weapon",
        description: "You look around and see a metal water bottle. You grab it.",
        exitKeys:["listen"],
        exitTexts: ["You listen for footsteps."]
    },
    stay2: {
        name: "Staying hidden. Not the right choice.",
        description: "There are three main choices when dealing with a school shooter: hide, run, or fight. In this instance you would want to try and \
        catch the shooter off guard and fight instead of staying hidden as the shooter has already discovered your hiding place.",
        exitKeys: ["listen"],
        exitTexts: ["Return to Listening..."]
    },
    run2: {
        name: "Running…",
        description: "Now that you know the shooter is above you, you make your way to the door and run for the exit. You make it and once outside \
         you creep off into the forest out of sight of the second floor windows.",
        exitKeys: ["finish"],
        exitTexts: ["You hear a siren..."]
    },
    stay: {
        name: "Staying put.",
        description: "Not wanting to risk it you stay put and wait it out. You don't know how much time has passed while you try to stay quiet and calm. \
        It isn't till you hear 'The shooter has been neutralized, everyone is safe to leave the building.' that you breathe a sigh of relief.", 
        exitKeys: ["finish"],
        exitTexts: ["You are safe."]
    },
    
    
    use: {
        name: "Using a weapon", //default is unarmed
        description: "You leap out and attack the shoot catching them off guard. Around you other students jump up and help disarm the shooter.",
        exitKeys: ["finish2"],
        exitTexts: ["It's over..."]
    },
    finish: {
        name: "Police.",
        description: "You make your way to the police blockade. They ask you if you're okay and what you know about what happened. \
        They sit you down and let the shock wear off. You are given the numbers of trauma counselors and websites to help deal with what just happened.",
    //list of helpful resources??? 
    },
    
    finish2: {
        name: "Police.",
        description: "While you and other students keep the shoot incapacitated another calls the police. They storm the building and quickly \
        find your class room. 'We can take it from here.' They say, gesturing for you all to leave.",
        exitKeys: ["finish"],
        exitTexts: ["You make your way out..."] 
    },
    
    
}

// global variables
var currentRoom = 1;
var lastRoom = 18;



/*
    Print something on the webpage in display area
    Parameters: string to display
 */
function display(string) {
    var element = $("#js-output");
    element.html(`${element.html() + string}`);
    
}

/*
 * Clear display area
 */
function clearDisplayArea() {
    $("#js-output").html("");
}

/*
 * Display the current room
 * Parameters: Takes a room object
 */
function displayCurrentRoom(roomObj) {
    display("<p class='title'>" + roomObj.name + "</p>");
    display("<p class='description'>" + roomObj.description + "</p>");
}


/*
 * Display current exitKeys
 * Parameters: Takes a room object
 */
function displayCurrentExits(roomObj) {
    // loop over all the exitKeys for this room
    display("<p>Choose your next move:</p><ul class='exits'>");
    for(i=0; i<roomObj.exitKeys.length; i++) {
        /* We want the HTML to look like this:
              <li><a onClick='javascript:newRoom("exitKey")'>Exit text</a></li>
        */
        exitHTML = "<li onClick='javascript:newRoom(\"" + 
                roomObj.exitKeys[i] + "\")'>" + roomObj.exitTexts[i] + "</li>";
        display(exitHTML);
    }
    display("</ul>");
}

function newRoom(nextRoom) {
	currentRoom = nextRoom;
    currentRoomObj = rooms[currentRoom];
    clearDisplayArea();
    displayCurrentRoom(currentRoomObj);
    if(currentRoom != "finish"){
        displayCurrentExits(currentRoomObj);
    }
}
// we need to wait until the webpage is loaded before we display room 1
document.addEventListener("DOMContentLoaded", function(event) { 
    newRoom('main')
  });