// Use this as script 3 is raw button scenario and script 3 is raw input scenario, this script is playground for hybrid

// JavaScript Document

// # is id, . is class

// Remember to use those startgame() function and nesting those inside it and then make function for every choice to greatly simplified those and give it ability to go back and start game.
// Look at your Text Text 1 Script for clues to this solution.

// You will need to make unique tag for your choices as it seem that you cant see the My name is... choice because of FadeOut button tag inside Blank Origin... Look like it time for function.

// show() and hide() could be useful as HUD pop up for information on characters, events, places, etc. it basically allow size to grow and shrink instead of fade out and in.

// SETS ALL VARIABLES FOR THE GAME

	// Mechanic Variables
	//

	// locationexplored
	currentland = "Star Nexus";
	//

	// inventory
    Basicgear = true;
    Advancedgear = false;
	//

	// Lores
	planetname = "güzel dağ"; // name of planet in turkish which mean beautiful mountain, given by Indiya.
	planetnameskip = "<p>güzel dağ</p>"; // same but with line break.
	planetnamebold = "<b>güzel dağ</b>"; // same but with bold.
	//

	// Origins
	originmode = false;
	pn = ""; // player name.
	male = false; // just change what people call you, no impact on story.
	female = false; // just change what people call you, no impact on story.
	blankobg = false; // blank easy mode, you have no weakness but no strength.
	bountyhunterobg = false; // you pay money for your faction, you have strength of prestart equipment and companions. but weakness of have to support them with credits.
	mercenaryobg = false; // You get stuff for your employer, you have strength of prestart base paid by your boss. but weakness of have to get stuff for your boss.
	//

//

// "<b><br><br>Origin: I don't remember...</b> " + "<b><br><br>Origin: For the money!</b> " + "<b><br><br>Origin: My employer want me here. </b>"

// $("<p>Hello</p>").insertBefore("#placeholder_choice")
// $("<center><button class='command_button' size='50'>Origin: I don't remember...</button></center><br>").insertBefore("#placeholder_choice")
// $("<center><button class='command_button' size='50'>Bye</button></center>").insertBefore("#placeholder_choice");

