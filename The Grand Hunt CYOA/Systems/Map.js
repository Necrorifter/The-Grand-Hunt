// $('<p class=\'texts\'></p>').appendTo('#textbox');

// $('<center class=\'centers\'><button class=\'command_button buttons\' value=\' \'></button></center>').appendTo('#choicebox');

// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox').fadeIn(0);

//$('<button class=\'command_button e-buttons\' value=\'pistol\'>Pistol</button>').appendTo('#choicebox');

$("canvas").clone().insertAfter("canvas").addClass("game");

var Movement=false;

c = document.getElementsByClassName('game')[0];

	function clearCanvas(c) {

		//$(".game").remove();

		//$("canvas").clone().insertAfter("canvas").addClass("game");

		/*var ctx = c.getContext('2d');	// gets reference to canvas context
		ctx.beginPath();	// clear existing drawing paths
		ctx.save();	// store the current transformation matrix

		// Use the identity matrix while clearing the canvas
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, c.width, c.height);

		ctx.restore();	// restore the transform*/
		
        //$(document).trigger("click"); Figure out how to do this manuel without click, but for now, use button to simiulate click.

		console.log("Wipe Canvas Clean?!?");
		CL();
		
	}; // Look into window.onload and drawGame() to see if you can forced it to redraw as it only draw on window load but not afterward.

//#region Map of Star Nexus

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

