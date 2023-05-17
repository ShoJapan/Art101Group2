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