//#region Player's Stats

var P_Strength = 100 // Decide your melee damage and maybe weight if you decide to use that system. Weight not only can decide how much you can carry, but even if it possible to equip or use some of heavy stuff.

    var P_Damage = Math.floor((Math.random() * 10) + P_Strength) // Do not forget to change this to 10.

    //$('<p class=\'texts\'>You punch enemy health. ('+'<span class=\'red\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

    //$('<p class=\'texts\'>You punch enemy shield. ('+'<span class=\'blue\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

    //$('<p class=\'texts\'>You punch enemy armor. ('+'<span class=\'yellow\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

    // Look into red text for health damage, blue text for health damage and yellow text for armor damage.

var P_Vitality = 10 // Decide your health and regen of health

    var P_Health = P_Vitality * 10

var P_Dexterity = 10 // Decide your initiative and chance of hit as well chance of flee. ?use this to use something range? ?or is that already decide by combined of Intel and chance of hit?

    var P_A_Chance = Math.floor((Math.random() * 10) + P_Dexterity); // Do not forget to change this to 10.

var P_Intelligence = 10 // Decide damage of your tech and magic as well to use something akin to this level

var P_Wisdom = 10 // Decide your energy and regen of energy

var P_Charisma = 10 // Decide your bonus with relationship and boost your companions

var P_Luck = 10 // Decide bonus for loot rolls and money, possibly for exp, also impact criticial chance.

var P_Stat_Points = 0

var P_Level = 1

var P_Current = 0

var P_Max = 100

var P_EXP_Bonus = 1.0

var point = 400 // This is for store, probarly replace point with currenacy. Save point for meta stuff, and if used on normal shit, then make it more powerful such as infinite ammo or never break or whatever other system you bring in.

function P_EXP_Gain(exp) {
    if (exp == undefined || null) {
        P_Current = ((E_Level * 20) * P_EXP_Bonus) + P_Current;
        P_Experience(P_Current, P_Max)
    }
    else {
        P_Current = (((E_Level * 20) + exp) * P_EXP_Bonus) + P_Current;
        P_Experience(P_Current, P_Max)
    }
}

console.log('P_Max is '+P_Max)
console.log('P_Current is '+P_Current)
//console.log(experience)
console.log('P_Level is '+P_Level)
console.log('P_Stat Points is '+P_Stat_Points)

function P_Experience(P_Current, P_Max) {
    while (P_Current >= P_Max) {
        P_Level++ // There is hidden error that cause one to gain perm level up every time they level up via normal way.
        P_Current = P_Current - P_Max
        alert('Level Up')
    }
    P_Max = P_Level * 100
    P_Stat_Points = (P_Level * 5) - 5
    console.log('P_Max is '+P_Max)
    console.log('P_Current is '+P_Current)
    //console.log(experience)
    console.log('P_Level is '+P_Level)
    CCPlayer('Level')
    console.log('P_Stat Points is '+P_Stat_Points)
}

// Expand more on this to combat encounter, make sure you find a way to fit those health, energy, level in player list, and make a new menu bar for stats, it will shown as level up when there is stat points to be spend, otherwise it just say stats.

//#endregion

//#region Companion's Stats

/*
Name:
Gender: Male
Class: ?Shaman?
Species: Centaur
Location: Monster Land
Stats: S: 5, V: 10, D: 10, I: 15, W: 10, C: 10, L: 10
Bio: Try to return life to monster land via shamanism arts in attempt to stabilized it and prevent the monsters from spreading everywhere. Heavy focus on buff his companions and debuff enemies.

Shamans are spiritual guides and practitioners, not of the divine, but of the very elements. Unlike some other mystics, shamans commune with forces that are not strictly benevolent. The elements are chaotic, and left to their own devices, they rage against one another in unending primal fury. It is the call of the shaman to bring balance to this chaos. Acting as moderators among earth, fire, water, and air, shamans summon totems that focus the elements to support the shaman’s allies or punish those who threaten them.
*/

