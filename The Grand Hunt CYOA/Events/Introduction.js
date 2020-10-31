// $('<p class=\'texts\'></p>').appendTo('#textbox');

// $('<center class=\'centers\'><button class=\'command_button buttons\' value=\' \'></button></center><br class=\'brs\'>').appendTo('#choicebox');

// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox').fadeIn(0);

/*$('<center class=\'centers\'><button class=\'command_button buttons Move_North\'>North</button></center>').appendTo('#choicebox');
      
$('<button class=\'command_button buttons Move_East\'>East</button>').appendTo('#choicebox');

$('<button class=\'command_button buttons Move_West\'>West</button>').appendTo('#choicebox');

$('<center class=\'centers\'><button class=\'command_button buttons Move_South\'>South</button></center>').appendTo('#choicebox');*/

//#region Introduction

// SETS ALL VARIABLES FOR THE GAME

// locationexplored
var currentland = 'Unknown';
console.log(currentland)
//

// Lores
planetname = 'güzel dağ'; // name of planet in turkish which mean beautiful mountain, given by Indiya.
planetnameskip = '<p>güzel dağ</p>'; // same but with line break.
planetnamebold = '<b>güzel dağ</b>'; // same but with bold.
lady = 'domina fuga'; // In Latin, it mean flight lady.
var land = ''; // Where are you on the planet.
//

// Origins
var pn = ''; // player name.
//console.log('The player name is save as ' + pn);
//CL();

var gender = ''; // just change what people call you, no impact on story.

// adventurerobg = false; // adventuer, Lone Wolf mode, You gain EXP 50% faster, but start with basic equipment and are alone. Learn fast or die fast.

// bountyhunterobg = false; // you pay money for your faction, you have strength of prestart equipment and companions. but weakness of have to support them with credits.

// mercenaryobg = false; // You get stuff for your employer, you have strength of prestart base paid by your boss. but weakness of have to get stuff for your boss.

var OBG = ''; // Decide your origin backgrounds
//

var br = '<br class=\'brs\'> <br class=\'brs\'>';

/*<input type="file" style="display:none;" id="inputfile"/>
<a href="javascript:document.getElementById('inputfile').click();">try this</a>*/

function startGame() {
  
  $(document).ready(function() {

    //Systems('Main_Menu');

    //CCEvents("Loadout 2"); // make sure you change this back to Intro or main menu when completed.

    //CCEvents("Intro1/2");
    
    //currentland = 'StarNexus;
    //GM_StarNexus();
    
    //currentland = 'MonsterLand;
    //GM_MonsterLand();
    
    currentland = 'Origin';
    GM_Origin();

    //MainGame();

  });

  }; startGame();
