// $('<p class=\'texts\'></p>').appendTo('#textbox');

// $('<center class=\'centers\'><button class=\'command_button buttons\' value=\' \'></button></center>').appendTo('#choicebox');

// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox').fadeIn(0);

//$('<button class=\'command_button e-buttons\' value=\'pistol\'>Pistol</button>').appendTo('#choicebox');

//#region System

var Dif = '';

function CL() {
    console.log(""); // Useful to organized console into groups.
};

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
};

function Systems(core) {

  switch (core) {

    case 'Main_Menu': {

        clean();

        $("<p class='texts' >This is a main menu, please pick New Game, Save Game, Load Game, or Options.</p>").appendTo("#textbox");

    } break;

    case 'Save': {

        download ('Files/Address.txt', 'You are ' + gender + ', by the name of ' + pn + ', and you claim to be a ' + OBG + '.');
        //add a way for player to change Files/Address.txt into what they want by use input, then attach that to variable and then use that variable to replace the name of file in download format above this comment.
    
        console.log("save complete successful!");
        CL();
    
    } break;

    case 'Option': {

        clean();

        $('<center class=\'centers\'><button class=\'command_button d-buttons\' value=\'difficulty\'>Difficulty</button></center>').appendTo('#choicebox');

    }

    case 'Movement': {

      $('<center class=\'centers\'><button class=\'command_button Move_North\'>North</button></center>').appendTo('#movement');
      
      $('<button class=\'command_button Move_East\'>East</button>').appendTo('#movement');
      
      $('<button class=\'command_button Move_West\'>West</button>').appendTo('#movement');

      $('<center class=\'centers\'><button class=\'command_button Move_South\'>South</button></center>').appendTo('#movement');

    }

  }

};

$(document).on('click', '.d-buttons', function() {

  var button = $(this).val();
  console.log('The Button is ' + button);
  CL();
  $('#container').scrollTop($('#container')[0].scrollHeight);

  switch (button) {

    case 'difficulty': {

      clean();

      $('<center class=\'centers\'><button class=\'command_button d-buttons\' value=\'easy\'>Easy</button></center>').appendTo('#choicebox');

      $('<center class=\'centers\'><button class=\'command_button d-buttons\' value=\'normal\'>Normal</button></center>').appendTo('#choicebox');

      $('<center class=\'centers\'><button class=\'command_button d-buttons\' value=\'hard\'>Hard</button></center>').appendTo('#choicebox');

      // Do not forget to remove those bonus credit and replace with Classical easy, normal, and hard. along with two check, Hardcore for one life only which delete your character save if it die or face bad end. and realistic, which put enemy on easy mode and you on hard mode, result in fast pace, high risk combat where you and enemies can die easy. Perhaps easy more feature such as Hunter nememis rather than just normal high rank mobs. Of course, cheats will be included in this as it own tab in cheat, those will be unlockable cheats.

    } break;

    case 'easy': {

      clean();
      point = 800;
      Dif = 'easy';
      console.log("The difficulty is on " + Dif + ". You have " + point + " of points now.");
      CL();
      $('<p class=\'texts\'>You are now playing on easy mode.</p>').appendTo('#textbox');

    } break;

    case 'normal': {

      clean();
      point = 400;
      Dif = 'normal';
      console.log("The difficulty is on " + Dif + ". You have " + point + " of points now.");
      CL();
      $('<p class=\'texts\'>You are now playing on normal mode.</p>').appendTo('#textbox');

    } break;

    case 'hard': {

      clean();
      point = 200;
      Dif = 'hard';
      console.log("The difficulty is on " + Dif + ". You have " + point + " of points now.");
      CL();
      $('<p class=\'texts\'>You are now playing on hard mode.</p>').appendTo('#textbox');

    }

  }

});

//#endregion

//#region Main Menu

