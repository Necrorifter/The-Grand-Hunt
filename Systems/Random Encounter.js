// https://www.w3schools.com/js/js_loop_for.asp
// https://www.w3schools.com/jsref/jsref_random.asp

/* var i;
for (i = 0; i <= 4; i++) {
    console.log("The number is " + i);
    point = point + 100;
} */

/* // Use this to get those long ass number for map tileEvents, try and see if you can improve it as it just spawn long downward of number, if you can make it box up or in same stucture as tileEvents, then that better.
var i;
    i = 0
      for (i = 0; i < 100; i++) {
          $('<p>'+[i]+' :, </p>').appendTo('#textbox')
        }
*/

/*var i
i = 0
for (var i = 0; i < 100; i++) {
  $('<p>'+[i.toString().padStart(2,'0')]+' :, </p>').appendTo('#textbox')
}*/

/*
    Here for generic system of combat, so you can tweak it seperate for each combat encounter.
*/

var gameState = 0 // Do not forget to move Stats into Stat tab to use companions in its place.

console.log("gameState "+gameState)

function gameStates() {

    if (gameState == 0) { // noncombat

        Turns = 1

        //displayEquipment('inventory')

        $('.combat').remove()
        $('.movement').remove()

        Battle = false

        Movement = true
        Systems('Movement')

        $('.game').removeClass('hidden')

        $('.eStat').remove()

    } else if (gameState == 1) { // combat

        Turns = 1

        //displayEquipment('inventory')

        Battle = true

        Movement = false
        Systems('Movement')

        $('.game').addClass('hidden')

    }

}

var click = false

var Turns = 1

var Battle = true

let g = 0

let b = ''
//let E_Body = ['Cultist', 'Star Horror']
// While wonderful idea, the problem is that they are of equal chance rather than one have more common and other rare... Do you really need this over regular x greater than or lesser than number function?

let n = ''
let E_Name = ['Elli', 'Lizette', 'Dong', 'Benedict', 'Georgetta', 'Tamala', 'Rene', 'Isidra', 'Sonya', 'Wilma', 'Adena', 'Laticia', 'Bernarda', 'Nyla', 'Leonel', 'John', 'Bob', 'Layla', 'Krystal', 'Sombra']

let t = ''
let E_Title = ['the Growing Predator', 'the Glassmaker', 'the Desert Tamer']

let e = ''
let E_Element = ['Fire', 'Earth', 'Dark', 'Light'] // Do not forget to look into small var of this but for specific region as it does not make sense for water land to have fire element or fire world have water element

let Unique = false

let Sentient = false

// let E_Element = ['Fire', 'Water', 'Earth', 'Air', 'Dark', 'Light']

// Lord of Zeker are Cosmic Horror that can summon small Star Horror once every few turns.

// the growing predator have increasing buff to its stats longer the combat go on.

// the glassmaker have increased evasion.

// the desert tamer can have 1 rare large posionous scorpion or 2 common desert lizard that can have same element as tamer.

var E_v = E_Vitality

console.log('E_v '+E_v)

var E_h = E_Health // Look like you will have to make use Stats as template, and clone them into here. But with this, you can merely make multiple function for more than two person fight. Of course, you do not know if you can just use array or not.

console.log('E_h '+E_h)

var E_s = E_Strength

console.log('E_s '+E_s)

//#region A_Tutorial

// You need to add Stats to influence stuff below and give stats to your item to influence stuff even more.

// Do not forget to look at bottom of this to see about add initiative to combat.

console.log('Test '+Math.floor((Math.random() * 3)+1))

function DE() { // Desert Events

    CCPlayer('Credit')

    let Chance = Math.floor((Math.random() * 100)+1); // Do not forget to chance this to 10.

    if (Chance > 5) {
        console.log("You just got in a fight! " + Chance)
        
        gameState = 1

        console.log("gameState "+gameState)

        gameStates()

        DC()
    }
    else if (Chance <= 5) {
        console.log("Nothing happen " + Chance)
    }
}

function DC() { // Desert Combat

    // Here for combat

    // Currently, there is error with Enemy() and Player() cant read each other. You are doing this because you need some way to reset Enemy and Player var otherwise, it will carry over. Espically for enemy, and even more if you want more than one seperate enemies...

    ERG()

    CT()
    
}

