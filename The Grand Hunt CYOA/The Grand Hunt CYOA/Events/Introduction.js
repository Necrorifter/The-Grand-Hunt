// $('<p class=\'texts\'></p>').appendTo('#textbox');

// $('<center class=\'centers\'><button class=\'command_button buttons\' value=\' \'></button></center><br class=\'brs\'>').appendTo('#choicebox');

// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox').fadeIn(0);

// #region Introduction

// SETS ALL VARIABLES FOR THE GAME

// locationexplored
let currentland = 'Unknown'
console.log(currentland)
//

// Lores
planetname = 'güzel dağ' // name of planet in turkish which mean beautiful mountain, given by Indiya.
planetnameskip = '<p>güzel dağ</p>' // same but with line break.
planetnamebold = '<b>güzel dağ</b>' // same but with bold.
lady = 'domina fuga' // In Latin, it mean flight lady.
const land = '' // Where are you on the planet.
//

// Origins
let prologue = false

let pn = '' // player name.
// console.log('The player name is save as ' + pn);
// CL();

let gender = '' // just change what people call you, no impact on story.

let morality = '' // This decide if you are evil grabber, neutral shadow sighter or the good neevil.

// adventurerobg = false; // adventuer, Lone Wolf mode, You gain EXP 50% faster or scale to enemies level, but start with basic equipment and are alone. Learn fast or die fast.

// bountyhunterobg = false; // you pay money for your faction, you have strength of prestart equipment and companions. but weakness of have to support them with credits.

// mercenaryobg = false; // You get stuff for your employer, you have strength of prestart base paid by your boss. but weakness of have to get stuff for your boss.

let OBG = '' // Decide your origin backgrounds
//

const br = '<br class=\'brs\'> <br class=\'brs\'>'

/* <input type="file" style="display:none;" id="inputfile"/>
<a href="javascript:document.getElementById('inputfile').click();">try this</a> */

/*$(document).ready(function () {
  startGame()
})*/

startGame()

function startGame() {

  // Systems('Main_Menu');

  // CCEvents("Loadout 2"); // make sure you change this back to Intro or main menu when completed.

  // CCEvents("Intro1/2");

  // currentland = 'StarNexus;
  // GM_StarNexus();

  // currentland = 'MonsterLand;
  // GM_MonsterLand();

  // currentland = 'Origin';
  // GM_Origin();

  /* currentland = 'Origin';
      GM_Origin(2, 2); */

  /*currentland = 'Origin'
  GM_Origin(1, 1);

  MainGame()*/

  OBG = 'Adventurer'
  prologue = true
  currentland = 'A_Tutorial'
  GM_A_Tutorial(4,4)
  Systems('Movement')

  CCPlayer('Name')
  CCPlayer('Gender')
  CCPlayer('Morality')
  CCPlayer('Origin')
  //ERG()
  //DC()
  
} 
// End of Start Game

