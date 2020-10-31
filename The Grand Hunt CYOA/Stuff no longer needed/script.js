// JavaScript Document

//SETS ALL VARIABLES FOR THE GAME

	//locationexplored
	cellunlocked = false;
	beentohallway = false;
	beentorture = false;
	beenmorgue = false;
	beentowesthall = false;
	beentobonus = false;
	exitunlocked = false;
	beentoexit = false;
	//

	//inventory
	paperclip = false;
	deadbugs = false;
	lunchtray = false;
	torch = false;
	note = false;
	knife = false;
	hat = false;
	whip = false;
	key = false;
	powder = false;
	//

	//Lores
	planetname = "güzel dağ" // name of planet in turkish which mean beautiful mountain, given by Indiya.
	planetnameskip = "<p>güzel dağ</p>" // same but with line break.
	planetnamebold = "<b>güzel dağ</b>" // same but with bold.
	//

	//Origins
	originmode = false
	currentland = "Star Nexus";
	male = false // just change what people call you, no impact on story.
	female = false // just change what people call you, no impact on story.
	blankobg = false // blank easy mode, you have no weakness but no strength.
	bountyhunterobg = false // you pay money for your faction, you have strength of prestart equipment and companions. but weakness of have to support them with credits.
	mercenaryobg = false // You get stuff for your employer, you have strength of prestart base paid by your boss. but weakness of have to get stuff for your boss.
	//

//