function CT() { // Combat Turns
    if (Battle == true) {

        clean()
        $('.combat').remove();
        Update()
        
    } else { alert("Unknown battle error") }
}

$(document).on('click', '.combat', function () { // Something is trigger this more than for every combat you get involved with... Maybe add Punch to equipment list and give it some value and then move function outside of this .combat stuff, this way you can remove this whole thing, perhaps with equipment of punch and EA and loop be its own function, it will fix this increasing loop.
    const button = $(this).val()
    //console.log('The Button is ' + button)
    CL()
    $('#container').scrollTop($('#container')[0].scrollHeight)

    if (button == 'Punch') {

        //var P_A_Chance = Math.floor((Math.random() * 100)+1);
        if (P_A_Chance > 5) {

            if (Unique == false) {
                $('<p class=\'texts\'>You punch enemy. ('+'<span class=\'red\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')
            }
            
            else if (Unique == true && n != '') {
                $('<p class=\'texts\'>You punch '+n+'. ('+'<span class=\'red\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')
            }

            else {
                $('<p class=\'texts\'>You punch '+b+'. ('+'<span class=\'red\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')
            }

            //var P_Damage = Math.floor((Math.random() * 100)+1);
            console.log("Your Damage to enemy is " + P_Damage)
            E_h = E_h - P_Damage
            console.log("Enemy Health is " + E_h)
        }
        else if (P_A_Chance <= 5) {
            $('<p class=\'texts\'>You miss enemy</p>').appendTo('#textbox')
            console.log("You missed")
        }
        click = true
        Loop()
    }

    else if (button == 'next') {

        clean()

        gameState = 0

        console.log("gameState "+gameState)

        gameStates()

        //alert('N') // Look into this, it seem that each win increase number of time this happen. No clue how to solve it at this moment or even why or how it is doing this. At the moment, using tempoary solution of true movement and remove extra move buttons.

        // Wait, you think you know why it is not working, the load of DE() on map... it is possible that the DE call never end, so every extra battle still have old call as nothing remove the old one.

        //exit // This no longer work, no clue if it will cause problem or not as it forceful exit from all function, up to DC() and possible beyond but since map are working, it should be fine.

        // It have to do with event detector for .combat buttons be inside the function, so move it outside of CT() function fix it. but most of it will be seperate to go to their respective area anyway.
    }

    else if (button == 'nextTurn') {
        clean()
        $('.combat').remove();
        CT()
    }

    function Loop() {
        while (click == true) {
            click = false
            Turns++
            EA()
            Update()
            $('.combat').remove();
            $('<button class=\'command_button combat\' value=\'nextTurn\'>Next Turn</button>').appendTo('#choicebox');
            Condition()
        }
        return false
    }
})

function Update() {
    cleanTurn()

    //$('<p class=\'texts t-combat\'>Turn: '+ Turns +'</p>').appendTo('#textbox')
    $('<p class=\'texts t-combat\'>Player Health: '+ P_Health +'</p>').appendTo('#player')
    $('<p class=\'texts t-combat\'>Enemy Health: '+ E_h +'</p>').appendTo('#encounter')

    $('<button class=\'command_button combat\' value=\'Punch\'>Punch</button>').appendTo('#choicebox');

    click = false
}

function Condition() {
    if (P_Health <= 0) {
        $('.combat').remove();
        $('<p class=\'texts\'>You lost!</p>').appendTo('#textbox')
        $('<button class=\'command_button combat\' value=\'next\'>Next</button>').appendTo('#choicebox');
        console.log("You Lost")
    }
    else if (E_h <= 0) {
        $('.combat').remove();
        $('<p class=\'texts\'>You won!</p>').appendTo('#textbox')
        $('<button class=\'command_button combat\' value=\'next\'>Next</button>').appendTo('#choicebox');
        console.log("You Won")

        P_EXP_Gain(20)

        // sent back to recall station or exit to main menu and force to load save or new game. permadeath? maybe for extra reward or meta choice to retain between runs.
    }

}