function GM_StarNexus()
{
	
	if (currentland == "StarNexus")
	{

		console.log("Your location is GM_StarNexus");
		CL();

		var ctx = null;
		var gameMap = [
			0, 0, 0, 0, 0, 3, 0, 0, 3, 3, 0,
			0, 3, 3, 0, 3, 1, 3, 3, 1, 3, 0,
			3, 1, 2, 4, 2, 2, 5, 2, 2, 3, 0,
			0, 3, 3, 0, 3, 3, 3, 3, 2, 3, 0,
			0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 0,
			0, 0, 0, 0, 0, 0, 0, 3, 2, 3, 0,
			0, 0, 0, 3, 3, 3, 3, 3, 2, 3, 0,
			0, 0, 0, 3, 2, 2, 2, 2, 2, 3, 0,
			0, 0, 0, 3, 1, 1, 1, 3, 3, 3, 0,
			0, 0, 0, 3, 1, 1, 1, 3, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		];
		var tileW = 40, tileH = 40;
		var mapW = 11, mapH = 11;
		var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

		var tileEvents = {
			16 : Intro,
			103 : JumptoMonsterLand,
			104 : JumptoMonsterLand,
			105 : JumptoMonsterLand,
			//23 : drawBridge,
			//25 : drawBridge,
			//121 : function(c) { c.placeAt(1,8); },
			//161 : function(c) { c.placeAt(1,6); }
		};
		function drawBridge()
		{
			gameMap[toIndex(6,2)] = (gameMap[toIndex(6,2)]==5 ? 2 : 2);
		}

		$(document).on('click', '.buttons', function() {
			var button = $(this).val();
			console.log('The Button is ' + button);
		})

		function Intro()
		{
			//$('.buttons[value="Intro2/2"]').click();
			drawBridge();
			CCEvents("Intro2/2");
		}

		function JumptoMonsterLand() 
		{

			clearCanvas(c);
			currentland = "Monster Land";
			GM_MonsterLand();
			console.log(currentland);
			
		};

		var tileset = null, tilesetURL = "/Game Projects/The Grand Hunt CYOA/Arts/tileset.png", tilesetLoaded = false;

		var gameTime = 0;
		var gameSpeeds = [
			{name:"Normal", mult:1},
			{name:"Slow", mult:0.3},
			{name:"Fast", mult:3},
			{name:"Paused", mult:0}
		];
		var currentSpeed = 0;

		var floorTypes = {
			solid	: 0,
			path	: 1,
			grass	: 8
		};
		var tileTypes = {
			0 : /*SS-void*/ { colour:"black", floor:floorTypes.solid, sprite:[{x:0,y:0,w:40,h:40}]	},
			1 : /*SS-event*/ { colour:"goldenrod", floor:floorTypes.grass,	sprite:[{x:40,y:0,w:40,h:40}]	},
			2 : /*SS-pathway*/ { colour:"grey", floor:floorTypes.path,	sprite:[{x:80,y:0,w:40,h:40}]	},
			3 : /*SS-wall*/ { colour:"rgb(50, 50, 50)", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	},
			4 : /*PSS-wall*/ { colour:"white", floor:floorTypes.path,	sprite:[{x:120,y:0,w:40,h:40}]	},
			5 : /*SS-Swall*/ { colour:"silver", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	}
		};

		var directions = {
			up		: 0,
			right	: 1,
			down	: 2,
			left	: 3
		};

		var keysDown = {
			37 : false,
			38 : false,
			39 : false,
			40 : false
		};

		var viewport = {
			screen		: [0,0],
			startTile	: [0,0],
			endTile		: [0,0],
			offset		: [0,0],
			update		: function(px, py) {
				this.offset[0] = Math.floor((this.screen[0]/2) - px);
				this.offset[1] = Math.floor((this.screen[1]/2) - py);

				var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

				this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/10) / tileW);
				this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/10) / tileH);

				if(this.startTile[0] < 0) { this.startTile[0] = 0; }
				if(this.startTile[1] < 0) { this.startTile[1] = 0; }

				this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/10) / tileW);
				this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/10) / tileH);

				if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
				if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
			}
		};

		var player = new Character();

		function Character()
		{
			this.tileFrom	= [2,2];
			this.tileTo		= [1,2];
			this.timeMoved	= 0;
			this.dimensions	= [30,30];
			this.position	= [45,45];

			this.delayMove	= {};
			this.delayMove[floorTypes.path]			= 400;
			this.delayMove[floorTypes.grass]		= 800;
			

			this.direction	= directions.up;
			this.sprites = {};
			this.sprites[directions.up]		= [{x:0,y:120,w:30,h:30}];
			this.sprites[directions.right]	= [{x:0,y:150,w:30,h:30}];
			this.sprites[directions.down]	= [{x:0,y:180,w:30,h:30}];
			this.sprites[directions.left]	= [{x:0,y:210,w:30,h:30}];
		}
		Character.prototype.placeAt = function(x, y)
		{
			this.tileFrom	= [x,y];
			this.tileTo		= [x,y];
			this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
				((tileH*y)+((tileH-this.dimensions[1])/2))];
		};
		Character.prototype.processMovement = function(t)
		{
			if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

			var moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0],this.tileFrom[1])]].floor];

			if((t-this.timeMoved)>=moveSpeed)
			{
				this.placeAt(this.tileTo[0], this.tileTo[1]);

				if(typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])]!='undefined')
				{
					tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);
				}

			}
			else
			{
				this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
				this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

				if(this.tileTo[0] != this.tileFrom[0])
				{
					var diff = (tileW / moveSpeed) * (t-this.timeMoved);
					this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
				}
				if(this.tileTo[1] != this.tileFrom[1])
				{
					var diff = (tileH / moveSpeed) * (t-this.timeMoved);
					this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
				}

				this.position[0] = Math.round(this.position[0]);
				this.position[1] = Math.round(this.position[1]);
			}

			return true;
		}
		Character.prototype.canMoveTo = function(x, y)
		{
			if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
			if(typeof this.delayMove[tileTypes[gameMap[toIndex(x,y)]].floor]=='undefined') { return false; }
			return true;
		};
		Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
		Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
		Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
		Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };
		Character.prototype.canMoveDirection = function(d) {
			switch(d)
			{
				case directions.up:
					return this.canMoveUp();
				case directions.down:
					return this.canMoveDown();
				case directions.left:
					return this.canMoveLeft();
				default:
					return this.canMoveRight();
			}
		};

		Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
		Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
		Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
		Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };
		Character.prototype.moveDirection = function(d, t) {
			switch(d)
			{
				case directions.up:
					return this.moveUp(t);
				case directions.down:
					return this.moveDown(t);
				case directions.left:
					return this.moveLeft(t);
				default:
					return this.moveRight(t);
			}
		};

		function toIndex(x, y)
		{
			return((y * mapW) + x);
		}

		function getFrame(sprite, duration, time, animated)
		{
			if(!animated) { return sprite[0]; }
			time = time % duration;

			for(x in sprite)
			{
				if(sprite[x].end>=time) { return sprite[x]; }
			}
		}

		$(document).on("click", function()
		{
			ctx = document.getElementsByClassName('game')[0].getContext("2d");
			requestAnimationFrame(drawGame);
			ctx.font = "bold 10pt sans-serif";

			window.addEventListener("keydown", function(e) {
				if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
			});
			window.addEventListener("keyup", function(e) {
				if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
				/*if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				}*/
			});

			viewport.screen = [document.getElementsByClassName('game')[0].width,
				document.getElementsByClassName('game')[0].height];

			tileset = new Image();
			tileset.onerror = function()
			{
				ctx = null;
				alert("Failed loading tileset.");
			};
			tileset.onload = function() { tilesetLoaded = true; };
			tileset.src = tilesetURL;

			for(x in tileTypes)
			{
				tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;

				if(tileTypes[x].animated)
				{
					var t = 0;
					
					for(s in tileTypes[x].sprite)
					{
						tileTypes[x].sprite[s]['start'] = t;
						t+= tileTypes[x].sprite[s].d;
						tileTypes[x].sprite[s]['end'] = t;
					}

					tileTypes[x]['spriteDuration'] = t;
				}
			}
		});

		function drawGame()
		{
			if(ctx==null) { return; }
			if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

			var currentFrameTime = Date.now();
			var timeElapsed = currentFrameTime - lastFrameTime;
			gameTime+= Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

			var sec = Math.floor(Date.now()/1000);
			if(sec!=currentSecond)
			{
				currentSecond = sec;
				framesLastSecond = frameCount;
				frameCount = 1;
			}
			else { frameCount++; }

			if(!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult!=0)
			{
				if(keysDown[38] && player.canMoveUp())			{ player.moveUp(gameTime); }
				else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(gameTime); }
				else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(gameTime); }
				else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(gameTime); }
			}

			viewport.update(player.position[0] + (player.dimensions[0]/2),
				player.position[1] + (player.dimensions[1]/2));

			ctx.fillStyle = "#000000";
			ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

			for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
			{
				for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
				{
					var tile = tileTypes[gameMap[toIndex(x,y)]];
					var sprite = getFrame(tile.sprite, tile.spriteDuration,
						gameTime, tile.animated);
					ctx.drawImage(tileset,
						sprite.x, sprite.y, sprite.w, sprite.h,
						viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
						tileW, tileH);
						
						ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour;
						ctx.fillRect( viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH), tileW, tileH);
						
				}
			}

			var sprite = player.sprites[player.direction];
			ctx.drawImage(tileset,
				sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
				viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
				player.dimensions[0], player.dimensions[1]);

			ctx.fillStyle = "#0000ff";
			ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
				player.dimensions[0], player.dimensions[1]);

			ctx.fillStyle = "#ff0000";
			//ctx.fillText("FPS: " + framesLastSecond, 10, 20);
			//ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

			lastFrameTime = currentFrameTime;
			requestAnimationFrame(drawGame);
		}

	}

}