// End of Start Game

  $(document).on('click', '.buttons', function() {

    var button = $(this).val();
    console.log('The Button is ' + button);
    CL();
    $('#container').scrollTop($('#container')[0].scrollHeight);

    switch (button) {

      case 'PLAYCH' : {

        console.log('Prologue to Prologue E is working.');
        CL();

        currentland = 'Origin';
        GM_Origin();
        //CCEvents('Prologue');

      } break;

      // Set your Gender to male and then to Player Name.
    case 'CH_Male': {

      console.log('Male E to Player Name dE is working.');

      gender = 'Man';

      CCPlayer("Gender");

      CCEvents('CH_PlayerName');

      console.log('Returning gender to global, ' + gender);
      CL();

    } break;

    // Set your Gender to female and then to CH_PlayerName.
    case 'CH_Female': {

      console.log('Female E to Player Name dE is working.');

      gender = 'Woman';

      CCPlayer("Gender");

      CCEvents('CH_PlayerName');

      console.log('Returning gender to global, ' + gender);
      CL();

    } break;

    // Go from CH_PlayerName to Childhood.
    case 'Childhood': {

      pn = $('.command_line').val();
      
      console.log('The pn is ' + pn);

      console.log('Player Name dE to Gender dE is working.');

      clean();
      
      CCPlayer("Name");
    
      CCEvents('Childhood');

      console.log('Returning pn to global, ' + pn);
      CL();

      $('.command_line').val('');

    } break;

      case 'SKIPCH' : {

        currentland = 'StarNexus';
        GM_StarNexus();
        CCEvents('Intro1/2');

      } break;

      // Go from Introduction 1/2 to Introduction 2/2.
    case 'Intro2/2': {

      clean();
      
      CCEvents('Intro2/2');

    } break;

    // Go from Introduction2/2 to Player Name.
    case 'Player Name': {

      clean();
      
      CCEvents('Player Name');

    } break;

    // Player Name to Gender.
    case 'Gender': {

      pn = $('.command_line').val();
      
      console.log('The pn is ' + pn);

      console.log('Player Name dE to Gender dE is working.');
      
      CCPlayer("Name");
    
      CCEvents('Gender');

      console.log('Returning pn to global, ' + pn);
      CL();

      $('.command_line').val('');
      
      //return pn;

    } break;

    // Set your Gender to male and then to Origin.
    case 'Male': {

      console.log('Male E to Origin dE is working.');

      gender = 'Man';

      CCPlayer("Gender");

      CCEvents('Origin');

      console.log('Returning gender to global, ' + gender);
      CL();

      //return gender

    } break;

    // Set your Gender to female and then to Origin.
    case 'Female': {

      console.log('Female E to Origin dE is working.');

      gender = 'Woman';

      CCPlayer("Gender");

      CCEvents('Origin');

      console.log('Returning gender to global, ' + gender);
      CL();

      //return gender;

    } break;

    // Set your Origin to Adventurer.
    case 'Adventurer': {

      console.log('Origin dE to Adventurer E is working.');

      OBG = 'Adventurer';

      CCPlayer("Origin");

      CCEvents('Origin Background');

      console.log('Returning OBG to global, ' + OBG);
      CL();

      //return OBG;

    } break;

    // Set your Origin to Bounty Hunter.
    case 'Bounty Hunter': {

      console.log('Origin dE to Bounty Hunter E is working.');

      OBG = 'Bounty Hunter';

      CCPlayer("Origin");

      CCEvents('Origin Background');

      console.log('Returning OBG to global, ' + OBG);
      CL();

      //return OBG;

    } break;

    // Set your Origin to Mercenary.
    case 'Mercenary': {

      console.log('Origin dE to Mercenary E is working.');

      OBG = 'Mercenary';

      CCPlayer("Origin");

      CCEvents('Origin Background');

      console.log('Returning OBG to global, ' + OBG);
      CL();

      //return OBG;

    } break;

    // Origin to Origin Background.
    case 'Origin Background': {

      console.log('Origin dE to Origin Background dE is working.');
      CL();

      CCEvents('Origin Background');

    } break;

    // Back out of Origin Background and pick other Origins
    case 'Origin Back': {

      console.log('You back out of Origin Background!');
      CL();

      CCEvents('Origin');

    } break;

    // Go from Origin Background to Confirmation 1
    case 'Confirmation 1': {

      console.log('Origin Background dE to Confirmation 1.');
      CL();

      CCEvents('Confirmation 1');

    } break;

    // Wipe your Player Name, Gender, and Origin clean and try again from Player Name Section. First attempt.
    case 'Rebuild 1': {

      pn = '';
      gender = '';
      OBG = '';

      clean();

      $('<p class=\'texts\'>She then sigh, mumbling something about indecisive people, ripped off the paper on her clipboard. "Okay, then let try this again." She told you.</p>').appendTo('#textbox');

      playerWipe();
      
      CCEvents('Player Name');

      console.log('Returning empty pn, gender, and OBG to global, ' + pn + ' ' + gender + ' ' + OBG);
      CL();

      //return pn, gender, OBG;

    } break;

    // Go from confirmation 1 to Loadout 1.
    case 'Loadout 1': {

      console.log('You successful went from Confirmation 1 dE to Loadout 1 dE');
      CL();

      CCEvents('Loadout 1');

    } break;

    // Go from Loadout 1 to Loadout 2.
    case 'Loadout 2': {

      console.log('You successful went from Loadout 1 dE to Loadout 2 dE');
      CL();

      CCEvents('Loadout 2');

    } break;

    default: {

      clean();
      alert('Something went wrong with your Button, ' + button);
      CCEvents('Intro');

    }

  }

  });

  //#endregion