$(document).on('click', '.buttons', function () {
  const button = $(this).val()
  console.log('The Button is ' + button)
  CL()
  $('#container').scrollTop($('#container')[0].scrollHeight)

  switch (button) {
    case 'PLAYCH' : {
      console.log('Prologue to Prologue E is working.')
      CL()

      clean()

      prologue = true

      currentland = 'Origin';
      // GM_Origin(2, 2);

      CCEvents('Prologue')
    } break

      // Set your Gender to male and then to Player Name.
    case 'CH_Male': {
      console.log('Male E to Player Name dE is working.')

      gender = 'Man'

      CCPlayer('Gender')

      CCEvents('CH_PlayerName')

      console.log('Returning gender to global, ' + gender)
      CL()
    } break

    // Set your Gender to female and then to CH_PlayerName.
    case 'CH_Female': {
      console.log('Female E to Player Name dE is working.')

      gender = 'Woman'

      CCPlayer('Gender')

      CCEvents('CH_PlayerName')

      console.log('Returning gender to global, ' + gender)
      CL()
    } break

    // Go from CH_PlayerName to Childhood.
    case 'Childhood': {
      pn = $('.command_line').val()

      console.log('The pn is ' + pn)

      console.log('Player Name dE to Gender dE is working.')

      clean()

      CCPlayer('Name')

      CCEvents('Childhood')

      console.log('Returning pn to global, ' + pn)
      CL()

      $('.command_line').val('')
    } break

    // Set your morality to Grabber.
    case 'Grabber' : {
      morality = 'Grabber'

      CCPlayer('Morality')

      CCEvents('Morality')
    } break

    // Set your morality to Shadow Sighter.
    case 'ShadowSighter' : {
      morality = 'ShadowSighter'

      CCPlayer('Morality')

      CCEvents('Morality')
    } break

    // Set your morality Neevil.
    case 'Neevil' : {
      morality = 'Neevil'

      CCPlayer('Morality')

      CCEvents('Morality')
    } break

    // Go from Morality to Adulthood
    case 'Adulthood' : {
      CCEvents('Adulthood')

      GM_Origin(19, 18)
    } break

    // Set your Origin to Adventurer.
    case 'AH_Adventurer': {
      console.log('Adulthood dE to AH_Adventurer E is working.')

      OBG = 'Adventurer'

      CCPlayer('Origin')

      // CCEvents('Origin Background');

      console.log('Returning OBG to global, ' + OBG)
      CL()
    } break

    // Set your Origin to Bounty Hunter.
    case 'AH_BountyHunter': {
      console.log('Adulthood dE to AH_Bounty Hunter E is working.')

      OBG = 'Bounty Hunter'

      CCPlayer('Origin')

      // CCEvents('Origin Background');

      console.log('Returning OBG to global, ' + OBG)
      CL()
    } break

    // Set your Origin to Mercenary.
    case 'AH_Mercenary': {
      console.log('Adulthood dE to AH_Mercenary E is working.')

      OBG = 'Mercenary'

      CCPlayer('Origin')

      // CCEvents('Origin Background');

      console.log('Returning OBG to global, ' + OBG)
      CL()
    } break

    case 'SKIPCH' : {
      currentland = 'StarNexus'
      GM_StarNexus(1, 2)
      CCEvents('Intro1/2')
    } break

    // Go from Introduction 1/2 to Introduction 2/2.
    case 'Intro2/2': {
      clean()

      CCEvents('Intro2/2')
    } break

    // Go from Introduction2/2 to Player Name.
    case 'Player Name': {
      clean()

      CCEvents('Player Name')
    } break

    // Player Name to Gender.
    case 'Gender': {
      pn = $('.command_line').val()

      console.log('The pn is ' + pn)

      console.log('Player Name dE to Gender dE is working.')

      CCPlayer('Name')

      CCEvents('Gender')

      console.log('Returning pn to global, ' + pn)
      CL()

      $('.command_line').val('')

      // return pn;
    } break

    // Set your Gender to male and then to Origin.
    case 'Male': {
      console.log('Male E to Origin dE is working.')

      gender = 'Man'

      CCPlayer('Gender')

      CCEvents('Origin')

      console.log('Returning gender to global, ' + gender)
      CL()

      // return gender
    } break

    // Set your Gender to female and then to Origin.
    case 'Female': {
      console.log('Female E to Origin dE is working.')

      gender = 'Woman'

      CCPlayer('Gender')

      CCEvents('Origin')

      console.log('Returning gender to global, ' + gender)
      CL()

      // return gender;
    } break

    // Set your Origin to Adventurer.
    case 'Adventurer': {
      console.log('Origin dE to Adventurer E is working.')

      OBG = 'Adventurer'

      CCPlayer('Origin')

      CCEvents('Origin Background')

      console.log('Returning OBG to global, ' + OBG)
      CL()

      // return OBG;
    } break

    // Set your Origin to Bounty Hunter.
    case 'Bounty Hunter': {
      console.log('Origin dE to Bounty Hunter E is working.')

      OBG = 'Bounty Hunter'

      CCPlayer('Origin')

      CCEvents('Origin Background')

      console.log('Returning OBG to global, ' + OBG)
      CL()

      // return OBG;
    } break

    // Set your Origin to Mercenary.
    case 'Mercenary': {
      console.log('Origin dE to Mercenary E is working.')

      OBG = 'Mercenary'

      CCPlayer('Origin')

      CCEvents('Origin Background')

      console.log('Returning OBG to global, ' + OBG)
      CL()

      // return OBG;
    } break

    // Origin to Origin Background.
    case 'Origin Background': {
      console.log('Origin dE to Origin Background dE is working.')
      CL()

      CCEvents('Origin Background')
    } break

    // Back out of Origin Background and pick other Origins
    case 'Origin Back': {
      console.log('You back out of Origin Background!')
      CL()

      CCEvents('Origin')
    } break

    // Go from Origin Background to Confirmation 1
    case 'Confirmation 1': {
      console.log('Origin Background dE to Confirmation 1.')
      CL()

      CCEvents('Confirmation 1')
    } break

    // Wipe your Player Name, Gender, and Origin clean and try again from Player Name Section. First attempt.
    case 'Rebuild 1': {
      pn = ''
      gender = ''
      OBG = ''

      clean()

      $('<p class=\'texts\'>She then sigh, mumbling something about indecisive people, ripped off the paper on her clipboard. "Okay, then let try this again." She told you.</p>').appendTo('#textbox')

      playerWipe()

      CCEvents('Player Name')

      console.log('Returning empty pn, gender, and OBG to global, ' + pn + ' ' + gender + ' ' + OBG)
      CL()

      // return pn, gender, OBG;
    } break

    // Go from confirmation 1 to Loadout 1.
    case 'Loadout 1': {
      console.log('You successful went from Confirmation 1 dE to Loadout 1 dE')
      CL()

      CCEvents('Loadout 1')
    } break

    // Go from Loadout 1 to Loadout 2.
    case 'Loadout 2': {
      console.log('You successful went from Loadout 1 dE to Loadout 2 dE')
      CL()

      CCEvents('Loadout 2')
    } break

    default: {
      clean()
      alert('Something went wrong with your Button, ' + button)
      CCEvents('Intro')
    }
  }
})

// #endregion

// #region Character Customization