$(document).ready(function() {
    $('<p>Welcome to Text Text 7. At any time you may type "help" for a list of commands that you can use.</p>').insertBefore("#placeholder").fadeIn(0000);

	$("<p>You woke up as alarm ranging at your ears. Groaning, you got up and look outside the viewport of your room. You look at a massive space station. Hello, welcome to the Star Nexus, that are orbiting the planet by the name of " + planetnamebold + ".</p> <p>Ahh, yes. I decide to come to this planet because it was recently discovered to have carcass of Illuminated Horror within the planet core. This give the planet the properities of magic, which make it valuable for bounty hunting for the elites. It a good place to go to for ___</p> <p>Please state your Origins for this game. Here your options. " + "<b><br><br>Origin: I don't remember...</b> " + "<b><br><br>Origin: For the money!</b> " + "<b><br><br>Origin: My employer want me here. </b>" + "</p>").insertBefore("#placeholder").fadeIn(0000, function(){
		originmode = true;
	});
    
	$("#command_line").fadeIn(0000);

	$("form").submit(function() {
		var input = $("#command_line").val();
		
		//help
		if (input.indexOf("help") > -1) {
			if (input == "help") {
				$("#story_help").clone().insertBefore("#placeholder").fadeIn(1000);
			}
		}
		//end help

		//Character Creation
		else if (input.indexOf("Origin:") > -1) {
			
			if (input == "Origin:") {
					$("<p>please state which 'Origin:' you are in.</p>").insertBefore("#placeholder").fadeIn(1000);
				}

			//set origin to blank
			if (input == "Origin: I don't remember..." || input == "Origin: I dont remember..."){
				if (originmode == true && blankobg == false && bountyhunterobg == false && mercenaryobg == false) {
						blankobg = true;
						$("<p>I don't really remember why I am here, but I can tell that this is my chance for new life.</p>").insertBefore("#placeholder");
				}
				else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
			}
			//

			//set origin to bounty hunter
			else if (input == "Origin: For the money!" || input == "Origin: for the money!"){
				if (originmode == true && blankobg == false && bountyhunterobg == false && mercenaryobg == false) {
					bountyhunterobg = true;
					$("<p>I came here with my gang to get rich!</p>").insertBefore("#placeholder");
				}
				else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
			}
			//

			//set origin to mercenary
			else if (input == "Origin: My employer want me here." || input == "Origin: My Employer want me here."){
				if (originmode == true && blankobg == false && bountyhunterobg == false && mercenaryobg == false) {
					mercenaryobg = true;
					$("<p>My boss want me to stay here and find something fancy and valuable and deliver it to him.</p>").insertBefore("#placeholder");
				}
				else $("<p>Sorry, but you can't change your origin, now that have been set.</p>").insertBefore("#placeholder");
			}
			//

			//For when all your attempts to state your origin fail...
			else $("<p>Sorry but wrong way to state your origins.</p>").insertBefore("#placeholder");
			//
		}
		//


		//take
		else if (input.indexOf("take") > -1 || input.indexOf("read") > -1) {
			
			if (input == "take") {
				$('<p>Take what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//paperclip
			else if (input == "take paperclip" || input == "take paper clip") {
				if (currentroom == "jail" && paperclip == false) {
					paperclip = true;
					$('<p>You picked up a paper clip.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//dead bugs
			else if (input == "take dead bugs" || input == "take deadbugs") {
				if (currentroom == "jail" && deadbugs == false) {
					deadbugs = true;
					$('<p>You picked up some dead bugs. Gross.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//lunch tray
			else if (input == "take lunchtray" || input == "take lunch tray" || input == "take tray") {
				if (currentroom == "jail" && lunchtray == false) {
					lunchtray = true;
					$('<p>You picked up a lunch tray.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//torch
			else if (input == "take torch") {
				if (currentroom == "hallway" && torch == false) {
					torch = true;
					$('<p>You picked up a torch. You can now venture off into the dark hallway.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//note
			else if (input == "take note" || input == "read note") {
				if (currentroom == "hallway" && note == false) {
					note = true;
					$('<p>You picked up a note. It reads: <br />Well now. It seems you have managed to pass your first test. Don\'t worry. Things will get plenty more difficult and it will be almost impossible for you to escape with your life.<br /><br />Sincerely,<br/>Your Captors<br /><br />P.S. Watch out for my zombie.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//whip
			else if (input == "take whip") {
				if (currentroom == "torture" && whip == false) {
					whip = true;
					$('<p>You picked up a whip.</p>').insertBefore("#placeholder").fadeIn(1000);
					if (whip == true && hat == true) {
						$('<p>A whip and a hat? This is no time to play Indiana Jones!</p>').insertBefore("#placeholder").fadeIn(1000);
					}
				}
				else $('<p>That item is not here!</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//end take

		//search
		else if (input.indexOf("search") > -1) {
			
			if (input == "search") {
				$('<p>Search what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//table
			else if (input == "search table") {
				if (currentroom == "torture" && hat == false && knife == false) {
					hat = true;
					knife = true;
					searchtable = true;
					$('<p>You found a knife stuck in the table and picked it up. You also take a hat from the table and place it on your head.</p>').insertBefore("#placeholder").fadeIn(1000);
					if (whip == true && hat == true) {
						$('<p>A whip and a hat? This is no time to play Indiana Jones!</p>').insertBefore("#placeholder").fadeIn(1000);
					}
						
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//zombie
			else if (input == "search zombie") {
				if (currentroom == "morgue" && zombiedead == true) {
					key = true;
					$('<p>You found a key buried in the zombie\'s flesh.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//crate
			else if (input == "search crate") {
				if (currentroom == "bonus") {
					powder = true;
					$('<p>You found a strange powder. What use could that possibly have?</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//

			else $('<p>There is nothing to search for.</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//end search

		//eat
		else if (input.indexOf("eat") > -1) {
			
			if (input == "eat") {
				$('<p>Eat what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//powder
			else if (input == "eat powder" || input == "eat strange powder") {
				if (powder == true) {
					$("#container").fadeOut(3000, function() {
						$("#foodpoisoning").fadeIn(3000);
					});
				}
				else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			
			//bugs
			else if (input == "eat bugs" || input == "eat dead bugs") {
				if (deadbugs == true) {
					$('<p>You did not just do that.</p>').insertBefore("#placeholder").fadeIn(1000);
					deadbugs = "ate";
				}
				else $('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			else $('<p>I don\'t understand "' + input + '</p>').insertBefore("#placeholder").fadeIn(1000);
		
		}
		//end eat

		//kill
		else if (input.indexOf("kill") > -1) {
			
			if (input == "kill") {
				$('<p>Kill what with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			else if (input == "kill zombie" && currentroom == "morgue") {
				$('<p>Kill zombie with what?</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//zombie
			else if (input == "kill zombie with knife") {
				if (currentroom == "morgue" && knife == true) {
					$('<p>You attack the zombie with a knife and kill it!</p>').insertBefore("#placeholder").fadeIn(1000);
					zombiedead = true;
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
					
			else if (input == "kill zombie with lunch tray" || input == "kill zombie with lunchtray" || input == "kill zombie with tray") {
				if (currentroom == "morgue" && lunchtray == true) {
					$('<p>You attack the zombie with a lunch tray and kill it!</p>').insertBefore("#placeholder").fadeIn(1000);
					zombiedead = true;
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			
			//kill self
			else if (input == "kill self with lunch tray" || input == "kill self with lunchtray" || input == "kill self with tray") {
				if (lunchtray == true) {
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			
			else if (input == "kill self with knife") {
				if (knife == true) {
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			
			else if (input == "kill self with whip") {
				if (whip == true) {
					$("#container").fadeOut(3000, function() {
						$("#killself").fadeIn(3000);
					});
				}
				else {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			
			else $('<p>You can\'t do that!</p>').insertBefore("#placeholder").fadeIn(1000);
			
		
		}
		//end kill

		//inventory
		else if (input.indexOf("inventory") > -1) {
			if (input == "inventory") {
				//paperclips
				if (paperclip == true) {
					pclip = "Paper Clip<br />";
				}
				else {
					pclip = "";
				}
				//
				
				//dead bugs
				if (deadbugs == true) {
					dbugs = "Dead Bugs<br />";
				}
				else {
					dbugs = "";
				}
				//
				
				//lunch tray
				if (lunchtray == true) {
					ltray = "Lunch Tray<br />";
				}
				else {
					ltray = "";
				}
				//
				
				//lunch tray
				if (torch == true) {
					tch = "Torch<br />";
				}
				else {
					tch = "";
				}
				//
				
				//lunch tray
				if (note == true) {
					nt = "Note from Captors<br />";
				}
				else {
					nt = "";
				}
				//
				
				//hat
				if (hat == true) {
					ht = "Hat<br />";
				}
				else {
					ht = "";
				}
				//
								
				//knife
				if (knife == true) {
					knf = "Knife<br />";
				}
				else {
					knf = "";
				}
				//
				
				//whip
				if (whip == true) {
					whp = "Whip<br />";
				}
				else {
					whp = "";
				}
				//
				
				//key
				if (key == true) {
					ky = "Key<br />";
				}
				else {
					ky = "";
				}
				//
				
				//goo
				if (powder == true) {
					powd = "Strange Powder<br />";
				}
				else {
					powd = "";
				}
				//
				
				if (pclip == "" && dbugs == "" && ltray == "") {
					$('<p>Inventory:<br /><i>There is nothing in your inventory</i></p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else {
					 $('<p>Inventory:<br />' + pclip + dbugs + ltray + tch + nt + ht + whp + knf + ky + powd + '</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//end inventory

		//unlock
		else if (input.indexOf("unlock") > -1) {
			if (input == "unlock" || input == "unlock door" || input == "unlock jail door" || input == "unlock jaildoor") {
				$('<p>Unlock door with what? Be specific. Type "help" for a list of all commands.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//jail door
			else if (input == "unlock jail door with paperclip" || input == "unlock jaildoor with paperclip" || input == "unlock jail door with paper clip" || input == "unlock jaildoor with paper clip" || input == "unlock door with paper clip" || input == "unlock door with paperclip") {
				if (currentroom != "jail") {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (cellunlocked == true) {
					$('<p>The door is already unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "jail" && paperclip == true) {
					cellunlocked = true;
					$('<p>You unlocked the jail door successfully. You can now proceed northward.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			//exit door
			else if (input == "unlock door with key") {
				if (currentroom != "exit") {
					$('<p>You can\'t do that.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (exitunlocked == true) {
					$('<p>The door is already unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else if (currentroom == "exit" && key == true) {
					exitunlocked = true;
					$('<p>You unlocked the door successfully. You can now proceed northward.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
				else $('<p>The door cannot be unlocked.</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			//
			
			else $('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
			
		}
		//end unlock

		//go
		else if (input.indexOf("go") > -1) {
			if (input == "go") {
				$('<p>Go in which direction?</p>').insertBefore("#placeholder").fadeIn(1000);
			}
			
			//go from jail cell
			else if (input == "go north" && currentroom == "jail") {
				if (cellunlocked == true) {
					if (beentohallway == true) {
						if (note == false) {
							hallnote = " The note is still here. ";
						}
						else {
							hallnote = "";
						}
						if (torch == false) {
							halltorch = " The torch continues to light the dim hallway. ";
						}
						else {
							halltorch = "";
						}
						$('<p>You are back in the hallway. The hallway continues to the east and west. The jail room is to the south. ' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
					}
					else {
						$('<p> You have entered a hallway. To the west and to the east the dark hallway continues. To the south is the jail room from where you came. The only source of light is a torch hanging on the wall. Beneath the torch lies a mysterious note. Perhaps it was left by your captors.</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "hallway";
						beentohallway = true;
					}
				}
				else {
					$('<p>The door is locked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}		
			//
			
			//go back to jail cell
			else if (input == "go south" && currentroom == "hallway") {
				if (deadbugs == false) {
					jailbugs = "The dead bugs are still here";
					jailperiod = ".";
				}
				else {
					jailbugs = "";
				}
				if (lunchtray == false) {
					jailtray = "The lunch tray is still here";
					jailperiod = ".";
				}
				else {
					jailtray = "";
				}
				if (deadbugs == false && lunchtray == false) {
					jailword = " and ";
					jailtray = "the lunch tray is still here";
					jailperiod = ".";
				}
				else {
					jailword = "";
				}
				if (deadbugs == true && lunchtray == true) {
					jailperiod = "";
				}
				$('<p>You are back in the jail cell. To the north is the door. ' + jailbugs + jailword + jailtray + jailperiod + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "jail";
			}
			//
			
			//go to torture room from hallway
			else if (input == "go east" && currentroom == "hallway") {
				if (torch == true) {
					if (beentorture == true) {
						if (searchtable == false) {
							torturetable = "The table seems to emit a strange energy. ";
						}
						else {
							torturetable = "";
						}
						if (whip == false) {
							torturewhip = "The whip remains stationed on the wall. ";
						}
						else {
							torturewhip = "";
						}
						$('<p>You are back in the room of strange devices. To the south is a doorway, and to the west is the hallway you came from. ' + torturetable + torturewhip + '</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "torture";
					}
					else {
						$("<p>You have entered a room that seems to be a place of great anguish. Strange and grotesque looking devices hang from the walls and ceiling. There's a whip hanging on the wall. After a quick observation, you notice that the room appears fairly large, and a table sits in the corner. To the south there is a doorway. To the west is the hallway that you came from.</p>").insertBefore("#placeholder").fadeIn(1000);
						beentorture = true;
						currentroom = "torture";
					}
				}
				else {
					$('<p>It seems awful dark that way...</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			
			//go to westhall from hallway
			else if (input == "go west" && currentroom == "hallway") {
				if (torch == true) {
					if (beentowesthall == true) {
						$('<p>You are back at the west hallway. To the east is where you came from. To the north and south are dark rooms.</p>').insertBefore("#placeholder").fadeIn(1000);
						currentroom = "westhall";
					}
					else {
						$("<p>As you move west, you come upon another junction. To the north and south are some dark rooms. You came from the east.</p>").insertBefore("#placeholder").fadeIn(1000);
						beentowesthall = true;
						currentroom = "westhall";
					}
				}
				else {
					$('<p>It seems awful dark that way...</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			
			//go to exit from westhallway
			else if (input == "go north" && currentroom == "westhall") {
				if (beentoexit == true) {
					$('<p>You are back at the room with the strange door. To the south is the hallway you came from.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "exit";
				}
				else {
					$("<p>You enter a room with a strange and decorated door. The door appears to lead somewhere, but it also looks locked. Upon closer inspection, you discover that the lock cannot be picked and that a key is required to open it. To the south is the way you came from.</p>").insertBefore("#placeholder").fadeIn(1000);
					beentoexit = true;
					currentroom = "exit";
				}
			}
			//
			
			//go to westhallway from exit
			else if (input == "go south" && currentroom == "exit") {
				if (beentowesthall == true) {
					$('<p>You are back at the west hallway. To the north and south are dark rooms. The hallway continues east.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "westhall";
				}
				else {
					$("<p>As you move west, you come upon another junction. To the north and south are some dark rooms. You came from the east.</p>").insertBefore("#placeholder").fadeIn(1000);
					beentowesthall = true;
					currentroom = "westhall";
				}
			}
			//
			
			//go through exit
			else if (input == "go north" && currentroom == "exit") {
				if (exitunlocked == true) {
					$("#container").fadeOut(3000, function() {
						$("#wingame").fadeIn(3000);
					});
				}
				else {
					$('<p>The door is locked.</p>').insertBefore("#placeholder").fadeIn(1000);
				}
			}
			//
			
			
			//go back to hallway from west hall
			else if (input == "go east" && currentroom == "westhall") {
				if (note == false) {
					hallnote = " The note is still here. ";
				}
				else {
					hallnote = "";
				}
				if (torch == false) {
					halltorch = " The torch continues to light the dim hallway. ";
				}
				else {
					halltorch = "";
				}
				$('<p>You are back in the main hallway. The hallway continues to the east and west. The jail room is to the south.' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "hallway";
			}
			//
			
			//go to bonus room from westhall
			else if (input == "go south" && currentroom == "westhall") {
				if (beentobonus == true) {
					if (powder == false) {
						bonuscrate = "The lone crate in the corner looks untouched.";
					}
					else {
						bonuscrate = "";
					}
					$('<p>You are back in the small storage room. You came from the north. ' + bonuscrate + '</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "bonus";
				}
				else {
					$("<p>You enter what appears to be a storage room. It is empty except for a crate in the corner. It looks like it hasn't been touched in years.</p>").insertBefore("#placeholder").fadeIn(1000);
					beentobonus = true;
					currentroom = "bonus";
				}
			}
			//
			
			//go to westhall from bonus room
			else if (input == "go north" && currentroom == "bonus") {
					$('<p>You are back in the hallway. To the north and south are dark rooms. The hallway continues east.</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "westhall";
			}
			//
			
			//go back to hallway from torture room
			else if (input == "go west" && currentroom == "torture") {
				if (note == false) {
					hallnote = " The note is still here. ";
				}
				else {
					hallnote = "";
				}
				if (torch == false) {
					halltorch = " The torch continues to light the dim hallway. ";
				}
				else {
					halltorch = "";
				}
				$('<p>You are back in the main hallway. The hallway continues to the east and west. The jail room is to the south.' + hallnote + halltorch + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "hallway";
			}
			//
			
			
			//go to morgue from torture room
			else if (input == "go south" && currentroom == "torture") {
				if (beenmorgue == true) {
					if (zombiedead == false) {
						morguezombie = "The zombie is still here!";
					}
					else {
						morguezombie = "The zombie remains on the floor rotting in a cesspool of it's juices.";
					}
					$('<p>You are back in the morgue. To the north is the doorway to the room of strange devices. ' + morguezombie + '</p>').insertBefore("#placeholder").fadeIn(1000);
					currentroom = "morgue";
				}
				else {
					$("<p>As you advance south, you begin to hear gurgling noises. When you enter the room, you see a zombie feasting on the dead bodies of the morgue!</p>").insertBefore("#placeholder").fadeIn(1000);
					beenmorgue = true;
					currentroom = "morgue";
				}
			}
			//
			
			//go to torture room from morgue
			else if (input == "go north" && currentroom == "morgue") {
				if (searchtable == false) {
					torturetable = "The table seems to emit a strange energy. ";
				}
				else {
					torturetable = "";
				}
				if (whip == false) {
					torturewhip = "The whip remains stationed on the wall. ";
				}
				else {
					torturewhip = "";
				}
				$('<p>You are back in the room of strange devices. To the south is a doorway, and to the west is the hallway. ' + torturetable + torturewhip + '</p>').insertBefore("#placeholder").fadeIn(1000);
				currentroom = "torture";
			}
			//
			
			
			
			else $('<p>You can\'t go that way.</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		//end go

		else if (input != "") {
			$('<p>I don\'t understand "' + input + '"</p>').insertBefore("#placeholder").fadeIn(1000);
		}
		
		$("#console").scrollTop($("#console")[0].scrollHeight);
		$("#command_line").val("");
	});
});