function startGame() {


	// Start Intro
	$(document).ready(function() {

		Intro();

		function Intro() {

			$("#hidden_line").hide();
			$("#hidden_button").hide();

			$("<div id='Intro'>" + "<p>You woke up as alarm ranging at your ears. Groaning, you got up and look outside the viewport of your room. You look at a massive space station. Hello, welcome to the Star Nexus, that are orbiting the planet by the name of " + planetnamebold + ".</p> <p>Ahh, yes. I decide to come to this planet because it was recently discovered to have carcass of Illuminated Horror within the planet core. This give the planet the properities of magic, which make it valuable for bounty hunting for the elites. It a good place to go to for ___</p> <p>Please state your Origins for this game. Here your options. </p>" + "</div>").insertBefore("#placeholder").fadeIn(5000, function(){
				originmode = true;
			});
		
			// Blank Origin
			$("<center><button id='blankStart' class='command_button' class='originChoices' size='50' value='Blank'>Origin: I don't remember...</button></center><br>").insertBefore("#placeholder_choice");
			//
		
			// Bounty Hunter Origin
			$("<center><button id='bountyhunterStart' class='command_button' class='originChoices' size='50' value='Bounty Hunter'>Origin: For the money!</button></center><br>").insertBefore("#placeholder_choice");
			//
		
			// Mercenary Origin
			$("<center><button id='mercenaryStart' class='command_button' class='originChoices' size='50' value='Mercenary'>Origin: My employer want me here.</button></center><br>").insertBefore("#placeholder_choice");
			//
		}

	})
	// End Intro

	// Think about making more than one of those $(document).on("click", "", function() {});

	$(document).on("click", "", function() {
		
	});

	// command to apply events to all buttons and inputs.
	$(document).on("click", ".command_button", function() {

		// Variables Section

		var input = $(".command_line").val();
		console.log(input);

		// $(this) is somehow allow it to recieve array and input them into variable buttons for uses in multiple choice buttons. it work using what is current, if you click on button that button become this, if you click on block of text, that text become this, might be useful.

		var button = $(this).val();
		console.log(button);
		// End of Variables Section

		Origin();

		// Input Section

		// $("<center><button class='command_button' size='50' value=''></button></center><br>").insertBefore("#placeholder_choice");
		// $("<center><input type='text' class='command_line' size='50' autofocus='autofocus' autocomplete='off'></center><br>");
		// $("command_line").fadeIn(0000);
		
		$("#console").scrollTop($("#console")[0].scrollHeight);

		$(".command_line").val("");
		// End of Input Section

		// Function of all origins, Look over this, perhaps you want to seperate playername section from origin and figure out how to return those value to higher nest so you can make new function for those without mess up those nesting structure as shown below.

		function Origin() {

			if (button == "Blank") {
				Blank();

				/* Something like this
				playerName();
					if (pn =! "") {
						var pn = "" // how to return pn from playerName() to her so you can sent it to global variable and store it.
					}
					else {
						$("<p>You got no name, go back and give yourself a name!</p>");
						playerName();
					}
				*/
			}

			else if (button == "Bounty Hunter"){
				BountyHunter();
			}

			else if (button == "Mercenary"){
				Mercenary();
			}

			// When your origins functions fails

			else {
				alert("<p>You got this as value: "+"<b>'"+button+"'</b>"+" - but something went wrong!"+"</p>").insertBefore("#placeholder");
				//$(".originChoices").fadeOut(0);
				startGame();
			}
			// End of Origin errors

		}
		// End of function Origin Choices


		// Function Set Origin to Blank
		function Blank() {

			if (originmode == true && blankobg == false && bountyhunterobg == false && mercenaryobg == false) {
				blankobg = true;

				var bo1 = $("<p>I don't really remember why I am here, but I can tell that this is my chance for new life. But even if you don't remember why you are here... surely, you must remember your own name, right?</p>"); // blank origin 1
				$(bo1).insertBefore("#placeholder");

				$("#Intro").fadeOut(0);
				
				//$(".originChoices").fadeOut(0);

				//$(".command_button").fadeOut(0);

				$(".command_line").insertBefore("#placeholder").fadeIn(0);

				$("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");

				bopn();

				/* blank origin player name */ function bopn () {

					if (input != "" && button == "Playername") {
						input = pn;
						console.log(pn);
						
						$("<p>So your name is " + pn + "?</p>")
					}

					else if (input == "" && button == "Playername") {
						$("<p>Sorry, but you need to give yourself a name</p>").insertBefore("#placeholder");
						$(".command_line").insertBefore("#placeholder").fadeIn(0);

						$("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");
					}

					else if (button != "Playername") {
						// $("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");
					}

					else {
						alert("Something went wrong with giving yourself a name! Is it " + pn);
					}

				}
				// End of blank origin player name

			}
			else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
		}
		// End of Function Origin Blank

		// Function set origin to bounty hunter
		function BountyHunter() {

			if (originmode == true && blankobg == false && bountyhunterobg == false && mercenaryobg == false) {
				bountyhunterobg = true;
				var bho1 = $("<p>I came here with my gang to get rich!</p>").insertBefore("#placeholder");
				$(bho1);
				$(".command_button").fadeOut(0);
				$("#Intro").fadeOut(0);
				$(".command_line").insertBefore("#placeholder").fadeIn(0);
				$("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");
				bhopn();

				/* blank origin player name */ function bhopn () {

					if (input != "" && button == "Playername") {
						input = pn;
						console.log(pn);
						
						$("<p>So your name is " + pn + "?</p>")
					}

					else if (input == "" && button == "Playername") {
						$("<p>Sorry, but you need to give yourself a name</p>").insertBefore("#placeholder");
						$(".command_line").insertBefore("#placeholder").fadeIn(0);

						$("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");
					}

					else if (button != "Playername") {
						// $("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");
					}

					else {
						alert("Something went wrong with giving yourself a name! Is it " + pn);
					}

				}
				// End of blank origin player name

			}

			else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
		}
		// End of Function Bounty Hunter Origin

		// Function set origin to mercenary
		function Mercenary() {

			if (originmode == true && blankobg == false && bountyhunterobg == false && mercenaryobg == false) {
				mercenaryobg = true;
				var mo1 = $("<p>My boss want me to stay here and find something fancy and valuable and deliver it to him.</p>").insertBefore("#placeholder");
				$(mo1);
				$(".command_button").fadeOut(0);
				$("#Intro").fadeOut(0);
				$(".command_line").insertBefore("#placeholder").fadeIn(0);
				$("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");
				mopn();

				/* blank origin player name */ function mopn () {

					if (input != "" && button == "Playername") {
						input = pn;
						console.log(pn);
						
						$("<p>So your name is " + pn + "?</p>")
					}

					else if (input == "" && button == "Playername") {
						$("<p>Sorry, but you need to give yourself a name</p>").insertBefore("#placeholder");
						$(".command_line").insertBefore("#placeholder").fadeIn(0);

						$("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");
					}

					else if (button != "Playername") {
						// $("<center><button class='command_button' size='50' value='Playername'>My name is...</button></center><br>").insertBefore("#placeholder_choice");
					}

					else {
						alert("Something went wrong with giving yourself a name! Is it " + pn);
					}

				}
				// End of blank origin player name

			}

			else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
		}
		// End of Function Mercenary Origin

	})
	// End of command buttons and inputs

}
// End of Start Game

startGame();