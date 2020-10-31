// $('<p class=\'texts\'></p>').appendTo('#textbox');j

// $('<center class=\'centers\'><button class=\'command_button buttons\' value=\' \'></button> <br class=\'brs\'></center>').appendTo('#storebox');

// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox').fadeIn(0);

// $('<button class=\'command_button s-buttons\' value=\'pistol\'>Pistol</button> <br class=\'brs\'>').appendTo('#storebox');

var equipment = [];

var hand1 = "empty";
var hand2 = "empty";

var exosuit = "skin"

function lookEquipment() {

    if (equipment.length > 0) { // Does this even matter for equipment?
        
        equipmentWipe('reset');

        //$('<button class=\'inventory_button I-buttons\'>Pistol = ' + amtOPistol + '</button>').appendTo('#inventory'); // can you add + amtOPistol + to class to allow it to remove and add when buy or sell this?

        // Now make encounter screen to represent thing happen, in this case, items selected in store that explain what they are.
        // Perhap look into toolitip video for this style and command buttons for what to do with said selected item.

        /*function myFunction(value) {
            $('#inventory').html('<button class=\'inventory_button I-buttons\'>'+value+'</button>');
        }*/

        equipment.forEach(myFunction1);

        equipment.forEach(myFunction2)

        function myFunction1(hand1) {

            //$('<center class=\'centers\'><button class=\'equipment_button e-buttons ' + value + '\' value=\'' + value + '\'>' + value + '</button></center>').appendTo('#equipment');

            /*$('<center class=\'centers\'><button class=\'equipment_button e-buttons ' + hand1 + '\' value=\'hand1_' + hand1 + '\'>' + hand1 + '</button></center>').appendTo('#equipment');

            $('<center class=\'centers\'><button class=\'equipment_button e-buttons ' + hand2 + '\' value=\'hand2_' + hand2 + '\'>' + hand2 + '</button></center>').appendTo('#equipment');*/

            $('<center class=\'centers\'><button class=\'equipment_button e-buttons hand1\' value=\'hand1_' + hand1 + '\'>' + hand1 + '</button></center>').appendTo('#equipment');

        }
        function myFunction2(hand2) {

            //$('<center class=\'centers\'><button class=\'equipment_button e-buttons ' + value + '\' value=\'' + value + '\'>' + value + '</button></center>').appendTo('#equipment');

            /*$('<center class=\'centers\'><button class=\'equipment_button e-buttons ' + hand1 + '\' value=\'hand1_' + hand1 + '\'>' + hand1 + '</button></center>').appendTo('#equipment');

            $('<center class=\'centers\'><button class=\'equipment_button e-buttons ' + hand2 + '\' value=\'hand2_' + hand2 + '\'>' + hand2 + '</button></center>').appendTo('#equipment');*/

            $('<center class=\'centers\'><button class=\'equipment_button e-buttons hand2\' value=\'hand2_' + hand2 + '\'>' + hand2 + '</button></center>').appendTo('#equipment');

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

function displayEquipment(from) {

    if (from == 'store') {

        if ($("#storebox").hasClass("hidden")) {

            inventoryWipe();
            lookInventory();
            commandReset();
            $("#textbox").addClass("hidden");
            $("#choicebox").removeClass("hidden");
            $("#inventory").removeClass("hidden");
            $("#equipment").addClass("hidden");
            $("#storebox").removeClass("hidden");

        }

        else {

            inventoryWipe();
            lookInventory();
            commandReset();
            $("#textbox").addClass("hidden");
            $("#choicebox").removeClass("hidden");
            $("#inventory").removeClass("hidden");
            $("#equipment").removeClass("hidden");
            $("#storebox").addClass("hidden");

            equipmentWipe("reset");
            
            startEquipment();

        };

        // Add bunch of variables that track your armor and weapon, the armor and weapon will be divide into subclass later in future, but in its place, you can have multiple weapon sets at once, allow switch in combat and even dual wield.

        // After this, you should be ready for system of map and its movement. Eventually you will be able to add random encounter to map along with basic tutorial in temporary monster land.

    }

    else if (from == 'inventory') {

        if ($("#inventory").hasClass("hidden")) {

            inventoryWipe();
            lookInventory();
            commandReset();
            $("#textbox").addClass("hidden");
            $("#choicebox").removeClass("hidden");
            $("#inventory").removeClass("hidden");
            $("#equipment").addClass("hidden");
            $("#storebox").addClass("hidden");

        }  // Fix this up to ensure that you get everything back rather than wipe it clean, can test once you add a mean to switch between equipment and store as well Inventory and regular gameplay without reset the game, altogether the latter can be test once you add map system due to event and map location tracker need to be add which can be used to sent you back to same event and map location.

        else {

            inventoryWipe();
            lookInventory();
            commandReset();
            $("#textbox").removeClass("hidden");
            $("#choicebox").removeClass("hidden");
            $("#inventory").addClass("hidden");
            $("#equipment").addClass("hidden");
            $("#storebox").addClass("hidden");

            equipmentWipe("reset");
            
            startEquipment();

        };

    }

    else if (from == 'placeholder') {

        inventoryWipe();
        lookInventory();
        commandReset();
        $("#textbox").removeClass("hidden");
        $("#choicebox").removeClass("hidden");
        $("#inventory").addClass("hidden");
        $("#equipment").addClass("hidden");
        $("#storebox").addClass("hidden");

    }

};

function selectEquipment(mode) {

    console.log("Test of selectedItem pending.");

    console.log("SE is "+selectedItem);
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

        else {alert("Something went wrong with selectEquipment's " + selectedItem + ".")}

    };

};

function startEquipment() {

    $('<center class=\'centers\'><button class=\'equipment_button e-buttons hand1\' value=\'hand1_' + hand1 + '\'>' + hand1 + '</button></center>').appendTo('#equipment');

    $('<center class=\'centers\'><button class=\'equipment_button e-buttons hand2\' value=\'hand2_' + hand2 + '\'>' + hand2 + '</button></center>').appendTo('#equipment');

};

$(document).on('click', '.c-buttons', function() {

    var button = $(this).val();
    console.log('The Button is ' + button);
    CL();
    $('#container').scrollTop($('#container')[0].scrollHeight);

    commandReset();

    if (button == 'i-equipment') {

        displayEquipment('inventory');

    }

   else if (button == 's-equipment') {

        displayEquipment('store');

    }

    else if (button == "removePistol") {

        if ($(".e-buttons").is(".hand1.selected")) {

            function removePistol(equipment, value) {

                var index = equipment.indexOf(value);
                if (index > -1) {
                    equipment.splice(index, 1);
                }
                return inventory;
            }
            
            removePistol(equipment, 'Pistol');

            amtOPistol++;

            inventory.push("Pistol");
            
            commandReset();
            selectInventory("reset");
            selectEquipment("reset");
            $('.Pistol').remove();

            hand1 = "empty";

            lookInventory();

            equipmentWipe("reset");

            startEquipment();

        }

        else if ($(".e-buttons").is(".hand2.selected")) {

            function removePistol(equipment, value) {

                var index = equipment.indexOf(value);
                if (index > -1) {
                    equipment.splice(index, 1);
                }
                return inventory;
            }
            
            removePistol(equipment, 'Pistol');

            amtOPistol++;

            inventory.push("Pistol");
            
            commandReset();
            selectInventory("reset");
            selectEquipment("reset");
            $('.Pistol').remove();

            hand2 = "empty";

            lookInventory();

            equipmentWipe("reset");

            startEquipment();

        }

    }

    else if ( button == "equipPistol") {

        if (hand1 == "empty" && hand2 == "empty") {

            hand1 = "pistol";

            console.log("hand1 is good!");

            equipment.push("Pistol");

            console.log("You push pistol into array " + equipment);

            function removePistol(inventory, value) {

                var index = inventory.indexOf(value);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                return inventory;
            }

            removePistol(inventory, 'Pistol');
    
            amtOPistol--;

            equipmentWipe("reset");

            startEquipment();

            lookInventory();

            //lookEquipment();

            if (amtOPistol == 0) {
    
                commandReset();
                selectInventory("reset");
                $('.Pistol').remove(); // Okay, you need to look into your equipment function and see about seperate value because remove pistol not only remove pistol from your inventory but also remove your equipment too... result in nothing. Maybe set it so check system for hand1 and hand2 are only one that can add those value, so equipment button 1 and 2 wont have same value unless they have same equipment.
                console.log("no more gun");
                CL();
                lookInventory();
                //lookEquipment();
            
            }

        }

        else if (hand1 != "empty" && hand2 == "empty") {

            hand2 = "pistol";

            console.log("hand2 is good!");

            equipment.push("Pistol");

            console.log("You push pistol into array " + equipment);

            function removePistol(inventory, value) {

                var index = inventory.indexOf(value);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                return inventory;
            }

            removePistol(inventory, 'Pistol');
    
            amtOPistol--;

            equipmentWipe("reset");

            startEquipment();

            lookInventory();
            
            //lookEquipment();
            
            if (amtOPistol == 0) {
    
                commandReset();
                selectInventory("reset");
                $('.Pistol').remove();
                console.log("no more gun");
                CL();
                lookInventory();
                //lookEquipment();
            
            }

        }

        else if (hand1 == "empty" && hand2 != "empty") {

            hand1 = "pistol";

            console.log("hand1 and hand2 is good.");

            equipmentWipe("reset");

            startEquipment();

        }

        else {alert("Sorry, but your hands are full...")};

    }

    else if ((button == "removeRifle")) {

        if ($(".e-buttons").is(".hand1.selected") && $(".e-buttons").is(".hand2.selected")) {

            function removeRifle(equipment, value) {

                var index = equipment.indexOf(value);
                if (index > -1) {
                    equipment.splice(index, 1);
                }
                return inventory;
            }
            
            removeRifle(equipment, 'Rifle');

            amtORifle++;

            inventory.push("Rifle");
            
            commandReset();
            selectInventory("reset");
            selectEquipment("reset");
            $('.Rifle').remove();

            hand1 = "empty";

            hand2 = "empty";

            lookInventory();

            equipmentWipe("reset");

            startEquipment();

        }

    }

    else if ( button == "equipRifle") {

        if (hand1 == "empty" && hand2 == "empty") {

            hand1 = "rifle";

            hand2 = "rifle";

            console.log("hand1 and hand2 is good!");

            equipment.push("Rifle");

            console.log("You push rifle into array " + equipment);

            function removeRifle(inventory, value) {

                var index = inventory.indexOf(value);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                return inventory;
            }

            removeRifle(inventory, 'Rifle');
    
            amtORifle--;

            equipmentWipe("reset");

            startEquipment();

            lookInventory();

            if (amtORifle == 0) {
    
                commandReset();
                selectInventory("reset");
                $('.Rifle').remove();
                console.log("no more gun");
                CL();
                lookInventory();
            
            }

        }

        /*else if (hand1 != "empty" && hand2 == "empty") { // keeping this around in case player decide to grow more arms, hopeful by then, you will have easier means to do this than to check for every arms...

            hand2 = "rifle";

            console.log("hand2 is good!");

            equipment.push("Rifle");

            console.log("You push rifle into array " + equipment);

            function removeRifle(inventory, value) {

                var index = inventory.indexOf(value);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                return inventory;
            }

            removeRifle(inventory, 'Rifle');
    
            amtORifle--;

            equipmentWipe("reset");

            startEquipment();

            lookInventory();
            
            if (amtORifle == 0) {
    
                commandReset();
                selectInventory("reset");
                $('.Rifle').remove();
                console.log("no more gun");
                CL();
                lookInventory();
            
            }

        }

        else if (hand1 == "empty" && hand2 != "empty") {

            hand1 = "rifle";

            console.log("hand1 and hand2 is good.");

            equipmentWipe("reset");

            startEquipment();

        }*/

        else {alert("Sorry, but your hands are full...")};

    }

    else if ((button == "removeSword")) {

        if ($(".e-buttons").is(".hand1.selected")) {

            function removeSword(equipment, value) {

                var index = equipment.indexOf(value);
                if (index > -1) {
                    equipment.splice(index, 1);
                }
                return inventory;
            }
            
            removeSword(equipment, 'Sword');

            amtOSword++;

            inventory.push("Sword");
            
            commandReset();
            selectInventory("reset");
            selectEquipment("reset");
            $('.Sword').remove();

            hand1 = "empty";

            lookInventory();

            equipmentWipe("reset");

            startEquipment();

        }

        else if($(".e-buttons").is(".hand2.selected")) {

            function removeSword(equipment, value) {

                var index = equipment.indexOf(value);
                if (index > -1) {
                    equipment.splice(index, 1);
                }
                return inventory;
            }
            
            removeSword(equipment, 'Rifle');

            amtOSword++;

            inventory.push("Sword");
            
            commandReset();
            selectInventory("reset");
            selectEquipment("reset");
            $('.Sword').remove();

            hand2 = "empty";

            lookInventory();

            equipmentWipe("reset");

            startEquipment();

        }

    }

    else if ( button == "equipSword") {

        if (hand1 == "empty" && hand2 == "empty") {

            hand1 = "sword";

            console.log("hand1 is good!");

            equipment.push("Sword");

            console.log("You push sword into array " + equipment);

            function removeSword(inventory, value) {

                var index = inventory.indexOf(value);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                return inventory;
            }

            removeSword(inventory, 'Sword');
    
            amtOSword--;

            equipmentWipe("reset");

            startEquipment();

            lookInventory();

            if (amtOSword == 0) {
    
                commandReset();
                selectInventory("reset");
                $('.Sword').remove();
                console.log("no more gun");
                CL();
                lookInventory();
            
            }

        }

        else if (hand1 != "empty" && hand2 == "empty") {

            hand2 = "sword";

            console.log("hand2 is good!");

            equipment.push("Sword");

            console.log("You push sword into array " + equipment);

            function removeSword(inventory, value) {

                var index = inventory.indexOf(value);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                return inventory;
            }

            removeSword(inventory, 'Sword');
    
            amtOSword--;

            equipmentWipe("reset");

            startEquipment();

            lookInventory();
            
            if (amtOSword == 0) {
    
                commandReset();
                selectInventory("reset");
                $('.Sword').remove();
                console.log("no more gun");
                CL();
                lookInventory();
            
            }

        }

        else if (hand1 == "empty" && hand2 != "empty") {

            hand1 = "sword";

            console.log("hand1 and hand2 is good.");

            equipmentWipe("reset");

            startEquipment();

        }

        else {alert("Sorry, but your hands are full...")};

    }
    
    else if ((button == "removeTest")) {

        if ($(".e-buttons").is(".hand1.selected")) {

            function removeTest(equipment, value) {

                var index = equipment.indexOf(value);
                if (index > -1) {
                    equipment.splice(index, 1);
                }
                return inventory;
            }
            
            removeTest(equipment, 'Test');

            amtOTest++;

            inventory.push("Test");
            
            commandReset();
            selectInventory("reset");
            selectEquipment("reset");
            $('.Test').remove();

            hand1 = "empty";

            lookInventory();

            equipmentWipe("reset");

            startEquipment();

        }

        else if($(".e-buttons").is(".hand2.selected")) {

            function removeTest(equipment, value) {

                var index = equipment.indexOf(value);
                if (index > -1) {
                    equipment.splice(index, 1);
                }
                return inventory;
            }
            
            removeTest(equipment, 'Test');

            amtOTest++;

            inventory.push("Test");
            
            commandReset();
            selectInventory("reset");
            selectEquipment("reset");
            $('.Test').remove();

            hand2 = "empty";

            lookInventory();

            equipmentWipe("reset");

            startEquipment();

        }

    }

    else if ( button == "equipTest") {

        if (hand1 == "empty" && hand2 == "empty") {

            hand1 = "test";

            console.log("hand1 is good!");

            equipment.push("Test");

            console.log("You push test into array " + equipment);

            function removeTest(inventory, value) {

                var index = inventory.indexOf(value);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                return inventory;
            }

            removeTest(inventory, 'Test');
    
            amtOTest--;

            equipmentWipe("reset");

            startEquipment();

            lookInventory();

            if (amtOTest == 0) {
    
                commandReset();
                selectInventory("reset");
                $('.Test').remove();
                console.log("no more gun");
                CL();
                lookInventory();
            
            }

        }

        else if (hand1 != "empty" && hand2 == "empty") {

            hand2 = "test";

            console.log("hand2 is good!");

            equipment.push("Test");

            console.log("You push test into array " + equipment);

            function removeTest(inventory, value) {

                var index = inventory.indexOf(value);
                if (index > -1) {
                    inventory.splice(index, 1);
                }
                return inventory;
            }

            removeTest(inventory, 'Test');
    
            amtOTest--;

            equipmentWipe("reset");

            startEquipment();

            lookInventory();
            
            if (amtOTest == 0) {
    
                commandReset();
                selectInventory("reset");
                $('.Test').remove();
                console.log("no more gun");
                CL();
                lookInventory();
            
            }

        }

        else if (hand1 == "empty" && hand2 != "empty") {

            hand1 = "test";

            console.log("hand1 and hand2 is good.");

            equipmentWipe("reset");

            startEquipment();

        }

        else {alert("Sorry, but your hands are full...")};

    }

});

$(document).on('click', '.e-buttons', function() {

    var button = $(this).val();
    console.log('The Button is ' + button);
    CL();
    $('#container').scrollTop($('#container')[0].scrollHeight);

    commandReset();

    if (button == 'i-equipment') {

        displayEquipment('inventory');

    }

   else if (button == 's-equipment') {

        displayEquipment('store');

    }

    else if ((button == "hand1_empty") || (button == "hand2_empty")) {

        selectEquipment("reset");
        
        selectedItem = "empty";

        $(this).addClass("selected");

        selectEquipment("select");

    }

    else if ((button == "hand1_pistol") || (button == "hand2_pistol")) {

        selectEquipment("reset");

        $(this).addClass("selected");
        
        selectedItem = "pistol";

        selectEquipment("select");
            
        $('<button class=\'equipment_button c-buttons\' value=\'removePistol\'>Unequip</button>').appendTo('#choicebox');

    }

    else if ((button == "hand1_rifle") || (button == "hand2_rifle")) {

        selectEquipment("reset");

        $(".hand1").addClass("selected");

        $(".hand2").addClass("selected");
        
        selectedItem = "rifle";

        selectEquipment("select");
            
        $('<button class=\'equipment_button c-buttons\' value=\'removeRifle\'>Unequip</button>').appendTo('#choicebox');

    }

    else if ((button == "hand1_sword") || (button == "hand2_sword")) {

        selectEquipment("reset");

        $(this).addClass("selected");
        
        selectedItem = "sword";

        selectEquipment("select");
            
        $('<button class=\'equipment_button c-buttons\' value=\'removeSword\'>Unequip</button>').appendTo('#choicebox');

    }

    else if ((button == "hand1_test") || (button == "hand2_test")) {

        selectEquipment("reset");

        $(this).addClass("selected");
        
        selectedItem = "test";

        selectEquipment("select");
            
        $('<button class=\'equipment_button c-buttons\' value=\'removeTest\'>Unequip</button>').appendTo('#choicebox');

    }

});