// $('<p class=\'texts\'></p>').appendTo('#textbox');

// $('<center class=\'centers\'><button class=\'command_button buttons\' value=\' \'></button></center>').appendTo('#choicebox');

// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox').fadeIn(0);

// $('<button class=\'command_button e-buttons\' value=\'pistol\'>Pistol</button>').appendTo('#choicebox');



/*$(selectedItem).hover(function(){
    $(this).css("background-color: rgb(50, 50, 50)");
    $(this).css("color: green;");
}, function() {
    $(this).css ("background-color: rgb(10, 10, 10)");
});*/



var selectedItem = ""

var inventory = [];

function lookInventory() {

    if (inventory.length > 0) { // what the fuck am I doing here?
        
        inventoryWipe();

        //$('<button class=\'inventory_button I-buttons\'>Pistol = ' + amtOPistol + '</button>').appendTo('#inventory'); // can you add + amtOPistol + to class to allow it to remove and add when buy or sell this?

        // Now make encounter screen to represent thing happen, in this case, items selected in store that explain what they are.
        // Perhap look into toolitip video for this style and command buttons for what to do with said selected item.

        /*function myFunction(value) {
            $('#inventory').html('<button class=\'inventory_button I-buttons\'>'+value+'</button>');
        }*/

        inventory.forEach(myFunction);

        function myFunction(value) {

            $('<center class=\'centers\'><button class=\'inventory_button I-buttons ' + value + '\' value=\'' + value + '\'>' + value + '</button></center>').appendTo('#inventory');

        }

        /*var text = "";
        var i;
        for (i = 0; i < amtOPistol; i++) {
            text = "Pistol shit = " + amtOPistol[i]; // Clearly, this is meant for array, so you will get undefined for amtOPistol[i]; Research more on Array and Loop.
        }
        $(".I-buttons").text(text);*/

        

        /*var changeButtons = function(buttonList) {
            I-buttons.innerHTML = "";
            for (var i = 0; i < buttonList.length; i++) {
            I-buttons.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
            };
        };*/

    }

}

function selectInventory(mode) {

    console.log("Test of selectedItem pending.");

    console.log("SI is "+selectedItem);
    CL();

    if (mode == "reset") {

        $(".selected").css("background-color", "rgb(10, 10, 10)");
        $(".selected").css("color", "green");

        $(".selected").removeClass("selected");

        selectedItem = "";

        Encounter("I", "reset");

    }

    else if (mode == "select") {

        if (selectedItem != "") {            
    
            $(".selected").css("background-color", "rgb(0, 100, 0)");
            $(".selected").css("color", "green");
    
            console.log("Test of selectedItem work");
            CL();

            Encounter("I", "select");

        }

        else {alert("Something went wrong with selectInventory's " + selectedItem + ".")}

    }

    else if (mode == "fail") {

        $(".selected").css("background-color", "rgb(100, 0, 0)");
        $(".selected").css("color", "red");

    }

};

$(document).on('click', '.I-buttons', function() {

    var button = $(this).val();
    console.log('The Button is ' + button);
    CL();
    $('#container').scrollTop($('#container')[0].scrollHeight);

    if (button == 'Pistol') {

        commandReset();

        selectInventory("reset");

        $(this).addClass("selected");
        
        selectedItem = "pistol";

        selectInventory("select");
        
        $('<button class=\'inventory_button c-buttons\' value=\'sellPistol\'>Sell</button>').appendTo('#choicebox');

        if (!$("#equipment").hasClass("hidden")) {

            commandReset();

            equipmentWipe("reset");

            startEquipment();

            $('<button class=\'inventory_button c-buttons\' value=\'equipPistol\'>Equip</button>').appendTo('#choicebox');

        }
        
    }

    else if (button == 'Rifle') {

        commandReset();

        selectInventory("reset");

        $(this).addClass("selected");
        
        selectedItem = "rifle";

        selectInventory("select");
        
        $('<button class=\'inventory_button c-buttons\' value=\'sellRifle\'>Sell</button>').appendTo('#choicebox');

        if (!$("#equipment").hasClass("hidden")) {

            commandReset();

            equipmentWipe("reset");

            startEquipment();

            $('<button class=\'inventory_button c-buttons\' value=\'equipRifle\'>Equip</button>').appendTo('#choicebox');

        }

    }

    else if (button == 'Sword') {

        commandReset();

        selectInventory("reset");

        $(this).addClass("selected");
        
        selectedItem = "sword";

        selectInventory("select");
        
        $('<button class=\'inventory_button c-buttons\' value=\'sellSword\'>Sell</button>').appendTo('#choicebox');

        if (!$("#equipment").hasClass("hidden")) {

            commandReset();

            equipmentWipe("reset");

            startEquipment();

            $('<button class=\'inventory_button c-buttons\' value=\'equipSword\'>Equip</button>').appendTo('#choicebox');

        }

    }

    else if (button == 'Test') {

        commandReset();

        selectInventory("reset");

        $(this).addClass("selected");

        selectedItem = "test";

        selectInventory("select");
        
        $('<button class=\'inventory_button c-buttons\' value=\'sellTest\'>Sell</button>').appendTo('#choicebox');

        if (!$("#equipment").hasClass("hidden")) {

            commandReset();

            equipmentWipe("reset");

            startEquipment();

            $('<button class=\'inventory_button c-buttons\' value=\'equipTest\'>Equip</button>').appendTo('#choicebox');

        }

    }

});