function CCPlayer (player) {
  switch (player) {
    case 'Name': {
      if ($('#pName').length === 0) {
        $('<p id="pName"></p>').appendTo('#player')
        CCPlayer('Name')
      } else {
        $('#pName').html('<p>Name: ' + pn + '</p>')
      }
    } break

    case 'Gender': {
      if ($('#pGender').length === 0) {
        $('<p id="pGender"></p>').appendTo('#player')
        CCPlayer('Gender')
      } else {
        $('#pGender').html('<p>Gender: ' + gender + '</p>')
      }
    } break

    case 'Morality' : {
      if ($('#pMorality').length === 0) {
        $('<p id="pMorality"></p>').appendTo('#player')
        CCPlayer('Morality')
      } else {
        $('#pMorality').html('<p>Morality: ' + morality + '</p>')
      }
    }

    case 'Origin': {
      if ($('#pOrigin').length === 0) {
        $('<p id="pOrigin"></p>').appendTo('#player')
        CCPlayer('Origin')
      } else {
        $('#pOrigin').html('<p>Origin: ' + OBG + '</p>')
      }
    } break

    case 'Level': {
      if ($('#pLevel').length === 0) {
        $('<p id="pLevel"></p>').appendTo('#player')
        CCPlayer('Level')
      } else {
        $('#pLevel').html('<p>Level: ' + P_Level + '</p>')
      }
    } break

    case 'Credit': {
      if ($('#pCredit').length === 0) {
        $('<p id="pCredit"></p>').appendTo('#player')
        CCPlayer('Credit')
      } else {
        $('#pCredit').html('<p>Credit: ' + point + 'c</p>')
      }
    } break
  }
}

function MainGame () {
  /*

  This is the origin of Player childhood to help player decide who are their character.

  This phase will be divide into three group,

  Newborn, which will decide player gender and name and any of like sorts.

  Childhood, which will decide moral and ethnic of player.

  Early Adulthood which will decide goal and means of player to reach there. This is primary the biggest phase as this is where player do stuff to get their stats and background origin. Of Course, players can just skip this "tutorial phase" and just directly get name, gender, etc. but offer minor starting bonus to those who actually go through phase.

  Player is born on one of those many, many space habitat, that are scattering everywhere in the galaxy. At birth, the player get to decide their name and gender from eyes of faceless parent and doctors. Player have good education and various of wealth classes and how they interact with each other. This is opporunity for people to decide if they are fine with slavery and other sort, or understand the profit, or against it all, which can decide if player are grabber(evil), shadow sighter(neutral), or neevil(good). Player live a good life up until they see a conflict that change their life. A small local rebellion occured, and your parent got caught in it, and was killed as result. This event can leave you scarred and lead a lone wolf lifestyle, or you can choose to lead fight against rebellion that brought people to work with you in quell the rebellion, which will style your life after one of close knitted team. Or you can just report the case to police whom will quell the rebellion and you decide to work for them, living life as bounty hunter employee. All three ending will lead to life of bounty hunter regardless.

  */

  // Look at map of origin to see this part.

  console.log('This is the leak in your MainGame()')

  // You have three errors, something is force you to move North and then South. Something is calling Prologue() and MainGame() when it should not but you cant find it. It clearly are linked to $(document).ready(function(){});

  // You believe that you have double echo instance of game, one by startGame() and one by (document).ready, as result that stuff get call in one but not other, mean when other get call, it intervenue with first one and mess up yo shit.

  // First, remove MainGame() and Prologue, see what happen. Also notice that it is working fine if you do not have those forced walking animation. Maybe, except for that alert.

  $('<p class=\'texts\'>In a space habitat close to fringe of galaxy, you watch and encourage a woman as she scream while lying on a metalistic bed, mixture of blood and clear fluid seeping out between her legs as rest of her above are covered by white cloth while gripping a man hand in her tightly. Aided by varies of machinaries, you set to work at helping this woman to give birth to her first child. Said newborn born head first, wailing, you move the newborn head and slowly pull the newborn in same rhytm as mother push it out. Once out and wrapped in clean towel. You smile to mother and told her and her hushand that their child is ...' + br + ' (You, player, are this newborn, you are playing the prologue of this child in order to decide the path of your life for main game, understandable that not all of you want to play this phase, espically for those that already completed this multiple times, so you are given a opporunity to skip it, but understand that doing so may lock you out of some of chances for content that can arised later in the main game, but most important, free extra stat points. Of course, at this moment, there is no benefit beyond read some lores. So, feel free to skip this part if you already completed it, it will place you at Star Nexus.)' + br + '(<b>DO YOU WANT TO PLAY PROLOGUE OR SKIP IT TO START OF MAIN GAME WITH QUICK CHARACTER CUSTOMIZATION</b>)</p>').appendTo('#textbox')

  $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'PLAYCH\'>PLAY the Childhood!</button></center><br class=\'brs\'>').appendTo('#choicebox')

  $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'SKIPCH\'>SKIP the Childhood!</button></center><br class=\'brs\'>').appendTo('#choicebox')
};