//#endregion

//#region Map of Monster Land

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

function GM_MonsterLand()
{

	if (currentland == "MonsterLand")
	{

		console.log("Your location is GM_MonsterLand");
		CL();

		var ctx = null;
		var gameMap = [
			2, 3, 3,
			2, 2, 3,
			3, 2, 1
		];
		var tileW = 40, tileH = 40;
		var mapW = 3, mapH = 3;
		var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

		var tileEvents = {
			8 : JumptoStarNexus,
		};

		$(document).on('click', '.buttons', function() {
			var button = $(this).val();
			console.log('The Button is ' + button);
		})

		function JumptoStarNexus() {
			
			clearCanvas(c);
			currentland = "Star Nexus";
			GM_StarNexus();
			console.log(currentland);

		};

		var tileset = null, tilesetURL = "/Game Projects/The Grand Hunt CYOA/Arts/tileset.png", tilesetLoaded = false;

		var gameTime = 0;
		var gameSpeeds = [
			{name:"Normal", mult:1},
			{name:"Slow", mult:0.3},
			{name:"Fast", mult:3},
			{name:"Paused", mult:0}
		];
		var currentSpeed = 0;

		var floorTypes = {
			solid	: 0,
			path	: 1,
			grass	: 8
		};
		var tileTypes = {
			0 : /*Mountain*/ { colour:"darkorange", floor:floorTypes.solid, sprite:[{x:0,y:0,w:40,h:40}]	},
			1 : /*ML-event*/ { colour:"orange", floor:floorTypes.grass,	sprite:[{x:40,y:0,w:40,h:40}]	},
			2 : /*ML-pathway*/ { colour:"goldenrod", floor:floorTypes.path,	sprite:[{x:80,y:0,w:40,h:40}]	},
			3 : /*ML-desert*/ { colour:"darkorange", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	}
		};

		var directions = {
			up		: 0,
			right	: 1,
			down	: 2,
			left	: 3
		};

		var keysDown = {
			37 : false,
			38 : false,
			39 : false,
			40 : false
		};

		var viewport = {
			screen		: [0,0],
			startTile	: [0,0],
			endTile		: [0,0],
			offset		: [0,0],
			update		: function(px, py) {
				this.offset[0] = Math.floor((this.screen[0]/2) - px);
				this.offset[1] = Math.floor((this.screen[1]/2) - py);

				var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

				this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/10) / tileW);
				this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/10) / tileH);

				if(this.startTile[0] < 0) { this.startTile[0] = 0; }
				if(this.startTile[1] < 0) { this.startTile[1] = 0; }

				this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/10) / tileW);
				this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/10) / tileH);

				if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
				if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
			}
		};

		var player = new Character();

		function Character()
		{
			this.tileFrom	= [1,1];
			this.tileTo		= [0,0];
			this.timeMoved	= 0;
			this.dimensions	= [30,30];
			this.position	= [45,45];

			this.delayMove	= {};
			this.delayMove[floorTypes.path]			= 400;
			this.delayMove[floorTypes.grass]		= 800;
			

			this.direction	= directions.up;
			this.sprites = {};
			this.sprites[directions.up]		= [{x:0,y:120,w:30,h:30}];
			this.sprites[directions.right]	= [{x:0,y:150,w:30,h:30}];
			this.sprites[directions.down]	= [{x:0,y:180,w:30,h:30}];
			this.sprites[directions.left]	= [{x:0,y:210,w:30,h:30}];
		}
		Character.prototype.placeAt = function(x, y)
		{
			this.tileFrom	= [x,y];
			this.tileTo		= [x,y];
			this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
				((tileH*y)+((tileH-this.dimensions[1])/2))];
		};
		Character.prototype.processMovement = function(t)
		{
			if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

			var moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0],this.tileFrom[1])]].floor];

			if((t-this.timeMoved)>=moveSpeed)
			{
				this.placeAt(this.tileTo[0], this.tileTo[1]);

				if(typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])]!='undefined')
				{
					tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);
				}

			}
			else
			{
				this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
				this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

				if(this.tileTo[0] != this.tileFrom[0])
				{
					var diff = (tileW / moveSpeed) * (t-this.timeMoved);
					this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
				}
				if(this.tileTo[1] != this.tileFrom[1])
				{
					var diff = (tileH / moveSpeed) * (t-this.timeMoved);
					this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
				}

				this.position[0] = Math.round(this.position[0]);
				this.position[1] = Math.round(this.position[1]);
			}

			return true;
		}
		Character.prototype.canMoveTo = function(x, y)
		{
			if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
			if(typeof this.delayMove[tileTypes[gameMap[toIndex(x,y)]].floor]=='undefined') { return false; }
			return true;
		};
		Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
		Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
		Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
		Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };
		Character.prototype.canMoveDirection = function(d) {
			switch(d)
			{
				case directions.up:
					return this.canMoveUp();
				case directions.down:
					return this.canMoveDown();
				case directions.left:
					return this.canMoveLeft();
				default:
					return this.canMoveRight();
			}
		};

		Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
		Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
		Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
		Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };
		Character.prototype.moveDirection = function(d, t) {
			switch(d)
			{
				case directions.up:
					return this.moveUp(t);
				case directions.down:
					return this.moveDown(t);
				case directions.left:
					return this.moveLeft(t);
				default:
					return this.moveRight(t);
			}
		};

		function toIndex(x, y)
		{
			return((y * mapW) + x);
		}

		function getFrame(sprite, duration, time, animated)
		{
			if(!animated) { return sprite[0]; }
			time = time % duration;

			for(x in sprite)
			{
				if(sprite[x].end>=time) { return sprite[x]; }
			}
		}

		$(document).on( "click", function()
		{
			ctx = document.getElementsByClassName('game')[0].getContext("2d");
			requestAnimationFrame(drawGame);
			ctx.font = "bold 10pt sans-serif";

			window.addEventListener("keydown", function(e) {
				if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
			});
			window.addEventListener("keyup", function(e) {
				if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
				/*if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				}*/
			});

			viewport.screen = [document.getElementsByClassName('game')[0].width,
				document.getElementsByClassName('game')[0].height];

			tileset = new Image();
			tileset.onerror = function()
			{
				ctx = null;
				alert("Failed loading tileset.");
			};
			tileset.onload = function() { tilesetLoaded = true; };
			tileset.src = tilesetURL;

			for(x in tileTypes)
			{
				tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;

				if(tileTypes[x].animated)
				{
					var t = 0;
					
					for(s in tileTypes[x].sprite)
					{
						tileTypes[x].sprite[s]['start'] = t;
						t+= tileTypes[x].sprite[s].d;
						tileTypes[x].sprite[s]['end'] = t;
					}

					tileTypes[x]['spriteDuration'] = t;
				}
			}
		});

		function drawGame()
		{
			if(ctx==null) { return; }
			if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

			var currentFrameTime = Date.now();
			var timeElapsed = currentFrameTime - lastFrameTime;
			gameTime+= Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

			var sec = Math.floor(Date.now()/1000);
			if(sec!=currentSecond)
			{
				currentSecond = sec;
				framesLastSecond = frameCount;
				frameCount = 1;
			}
			else { frameCount++; }

			if(!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult!=0)
			{
				if(keysDown[38] && player.canMoveUp())			{ player.moveUp(gameTime); }
				else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(gameTime); }
				else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(gameTime); }
				else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(gameTime); }
			}

			viewport.update(player.position[0] + (player.dimensions[0]/2),
				player.position[1] + (player.dimensions[1]/2));

			ctx.fillStyle = "#000000";
			ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

			for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
			{
				for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
				{
					var tile = tileTypes[gameMap[toIndex(x,y)]];
					var sprite = getFrame(tile.sprite, tile.spriteDuration,
						gameTime, tile.animated);
					ctx.drawImage(tileset,
						sprite.x, sprite.y, sprite.w, sprite.h,
						viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
						tileW, tileH);
						
						ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour;
						ctx.fillRect( viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH), tileW, tileH);
						
				}
			}

			var sprite = player.sprites[player.direction];
			ctx.drawImage(tileset,
				sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
				viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
				player.dimensions[0], player.dimensions[1]);

			ctx.fillStyle = "#0000ff";
			ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
				player.dimensions[0], player.dimensions[1]);

			ctx.fillStyle = "#ff0000";
			//ctx.fillText("FPS: " + framesLastSecond, 10, 20);
			//ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

			lastFrameTime = currentFrameTime;
			requestAnimationFrame(drawGame);
		}

	}

};