$(document).on('click', '.menu_button', function() {

  var button = $(this).val();
  console.log('The Button is ' + button);
  CL();
  $('#container').scrollTop($('#container')[0].scrollHeight);

  switch (button) {
  
    // Main Menu
    case 'Main_Menu': {
      
      clean();
      
      $('<p>Hello there</p>').appendTo("#textbox");
  
    } break;
  
    case 'Option': {
  
      Systems('Option');
  
    } break;
  
    case 'Save': {
  
      Systems('Save');
  
      if (pn != "") {
  
        //Look at this website and try that cookie plugin. https://stackoverflow.com/questions/20877142/how-to-save-data-in-a-cookie-using-jquery
        
        // https://github.com/js-cookie/js-cookie
  
      }
  
      else if (gender != "") {
  
        
  
      }
  
      else if (OBG != "") {
  
        
  
      }
  
    } break;
  
    case 'Load': {
  
      clean();
  
  
  
    } break;
  
    case 'New': {
  
      clean();
  
      console.log("You are now starting a new game.");
  
      pn = '';
  
      gender = '';
  
      OBG = '';
  
      $("#textbox").removeClass("hidden");
      $("#choicebox").removeClass("hidden");
      $("#inventory").addClass("hidden");
      $("#store").addClass("hidden");
      $("#equipment").addClass("hidden");
      
      console.clear();
      
      console.log('You are ' + gender + ', by the name of ' + pn + ', and you claim to be a ' + OBG + '. You also have ' + point + ' of points left.');
  
      console.log("New game are now completed.");
      CL();
  
      inventory = [];
  
      $(".MB-I").removeClass("hidden");
  
      playerWipe();
      inventoryWipe();
      equipmentWipe("wipe");
      commandReset();
  
      CCEvents('Intro'); // look into reset your credit accord to difficult... using function that check your difficult and then give you credit accord to them.
  
      //startGame();
  
      //return pn, gender, OBG, Dif;
  
    } break;
  
    case 'Inventory': {
  
      if ($("#inventory").hasClass("hidden")) {
  
        inventoryWipe();
        lookInventory();
        commandReset();
        $("#textbox").addClass("hidden");
        $("#choicebox").removeClass("hidden");
        $("#inventory").removeClass("hidden");
        $("#equipment").addClass("hidden");
        $("#storebox").addClass("hidden");
  
        selectInventory("reset");
        $('.buttons').addClass("hidden");
  
  
      }
  
      else {
  
        inventoryWipe();
        lookInventory();
        commandReset();
        $("#textbox").removeClass("hidden");
        $("#choicebox").removeClass("hidden");
        $("#inventory").addClass("hidden");
        $("#equipment").addClass("hidden");
        $("#storebox").addClass("hidden");
  
        selectInventory("reset");
        $('.buttons').removeClass("hidden");
  
      };
  
    } break;

  }
    
});

//#endregion

//#region Clean

function clean() {

    $('.texts').remove();
  
    $('.buttons').remove();
  
    $('.lines').remove();
  
    $('.brs').remove();
  
    $('.s-buttons').remove();
  
    $('.centers').remove();
  
    $('.c-buttons').remove();
  
  };
  
  function playerWipe() {
  
    $("#pName").html('');
    $("#pGender").html('');
    $("#pOrigin").html('');
    $("#pCredit").html('');
    console.log("Wipe out Player.");
    CL();
  
  }
  
  function inventoryWipe() {
  
    $(".I-buttons").remove();
    console.log("Wipe out Inventory screen.");
    CL();
  
  };
  
  function equipmentWipe(mode) {
  
    if (mode == "wipe") {
      
      $(".e-buttons").remove();
      console.log("Wipe out Equipment screen.");
      CL();
    
    }
  
    else if (mode == "reset") {
  
      $(".e-buttons").remove();
      console.log("Wipe out Equipment screen.");
      CL();
  
      $('<button class=\'equipment_button e-buttons\' value=\'s-equipment\'>Equipment</button>').appendTo('#choicebox');
  
    }
  
  };
  
  function commandReset() {
  
    $('.c-buttons').remove();
  
  }

//#endregion

//#region EncounterDesc

function E_clean() {

  $(".encounter").remove();

}

// https://api.jquery.com/trigger/ Look this up to simulate button without using said button.

function Encounter(x, mode) {

  if (x == "I", mode == "select") {

      E_clean();

      $('<p class=\'texts encounter\'>' + selectedItem + '</p>').appendTo('#encounter');

  }

  else if (x == "I", mode == "reset") {

      E_clean();

  }

  if (x == "C", mode == "select") {

    E_clean();

    $('<p class=\'texts encounter\'>' + selectedItem + '</p>').appendTo('#encounter');

}

else if (x == "C", mode == "reset") {

    E_clean();

}

if (x == "L", mode == "select") {

  E_clean();

  $('<p class=\'texts encounter\'>' + selectedItem + '</p>').appendTo('#encounter');

}

else if (x == "L", mode == "reset") {

  E_clean();

}

if (x == "M", mode == "select") {

  E_clean();

  $('<p class=\'texts encounter\'>' + selectedItem + '</p>').appendTo('#encounter');

}

else if (x == "M", mode == "reset") {

  E_clean();

}

};

//#endregion