function CCEvents (doEvents) {
  switch (doEvents) {
    // Introduce the Prologue and your gender.
    case 'Prologue' : {
      prologue = true

      clean()

      console.log('Events, doEvents, Prologue is working.')
      CL()

      $('<p class=\'texts\'>Okay, are you a boy or a girl.</p>').appendTo('#textbox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'CH_Male\'>I am a boy.</button></center>').appendTo('#choicebox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'CH_Female\'>I am a girl.</button></center>').appendTo('#choicebox')
    } break

    // Decide your name.
    case 'CH_PlayerName': {
      clean()

      console.log('Events, doEvents, CH_PlayerName is working.')

      if (gender == 'Man') {
        $('<p class=\'texts\'>"Congratulation, you have a healthy baby boy." The doctor says as he hand you to your mother arms as your father look at you with a smile and then look at your mother. Your mother look at you and spoke, "Your name shall be...</p>').appendTo('#textbox')
      } else if (gender == 'Woman') {
        $('<p class=\'texts\'>"Congratulation, you have a healthy baby girl." The doctor says as he hand you to your mother arms as your father look at you with a smile and then look at your mother. Your mother look at you and spoke, "Your name shall be...</p>').appendTo('#textbox')
      } else {
        alert('Something went wrong with giving yourself a gender! Is it ' + gender)
      }

      $('<input type=\'texts\' class=\'command_line lines\' size=\'10\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Childhood\'>My name is...</button></center>').appendTo('#choicebox')
    } break

    case 'Childhood' : {
      if (pn != '') {
        setTimeout(function () { GM_Origin(7, 1) }, 1000)

        clean()

        if (gender == 'Man') {
          $('<p class=\'texts\'>"... ' + pn + '. You are so handsome!" Your mother cooing at you as you giggle before fall asleep in your ' + "mother's gentle" + 'arms</p>').appendTo('#textbox')
        } else if (gender == 'Woman') {
          $('<p class=\'texts\'>"... ' + pn + '. You are so beautiful!" Your mother cooing at you as you giggle before fall asleep in your ' + "mother's gentle" + 'arms</p>').appendTo('#textbox')
        }
      } else if (pn == '') {
        clean()

        CCEvents('CH_PlayerName')

        $('<p class=\'texts\'>Sorry, but you need to give yourself a name</p>').appendTo('#textbox')

        return false
      }

      br

      $('<p class=\'texts\'>About fifteen years have passed since your birth. Your parent raised you, their only child, in educated enviroment. While your living condition are not as good as wealthy of higher class, you definitly have live far better life than when you was borned. You look over books as you sat at balcony of your parent house. One of your books catch your curiousity as it was called, "The Secret of Gain Wealth", you pick it up and look over its contents. Its spoke of how wealthy class gain most of its wealth from bounty hunting as it a great means to sate their bordom of high class lifestyle yet offer great opporunites for lower class to gain wealth by huntint for higher ups. Its spoke of how there is different subtypes of bounty hunters, there is grabber, shadow sighter, and neevil groups.' + br + 'You look over several pictures of each group and their actions. Grabber gangs are those people who have no problem become rich off their slaving other species and even of their own species to the highest bidders, often used properties. Shadow Sighter are organization who focus more on killing type of bountry hunters. They excel when it come with assassination and mercenary contacts. Neevil are not even considering "real" bounty hunters by most, but the belief of several high level hunters consider themselves a part of this. Neevil are not so group as much as its a identity of those bounty hunters that disagree with slavery and killing for sake of profit, primary focus on remove those they deem to be "evil" or mostly looting ancient artifacts and other high value objects, often working with local milita to put down chao and restore order. Understand that those group are not exclusively and have dabbing in other group means of bounty, so grabbers can kill or steal just as neevil can kill or purchase slave, even if it only to free them later on, it is just so, that those three groups have their primary means of gain profits.' + br + ' You turn over to next page, only to catch glimpse of multi-rape actions along with bondages on people as presume to be to be slaves, you also see beheading of a slave in the backgroud of the group, no doubt, this is actions of grabbers as you quickly close the book, have felt that your curiousity are sated' + br + ' <b>How do you feel about this picture?</b></p>').appendTo('#textbox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Grabber\'>This feel right, they beat them, so they must be better than them. Right?</button></center><br class=\'brs\'>').appendTo('#choicebox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'ShadowSighter\'>I can see why they do it, it is for sake of profit and this is the best way for them to get it.</button></center><br class=\'brs\'>').appendTo('#choicebox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Neevil\'>No, this is wrong!</button></center><br class=\'brs\'>').appendTo('#choicebox')
    } break

    case 'Morality' : {
      if (morality == 'Grabber') {
        clean()

        $('<p class=\'texts\'>The grabbers are clearly stronger than those slaves, so they must be better. Something about strong eat weak in nature in one of those old books i think?' + br + ' <b>I hope you are satisifed with your choice as sometime it take but a thought to change the course of your life such as this one. For you have choose the path of Grabber, the path of slavery and desires await your future, might the pleasure and degeneracy bestow you with its delightful curses and its horrible blessings.</b> Regardless, your life continue mostly uneventful for next several years.</p>').appendTo('#textbox')

        $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Adulthood\'>Next</button></center><br class=\'brs\'>').appendTo('#choicebox')
      } else if (morality == 'ShadowSighter') {
        clean()

        $('<p class=\'texts\'>They are only do it because it give them the most profit. Money make world go around, I think that what that dude in fancy clothes say in T.V. other day.' + br + '<b>I hope you are satisifed with your choice as sometime it take but a thought to change the course of your life such as this one. For you have choose the path of Shadow Sighter, the path of old bounty hunter, whom life is full of death and profit that are be made from it. May thee blood of your enemies made gold in thine blood and might you live long enough to make gold statue out of thy blood and many more your enemies.</b></p>').appendTo('#textbox')

        $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Adulthood\'>Next</button></center><br class=\'brs\'>').appendTo('#choicebox')
      } else if (morality == 'Neevil') {
        clean()

        $('<p class=\'texts\'>This is wrong, I hope I never will be as bad as they are. Bounty hunters should be enforced by police laws.' + br + '<b>I hope you are satisifed with your choice as sometime it take but a thought to change the course of your life such as this one. For you have choose the path of Neevil, the path of lawful bounty hunter, who work with local military to bring order to the chaos. You may be few and forgetten, but your works change life of many for better. May your weapons decimate darkness and your armors guard the light!</p>').appendTo('#textbox')

        $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Adulthood\'>Next</button></center><br class=\'brs\'>').appendTo('#choicebox')
      }
    } break

    case 'Adulthood' : {
      clean()

      $('<p class=\'texts\'>Several years later, after you left your parent house and live somewhere else in space habitat, you work several jobs, most of them are physical labor, some of them are even with police as you desire to be bounty hunter. You was just minding your business, until one day you heard screaming close to your parent house. You start to run toward to your parent house, only to discover that your parent door is bashed in. You climb over ruined door, sneaking along the wall of your former childhood home, hearing nothing but laughter outside. You went upstair hallway, only to see blood sweeping under one of door in hallway. Prepared for worst, you opened the door, and see the ruined body of your parent lying on the floor, you look outside the window, only to see four men, laughing outside as they walk away with bloodied weapons. You look over your plan of deal with this.</p>').appendTo('#textbox')
    } break

    // Introduce the Main Game
    case 'Intro1/2': {
      clean()

      console.log('Start the Grant Hunt!')

      $('<p class=\'texts\'>You woke up as the alarm ringing at your ears. Groaning, you got up and look outside the viewport of your room. You see a massive space station. "Hello, welcome to the Star Nexus, that are orbiting the planet by the name of ' + planetnamebold + '." The speaker on the starship you slept in ring out.' + br + 'You decide to come to this planet because it was recently discovered to have a carcass of the Illuminated Horror within the planet core. This give the planet properities of magic, which make it valuable for the bounty hunting for the elites. It a good place to go to for the hunting. You walk to the dock bay, a flight attendant lady hail you and you walk over to her.</p>').appendTo('#textbox')

      // $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Intro2/2\'>Next</button></center>').appendTo('#choicebox');

      console.log('Events, doEvents, Intro1/2 is working.')

      console.log('Your player name is ' + pn + ', your gender is ' + gender + ', and your OBG is ' + OBG)
      CL()

      Systems('Movement')
    } break

    case 'Intro2/2': {
      clean()

      $('<p class=\'texts\'>You walk to the dock bay, a flight attendant lady hail you and you walk over to her.</p>').appendTo('#textbox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Player Name\'>Next</button></center>').appendTo('#choicebox')

      Systems('Movement')
    } break

    // Decide your player name.
    case 'Player Name': {
      $('<p class=\'texts\'>"What is your name?" The lady says as she marking something on her clipboard.</p>').appendTo('#textbox')

      $('<input type=\'texts\' class=\'command_line lines\' size=\'10\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Gender\'>My name is...</button></center>').appendTo('#choicebox')
    } break

    // Decide your gender.
    case 'Gender': {
      clean()

      console.log('Events, doEvents, Gender is working.')
      CL()

      if (pn != '') {
        clean()

        $('<p class=\'texts\'>Good, now for the next step that have no value for your story beside your pronoun, but ' + pn + ', are you a boy or a girl.</p>').appendTo('#textbox')

        $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Male\'>I am a boy.</button></center>').appendTo('#choicebox')

        $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Female\'>I am a girl.</button></center>').appendTo('#choicebox')

        console.log('Events, doEvents, Gpn is working.')
        CL()
      } else if (pn == '') {
        clean()

        CCEvents('Player Name')

        $('<p class=\'texts\'>Sorry, but you need to give yourself a name</p>').appendTo('#textbox')
      } else {
        alert('Something went wrong with giving yourself a name! Is it ' + pn)
      }
    } break

    // Decide your Origin.
    case 'Origin': {
      console.log('You are a ' + gender)
      CL()

      clean()

      $('<p class=\'texts\'>"Hello ' + pn + ', welcome to the Star Nexus, please state your business." She said, as she writting down what you said on her clipboard.</p>').appendTo('#textbox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Adventurer\'>I am an Adventurer.</button></center>').appendTo('#choicebox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Bounty Hunter\'>I am an Bounty Hunter with my team.</button></center>').appendTo('#choicebox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Mercenary\'>I am an Mercenary for my boss.</button></center>').appendTo('#choicebox')
    } break

    // Details on your Origin Background.
    case 'Origin Background': {
      // You finish this up, now it is time for you to make combat encounter and system for three new small map and then link them to this Background, once completed, make sure to update various of options such as difficult, equipment, save and load and such to be prepared. Good job at make this far.

      // check out why are you keeping get tileset not loading error.

      // it seem to only happen if you lose connection to live server and also meant that if player lose internet, then they cant play this, so find a way to make this offline playable.

      switch (OBG) {
        case 'Adventurer': {
          if (prologue == true) {
            if (morality == 'Neevil') {
              clean()

              $('<p class=\'texts\'>Since the tragedy of my parent death, I choose to avoid conflict with these gangs but despite them, so I choose to focus on self-improvement so if this was to happen or if it is possible to be prevented, I will be able to do so rather than be powerless to do so. Old quote that I remember in a book says it is better to have it and not need it than to need it and not have it. I join the bounty hunter program in order to get even stronger and travel the galaxy, perhaps ensuring that no one that I can get involved with ever suffer as I did.</p>').appendTo('#textbox')

              // This mean you can get up to triple the exp gain, winning the fight against enemies stronger than you but can lose gain or even flat out get no gain against those who are weaker than you.

              /*

              player <2 enemy = 300% exp gain
              player <1 enemy = 200% exp gain
              player = enemy = 100% exp gain
              player 1> enemy = 50% exp gain
              player 2> enemy = 33% exp gain

              */

              br

              $('<p class=\'texts\'>I am on one of those forgetten desert world, hunting out my target, that was supposed to be a part of cult that worship star horror. I will show the bounty hunter organization that I am not a idiot at doing this alone.</p>').appendTo('#textbox')

              // This will begin the tutorial map exploration and several high level fight for adventurer class.
            } else {
              clean()

              $('<p class=\'texts\'>Since the tragedy of my parent death, I choose to avoid conflict with these gangs as they are stronger than me at that moment, so I choose to focus on self-improvement so if this was to happen to me, I will be able to beat them and possibly flip it back to them, rather than face same thing as my parent. Old quote that I remember in a book says it is better to have it and not need it than to need it and not have it. I join the bounty hunter program in order to get even stronger and travel the galaxy, exercise my power over weak and test myself against those stronger than me, so I can get even stronger.</p>').appendTo('#textbox')

              // This mean you can get up to triple the exp gain, winning the fight against enemies stronger than you but can lose gain or even flat out get no gain against those who are weaker than you.

              /*

              player <2 enemy = 300% exp gain
              player <1 enemy = 200% exp gain
              player = enemy = 100% exp gain
              player 1> enemy = 50% exp gain
              player 2> enemy = 33% exp gain

              */

              br

              $('<p class=\'texts\'>I am on one of those forgetten desert world, hunting out my target, that was supposed to be a part of cult that worship star horror. I will show the bounty hunter organization that I am not stupid at doing this alone.</p>').appendTo('#textbox')

              // This will begin the tutorial map exploration and several high level fight for adventurer class.
            }
          } else {
            clean()

            $('<p class=\'texts\'> I am a world class adventurer. I explore various of worlds with this be my latest, altogether the whole magic thing is a bit new given their rarity. I may walk the road alone, but I learn to watch my own back, improving my experience quickly as I need to adapted or die. Is this what you want?</p>').appendTo('#textbox')

            // $('<p class=\'texts\'>I do not really remember why I am here, but I can tell that this is my chance for new life. You may not have any advantages at this life but it is your life now without anyone telling you what to do or responible, but it mean you have duty for yourself, so be careful when making promises. Is this what you want?</p>').appendTo('#textbox');

            $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center>').appendTo('#choicebox')

            $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center>').appendTo('#choicebox')
          }
        } break

        case 'Bounty Hunter': {
          if (prologue == true) {
            if (morality == 'ShadowSighter') {
              clean()

              $('<p class=\'texts\'>My parent is dead, and I was angry, so I went outside of my former parent house and face them, prepared to die in order to kill them. They laugh at me, cause me to see red as I ran to them and kick the first dude in the nut. One dude got behind me and swing the bat at my back. I spin around and grab the bat before spin again and swing it back to him, knock him out. This cause the three other dude to pull out their weapons. I saw two person ran toward the' + " gang's back " + 'One of them is a slight larger dude who went and grab one of them before throw him over his back. Other is a slim woman, who with a frying pan, swing and bash other dude teeth in. I look at dude on the floor that I punch earlier and swing the bat at him, knock the dude out.</p>').appendTo('#textbox')

              // Get combat system for this one, and only when you have companionship system in place, this can be the first time player get in fight of life and death and get first companions to fight with him. This enemy will be a level above player, a price of face a group of enemy that kill your parent, but make sure the enemies have debuff of health to show that they got out of fight recently...

              br

              $('<p class=\'texts\'> This mark the first time I met my companions. We bond over our tragedy, The dude name is Mons and his son was killed when gang try robbed him and he frought back in self-defense against the gang. The lady name is Flos, her friend was raped and eventually killed by this gang, and she want to avenge her friend. They left shortly after we call police on this group. When I arrive at my house, I saw a note on my door. "We have see your rage and think you are wonderful candiate for their bounty hunter group, here our information." You read from note, you see contact information. You went inside the house, prepare to call, only to see a feminine figure in kitchen. She smile at you. "I see that you already accepted to join us." She spoke as I nodded. "That is wonderful, perhaps your allies that help you will also join us. but enough of that, I am sure you have a question or several." She said. That was three years ago and I am 21 years old and a leader of my three members team. We are heading to a bounty target in which if we success, then organization will deem us ready and we can take bounty of our own choosing. Of course, as a leader, I will need to think of my companions needs ahead of my own, least they decide to betray or abandon me to survive on my own.</p>').appendTo('#textbox')

              // This will begin the tutorial map exploration and several fight as well equipment gather for bounty hunters class.
            } else {
              clean()

              $('<p class=\'texts\'>My parent is dead, and I was angry, so I went outside of my former parent house and face them, prepared to die in order to beat them down. I ran toward him and punch him in back of his head, he fell to the floor, face first. Three other dude turn to face me as they pull out their weapons. One of them with bat ran toward me, swing bat high. I step to the side before slid my feet out and trip him, cause him to fall forward and bash his face on metallic surface. I heard a clank before I hear two bodies fall behind me. I turn around and see a buffy dude and a pretty lady with a frying pan.</p>').appendTo('#textbox')

              // Get combat system for this one, and only when you have companionship system in place, but unlike above, player will miss the fight between his companions and his attacker, forunately, he will only face one of them alone. This enemy will be a level above player, a price of face a group of enemy that kill your parent, but make sure the enemies have debuff of health to show that they got out of fight recently...

              br

              $('<p class=\'texts\'> This mark the first time I met my companions. We bond over our tragedy, The dude name is Mons and his son was killed when gang try robbed him and he frought back in self-defense against the gang. The lady name is Flos, her friend was raped and eventually killed by this gang, and she want to avenge her friend. They left shortly after we call police on this group. When I arrive at my house, I saw a note on my door. "We have see your rage and think you are wonderful candiate for their bounty hunter group, here our information." You read from note, you see contact information. You went inside the house, prepare to call, only to see a feminine figure in kitchen. She smile at you. "I see that you already accepted to join us." She spoke as I nodded. "That is wonderful, perhaps your allies that help you will also join us. but enough of that, I am sure you have a question or several." She said. That was three years ago and I am 21 years old and a leader of my three members team. We are heading to a bounty target in which if we success, then organization will deem us ready and we can take bounty of our own choosing. Of course, as a leader, I will need to think of my companions needs ahead of my own, least they decide to betray or abandon me to survive on my own.</p>').appendTo('#textbox')

              // This will begin the tutorial map exploration and several fight as well equipment gather for bounty hunters class.
            }
          } else {
            clean()

            $('<p class=\'texts\'>I am part of the bounty hunter guild. I came here with my two fellow bounty hunters. I have a responiblity for them as their leader, I have experience with bounty hunting and so I have some good equipment. I must support my team, least a mutiny occured and they leave me or worse, betray me. Is this what you want?</p>').appendTo('#textbox')

            $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center>').appendTo('#choicebox')

            $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center>').appendTo('#choicebox')
          }
        } break

        case 'Mercenary': {
          if (prologue == true) {
            if (morality == 'Grabber') {
              clean()

              $('<p class=\'texts\'>I call security... only that it was gang that I work for... the whole police work thing was to ensure that police did not track down my gang operation as I discreet guide them away from my gang as I guide them toward various rival gangs operations, this allow my gang to become unrival and grow stronger. This also put me in favor with gang boss. They came and kill the rival gang members as this street are under my gang protection as they have pay their fee, and they went and kill my parent. Altogether, I am sad that my parent was killed in such fashion, i shrug it off quickly as gang are my family and this is what my parent get for be such do-goodie and not have their own protection just in case my gang did not make it in time... My phone rang and I pick it up and see that it was gang boss that call me. I answer the phone and he say that they enjoy my assistance in help them grow as they did, but he saw more potential in me. He want me to help him grow even greater not just in this habitat but world. He want me to work for him as personal mercenary, I will go to planet that are stake and try to steal various of illegal goods and people and he will made sure to reward me richly. I accepted the deal and that how I am here.</p>').appendTo('#textbox')

              br

              $('<p class=\'texts\'>I am one of planet that are stake but of low priority to large bounty hunter organization. I am to scout ahead and set up base at good spot that will generate wealth for my boss, my boss will cover the cost of base, but only if I continue to provide him goods, otherwise he will cut me off and I will have to paid him more than normal to regain his favor. Base such as this one are expensive, I will have to make sure to not forget to do so, otherwise I will lose everything fast and it will be harder to regain his favor, this can cost me my life.</p>').appendTo('#textbox')

              // This will begin the tutorial map exploration and few fight as well explanation of bases for mercenary class. Useful for those who seek to do empire building style, they lack personal power of adventurer and powerful companions of bounty hunter, but have ability to get army and empire but understand that it place them at spotlight of other empires. Large Scale playstyle. but for now, it just provide free starting base and its cost, any upgrade will be to be pay to add, but its maintance will be halfied as it is pay by your employer... as long as you provide them good that is...
            } else {
              clean()

              $('<p class=\'texts\'>I call security force, the whole police work mean that the police know me and they sent their force to check on place of crime. My various of help in root out the gang as I have strange luck to always end up where crimes happen, mean the police force was able to track down and elimate the various of gang on space habitat. This put me in favor with police commander. They came and arrest the gang members. Security arrived and console me for my loss, I gave my report to them as they finish up their arrests. A quick look show that my people did not fight back personal... do-goodie to the end, not many can die with honor to their idealism. My commander arrive on scene, and ask me to talk with him in private. I see no reasons to not do so and talk to him in one of spare bedroom, he told me that due to my luck or unlucky streak of end up in right place at wrong time. He want me to help him track down several criminal organizations that have evading him for a while, if I accepted, then he will provide assistance and promote me to rank of captain. I accepted and went to said planet.</p>').appendTo('#textbox')

              br

              $('<p class=\'texts\'>I am to track down the criminal organization and report back to headquarter. He have sent ahead a security base, that I am captain of, for me to report to when I discover the criminal base. But that I need to understand that while the security organization funded the base, I need to show them that it was worth the cost to keep on ground. I can begin by find evidence and trace of organization to give back to base.</p>').appendTo('#textbox')

              // This will begin the tutorial map exploration and few fight as well explanation of bases for mercenary class. Useful for those who seek to do empire building style, they lack personal power of adventurer and powerful companions of bounty hunter, but have ability to get army and empire but understand that it place them at spotlight of other empires. Large Scale playstyle. but for now, it just provide free starting base and its cost, any upgrade will be to be pay to add, but its maintance will be halfied as it is pay by your employer... as long as you provide them good that is...
            }
          } else {
            clean()

            $('<p class=\'texts\'>I am a mercenary, my employer sent me to this world to gathering some priceless goods for his corpation. Since this is a long term mission, they have provide me a place to stay here at their expense, but I am expect to get the goods for them if I want to live at the base or get kick out until I do so. Is this what you want?</p>').appendTo('#textbox')

            $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Confirmation 1\'>Yes</button></center>').appendTo('#choicebox')

            $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Origin Back\'>No</button></center>').appendTo('#choicebox')
          }
        } break

        default:

          text = 'Something went wrong with cases for OBG, please contact the Nexus and tell them to go fuck themselves.'

          CCEvents('Confirmation 1')
      }
    } break

    // Confirm your Gender, Player Name, and Origin.
    case 'Confirmation 1': {
      clean()

      console.log('Events, doEvents, 4 is working.')

      $('<p class=\'texts\'>"Let go over this to be sure... You are ' + gender + ', by the name of ' + pn + ', and you claim to be a ' + OBG + '... Correct?" She said as she reviewing her clipboard.</p>').appendTo('#textbox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Loadout 1\'>Yes, those are correct.</button></center>').appendTo('#choicebox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Rebuild 1\'>No, those are wrong.</button></center>').appendTo('#choicebox')

      console.log('Your player name is ' + pn + ', your gender is ' + gender + ', and your OBG is ' + OBG)
      CL()
    } break

    case 'Loadout 1': {
      clean()

      $('<p class=\'texts\'>"Okay, My name is ' + lady + ', I will guide you through the process until you reach the surface of this world. Please come with me in order to recieve your equipments from your ship storage." You walk with her to service area with your starship in view as vary of machines and crates are unloading by the crew of Nexus. One of crew member walk to lady and hand her a glove before walk back to work area. She turn to you and hand you the glove. "Here your monitor wrist, our crew just updated it with equipments that we have recieve, please select what you wish to bring with you as we cannot sent in everything at once." She told you as you put on the monitor wrist and turn it on as holoscreen appeared in air above the wrist, you read what is logged on it...</p>').appendTo('#textbox')

      $('<p class=\'texts\'> Next page is your equipment screen, please select what you want and if make a mistake or dislike your choice, please click on reset button, otherwise here is your ' + point + ' points to spent on here.</p>').appendTo('#textbox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'Loadout 2\'>Next</button></center>').appendTo('#choicebox')

      // Look into add a delay and a teleport of each tile toward to the hangar bay in the south of Star Nexus, perhaps delay() have something to do with it? This way the flight lady will look like she actually guide you along the hallway rather than just teleport you straight to hangar bay.

      // The above idea can be use for enemy to "walk" around and if your tile collide with said enemy's tile, then it can trigger events by using said function.
    } break

    case 'Loadout 2': {
      store()
    } break

    default: {
      clean()
      alert('Something went wrong with your doEvents, ' + doEvents)
      CCEvents('Intro1/2')
    }
  }
}

// #endregion
