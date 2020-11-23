var Arts = '/Game Projects/The Grand Hunt CYOA/Arts/Style.css'

var jQuery = '/jQuery.js'

var Intro = '/Game Projects/The Grand Hunt CYOA/Events/Introduction.js'

var System = '/Game Projects/The Grand Hunt CYOA/Systems/System.js'

var Equipment = '/Game Projects/The Grand Hunt CYOA/Characters/Player/Equipment.js'

var Inventory = '/Game Projects/The Grand Hunt CYOA/Characters/Player/Inventory.js'

var Store = '/Game Projects/The Grand Hunt CYOA/Systems/Store.js'

var Random_Encounter = '/Game Projects/The Grand Hunt CYOA/Systems/Random Encounter.js'

var Map = '/Game Projects/The Grand Hunt CYOA/Systems/Map.js'

var Stat = '/Game Projects/The Grand Hunt CYOA/Characters/Stats.js'

head.load(Arts, jQuery, Stat, Random_Encounter, System, Map, Intro, Equipment, Inventory, Store, function(){
    console.log('loading completed')
});

/*loadScript(Arts, function(){
    console.log('Art loading, completed')
});

loadScript(jQuery, function(){
    console.log('jQuery loading, completed')
});

loadScript(Random_Encounter, function(){
    console.log('Random Encounter loading, completed')
});

loadScript(System, function(){
    console.log('System loading, completed')
});

loadScript(Map, function(){
    console.log('Map loading, completed')
});

loadScript(Intro, function(){
    console.log('Intro loading, completed')
});

loadScript(Equipment, function(){
    console.log('Equipment loading, completed')
});

loadScript(Inventory, function(){
    console.log('Inventory loading, completed')
});

loadScript(Store, function(){
    console.log('Store loading, completed')
});

loadScript(Stat, function(){
    console.log('Stat loading, completed')
});

function loadScript(src, fn, type="text/javascript") {
    var e = document.createElement("script"),
    cs = document.currentScript,
    ce = document.body || document.querySelector("head");
    if (fn) e.addEventListener("load", fn);
    e.type = type;
    e.src = src;
    if (cs) cs.parentElement.insertBefore(e, cs);
    else ce.appendChild(e);
}

//Example using the function
loadScript("js/chart.bundle.min.js", function(){
loadScript("js/chartjs-plugin-labels.min.js",function(){
    new Chart(bar, config.bar)
})
});*/

/*head.ready(Arts, jQuery, Intro, System, Equipment, Inventory, Store, Random_Encounter, Map, Stat, function() {
    console.log('loading completed')
});*/

/*
// the most simple case. load and execute single script without blocking.
head.js("/path/to/file.js");
 
// load a script and execute a function after it has been loaded
head.js("/path/to/file.js", function() {
 
});
 
// load files in parallel but execute them in sequence
head.js("file1.js", "file2.js", ... "fileN.js");
 
// execute function after all scripts have been loaded
head.js("file1.js", "file2.js", function() {
 
});
 
// files are loaded in parallel and executed in order they arrive
head.js("file1.js");
head.js("file2.js");
head.js("file3.js");
 
// the previous can also be written as
head.js("file1.js").js("file1.js").js("file3.js");

*/