function EA() { // Enemy Action
    if (E_h <= 0) {
        return false
    }
    var Chance = Math.floor((Math.random() * 10)+1);
    if (Chance > 5) {
        $('<p class=\'texts\'>Enemy punch you ('+'<span class=\'red\'>'+E_Damage+'</span>'+')</p>').appendTo('#textbox')
        //var Damage = Math.floor(Math.random() * 10);
        console.log("Enemy Damage to you is " + E_Damage)
        P_Health = P_Health - E_Damage
        console.log("Your Health is " + P_Health)
    }
    else if (Chance <= 5) {
        $('<p class=\'texts\'>Enemy miss you</p>').appendTo('#textbox')
        console.log("Enemy missed")
    }
}

//#endregion

function ERG() { // Enemy Random Generator
    // Enemy will have three structures to form their form. Body, Name, and Element,
    // Body decide their species and whatever they are capable of talking or mob or smart, etc.
    // Name decide their name, their title will be mixture of their element and body which can decide their personality.
    // Their element is their power such as darkness, light, fire, earth, tech, psi, etc. it also influence their personality.

    // Enemy can be generic in which they are just mob that wont grow and often found serving named enemy, but if they defeat you, then they can become named enemy.

    function CCEnemy (enemy) {
        switch (enemy) {
            case 'Name': {
                if ($('.eName').length === 0) {
                    $('<p class="eName eStat"></p>').appendTo('#encounter')
                    CCEnemy('Name')
                } else {
                    if (Unique == false) {
                        $('.eName').html('<p>Type: ' + b + '</p>')
                    } else {
                        $('.eName').html('<p>Name: ' + n + ' ' + t + ' (' + b + ')</p>')
                    }
                }
            } break
    
            case 'Element': {
                if ($('.eElement').length === 0) {
                    $('<p class="eElement eStat"></p>').appendTo('#encounter')
                    CCEnemy('Element')
                } else {
                    $('.eElement').html('<p>Element: ' + e + '</p>')
                }
            } break
    
            case 'Morality' : { // This can be level
                if ($('#pMorality').length === 0) {
                    $('<p id="pMorality eStat"></p>').appendTo('#encounter')
                    CCEnemy('Morality')
                } else {
                    $('#pMorality').html('<p>Morality: ' + morality + '</p>')
                }
            } break
    
            /*case 'Origin': { // Reserved for future
                if ($('#pOrigin').length === 0) {
                    $('<p id="pOrigin"></p>').appendTo('#encounter')
                    CCEnemy('Origin')
                } else {
                    $('#pOrigin').html('<p>Origin: ' + OBG + '</p>')
                }
            } break
    
            case 'Credit': { // Reserved for future
                if ($('#pCredit').length === 0) {
                    $('<p id="pCredit"></p>').appendTo('#encounter')
                    CCEnemy('Credit')
                } else {
                    $('#pCredit').html('<p>Credit: ' + point + 'c</p>')
                }
            } break*/
        }
    }

    // Zek, Lord of Zekers

    // Bemonis
    
    let E_B = Math.floor((Math.random() * 3) + 1) // Enemy Body
    console.log('E_B '+E_B)
    let E_N = Math.floor((Math.random() * 3) + 1) // Enemy Name
    console.log('E_N '+E_N)
    let E_E = Math.floor((Math.random() * 3) + 1) // Enemy Element
    console.log('E_E '+E_E)

    //console.log('currentland is '+currentland)

    if (currentland == 'A_Tutorial') {
        EC();
    }

    function EC() { // Enemy Creation

        //console.clear()

        if (E_B >= 1 && E_B <= 2) {
            E_B = "Cultist"
            console.log(E_B)
            B(E_B)
        }
        if (E_B == 3) {
            E_B = "Star Horror"
            console.log(E_B)
            B(E_B)
        }

        Generic()

        function Generic() {
            g = Math.floor(Math.random() * 100);
            console.log("Enemy generic odd is "+g)
            if (g >= 6){
                Unique = true
                console.log("Enemy uniqueness is now "+Unique)
                N()
                T()
                E()
            }
            
            else {
                Unique = false
                console.log("Enemy uniqueness is now "+Unique)
                CCEnemy('Name')
            }
        }

        function B(E_B) { // finish this and change the enemy so if they are generic, it will say their body type rather than enemy.
            //b = E_Body[Math.floor(Math.random() * 3)];
            b = E_B
            console.log("Enemy body is "+b)

            switch (b) {
                case 'Cultist' : {
                    Sentient = true
                    console.log('E_s '+E_s)
                    E_s = 10
                    console.log('E_s '+E_s)

                    console.log('E_v '+E_v)
                    E_v = 5
                    console.log('E_v '+E_v)

                    E_h = E_v * 10 // The encounter is not going away when finish fight. Every combat is adding to your combat text, so three combat finished will have three 'turn' of combat text in your screen... Do not forget to work on gameState

                    return E_s, E_v
                }
                case 'Star Horror' : {
                    Sentient = false
                    console.log('E_s '+E_s)
                    E_s = 5
                    console.log('E_s '+E_s)

                    console.log('E_v '+E_v)
                    E_v = 10
                    console.log('E_v '+E_v)

                    E_h = E_v * 10
                }
                
                // Maybe add other chance roll to decide if roll again or nah? This will make Star Horror more rare, but can you even track the odd of each body type?
                
                //This concept can be used to decide rarity after repeat amount of roll, so if it land at same species 4 time before land on other, then that 4 time species will be choose at rarity level 4, making it more powerful, etc.
            }

        } // Enemy Possible Name

        function N() {
            if (Sentient == true) {
                n = E_Name[Math.floor(Math.random() * 20)];
                console.log("Enemy name is "+n)
                CCEnemy('Name')
            }

            else if (Sentient == false) {
                n = E_Name[Math.floor(Math.random() * 20)];
                console.log("Enemy name is "+n)
                CCEnemy('Name')
            }
        } // Enemy Possible Name

        function T() {
            t = E_Title[Math.floor(Math.random() * 3)];
            console.log("Enemy title is "+t)
            switch (t) {
                case "Lord of Zekers":
                case "the growing predator":
                case "the glassmaker":
                case "the desert tamer":
            }
            CCEnemy('Name')
        } // Enemy Possible Title

        function E() {
            e = E_Element[Math.floor(Math.random() * 4)];
            console.log("Enemy element is "+e)
            switch (e) {
                case "fire":
                case "earth":
                case "dark":
                case "light":
            }
            CCEnemy('Element')
        } // Enemy Possible Element

    }

    /*
    function EC(E_B, E_N, E_E) { // Enemy Creation

        if (E_B == 1) {
            E_B = ""
            console.log(E_B)
        }
        if (E_B == 2) {
            
        }
        if (E_B == 3) {

        }

        if (E_N == 1) {

        }
        if (E_N == 2) {

        }
        if (E_N == 3) {

        }

        if (E_E == 1) {

        }
        if (E_E == 2) {

        }
        if (E_E == 3) {

        }
    }
    */
}

