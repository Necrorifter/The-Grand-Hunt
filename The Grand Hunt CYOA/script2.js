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
var currentland = 'Star Nexus';
//

// inventory
Basicgear = true;
Advancedgear = false;
//

// Lores
planetname = 'güzel dağ'; // name of planet in turkish which mean beautiful mountain, given by Indiya.
planetnameskip = '<p>güzel dağ</p>'; // same but with line break.
planetnamebold = '<b>güzel dağ</b>'; // same but with bold.
var land = ''; // Where are you on the planet.
//

// Origins
var pn = ''; // player name.
//console.log('The player name is save as ' + pn);
var gender = ''; // just change what people call you, no impact on story.
// adventurerobg = false; // adventuer, easy mode, you have no weakness but no strength.
// bountyhunterobg = false; // you pay money for your faction, you have strength of prestart equipment and companions. but weakness of have to support them with credits.
// mercenaryobg = false; // You get stuff for your employer, you have strength of prestart base paid by your boss. but weakness of have to get stuff for your boss.
var OBG = ''; // Decide your origin backgrounds
//

// All functions

  /*// Variables Section
  
  var input = $('.command_line').val();
  input = '';
  //input = '';
  console.log('The Input is ' + input);
  var pn
  pn = '' + input + '';
  console.log('The pn is ' + pn);
  console.log('The PN is ' + PN);

	// $(this) is somehow allow it to recieve array and input them into variable buttons for uses in multiple choice buttons. it work using what is current, if you click on button that button become this, if you click on block of text, that text become this, might be useful.

	// End of Variables Section

	// Input Section

  //$('<p class=\'texts\'></p>').insertBefore('#placeholder');
	// $('<center><button class=\'command_button buttons\' value=\' \'></button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');
	// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').insertBefore('#placeholder').fadeIn(0);

	var button = $(this).val();
	console.log('The Button is ' + button);
	$('#console').scrollTop($('#console')[0].scrollHeight);

	$('.command_line').val('');

	// End of Input Section

//*/