/*var C_Strength = 10 // Decide your melee damage and maybe weight if you decide to use that system. Weight not only can decide how much you can carry, but even if it possible to equip or use some of heavy stuff.

    var C_Damage = Math.floor((Math.random() * 10) + C_Strength) // Do not forget to change this to 10.

    //$('<p class=\'texts\'>You punch enemy health. ('+'<span class=\'red\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

    //$('<p class=\'texts\'>You punch enemy shield. ('+'<span class=\'blue\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

    //$('<p class=\'texts\'>You punch enemy armor. ('+'<span class=\'yellow\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

    // Look into red text for health damage, blue text for health damage and yellow text for armor damage.

var C_Vitality = 10 // Decide your health and regen of health

    var C_Health = 100

var C_Dexterity = 10 // Decide your initiative and chance of hit as well chance of flee. ?use this to use something range? ?or is that already decide by combined of Intel and chance of hit?

    var C_A_Chance = Math.floor((Math.random() * 10) + C_Dexterity); // Do not forget to change this to 10.

var C_Intelligence = 10 // Decide damage of your tech and magic as well to use something akin to this level

var C_Wisdom = 10 // Decide your energy and regen of energy

var C_Charisma = 10 // Decide your bonus with relationship and boost your companions

var C_Luck = 10 // Decide bonus for loot rolls and money, possibly for exp, also impact criticial chance.

var C_Stat_Points = 0

var C_Level = 1

var C_Current = 0

var C_Max = 100

var C_EXP_Bonus = 1.0

var point = 400 // This is for store, probarly replace point with currenacy. Save point for meta stuff, and if used on normal shit, then make it more powerful such as infinite ammo or never break or whatever other system you bring in.

function C_EXP_Gain(exp) {
    if (exp == undefined) {
        C_Current = ((E_Level * 20) * C_EXP_Bonus) + C_Current
    } else C_Current = (((E_Level * 20) + exp) * C_EXP_Bonus) + C_Current
}

console.log('C_Max is '+C_Max)
console.log('C_Current is '+C_Current)
//console.log(experience)
console.log('C_Level is '+C_Level)
console.log('C_Stat Points is '+C_Stat_Points)

C_EXP_Gain(50)

C_Experience(C_Current, C_Max)

function C_Experience(C_Current, C_Max) {
    while (C_Current >= C_Max) {
        C_Level++
        C_Current = C_Current - C_Max
    }
    C_Max = C_Level * 100
    C_Stat_Points = (C_Level * 5) - 5
    console.log('C_Max is '+C_Max)
    console.log('C_Current is '+C_Current)
    //console.log(experience)
    console.log('C_Level is '+C_Level)
    console.log('C_Stat Points is '+C_Stat_Points)
}

// Expand more on this to combat encounter, make sure you find a way to fit those health, energy, level in player list, and make a new menu bar for stats, it will shown as level up when there is stat points to be spend, otherwise it just say stats.*/

//#endregion

//#region Enemy's Stats

var E_Strength = 10 // Decide your melee damage and maybe weight if you decide to use that system. Weight not only can decide how much you can carry, but even if it possible to equip or use some of heavy stuff.

var E_Damage = Math.floor((Math.random() * 10) + E_Strength) // Do not forget to change this to 10.

var E_Vitality = 10 // Decide your health and regen of health

var E_Health = E_Vitality * 10

var E_Dexterity = 10 // Decide your initiative and chance of hit as well chance of flee. ?use this to use something range? ?or is that already decide by combined of Intel and chance of hit?

var E_A_Chance = Math.floor((Math.random() * 100) + 1); // Do not forget to change this to 10.

var E_Intelligence = 10 // Decide damage of your tech and magic as well to use something akin to this level

var E_Wisdom = 10 // Decide your energy and regen of energy

var E_Charisma = 10 // Decide your bonus with relationship and boost your companions

