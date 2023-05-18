rooms = {
    main: {
        name: "<b>Baskin Shooting Simulation</b>",
        description: "This is a simulation of a school shooting.",
        exitKeys: ["begin", "learn"],
        exitTexts: ["Begin",  "Learn More"]
    },
    learn: { 
        name: "<b>Baskin Shooting Simulation: Learn More</b>",
        description: "This project's main goal is to bring awareness to how to deal with school shootings. The \
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
	    exitKeys: [],
	    exitTexts: []
    },
    call: {
        name: "Baskin Engineering Room 152: Call a friend",
	    description: "It is understandable to want to call someone and let them know what is happening, but it is safer to remain silent and not make noise while hiding.",
	    exitKeys: ["silence"],
	    exitTexts: ["Please, silence your phone."]
    },


    
}

// global variables
var currentRoom = 1;
var lastRoom = 20;


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
    displayCurrentExits(currentRoomObj);
}
// we need to wait until the webpage is loaded before we display room 1
document.addEventListener("DOMContentLoaded", function(event) { 
    newRoom('main')
  });