function startGame() {
  
  $(document).ready(function() {

    Events('Intro');

  });

  $(document).on('click', '.buttons', function() {

    var button = $(this).val();
    console.log('The Button is ' + button);
    $('#console').scrollTop($('#console')[0].scrollHeight);

    // Go from Introduction to Player Name.
    if (button == 'Player Name') {

      clear();
      
      Events('Player Name');

    }

    // Player Name to Gender.
    else if (button == 'Gender') {

      pn = $('.command_line').val();
      
      console.log('The pn is ' + pn);
      
      console.log('Returning pn to global, ' + pn);

      console.log('Player Name dE to Gender dE is working.');
      
      Events('Gender');

      $('.command_line').val('');

      return pn;

    }

    // Set your Gender to male and then to Origin.
    else if (button == 'Male') {

      console.log('Male E to Origin dE is working.');

      gender = 'male';

      Events('Origin');

      console.log('Returning gender to global, ' + gender);

      return gender

    }

    // Set your Gender to female and then to Origin.
    else if (button == 'Female') {

      console.log('Female E to Origin dE is working.');

      gender = 'female';

      Events('Origin');

      console.log('Returning gender to global, ' + gender);

      return gender

    }

    // Set your Origin to Adventurer.
    else if (button == 'Adventurer') {

      console.log('Origin dE to Adventurer E is working.');

      OBG = 'Adventurer';

      Events('Origin Background');

      console.log('Returning OBG to global, ' + OBG);

      return OBG;

    }

    // Set your Origin to Bounty Hunter.
    else if (button == 'Bounty Hunter') {

      console.log('Origin dE to Bounty Hunter E is working.');

      OBG = 'Bounty Hunter';

      Events('Origin Background');

      console.log('Returning OBG to global, ' + OBG);

      return OBG;

    }

    // Set your Origin to Mercenary.
    else if (button == 'Mercenary') {

      console.log('Origin dE to Mercenary E is working.');

      OBG = 'Mercenary';

      Events('Origin Background');

      console.log('Returning OBG to global, ' + OBG);

      return OBG;

    }

    // Origin to Origin Background.
    else if (button == 'Origin Background') {

      console.log('Origin dE to Origin Background dE is working.');

      Events('Origin Background');

    }

    // Back out of Origin Background and pick other Origins
    else if (button == 'Origin Back') {

      console.log('You back out of Origin Background!');

      Events('Origin');

    }

    // Go from Origin Background to Confirmation 1
    else if (button == 'Confirmation 1') {

      console.log('Origin Background dE to Confirmation 1.');

      Events('Confirmation 1');

    }

    // Wipe your Player Name, Gender, and Origin clean and try again from Player Name Section. First attempt.
    else if (button == 'Rebuild 1') {

      pn = '';
      gender = '';
      OBG = '';

      clear();

      $('<p class=\'texts\'>She then sigh, mumbling something about indecisive people, ripped off the paper on her clipboard. "Okay, then let try this again." She told you.</p>').insertBefore('#placeholder');

      Events('Player Name');

      console.log('Returning empty pn, gender, and OBG to global, ' + pn + ' ' + gender + ' ' + OBG);

      return pn, gender, OBG;

    }

    else {

      clear();
      alert('Something went wrong with your Button, ' + button);
      Events('Intro');

    }

  });

  var button = $(this).val();
  console.log('The Button is ' + button);
  $('#console').scrollTop($('#console')[0].scrollHeight);

  function Events(doEvents) {

    // Main Menu
    if (doEvents == 'Main Menu') {
      /**/
    }

    // Introduce the game
    else if (doEvents == 'Intro') {

      clear();

      $('<p class=\'texts\'>You woke up as the alarm ringing at your ears. Groaning, you got up and look outside the viewport of your room. You see a massive space station. "Hello, welcome to the Star Nexus, that are orbiting the planet by the name of ' + planetnamebold + '." The speaker on the starship you was on call out. You decide to come to this planet because it was recently discovered to have a carcass of the Illuminated Horror within the planet core. This give the planet properities of magic, which make it valuable for the bounty hunting for the elites. It a good place to go to for the hunting. You walk to the dock bay, a flight attendant lady hail you and you walk over to her</p>').insertBefore('#placeholder').fadeIn(0);

      $('<center><button class=\'command_button buttons\' value=\'Player Name\'>Next</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

      console.log('Events, doEvents, Intro is working.');

      console.log('Your player name is ' + pn + ', your gender is ' + gender + ', and your OBG is ' + OBG);

    }

    // Decide your player name.
    else if (doEvents == 'Player Name') {

      $('<p class=\'texts\'>"What is your name?" The lady says as she marking something on her clipboard.</p>').insertBefore('#placeholder');
    
      $('<input type=\'texts\' class=\'command_line lines\' size=\'10\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').insertBefore('#placeholder').fadeIn(0);

      $('<center><button class=\'command_button buttons\' value=\'Gender\'>My name is...</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

    }

    // Decide your gender.
    else if (doEvents == 'Gender') {

      clear();

      console.log('Events, doEvents, Gender is working.');

      if (pn != '') {

        clear();

        $('<p class=\'texts\'>Good, now for the next step that have no value for your story beside your pronoun, but ' + pn + ', are you a boy or a girl.</p>').insertBefore('#placeholder');

        $('<center><button class=\'command_button buttons\' value=\'Male\'>I am a boy.</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

        $('<center><button class=\'command_button buttons\' value=\'Female\'>I am a girl.</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

        console.log('Events, doEvents, Gpn is working.');
  
      }
      
      else if (pn == '') {
  
        clear();

        Events('Player Name');
  
        $('<p class=\'texts\'>Sorry, but you need to give yourself a name</p>').insertBefore('#placeholder');
  
      }
      
      else {
        alert('Something went wrong with giving yourself a name! Is it ' + pn);
      }
      
    }

    // Decide your Origin.
    else if (doEvents == 'Origin') {

      clear();
        
      $('<p class=\'texts\'>"Hello ' + pn + ', welcome to the Star Nexus, please state your business." She said, as she writting down what you said on her clipboard.</p>').insertBefore('#placeholder');

	    $('<center><button class=\'command_button buttons\' value=\'Adventurer\'>I am an Adventurer.</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

	    $('<center><button class=\'command_button buttons\' value=\'Bounty Hunter\'>I am an Bounty Hunter with my team.</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

	    $('<center><button class=\'command_button buttons\' value=\'Mercenary\'>I am an Mercenary for my boss.</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

    }

    // Details on your Origin Background.
    else if (doEvents == 'Origin Background') {

      switch (OBG) {

        case 'Adventurer':

          clear();

          $('<p class=\'texts\'>I do not really remember why I am here, but I can tell that this is my chance for new life. You may not have any advantages at this life but it is your life now without anyone telling you what to do or responible, but it mean you have duty for yourself, so be careful when making promises. Is this what you want?</p>').insertBefore('#placeholder');

          $('<center><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

          $('<center><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

          break;

        case 'Bounty Hunter':

          clear();

          $('<p class=\'texts\'>I came here with my gang to get rich!</p>').insertBefore('#placeholder');

          $('<center><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

          $('<center><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

          break;

        case 'Mercenary':

          clear();

          $('<p class=\'texts\'>My boss want me to stay here and find something fancy and valuable and deliver it to him.</p>').insertBefore('#placeholder');

          $('<center><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

          $('<center><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

          break;
        
        default:

          text = 'Something went wrong with cases for OBG, please contact the Nexus and tell them to go fuck themselves.';

          Events('Confirmation 1');

      }

    }

    // Confirm your Gender, Player Name, and Origin.
    else if (doEvents == 'Confirmation 1') {

      clear();

      console.log('You are a ' + gender);

      console.log('Events, doEvents, 4 is working.');

      $('<p class=\'texts\'>"Let go over this to be sure... You are ' + gender + ', by the name of ' + pn + ', and you claim to be a ' + OBG +'... Correct?" She said as she reviewing her clipboard.</p>').insertBefore('#placeholder');

      $('<center><button class=\'command_button buttons\' value=\' \'>Yes, those are correct.</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

      $('<center><button class=\'command_button buttons\' value=\'Rebuild 1\'>No, those are wrong.</button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');

      console.log('Your player name is ' + pn + ', your gender is ' + gender + ', and your OBG is ' + OBG);

    }

    else {

      clear();
      alert('Something went wrong with your doEvents, ' + doEvents);
      Events('Intro');

    }

  }

  function clear () {

    $('.texts').remove();

    $('.buttons').remove();

    $('.lines').remove();

    $('.brs').remove();

  };

};
// End of Start Game

startGame();