var E_Luck = 10 // Decide bonus for loot rolls and money, possibly for exp, also impact criticial chance.

var E_Stat_Points = 0

var E_Level = 1

var E_Current = 0

var E_Max = 100

var E_EXP_Bonus = 1.0

function E_EXP_Gain(exp) {
if (exp == undefined) {
    E_Current = ((E_Level * 20) * E_EXP_Bonus) + E_Current
} else E_Current = (((E_Level * 20) + exp) * E_EXP_Bonus) + E_Current
}

console.log('E_Max is '+E_Max)
console.log('E_Current is '+E_Current)
//console.log(experience)
console.log('E_Level is '+E_Level)
console.log('E_Stat Points is '+E_Stat_Points)

E_EXP_Gain(50)

E_Experience(E_Current, E_Max)

function E_Experience(E_Current, E_Max) {
while (E_Current >= E_Max) {
    E_Level++
    E_Current = E_Current - E_Max
}
E_Max = E_Level * 100
E_Stat_Points = (E_Level * 5) - 5
console.log('E_Max is '+E_Max)
console.log('E_Current is '+E_Current)
//console.log(experience)
console.log('E_Level is '+E_Level)
console.log('E_Stat Points is '+E_Stat_Points)
}

// Expand more on this to combat encounter, make sure you find a way to fit those health, energy, level in player list, and make a new menu bar for stats, it will shown as level up when there is stat points to be spend, otherwise it just say stats.

//#endregion