//#region Character Customization

function CCPlayer(player) {

  switch (player) {

    case 'Name': {
      $("#pName").html('<p>Name: ' + pn + '</p>');
    } break;

    case 'Gender': {
      $("#pGender").html('<p>Gender: ' + gender + '</p>');
    } break;

    case 'Origin': {
      $("#pOrigin").html('<p>Origin: ' + OBG + '</p>');
    } break;

    case 'Credit': {
      $("#pCredit").html('<p>Credit: ' + point + 'c</p>');
    } break;
    
  }

}

function MainGame() {

  /*

  This is the origin of Player childhood to help player decide who are their character.

  This phase will be divide into three group,

  Newborn, which will decide player gender and name and any of like sorts.
  
  Childhood, which will decide moral and ethnic of player.

  Early Adulthood which will decide goal and means of player to reach there. This is primary the biggest phase as this is where player do stuff to get their stats and background origin. Of Course, players can just skip this "tutorial phase" and just directly get name, gender, etc. but offer minor starting bonus to those who actually go through phase.

  Player is born on one of those many, many space habitat, that are scattering everywhere in the galaxy. At birth, the player get to decide their name and gender from eyes of faceless parent and doctors. Player have good education and various of wealth classes and how they interact with each other. This is opporunity for people to decide if they are fine with slavery and other sort, or understand the profit, or against it all, which can decide if player are grabber(evil), shadow sighter(neutral), or neevil(good). Player live a good life up until they see a conflict that change their life. A small local rebellion occured, and your parent got caught in it, and was killed as result. This event can leave you scarred and lead a lone wolf lifestyle, or you can choose to lead fight against rebellion that brought people to work with you in quell the rebellion, which will style your life after one of close knitted team. Or you can just report the case to police whom will quell the rebellion and you decide to work for them, living life as bounty hunter employee. All three ending will lead to life of bounty hunter regardless.

  */

  $('<p class=\'texts\'>In a space habitat close to fringe of galaxy, you watch and encourage a woman as she scream while lying on a metalistic bed, mixture of blood and clear fluid seeping out between her legs as rest of her above are covered by white cloth while gripping a man hand in her tightly. Aided by varies of machinaries, you set to work at helping this woman to give birth to her first child. Said newborn born head first, wailing, you move the newborn head and slowly pull the newborn in same rhytm as mother push it out. Once out and wrapped in clean towel. You smile to mother and told her and her hushand that their child is ...' + br + ' (You, player, are this newborn, you are playing the prologue of this child in order to decide the path of your life for main game, understandable that not all of you want to play this phase, espically for those that already completed this multiple times, so you are given a opporunity to skip it, but understand that doing so may lock you out of some of chances for content that can arised later in the main game, but most important, free extra stat points.)' + br + '(<b>DO YOU WANT TO PLAY PROLOGUE OR SKIP IT TO START OF MAIN GAME WITH QUICK CHARACTER CUSTOMIZATION</b>)</p>').appendTo('#textbox');

  $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'PLAYCH\'>PLAY the Childhood!</button></center><br class=\'brs\'>').appendTo('#choicebox');

  $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'SKIPCH\'>SKIP the Childhood!</button></center><br class=\'brs\'>').appendTo('#choicebox');

}

