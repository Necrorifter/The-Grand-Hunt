// Use this as script 3 is raw button scenario and script 3 is raw input scenario, this script is playground for hybrid

// JavaScript Document

// # is id, . is class

// Remember to use those startgame() function and nesting those inside it and then make function for every choice to greatly simplified those and give it ability to go back and start game.
// Look at your Text Text 1 Script for clues to this solution.

// You will need to make unique tag for your choices as it seem that you cant see the My name is... choice because of FadeOut button tag inside Blank Origin... Look like it time for function.

// show() and hide() could be useful as HUD pop up for information on characters, events, places, etc. it basically allow size to grow and shrink instead of fade out and in.
// Use .remove() to actually get rid of element instead of hide() or fadeOut(), etc.
// Don't forget to add class and then remove it for <br> to prevent that blank line add on each time you repeat a choice cycle.

// SETS ALL VARIABLES FOR THE GAME

// locationexplored
var currentland = "Star Nexus";
//

// inventory
Basicgear = true;
Advancedgear = false;
//

// Lores
planetname = "güzel dağ"; // name of planet in turkish which mean beautiful mountain, given by Indiya.
planetnameskip = "<p>güzel dağ</p>"; // same but with line break.
planetnamebold = "<b>güzel dağ</b>"; // same but with bold.
var land = ""; // Where are you on the planet.
//

// Origins
originmode = false;
var pn = ""; // player name.
//console.log("The player name is save as " + pn);
var gender = ""; // just change what people call you, no impact on story.
// blankobg = false; // blank easy mode, you have no weakness but no strength.
// bountyhunterobg = false; // you pay money for your faction, you have strength of prestart equipment and companions. but weakness of have to support them with credits.
// mercenaryobg = false; // You get stuff for your employer, you have strength of prestart base paid by your boss. but weakness of have to get stuff for your boss.

var OBG = ""; // Decide your origin backgrounds
var playerName = false;
var genderC = false;
//

//

// "<b><br><br>Origin: I don't remember...</b> " + "<b><br><br>Origin: For the money!</b> " + "<b><br><br>Origin: My employer want me here. </b>"

// $("<p>Hello</p>").insertBefore("#placeholder_choice")
// $("<center><button class='command_button' size='50'>Origin: I don't remember...</button></center><br>").insertBefore("#placeholder_choice")
// $("<center><button class='command_button' size='50'>Bye</button></center>").insertBefore("#placeholder_choice");

// All functions

  /*// Variables Section
  
  var input = $(".command_line").val();
  input = "";
  //input = "";
  console.log("The Input is " + input);
  var pn
  pn = "" + input + "";
  console.log("The pn is " + pn);
  console.log("The PN is " + PN);

	// $(this) is somehow allow it to recieve array and input them into variable buttons for uses in multiple choice buttons. it work using what is current, if you click on button that button become this, if you click on block of text, that text become this, might be useful.

	// End of Variables Section

	// Input Section

	// $("<center><button class='command_button nay button' value='Yes'>Yes</button></center><br class='br'>").insertBefore("#placeholder_choice");
	// $("<input type='text' class='command_line line' size='50' autofocus='autofocus' autocomplete='off'></input>").insertBefore("#placeholder").fadeIn(0);
	// $("command_line").fadeIn(0000);

	var button = $(this).val();
	console.log("The Button is " + button);
	$("#console").scrollTop($("#console")[0].scrollHeight);

	$(".command_line").val("");

	// End of Input Section

//*/