/*
//#region Player's Stats

var Player = function() {

    var P_Strength = 10 // Decide your melee damage and maybe weight if you decide to use that system. Weight not only can decide how much you can carry, but even if it possible to equip or use some of heavy stuff.

        var P_Damage = Math.floor((Math.random() * 10) + P_Strength) // Do not forget to change this to 10.

        //$('<p class=\'texts\'>You punch enemy health. ('+'<span class=\'red\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

        //$('<p class=\'texts\'>You punch enemy shield. ('+'<span class=\'blue\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

        //$('<p class=\'texts\'>You punch enemy armor. ('+'<span class=\'yellow\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

        // Look into red text for health damage, blue text for health damage and yellow text for armor damage.

    var P_Vitality = 10 // Decide your health and regen of health

        var P_Health = 100

    var P_Dexterity = 10 // Decide your initiative and chance of hit as well chance of flee. ?use this to use something range? ?or is that already decide by combined of Intel and chance of hit?

        var P_A_Chance = Math.floor((Math.random() * 10) + P_Dexterity); // Do not forget to change this to 10.

    var P_Intelligence = 10 // Decide damage of your tech and magic as well to use something akin to this level

    var P_Wisdom = 10 // Decide your energy and regen of energy

    var P_Charisma = 10 // Decide your bonus with relationship and boost your companions

    var P_Luck = 10 // Decide bonus for loot rolls and money, possibly for exp, also impact criticial chance.

    var P_Stat_Points = 0

    var P_Level = 1

    var P_Current = 0

    var P_Max = 100

    var P_EXP_Bonus = 1.0

    var point = 400 // This is for store, probarly replace point with currenacy. Save point for meta stuff, and if used on normal shit, then make it more powerful such as infinite ammo or never break or whatever other system you bring in.

    function P_EXP_Gain(exp) {
        if (exp == undefined) {
            P_Current = ((E_Level * 20) * P_EXP_Bonus) + P_Current
        } else P_Current = (((E_Level * 20) + exp) * P_EXP_Bonus) + P_Current
    }

    console.log('P_Max is '+P_Max)
    console.log('P_Current is '+P_Current)
    //console.log(experience)
    console.log('P_Level is '+P_Level)
    console.log('P_Stat Points is '+P_Stat_Points)

    P_EXP_Gain(50)

    P_Experience(P_Current, P_Max)

    function P_Experience(P_Current, P_Max) {
        while (P_Current >= P_Max) {
            P_Level++
            P_Current = P_Current - P_Max
        }
        P_Max = P_Level * 100
        P_Stat_Points = (P_Level * 5) - 5
        console.log('P_Max is '+P_Max)
        console.log('P_Current is '+P_Current)
        //console.log(experience)
        console.log('P_Level is '+P_Level)
        console.log('P_Stat Points is '+P_Stat_Points)
    }

    // Expand more on this to combat encounter, make sure you find a way to fit those health, energy, level in player list, and make a new menu bar for stats, it will shown as level up when there is stat points to be spend, otherwise it just say stats.

}

//#endregion

//#region Companion's Stats

var Companion = function() {

    var C_Strength = 10 // Decide your melee damage and maybe weight if you decide to use that system. Weight not only can decide how much you can carry, but even if it possible to equip or use some of heavy stuff.

        var C_Damage = Math.floor((Math.random() * 10) + C_Strength) // Do not forget to change this to 10.

        //$('<p class=\'texts\'>You punch enemy health. ('+'<span class=\'red\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

        //$('<p class=\'texts\'>You punch enemy shield. ('+'<span class=\'blue\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

        //$('<p class=\'texts\'>You punch enemy armor. ('+'<span class=\'yellow\'>'+P_Damage+'</span>'+')</p>').appendTo('#textbox')

        // Look into red text for health damage, blue text for health damage and yellow text for armor damage.

    var C_Vitality = 10 // Decide your health and regen of health

        var C_Health = 100

    var C_Dexterity = 10 // Decide your initiative and chance of hit as well chance of flee. ?use this to use something range? ?or is that already decide by combined of Intel and chance of hit?

        var C_A_Chance = Math.floor((Math.random() * 10) + C_Dexterity); // Do not forget to change this to 10.

    var C_Intelligence = 10 // Decide damage of your tech and magic as well to use something akin to this level

    var C_Wisdom = 10 // Decide your energy and regen of energy

    var C_Charisma = 10 // Decide your bonus with relationship and boost your companions

    var C_Luck = 10 // Decide bonus for loot rolls and money, possibly for exp, also impact criticial chance.

    var C_Stat_Points = 0

    var C_Level = 1

    var C_Current = 0

    var C_Max = 100

    var C_EXP_Bonus = 1.0

    var point = 400 // This is for store, probarly replace point with currenacy. Save point for meta stuff, and if used on normal shit, then make it more powerful such as infinite ammo or never break or whatever other system you bring in.

    function C_EXP_Gain(exp) {
        if (exp == undefined) {
            C_Current = ((E_Level * 20) * C_EXP_Bonus) + C_Current
        } else C_Current = (((E_Level * 20) + exp) * C_EXP_Bonus) + C_Current
    }

    console.log('C_Max is '+C_Max)
    console.log('C_Current is '+C_Current)
    //console.log(experience)
    console.log('C_Level is '+C_Level)
    console.log('C_Stat Points is '+C_Stat_Points)

    C_EXP_Gain(50)

    C_Experience(C_Current, C_Max)

    function C_Experience(C_Current, C_Max) {
        while (C_Current >= C_Max) {
            C_Level++
            C_Current = C_Current - C_Max
        }
        C_Max = C_Level * 100
        C_Stat_Points = (C_Level * 5) - 5
        console.log('C_Max is '+C_Max)
        console.log('C_Current is '+C_Current)
        //console.log(experience)
        console.log('C_Level is '+C_Level)
        console.log('C_Stat Points is '+C_Stat_Points)
    }

    // Expand more on this to combat encounter, make sure you find a way to fit those health, energy, level in player list, and make a new menu bar for stats, it will shown as level up when there is stat points to be spend, otherwise it just say stats.

}

//#endregion

//#region Enemy's Stats

var Enemy = function() {

    var E_Strength = 10 // Decide your melee damage and maybe weight if you decide to use that system. Weight not only can decide how much you can carry, but even if it possible to equip or use some of heavy stuff.

    var E_Damage = Math.floor((Math.random() * 10) + E_Strength) // Do not forget to change this to 10.

    var E_Vitality = 10 // Decide your health and regen of health

    var E_Health = 100

    var E_Dexterity = 10 // Decide your initiative and chance of hit as well chance of flee. ?use this to use something range? ?or is that already decide by combined of Intel and chance of hit?

    var E_A_Chance = Math.floor((Math.random() * 100) + 1); // Do not forget to change this to 10.

    var E_Intelligence = 10 // Decide damage of your tech and magic as well to use something akin to this level

    var E_Wisdom = 10 // Decide your energy and regen of energy

    var E_Charisma = 10 // Decide your bonus with relationship and boost your companions

    var E_Luck = 10 // Decide bonus for loot rolls and money, possibly for exp, also impact criticial chance.

    var E_Stat_Points = 0

    var E_Level = 1

    var E_Current = 0

    var E_Max = 100

    var E_EXP_Bonus = 1.0

    function E_EXP_Gain(exp) {
    if (exp == undefined) {
        E_Current = ((E_Level * 20) * E_EXP_Bonus) + E_Current
    } else E_Current = (((E_Level * 20) + exp) * E_EXP_Bonus) + E_Current
    }

    console.log('E_Max is '+E_Max)
    console.log('E_Current is '+E_Current)
    //console.log(experience)
    console.log('E_Level is '+E_Level)
    console.log('E_Stat Points is '+E_Stat_Points)

    E_EXP_Gain(50)

    E_Experience(E_Current, E_Max)

    function E_Experience(E_Current, E_Max) {
    while (E_Current >= E_Max) {
        E_Level++
        E_Current = E_Current - E_Max
    }
    E_Max = E_Level * 100
    E_Stat_Points = (E_Level * 5) - 5
    console.log('E_Max is '+E_Max)
    console.log('E_Current is '+E_Current)
    //console.log(experience)
    console.log('E_Level is '+E_Level)
    console.log('E_Stat Points is '+E_Stat_Points)
    }

    // Expand more on this to combat encounter, make sure you find a way to fit those health, energy, level in player list, and make a new menu bar for stats, it will shown as level up when there is stat points to be spend, otherwise it just say stats.

}

//#endregion
*/
// It seem that CYOA reddit does not accept your stuff as your are not CYOA even if it based on it. But they redirect you to one of Text Based Game sub on reddit