// Future work on this into combat to give initiative to beings and potentially allow one to take action more than once, even in a row, in turn.

/*
else if (button == 'removePistol') {
    if ($('.e-buttons').is('.hand1.selected')) {
      function removePistol (equipment, value) {
        const index = equipment.indexOf(value)
        if (index > -1) {
          equipment.splice(index, 1)
        }
        return inventory
      }

      removePistol(equipment, 'Pistol')

      amtOPistol++

      inventory.push('Pistol')

      const inventory = []

function lookInventory () {
  if (inventory.length > 0) { // what the fuck am I doing here?
    inventoryWipe()

    // $('<button class=\'inventory_button I-buttons\'>Pistol = ' + amtOPistol + '</button>').appendTo('#inventory'); // can you add + amtOPistol + to class to allow it to remove and add when buy or sell this?

    // Now make encounter screen to represent thing happen, in this case, items selected in store that explain what they are.
    // Perhap look into toolitip video for this style and command buttons for what to do with said selected item.

    /* function myFunction(value) {
            $('#inventory').html('<button class=\'inventory_button I-buttons\'>'+value+'</button>');
        } */

    /*inventory.forEach(myFunction)

    function myFunction (value) {
      $('<center class=\'centers\'><button class=\'inventory_button I-buttons ' + value + '\' value=\'' + value + '\'>' + value + '</button></center>').appendTo('#inventory')
    }

    /* var text = "";
        var i;
        for (i = 0; i < amtOPistol; i++) {
            text = "Pistol shit = " + amtOPistol[i]; // Clearly, this is meant for array, so you will get undefined for amtOPistol[i]; Research more on Array and Loop.
        }
        $(".I-buttons").text(text); */

    /* var changeButtons = function(buttonList) {
            I-buttons.innerHTML = "";
            for (var i = 0; i < buttonList.length; i++) {
            I-buttons.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
            };
        }; */
  /*}
}*/