function startGame() {

  // Start Intro
  $(document).ready(function() {

    Intro();

  });
  // End Intro

  // Think about making more than one of those $(document).on("click", "", function() {});

  // Origin Starts

  $(document).on("click", "", function() {

    /**/

  });

  $(document).on("click", "#blankStart", function() {

    var button = $(this).val();
    console.log("The Button is " + button);
    $("#console").scrollTop($("#console")[0].scrollHeight);

    // Function of all origins, Look over this, perhaps you want to seperate playername section from origin and figure out how to return those value to higher nest so you can make new function for those without mess up those nesting structure as shown below.

    if (button == "Blank") {
      Blank();
    } else {

      alert("<p>You got this as value: " + "<b>'" + button + "'</b>" + " - but something went wrong!" + "</p>").insertBefore("#placeholder");
      //$(".originChoices").fadeOut(0);
      startGame();

    };

  });

  $(document).on("click", "#bountyhunterStart", function() {

    var button = $(this).val();
    console.log("The Button is " + button);
    $("#console").scrollTop($("#console")[0].scrollHeight);

    if (button == "Bounty Hunter") {
      BountyHunter();
    } else {

      alert("<p>You got this as value: " + "<b>'" + button + "'</b>" + " - but something went wrong!" + "</p>").insertBefore("#placeholder");
      //$(".originChoices").fadeOut(0);
      startGame();

    };

  });

  $(document).on("click", "#mercenaryStart", function() {

    var button = $(this).val();
    console.log("The Button is " + button);
    $("#console").scrollTop($("#console")[0].scrollHeight);

    if (button == "Mercenary") {
      Mercenary();
    } else {

      alert("<p>You got this as value: " + "<b>'" + button + "'</b>" + " - but something went wrong!" + "</p>").insertBefore("#placeholder");
      //$(".originChoices").fadeOut(0);
      startGame();

    };

  });

  $(document).on("click", ".nay", function() {

    var button = $(this).val();
    console.log("The Button is " + button);
    $("#console").scrollTop($("#console")[0].scrollHeight);

    if (button == "Yes") {

      console.log("You click on " + button);

      if (playerName == true && originmode == true) {

        input = $(".command_line").val();
        console.log("The Input is " + input);

        pn = "" + input + "";
        console.log("The pn is " + pn);

        if (pn != "") { // =! is turning string into boolean for some reasons. It because you have it as =! and not != which is a = !b instead of a not equal b.

          clear();

          //gender();

          playerName = false;
          console.log("playerName is " + playerName);
          genderC = true;
          console.log("genderC is " + genderC);
          
          /*$("<p class = 'text'>Is your name, " + pn + "?</p>").insertBefore("#placeholder");
    
          $("<center><button class='command_button nay button' value='Yes'>Yes, This is my name.</button></center><br class='br'>").insertBefore("#placeholder_choice");
    
          $("<center><button class='command_button nay button' value='No'>No, let me pick other name.</button><center>").insertBefore("#placeholder_choice");*/
    
        } else if (pn == "") {
    
          //OBG = "";
    
          clear();

          Intro();
    
          $("<p class='text'>Sorry, but you need to give yourself a name</p>").insertBefore("#placeholder");
    
        } else {
          alert("Something went wrong with giving yourself a name! Is it " + pn);
        }

      }

      else if (genderC == true && originmode == true) {

        alert("It just a social construct!");

      	$("<p>Good, now for the next step that have no value for your story beside your pronoun, but " + pn + ", are you a boy or a girl.</p>").insertBefore("#placeholder");

      	$("<center><button class='command_button fe\male' value='Man'>I am a man!</button></center><br class='br'>").insertBefore("#placeholder_choice");

        $("<center><button class='command_button fe\male' value='Woman'>I am a woman!</button></center>").insertBefore("#placeholder_choice");
        
        gnederC = false;

      }

      else if (OBG != "") {

        /*switch (OBG) {

          case "Blank":

            //alert("It working motherfucker!");

              pn = "" + input + "";
              console.log("The pn is " + pn);

              if (input == "") {

                clear();
  
                $("<p class='text'>What is your name?</p>").insertBefore("#placeholder");
  
                $("<input type='text' class='command_line line' size='50' autofocus='autofocus' autocomplete='off'></input>").insertBefore("#placeholder").fadeIn(0);
  
                $("<center><button class='command_button nay button' value='Yes'>Yes</button></center><br class='br'>").insertBefore("#placeholder_choice");
  
                $("<center><button class='command_button nay button' value='No'>No</button><center>").insertBefore("#placeholder_choice");
  
              }
  
              else if (input != "") {
  
                bopn();
  
              }
  
              else {
                alert("Something went wrong with your Blank OBG nay!");
              }

            break;

          case "Bounty Hunter":

            input = $(".command_line").val();
            console.log("The Input is " + input);

            //alert("It working motherfucker!");

            if (pn == "") {

              pn = "" + input + "";
              console.log("The pn is " + pn);

              if (input == "") {

                clear();
  
                $("<p class='text'>What is your name?</p>").insertBefore("#placeholder");
  
                $("<input type='text' class='command_line line' size='50' autofocus='autofocus' autocomplete='off'></input>").insertBefore("#placeholder").fadeIn(0);
  
                $("<center><button class='command_button nay button' value='Yes'>Yes</button></center><br class='br'>").insertBefore("#placeholder_choice");
  
                $("<center><button class='command_button nay button' value='No'>No</button><center>").insertBefore("#placeholder_choice");
  
              }
  
              else if (input != "") {
  
                bhopn();
  
              }
  
              else {
                alert("Something went wrong with your Bounty Hunter OBG nay!");
              }

            }

            else if (pn != "") {

            };

            break;

          case "Mercenary":

            input = $(".command_line").val();
            console.log("The Input is " + input);

            //alert("It working motherfucker!");

            if (pn == "") {

              pn = "" + input + "";
              console.log("The pn is " + pn);

              if (input == "") {

                clear();
  
                $("<p class='text'>What is your name?</p>").insertBefore("#placeholder");
  
                $("<input type='text' class='command_line line' size='50' autofocus='autofocus' autocomplete='off'></input>").insertBefore("#placeholder").fadeIn(0);
  
                $("<center><button class='command_button nay button' value='Yes'>Yes</button></center><br class='br'>").insertBefore("#placeholder_choice");
  
                $("<center><button class='command_button nay button' value='No'>No</button><center>").insertBefore("#placeholder_choice");
  
              }
  
              else if (input != "") {
  
                mopn();
  
              }
  
              else {
                alert("Something went wrong with your Mercenary OBG nay!");
              }

            }

            else if (pn != "") {

            };

            break;

          default:
            text = "Something went wrong with cases for OBG!";

        }*/

      }

    } else if (button == "No") {

      console.log("You click on " + button)

      if (playerName == true) {

        clear();

        Intro();

      };

      if (OBG != "") {

        switch (OBG) {

          case "Blank":

            OBG = "";

            clear();

            Intro();

            break;

          case "Bounty Hunter":

            OBG = "";

            clear();

            Intro();

            break;

          case "Mercenary":

            OBG = "";

            clear();

            Intro();

            break;

          default:
            text = "Something went wrong with cases for OBG";

        }

      }
      
      /*else if () {

      };*/

      else if (gender == "" && originmode == true) {

        /*switch () {



        }*/

      }

    } else {

      alert("<p>You got this as value: " + "<b>'" + button + "'</b>" + " - but something went wrong!" + "</p>").insertBefore("#placeholder");
      //$(".originChoices").fadeOut(0);
      startGame();

    };

  });

  $(document).on("click", "fe\male", function() {

    if (gender == "" && originmode == true) {

      var button = $(this).val();
      console.log("The Button is " + button);
      $("#console").scrollTop($("#console")[0].scrollHeight);

      $("<p class = text>So you are a " + gender + ", correct?</p>").insertBefore("#placeholder");

      $("<center><button class='command_button nay button' value='Yes'>Yes, I am " + gender + ".</button></center><br class='br'>").insertBefore("#placeholder_choice");
    
      $("<center><button class='command_button nay button' value='No'>No, this is a mistake!</button><center>").insertBefore("#placeholder_choice");

      /*if (button == "Male") {

        gender = "Male";

        $("<p class = text>So you are a man, correct?</p>").insertBefore("#placeholder");

        $("<center><button class='command_button nay button' value='Yes'>Yes, This is my name.</button></center><br class='br'>").insertBefore("#placeholder_choice");
    
        $("<center><button class='command_button nay button' value='No'>No, let me pick other name.</button><center>").insertBefore("#placeholder_choice");

      }

      else if (button == "Female") {

        gender = "Female";

        $("<p class = text>So you are a woman, correct?</p>").insertBefore("#placeholder");

        $("<center><button class='command_button nay button' value='Yes'>Yes, This is my name.</button></center><br class='br'>").insertBefore("#placeholder_choice");
    
        $("<center><button class='command_button nay button' value='No'>No, let me pick other name.</button><center>").insertBefore("#placeholder_choice");

      }*/

    }

  });

  var button = $(this).val();
  console.log("The Button is " + button);
  $("#console").scrollTop($("#console")[0].scrollHeight);

  // Function set for Intro
  function Intro() {

    clear();

    $("<p class = 'text'>You woke up as the alarm ringing at your ears. Groaning, you got up and look outside the viewport of your room. You see a massive space station. ''Hello, welcome to the Star Nexus, that are orbiting the planet by the name of " + planetnamebold + ".'' The speaker on the starship I was on call out. I decide to come to this planet because it was recently discovered to have a carcass of the Illuminated Horror within the planet core. This give the planet properities of magic, which make it valuable for the bounty hunting for the elites. It a good place to go to for the hunting. I walk to the dock bay, a lady hail me and ask me for my name and to state my business here. </p>").insertBefore("#placeholder").fadeIn(0, function() {
      originmode = true;
      console.log("originmode is " + originmode);
      playerName = true;
      console.log("playerName is " + playerName);

    });

    $("<p class='text'>What is your name?</p>").insertBefore("#placeholder");
  
    $("<input type='text' class='command_line line' size='10' autofocus='autofocus' autocomplete='off'></input>").insertBefore("#placeholder").fadeIn(0);

    $("<center><button class='command_button nay button' value='Yes'>ID Confirmed</button></center><br class='br'>").insertBefore("#placeholder_choice");

    /*$("<p class = 'text'>You woke up as alarm ranging at your ears. Groaning, you got up and look outside the viewport of your room. You look at a massive space station. Hello, welcome to the Star Nexus, that are orbiting the planet by the name of " + planetnamebold + ".</p> <p class = 'text'>Ahh, yes. I decide to come to this planet because it was recently discovered to have carcass of Illuminated Horror within the planet core. This give the planet the properities of magic, which make it valuable for bounty hunting for the elites. It a good place to go to for ___</p> <p>Please state your Origins for this game. Here your options. </p>").insertBefore("#placeholder").fadeIn(5000, function() {
      originmode = true;
      console.log("originmode is " + originmode);
    });

    // Blank Origin
    $("<center><button id='blankStart' class='command_button button' size='50' value='Blank'>Origin: I don't remember...</button></center><br class='br'>").insertBefore("#placeholder_choice");
    //

    // Bounty Hunter Origin
    $("<center><button id='bountyhunterStart' class='command_button button' size='50' value='Bounty Hunter'>Origin: For the money!</button></center><br class='br'>").insertBefore("#placeholder_choice");
    //

    // Mercenary Origin
    $("<center><button id='mercenaryStart' class='command_button button' size='50' value='Mercenary'>Origin: My employer want me here.</button></center><br class='br'>").insertBefore("#placeholder_choice");
    //*/

  }
  // End Function for Intro

  // Function Set Origin to Blank
  function Blank() {

    //look into using id instead of class in the yes or no section and using .remove() to allow repeating removal more than once.

    if (originmode == true && OBG == "") {

      OBG = "Blank";

      clear();

      $("<p class= 'text'>I don't really remember why I am here, but I can tell that this is my chance for new life. You may not have any advantages at this life but it is your life now without anyone telling you what to do or responible, but it mean you have duty for yourself, so be careful when making promises. Is this what you want?</p>").insertBefore("#placeholder"); // blank origin 2 (Testing)

      $("<center><button class='command_button nay button' value='Yes'>Yes</button></center><br class='br'>").insertBefore("#placeholder_choice");

      $("<center><button class='command_button nay button' value='No'>No</button><center>").insertBefore("#placeholder_choice");

      //var bo1 = $("<p class= 'bo1'>I don't really remember why I am here, but I can tell that this is my chance for new life. But even if you don't remember why you are here... surely, you must remember your own name, right?</p>").insertBefore("#placeholder"); // blank origin 1

      /*$(".command_line").insertBefore("#placeholder").fadeIn(0);

      $("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center>").insertBefore("#placeholder_choice");*/

    } else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
  }
  // End of Function Origin Blank

  // Function set origin to bounty hunter
  function BountyHunter() {

    if (originmode == true && OBG == "") {

      OBG = "Bounty Hunter";

      clear();

      $("<p class= 'text'>I came here with my gang to get rich!</p>").insertBefore("#placeholder");

      $("<center><button class='command_button nay button' value='Yes'>Yes</button></center><br class='br'>").insertBefore("#placeholder_choice");

      $("<center><button class='command_button nay button' value='No'>No</button><center>").insertBefore("#placeholder_choice");

      //$(".command_line").insertBefore("#placeholder").fadeIn(0);

      //$("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br class='br'>").insertBefore("#placeholder_choice");

    } else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
  }
  // End of Function Bounty Hunter Origin

  // Function set origin to mercenary
  function Mercenary() {

    if (originmode == true && OBG == "") {

      OBG = "Mercenary";

      clear();

      $("<p class= 'text'>My boss want me to stay here and find something fancy and valuable and deliver it to him.</p>").insertBefore("#placeholder");

      $("<center><button class='command_button nay button' value='Yes'>Yes</button></center><br class='br'>").insertBefore("#placeholder_choice");

      $("<center><button class='command_button nay button' value='No'>No</button><center>").insertBefore("#placeholder_choice");

      //$(".command_line").insertBefore("#placeholder").fadeIn(0);

      //$("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br class='br'>").insertBefore("#placeholder_choice");

    } else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
  }
  // End of Function Mercenary Origin

  function clear () {

    $(".text").remove();

    $(".button").remove();

    $(".line").remove();

    $(".br").remove();

  };

  $(".command_line").val("");

};
// End of Start Game

startGame();