/*Using initiative stat or something similar to avoid events.

I am working on merging player stats with combat events and by extension, the regular encounter event. But I am curious about what you guys want me to use to avoid something. In normal text RPG, once the event is triggered, you have to go through it, few RPG actually give you a chance to avoid or easily shortcut it if you have sufficient stats to do so. I am curious if you guys want this or even give you chance to avoid some and must go through one depend on if it makes sense such as you can't just say nope, fuck this shit I outta here to enemy ambush unless your stats are that overpower, where on other hand, you can scout enemy force ahead and have chance to leave before walk into them if your Luck or Wisdom or Intelligence is high enough to spot said enemy force.

1, Nah, players go through all events the normal way.

2, players avoid or shortcut events if good enough.

3, players get the choice to avoid or not if good enough regardless if they make sense or not, allowing metagamer or just break the logic of thing to get out or get involved.

4, players get the choice to avoid or not if good enough and it makes sense overall, prevent metagamer.

5, Your choice of thought?

I add a picture of what I have so far, it is still a work in progress before it ready for an alpha release, I reckon a week or two before it ready for an alpha release, altogether that might be meant postpone the save and load system like that are annoying to work within favor of getting server-side over with, people can't really try this out if there no way for they to access it in the first place, so I will need to set up a basic host browser so people can play this from it or convert this into exe for people to download it. I apologized if this screen seems lackluster, this area is where I work on a new feature which is combat and map exploration along with its event trigger. I only came up with this desert-based map and whole of combat and map triggered events several days ago and an allnighter.*/