function CCEvents(doEvents) {

  switch (doEvents) {

    // Introduce the Prologue and your gender.
    case 'Prologue' : {

      clean();

      console.log('Events, doEvents, Prologue is working.');
      CL();

      $('<p class=\'texts\'>Okay, Are you a boy or a girl.</p>').appendTo('#textbox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'CH_Male\'>I am a boy.</button></center>').appendTo('#choicebox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'CH_Female\'>I am a girl.</button></center>').appendTo('#choicebox');

      //Systems('Movement');

      $('<center class=\'centers\'><button class=\'command_button Move_North\'>North</button></center>').appendTo('#movement');
      
      $('<button class=\'command_button Move_East\'>East</button>').appendTo('#movement');
      
      $('<button class=\'command_button Move_West\'>West</button>').appendTo('#movement');

      $('<center class=\'centers\'><button class=\'command_button Move_South\'>South</button></center>').appendTo('#movement');

      //$('#movement').show();

    } break;

    // Decide your name.
    case 'CH_PlayerName': {

      clean();

      console.log('Events, doEvents, CH_PlayerName is working.');

      if (gender == 'Man') {

        $('<p class=\'texts\'>"Congratulation, you have a healthy baby boy." The doctor says as he hand you to your mother arms as your father look at you with a smile and then look at your mother. Your mother look at you and spoke, "Your name shall be...</p>').appendTo('#textbox');

      }

      else if (gender == 'Woman') {
        
        $('<p class=\'texts\'>"Congratulation, you have a healthy baby girl." The doctor says as he hand you to your mother arms as your father look at you with a smile and then look at your mother. Your mother look at you and spoke, "Your name shall be...</p>').appendTo('#textbox');
      
      }

      else {

        alert('Something went wrong with giving yourself a gender! Is it ' + gender);
      
      }
    
      $('<input type=\'texts\' class=\'command_line lines\' size=\'10\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox');

      $('<center class=\'centers\'><button class=\'command_button buttons warp\' value=\'Childhood\'>My name is...</button></center>').appendTo('#choicebox');

    } break;

    case 'Childhood' : {

      

    }

    // Introduce the Main Game
    case 'Intro1/2': {

      clean();

      console.log("Start the Grant Hunt!");

      $('<p class=\'texts\'>You woke up as the alarm ringing at your ears. Groaning, you got up and look outside the viewport of your room. You see a massive space station. "Hello, welcome to the Star Nexus, that are orbiting the planet by the name of ' + planetnamebold + '." The speaker on the starship you slept in ring out.' + br + 'You decide to come to this planet because it was recently discovered to have a carcass of the Illuminated Horror within the planet core. This give the planet properities of magic, which make it valuable for the bounty hunting for the elites. It a good place to go to for the hunting. You walk to the dock bay, a flight attendant lady hail you and you walk over to her.</p>').appendTo('#textbox');

      //$('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Intro2/2\'>Next</button></center>').appendTo('#choicebox');

      console.log('Events, doEvents, Intro1/2 is working.');

      console.log('Your player name is ' + pn + ', your gender is ' + gender + ', and your OBG is ' + OBG);
      CL();

    } break;

    case 'Intro2/2': {

      clean();

      $('<p class=\'texts\'>You walk to the dock bay, a flight attendant lady hail you and you walk over to her.</p>').appendTo('#textbox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Player Name\'>Next</button></center>').appendTo('#choicebox');

    } break;

    // Decide your player name.
    case 'Player Name': {

      $('<p class=\'texts\'>"What is your name?" The lady says as she marking something on her clipboard.</p>').appendTo('#textbox');
    
      $('<input type=\'texts\' class=\'command_line lines\' size=\'10\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Gender\'>My name is...</button></center>').appendTo('#choicebox');

    } break;

    // Decide your gender.
    case 'Gender': {

      clean();

      console.log('Events, doEvents, Gender is working.');
      CL();

      if (pn != '') {

        clean();

        $('<p class=\'texts\'>Good, now for the next step that have no value for your story beside your pronoun, but ' + pn + ', are you a boy or a girl.</p>').appendTo('#textbox');

        $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Male\'>I am a boy.</button></center>').appendTo('#choicebox');

        $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Female\'>I am a girl.</button></center>').appendTo('#choicebox');

        console.log('Events, doEvents, Gpn is working.');
        CL();

      }
      
      else if (pn == '') {

        clean();

        CCEvents('Player Name');

        $('<p class=\'texts\'>Sorry, but you need to give yourself a name</p>').appendTo('#textbox');

      }
      
      else {
        alert('Something went wrong with giving yourself a name! Is it ' + pn);
      }
      
    } break;

    // Decide your Origin.
    case 'Origin': {

      console.log('You are a ' + gender);
      CL();

      clean();
        
      $('<p class=\'texts\'>"Hello ' + pn + ', welcome to the Star Nexus, please state your business." She said, as she writting down what you said on her clipboard.</p>').appendTo('#textbox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Adventurer\'>I am an Adventurer.</button></center>').appendTo('#choicebox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Bounty Hunter\'>I am an Bounty Hunter with my team.</button></center>').appendTo('#choicebox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Mercenary\'>I am an Mercenary for my boss.</button></center>').appendTo('#choicebox');

    } break;

    // Details on your Origin Background.
    case 'Origin Background': {

      switch (OBG) {

        case 'Adventurer': {

          clean();

          $('<p class=\'texts\'> I am a world class adventurer. I explore and various of worlds with this be my latest, altogether the whole magic thing is a bit new given their rarity. I may walk the road alone, but i learn to watch my own back, improving my experience quickly as I need to adapted or die. Is this what you want?</p>').appendTo('#textbox');

          //$('<p class=\'texts\'>I do not really remember why I am here, but I can tell that this is my chance for new life. You may not have any advantages at this life but it is your life now without anyone telling you what to do or responible, but it mean you have duty for yourself, so be careful when making promises. Is this what you want?</p>').appendTo('#textbox');

          $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center>').appendTo('#choicebox');

          $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center>').appendTo('#choicebox');

        } break;

        case 'Bounty Hunter': {

          clean();

          $('<p class=\'texts\'>I am part of the bounty hunter guild. I came here with my two fellow bounty hunters. I have a responiblity for them as their leader, I have experience with bounty hunting and so I have some good equipment. I must support my team, least a mutiny occured and they leave me or worse, betray me. Is this what you want?</p>').appendTo('#textbox');

          $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center>').appendTo('#choicebox');

          $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center>').appendTo('#choicebox');

        } break;

        case 'Mercenary': {

          clean();

          $('<p class=\'texts\'>I am a mercenary, my employer sent me to this world to gathering some priceless goods for his corpation. Since this is a long term mission, they have provide me a place to stay here at their expense, but I am expect to get the goods for them if I want to live at the base or get kick out until I do so. Is this what you want?</p>').appendTo('#textbox');

          $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center>').appendTo('#choicebox');

          $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center>').appendTo('#choicebox');

        } break;
        
        default:

          text = 'Something went wrong with cases for OBG, please contact the Nexus and tell them to go fuck themselves.';

          CCEvents('Confirmation 1');

      }

    } break;

    // Confirm your Gender, Player Name, and Origin.
    case 'Confirmation 1': {

      clean();

      console.log('Events, doEvents, 4 is working.');

      $('<p class=\'texts\'>"Let go over this to be sure... You are ' + gender + ', by the name of ' + pn + ', and you claim to be a ' + OBG +'... Correct?" She said as she reviewing her clipboard.</p>').appendTo('#textbox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Loadout 1\'>Yes, those are correct.</button></center>').appendTo('#choicebox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Rebuild 1\'>No, those are wrong.</button></center>').appendTo('#choicebox');

      console.log('Your player name is ' + pn + ', your gender is ' + gender + ', and your OBG is ' + OBG);
      CL();

    } break;

    case 'Loadout 1': {

      clean();

      $('<p class=\'texts\'>"Okay, My name is ' + lady + ', I will guide you through the process until you reach the surface of this world. Please come with me in order to recieve your equipments from your ship storage." You walk with her to service area with your starship in view as vary of machines and crates are unloading by the crew of Nexus. One of crew member walk to lady and hand her a glove before walk back to work area. She turn to you and hand you the glove. "Here your monitor wrist, our crew just updated it with equipments that we have recieve, please select what you wish to bring with you as we cannot sent in everything at once." She told you as you put on the monitor wrist and turn it on as holoscreen appeared in air above the wrist, you read what is logged on it...</p>').appendTo('#textbox');

      $('<p class=\'texts\'> Next page is your equipment screen, please select what you want and if make a mistake or dislike your choice, please click on reset button, otherwise here is your ' + point + ' points to spent on here.</p>').appendTo('#textbox');

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Loadout 2\'>Next</button></center>').appendTo('#choicebox');

    } break;

    case 'Loadout 2': {

      store();

    } break;

    default: {

      clean();
      alert('Something went wrong with your doEvents, ' + doEvents);
      CCEvents('Intro1/2');

    }

  }

}

//#endregion