//#endregion

//#region Map of Origin

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

function GM_Origin()
{
	
	if (currentland == "Origin")
	{

		console.log("Your location is GM_Origin");
		CL();

		var ctx = null;
		var gameMap = [
			3, 3, 3, 0, 0, 1, 0, 0, 0, 0, 0,
			3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0,
			3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0,
			3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
		];
		var tileW = 40, tileH = 40;
		var mapW = 11, mapH = 11;
		var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

		var tileEvents = {
			12 : CCEvents("Prologue"),
			103 : JumptoMonsterLand,
			//121 : function(c) { c.placeAt(1,8); },
			//161 : function(c) { c.placeAt(1,6); }
		};

		$(document).on('click', '.buttons', function() {
			var button = $(this).val();
			console.log('The Button is ' + button);
		})

		function Prologue()
		{
			//CCEvents("Intro2/2");
			alert("Hello");
		}

		function JumptoMonsterLand() 
		{

			clearCanvas(c);
			currentland = "Monster Land";
			GM_MonsterLand();
			console.log(currentland);
			
		};

		var tileset = null, tilesetURL = "/Game Projects/The Grand Hunt CYOA/Arts/tileset.png", tilesetLoaded = false;

		var gameTime = 0;
		var gameSpeeds = [
			{name:"Normal", mult:1},
			{name:"Slow", mult:0.3},
			{name:"Fast", mult:3},
			{name:"Paused", mult:0}
		];
		var currentSpeed = 0;

		var floorTypes = {
			solid	: 0,
			path	: 1,
			grass	: 8
		};
		var tileTypes = {
			0 : /*SH-void*/ { colour:"black", floor:floorTypes.solid, sprite:[{x:0,y:0,w:40,h:40}]	},
			1 : /*SH-event*/ { colour:"goldenrod", floor:floorTypes.grass,	sprite:[{x:40,y:0,w:40,h:40}]	},
			2 : /*SH-pathway*/ { colour:"grey", floor:floorTypes.path,	sprite:[{x:80,y:0,w:40,h:40}]	},
			3 : /*SH-wall*/ { colour:"rgb(50, 50, 50)", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	},
			4 : /*SH-water*/ { colour:"Blue", floor:floorTypes.solid,	sprite:[{x:120,y:0,w:40,h:40}]	},
		};

		var directions = {
			up		: 0,
			right	: 1,
			down	: 2,
			left	: 3
		};

		var keysDown = {
			37 : false,
			38 : false,
			39 : false,
			40 : false
		};

		var viewport = {
			screen		: [0,0],
			startTile	: [0,0],
			endTile		: [0,0],
			offset		: [0,0],
			update		: function(px, py) {
				this.offset[0] = Math.floor((this.screen[0]/2) - px);
				this.offset[1] = Math.floor((this.screen[1]/2) - py);

				var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

				this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/10) / tileW);
				this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/10) / tileH);

				if(this.startTile[0] < 0) { this.startTile[0] = 0; }
				if(this.startTile[1] < 0) { this.startTile[1] = 0; }

				this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/10) / tileW);
				this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/10) / tileH);

				if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
				if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
			}
		};

		var player = new Character();

		function Character()
		{
			this.tileFrom	= [1,1];
			this.tileTo		= [1,1];
			this.timeMoved	= 0;
			this.dimensions	= [30,30];
			this.position	= [45,45];

			this.delayMove	= {};
			this.delayMove[floorTypes.path]			= 400;
			this.delayMove[floorTypes.grass]		= 800;
			

			this.direction	= directions.up;
			this.sprites = {};
			this.sprites[directions.up]		= [{x:0,y:120,w:30,h:30}];
			this.sprites[directions.right]	= [{x:0,y:150,w:30,h:30}];
			this.sprites[directions.down]	= [{x:0,y:180,w:30,h:30}];
			this.sprites[directions.left]	= [{x:0,y:210,w:30,h:30}];
		}
		Character.prototype.placeAt = function(x, y)
		{
			this.tileFrom	= [x,y];
			this.tileTo		= [x,y];
			this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
				((tileH*y)+((tileH-this.dimensions[1])/2))];
		};
		Character.prototype.processMovement = function(t)
		{
			if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

			var moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0],this.tileFrom[1])]].floor];

			if((t-this.timeMoved)>=moveSpeed)
			{
				this.placeAt(this.tileTo[0], this.tileTo[1]);

				if(typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])]!='undefined')
				{
					tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this);
				}

			}
			else
			{
				this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
				this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

				if(this.tileTo[0] != this.tileFrom[0])
				{
					var diff = (tileW / moveSpeed) * (t-this.timeMoved);
					this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
				}
				if(this.tileTo[1] != this.tileFrom[1])
				{
					var diff = (tileH / moveSpeed) * (t-this.timeMoved);
					this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
				}

				this.position[0] = Math.round(this.position[0]);
				this.position[1] = Math.round(this.position[1]);
			}

			return true;
		}
		Character.prototype.canMoveTo = function(x, y)
		{
			if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
			if(typeof this.delayMove[tileTypes[gameMap[toIndex(x,y)]].floor]=='undefined') { return false; }
			return true;
		};
		Character.prototype.canMoveUp		= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
		Character.prototype.canMoveDown 	= function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
		Character.prototype.canMoveLeft 	= function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
		Character.prototype.canMoveRight 	= function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };
		Character.prototype.canMoveDirection = function(d) {
			switch(d)
			{
				case directions.up:
					return this.canMoveUp();
				case directions.down:
					return this.canMoveDown();
				case directions.left:
					return this.canMoveLeft();
				default:
					return this.canMoveRight();
			}
		};

		Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left; };
		Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right; };
		Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up; };
		Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down; };
		Character.prototype.moveDirection = function(d, t) {
			switch(d)
			{
				case directions.up:
					return this.moveUp(t);
				case directions.down:
					return this.moveDown(t);
				case directions.left:
					return this.moveLeft(t);
				default:
					return this.moveRight(t);
			}
		};

		function toIndex(x, y)
		{
			return((y * mapW) + x);
		}

		function getFrame(sprite, duration, time, animated)
		{
			if(!animated) { return sprite[0]; }
			time = time % duration;

			for(x in sprite)
			{
				if(sprite[x].end>=time) { return sprite[x]; }
			}
		}

		window.onload = function()
		{
			ctx = document.getElementsByClassName('game')[0].getContext("2d");
			requestAnimationFrame(drawGame);
			ctx.font = "bold 10pt sans-serif";

			$(".Move_North").on("click", function(){
				if(keysDown[38] == false){
					console.log("North is click"), keysDown[38]=true;
				} //else console.log("North is unclick"), keysDown[37]=false;
			});
			$(".Move_East").on("click", function(){
				if(keysDown[37] == false){
					console.log("East is click"), keysDown[37]=true;
				} //else console.log("East is unclick"), keysDown[37]=false;
			});
			$(".Move_West").on("click", function(){
				if(keysDown[39] == false){
					console.log("West is click"), keysDown[39]=true;
				} //else console.log("West is unclick"), keysDown[39]=false;
			});
			$(".Move_South").on("click", function(){
				if(keysDown[40] == false){
					console.log("South is click"), keysDown[40]=true;
				} //else console.log("South is unclick"), keysDown[40]=false;
			});

			window.addEventListener("keydown", function(e) {
				//if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
			});
			window.addEventListener("keyup", function(e) {
				//if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
				/*if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				}*/
			});

			viewport.screen = [document.getElementsByClassName('game')[0].width,
				document.getElementsByClassName('game')[0].height];

			tileset = new Image();
			tileset.onerror = function()
			{
				ctx = null;
				alert("Failed loading tileset.");
			};
			tileset.onload = function() { tilesetLoaded = true; };
			tileset.src = tilesetURL;

			for(x in tileTypes)
			{
				tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;

				if(tileTypes[x].animated)
				{
					var t = 0;
					
					for(s in tileTypes[x].sprite)
					{
						tileTypes[x].sprite[s]['start'] = t;
						t+= tileTypes[x].sprite[s].d;
						tileTypes[x].sprite[s]['end'] = t;
					}

					tileTypes[x]['spriteDuration'] = t;
				}
			}
		};

		$(document).on("click", function()
		{
			ctx = document.getElementsByClassName('game')[0].getContext("2d");
			requestAnimationFrame(drawGame);
			ctx.font = "bold 10pt sans-serif";

			$(".Move_North").on("click", function(){
				if(keysDown[38] == false){
					console.log("North is click"), keysDown[38]=true;
				} //else console.log("North is unclick"), keysDown[37]=false;
			});
			$(".Move_East").on("click", function(){
				if(keysDown[37] == false){
					console.log("East is click"), keysDown[37]=true;
				} //else console.log("East is unclick"), keysDown[37]=false;
			});
			$(".Move_West").on("click", function(){
				if(keysDown[39] == false){
					console.log("West is click"), keysDown[39]=true;
				} //else console.log("West is unclick"), keysDown[39]=false;
			});
			$(".Move_South").on("click", function(){
				if(keysDown[40] == false){
					console.log("South is click"), keysDown[40]=true;
				} //else console.log("South is unclick"), keysDown[40]=false;
			});

			window.addEventListener("keydown", function(e) {
				//if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
			});
			window.addEventListener("keyup", function(e) {
				//if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
				/*if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				}*/
			});

			viewport.screen = [document.getElementsByClassName('game')[0].width,
				document.getElementsByClassName('game')[0].height];

			tileset = new Image();
			tileset.onerror = function()
			{
				ctx = null;
				alert("Failed loading tileset.");
			};
			tileset.onload = function() { tilesetLoaded = true; };
			tileset.src = tilesetURL;

			for(x in tileTypes)
			{
				tileTypes[x]['animated'] = tileTypes[x].sprite.length > 1 ? true : false;

				if(tileTypes[x].animated)
				{
					var t = 0;
					
					for(s in tileTypes[x].sprite)
					{
						tileTypes[x].sprite[s]['start'] = t;
						t+= tileTypes[x].sprite[s].d;
						tileTypes[x].sprite[s]['end'] = t;
					}

					tileTypes[x]['spriteDuration'] = t;
				}
			}
		});

		function drawGame()
		{
			if(ctx==null) { return; }
			if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

			var currentFrameTime = Date.now();
			var timeElapsed = currentFrameTime - lastFrameTime;
			gameTime+= Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

			var sec = Math.floor(Date.now()/1000);
			if(sec!=currentSecond)
			{
				currentSecond = sec;
				framesLastSecond = frameCount;
				frameCount = 1;
			}
			else { frameCount++; }

			if(!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult!=0)
			{
				if(keysDown[38] && player.canMoveUp()) { player.moveUp(gameTime), console.log("North is unclick"), keysDown[38]=false; }
				else if(keysDown[38] && !player.canMoveUp()) { console.log("North is unclick"), keysDown[38]=false; }

				else if(keysDown[40] && player.canMoveDown()) { player.moveDown(gameTime), console.log("South is unclick"), keysDown[40]=false; }
				else if(keysDown[40] && !player.canMoveDown()) { console.log("South is unclick"), keysDown[40]=false; }

				else if(keysDown[37] && player.canMoveLeft()) { player.moveLeft(gameTime), console.log("East is unclick"), keysDown[37]=false; }
				else if(keysDown[37] && !player.canMoveLeft()) { console.log("East is unclick"), keysDown[37]=false; }

				else if(keysDown[39] && player.canMoveRight()) { player.moveRight(gameTime), console.log("West is unclick"), keysDown[39]=false; }
				else if(keysDown[39] && !player.canMoveRight()) { console.log("West is unclick"), keysDown[39]=false; }

			}

			viewport.update(player.position[0] + (player.dimensions[0]/2),
				player.position[1] + (player.dimensions[1]/2));

			ctx.fillStyle = "#000000";
			ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

			for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
			{
				for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
				{
					var tile = tileTypes[gameMap[toIndex(x,y)]];
					var sprite = getFrame(tile.sprite, tile.spriteDuration,
						gameTime, tile.animated);
					ctx.drawImage(tileset,
						sprite.x, sprite.y, sprite.w, sprite.h,
						viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH),
						tileW, tileH);
						
						ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour;
						ctx.fillRect( viewport.offset[0] + (x*tileW), viewport.offset[1] + (y*tileH), tileW, tileH);
						
				}
			}

			var sprite = player.sprites[player.direction];
			ctx.drawImage(tileset,
				sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
				viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
				player.dimensions[0], player.dimensions[1]);

			ctx.fillStyle = "#0000ff";
			ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
				player.dimensions[0], player.dimensions[1]);

			ctx.fillStyle = "#ff0000";
			//ctx.fillText("FPS: " + framesLastSecond, 10, 20);
			//ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

			lastFrameTime = currentFrameTime;
			requestAnimationFrame(drawGame);
		}

	}

}

//#endregion
