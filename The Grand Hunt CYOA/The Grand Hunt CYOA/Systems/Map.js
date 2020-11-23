// $('<p class=\'texts\'></p>').appendTo('#textbox');

// $('<center class=\'centers\'><button class=\'command_button buttons\' value=\' \'></button></center>').appendTo('#choicebox');

// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox').fadeIn(0);

// $('<button class=\'command_button e-buttons\' value=\'pistol\'>Pistol</button>').appendTo('#choicebox');

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
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

	var tileW = 40, tileH = 40;
	var mapW = 20, mapH = 20;
*/

/*
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0

  var tileW = 40, tileH = 40;
	var mapW = 15, mapH = 15;
*/

/*
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0

  var tileW = 40, tileH = 40;
	var mapW = 10, mapH = 10;
*/

function move (m) {
  switch (m) {
    case 'E' : { $('.Move_East').trigger('click'); console.log('Move East') } break
    case 'N' : { $('.Move_North').trigger('click'); console.log('Move North') } break
    case 'W' : { $('.Move_West').trigger('click'); console.log('Move West') } break
    case 'S' : { $('.Move_South').trigger('click'); console.log('Move South') }
  };
};

//setTimeout(function () {  }, 1000)

//$('canvas').clone().insertAfter('canvas').addClass('game')

c = document.getElementsByClassName('game')[0]

function clearCanvas (c) {
  // $(".game").remove();

  // $("canvas").clone().insertAfter("canvas").addClass("game");

  /* var ctx = c.getContext('2d');	// gets reference to canvas context
		ctx.beginPath();	// clear existing drawing paths
		ctx.save();	// store the current transformation matrix

		// Use the identity matrix while clearing the canvas
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, c.width, c.height);

		ctx.restore();	// restore the transform */

  // $(document).trigger("click"); Figure out how to do this manuel without click, but for now, use button to simiulate click.

  console.log('Wipe Canvas Clean?!?')
  CL()
}; // Look into window.onload and drawGame() to see if you can forced it to redraw as it only draw on window load but not afterward.

// #region Map of Star Nexus

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

function GM_StarNexus (a, b) {
  if (currentland == 'StarNexus') {
    console.log('Your location is GM_StarNexus')
    CL()

    let ctx = null
    const gameMap = [
      0, 0, 0, 0, 0, 3, 0, 0, 3, 3,
      0, 3, 3, 0, 3, 1, 3, 3, 1, 3,
      3, 1, 2, 4, 2, 2, 5, 2, 2, 3,
      0, 3, 3, 0, 3, 3, 3, 3, 2, 3,
      0, 0, 0, 0, 0, 0, 0, 3, 2, 3,
      0, 0, 0, 0, 0, 0, 0, 3, 2, 3,
      0, 0, 0, 3, 3, 3, 3, 3, 2, 3,
      0, 0, 0, 3, 2, 2, 2, 2, 2, 3,
      0, 0, 0, 3, 1, 1, 1, 3, 3, 3,
      0, 0, 0, 3, 1, 1, 1, 3, 0, 0
    ]
    const tileW = 40; const tileH = 40
    const mapW = 10; const mapH = 10
    let currentSecond = 0; let frameCount = 0; let framesLastSecond = 0; let lastFrameTime = 0

    const tileEvents = {
      15: Intro,
      94: JumptoMonsterLand,
      95: JumptoMonsterLand,
      96: JumptoMonsterLand
      // 121 : function(c) { c.placeAt(1,8); }
    }
    function drawBridge () {
      gameMap[toIndex(6, 2)] = (gameMap[toIndex(6, 2)] == 5 ? 2 : 2)
    };

    $(document).on('click', '.buttons', function () {
      const button = $(this).val()
      console.log('The Button is ' + button)
    })

    function Intro () {
      drawBridge()
      CCEvents('Intro2/2')
      //WalkStarNexus()
    };

    /*function WalkStarNexus () {
		 	setTimeout(function() {move('S')}, 1000);

			setTimeout(function() {move('E')}, 1500);

			setTimeout(function() {move('E')}, 2000);

			setTimeout(function() {move('E')}, 2500);

			setTimeout(function() {move('S')}, 3000);

			setTimeout(function() {move('S')}, 3500);

			setTimeout(function() {move('S')}, 4000);

			setTimeout(function() {move('S')}, 4500);

			setTimeout(function() {move('S')}, 5000);

			setTimeout(function() {move('W')}, 5500);

			setTimeout(function() {move('W')}, 6000);

      setTimeout(function() {move('W')}, 6500);

      // Set up condition? or nesting?

      // if cant solve, then ignored the animation and have normal movement and give desc of each tile. let player do it themselves.

    };*/

    function JumptoMonsterLand () {
      clearCanvas(c)
      currentland = 'MonsterLand'
      GM_MonsterLand()
      console.log(currentland)
    };

    let tileset = null; const tilesetURL = '/Game Projects/The Grand Hunt CYOA/Arts/tileset.png'; let tilesetLoaded = false

    let gameTime = 0
    const gameSpeeds = [
      { name: 'Normal', mult: 1 },
      { name: 'Slow', mult: 0.3 },
      { name: 'Fast', mult: 3 },
      { name: 'Paused', mult: 0 }
    ]
    const currentSpeed = 0

    const floorTypes = {
      solid: 0,
      path: 1,
      grass: 8
    }
    const tileTypes = {
      0: /* SS-void */ { colour: 'black', floor: floorTypes.solid, sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      1: /* SS-event */ { colour: 'goldenrod', floor: floorTypes.grass,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      2: /* SS-pathway */ { colour: 'grey', floor: floorTypes.path,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      3: /* SS-wall */ { colour: 'rgb(50, 50, 50)', floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      4: /* PSS-wall */ { colour: 'white', floor: floorTypes.path,	sprite: [{ x: 120, y: 0, w: 0, h: 0 }]	},
      5: /* SS-Swall */ { colour: 'silver', floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	}
    }

    const directions = {
      up: 0,
      right: 1,
      down: 2,
      left: 3
    }

    const keysDown = {
      37: false,
      38: false,
      39: false,
      40: false
    }

    const viewport = {
      screen: [0, 0],
      startTile: [0, 0],
      endTile: [0, 0],
      offset: [0, 0],
      update: function (px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px)
        this.offset[1] = Math.floor((this.screen[1] / 2) - py)

        const tile = [Math.floor(px / tileW), Math.floor(py / tileH)]

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 10) / tileW)
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 10) / tileH)

        if (this.startTile[0] < 0) { this.startTile[0] = 0 }
        if (this.startTile[1] < 0) { this.startTile[1] = 0 }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 10) / tileW)
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 10) / tileH)

        if (this.endTile[0] >= mapW) { this.endTile[0] = mapW - 1 }
        if (this.endTile[1] >= mapH) { this.endTile[1] = mapH - 1 }
      }
    }

    const player = new Character()

    function Character () {
      this.tileFrom	= [2, 2]
      if (a, b == undefined) {
        console.log('Undefined Starting Location, revert to default.')
        this.tileTo		= [1, 2]
      } else {
        console.log('Using (' + a + ',' + b + ') as Starting Location.')
        this.tileTo		= [a, b]
      }
      this.timeMoved	= 0
      this.dimensions	= [30, 30]
      this.position	= [45, 45]

      this.delayMove	= {}
      this.delayMove[floorTypes.path]			= 400
      this.delayMove[floorTypes.grass]		= 800

      this.direction	= directions.up
      this.sprites = {}
      this.sprites[directions.up]		= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.right]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.down]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.left]	= [{ x: 0, y: 0, w: 40, h: 40 }]
    }
    Character.prototype.placeAt = function (x, y) {
      this.tileFrom	= [x, y]
      this.tileTo		= [x, y]
      this.position	= [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
        ((tileH * y) + ((tileH - this.dimensions[1]) / 2))]
    }
    Character.prototype.processMovement = function (t) {
      if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false }

      const moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor]

      if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1])

        if (typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])] !== 'undefined') {
          tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this)
        }
      } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2)
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2)

        if (this.tileTo[0] != this.tileFrom[0]) {
          var diff = (tileW / moveSpeed) * (t - this.timeMoved)
          this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff)
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
          var diff = (tileH / moveSpeed) * (t - this.timeMoved)
          this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff)
        }

        this.position[0] = Math.round(this.position[0])
        this.position[1] = Math.round(this.position[1])
      }

      return true
    }
    Character.prototype.canMoveTo = function (x, y) {
      if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false }
      if (typeof this.delayMove[tileTypes[gameMap[toIndex(x, y)]].floor] === 'undefined') { return false }
      return true
    }
    Character.prototype.canMoveUp		= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1) }
    Character.prototype.canMoveDown 	= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1) }
    Character.prototype.canMoveLeft 	= function () { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]) }
    Character.prototype.canMoveRight 	= function () { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]) }
    Character.prototype.canMoveDirection = function (d) {
      switch (d) {
        case directions.up:
          return this.canMoveUp()
        case directions.down:
          return this.canMoveDown()
        case directions.left:
          return this.canMoveLeft()
        default:
          return this.canMoveRight()
      }
    }

    Character.prototype.moveLeft	= function (t) { this.tileTo[0] -= 1; this.timeMoved = t; this.direction = directions.left }
    Character.prototype.moveRight	= function (t) { this.tileTo[0] += 1; this.timeMoved = t; this.direction = directions.right }
    Character.prototype.moveUp		= function (t) { this.tileTo[1] -= 1; this.timeMoved = t; this.direction = directions.up }
    Character.prototype.moveDown	= function (t) { this.tileTo[1] += 1; this.timeMoved = t; this.direction = directions.down }
    Character.prototype.moveDirection = function (d, t) {
      switch (d) {
        case directions.up:
          return this.moveUp(t)
        case directions.down:
          return this.moveDown(t)
        case directions.left:
          return this.moveLeft(t)
        default:
          return this.moveRight(t)
      }
    }

    function toIndex (x, y) {
      return ((y * mapW) + x)
    }

    function getFrame (sprite, duration, time, animated) {
      if (!animated) { return sprite[0] }
      time = time % duration

      for (x in sprite) {
        if (sprite[x].end >= time) { return sprite[x] }
      }
    }

    window.onload = function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('East is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('West is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    }

    $(window).on('click', function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('West is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('East is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    })

    function drawGame () {
      if (ctx == null) { return }
      if (!tilesetLoaded) { requestAnimationFrame(drawGame); return }

      const currentFrameTime = Date.now()
      const timeElapsed = currentFrameTime - lastFrameTime
      gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult)

      const sec = Math.floor(Date.now() / 1000)
      if (sec != currentSecond) {
        currentSecond = sec
        framesLastSecond = frameCount
        frameCount = 1
      } else { frameCount++ }

      if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
        if (keysDown[38] && player.canMoveUp()) { player.moveUp(gameTime), console.log('North is unclick'), keysDown[38] = false } else if (keysDown[38] && !player.canMoveUp()) { console.log('North is blocked'), keysDown[38] = false } else if (keysDown[40] && player.canMoveDown()) { player.moveDown(gameTime), console.log('South is unclick'), keysDown[40] = false } else if (keysDown[40] && !player.canMoveDown()) { console.log('South is blocked'), keysDown[40] = false } else if (keysDown[37] && player.canMoveLeft()) { player.moveLeft(gameTime), console.log('West is unclick'), keysDown[37] = false } else if (keysDown[37] && !player.canMoveLeft()) { console.log('West is blocked'), keysDown[37] = false } else if (keysDown[39] && player.canMoveRight()) { player.moveRight(gameTime), console.log('East is unclick'), keysDown[39] = false } else if (keysDown[39] && !player.canMoveRight()) { console.log('East is blocked'), keysDown[39] = false }
      }

      viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2))

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1])

      for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
        for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
          ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour
          ctx.fillRect(viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH), tileW, tileH)

          const tile = tileTypes[gameMap[toIndex(x, y)]]
          var sprite = getFrame(tile.sprite, tile.spriteDuration,
            gameTime, tile.animated)
          ctx.drawImage(tileset,
            sprite.x, sprite.y, sprite.w, sprite.h,
            viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH),
            tileW, tileH)
        }
      }

      ctx.fillStyle = '#0000ff'
      ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      var sprite = player.sprites[player.direction]
      ctx.drawImage(tileset,
        sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
        viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      ctx.fillStyle = '#ff0000'
      // ctx.fillText("FPS: " + framesLastSecond, 10, 20);
      // ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

      lastFrameTime = currentFrameTime
      requestAnimationFrame(drawGame)
    }
  }

  $(window).trigger('click')
}

// #endregion

// #region Map of Monster Land

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

function GM_MonsterLand () {
  if (currentland == 'MonsterLand') {
    console.log('Your location is GM_MonsterLand')
    CL()

    let ctx = null
    const gameMap = [
      2, 3, 3,
      2, 2, 3,
      3, 2, 1
    ]
    const tileW = 40; const tileH = 40
    const mapW = 3; const mapH = 3
    let currentSecond = 0; let frameCount = 0; let framesLastSecond = 0; let lastFrameTime = 0

    const tileEvents = {
      8: JumptoStarNexus
    }

    $(document).on('click', '.buttons', function () {
      const button = $(this).val()
      console.log('The Button is ' + button)
    })

    function JumptoStarNexus () {
      clearCanvas(c)
      currentland = 'StarNexus'
      GM_StarNexus()
      console.log(currentland)
    };

    let tileset = null; const tilesetURL = '/Game Projects/The Grand Hunt CYOA/Arts/tileset.png'; let tilesetLoaded = false

    let gameTime = 0
    const gameSpeeds = [
      { name: 'Normal', mult: 1 },
      { name: 'Slow', mult: 0.3 },
      { name: 'Fast', mult: 3 },
      { name: 'Paused', mult: 0 }
    ]
    const currentSpeed = 0

    const floorTypes = {
      solid: 0,
      path: 1,
      grass: 8
    }
    const tileTypes = {
      0: /* Mountain */ { colour: 'darkorange', floor: floorTypes.solid, sprite: [{ x: 0, y: 0, w: 40, h: 40 }]	},
      1: /* ML-event */ { colour: 'orange', floor: floorTypes.grass,	sprite: [{ x: 40, y: 0, w: 40, h: 40 }]	},
      2: /* ML-pathway */ { colour: 'goldenrod', floor: floorTypes.path,	sprite: [{ x: 80, y: 0, w: 40, h: 40 }]	},
      3: /* ML-desert */ { colour: 'darkorange', floor: floorTypes.solid,	sprite: [{ x: 120, y: 0, w: 40, h: 40 }]	}
    }

    const directions = {
      up: 0,
      right: 1,
      down: 2,
      left: 3
    }

    const keysDown = {
      37: false,
      38: false,
      39: false,
      40: false
    }

    const viewport = {
      screen: [0, 0],
      startTile: [0, 0],
      endTile: [0, 0],
      offset: [0, 0],
      update: function (px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px)
        this.offset[1] = Math.floor((this.screen[1] / 2) - py)

        const tile = [Math.floor(px / tileW), Math.floor(py / tileH)]

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 10) / tileW)
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 10) / tileH)

        if (this.startTile[0] < 0) { this.startTile[0] = 0 }
        if (this.startTile[1] < 0) { this.startTile[1] = 0 }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 10) / tileW)
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 10) / tileH)

        if (this.endTile[0] >= mapW) { this.endTile[0] = mapW - 1 }
        if (this.endTile[1] >= mapH) { this.endTile[1] = mapH - 1 }
      }
    }

    const player = new Character()

    function Character () {
      this.tileFrom	= [1, 1]
      this.tileTo		= [0, 0]
      this.timeMoved	= 0
      this.dimensions	= [30, 30]
      this.position	= [45, 45]

      this.delayMove	= {}
      this.delayMove[floorTypes.path]			= 400
      this.delayMove[floorTypes.grass]		= 800

      this.direction	= directions.up
      this.sprites = {}
      this.sprites[directions.up]		= [{ x: 0, y: 120, w: 30, h: 30 }]
      this.sprites[directions.right]	= [{ x: 0, y: 150, w: 30, h: 30 }]
      this.sprites[directions.down]	= [{ x: 0, y: 180, w: 30, h: 30 }]
      this.sprites[directions.left]	= [{ x: 0, y: 210, w: 30, h: 30 }]
    }
    Character.prototype.placeAt = function (x, y) {
      this.tileFrom	= [x, y]
      this.tileTo		= [x, y]
      this.position	= [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
        ((tileH * y) + ((tileH - this.dimensions[1]) / 2))]
    }
    Character.prototype.processMovement = function (t) {
      if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false }

      const moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor]

      if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1])

        if (typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])] !== 'undefined') {
          tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this)
        }
      } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2)
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2)

        if (this.tileTo[0] != this.tileFrom[0]) {
          var diff = (tileW / moveSpeed) * (t - this.timeMoved)
          this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff)
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
          var diff = (tileH / moveSpeed) * (t - this.timeMoved)
          this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff)
        }

        this.position[0] = Math.round(this.position[0])
        this.position[1] = Math.round(this.position[1])
      }

      return true
    }
    Character.prototype.canMoveTo = function (x, y) {
      if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false }
      if (typeof this.delayMove[tileTypes[gameMap[toIndex(x, y)]].floor] === 'undefined') { return false }
      return true
    }
    Character.prototype.canMoveUp		= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1) }
    Character.prototype.canMoveDown 	= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1) }
    Character.prototype.canMoveLeft 	= function () { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]) }
    Character.prototype.canMoveRight 	= function () { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]) }
    Character.prototype.canMoveDirection = function (d) {
      switch (d) {
        case directions.up:
          return this.canMoveUp()
        case directions.down:
          return this.canMoveDown()
        case directions.left:
          return this.canMoveLeft()
        default:
          return this.canMoveRight()
      }
    }

    Character.prototype.moveLeft	= function (t) { this.tileTo[0] -= 1; this.timeMoved = t; this.direction = directions.left }
    Character.prototype.moveRight	= function (t) { this.tileTo[0] += 1; this.timeMoved = t; this.direction = directions.right }
    Character.prototype.moveUp		= function (t) { this.tileTo[1] -= 1; this.timeMoved = t; this.direction = directions.up }
    Character.prototype.moveDown	= function (t) { this.tileTo[1] += 1; this.timeMoved = t; this.direction = directions.down }
    Character.prototype.moveDirection = function (d, t) {
      switch (d) {
        case directions.up:
          return this.moveUp(t)
        case directions.down:
          return this.moveDown(t)
        case directions.left:
          return this.moveLeft(t)
        default:
          return this.moveRight(t)
      }
    }

    function toIndex (x, y) {
      return ((y * mapW) + x)
    }

    function getFrame (sprite, duration, time, animated) {
      if (!animated) { return sprite[0] }
      time = time % duration

      for (x in sprite) {
        if (sprite[x].end >= time) { return sprite[x] }
      }
    }

    window.onload = function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('East is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('West is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    }

    $(window).on('click', function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('East is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('West is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    })

    function drawGame () {
      if (ctx == null) { return }
      if (!tilesetLoaded) { requestAnimationFrame(drawGame); return }

      const currentFrameTime = Date.now()
      const timeElapsed = currentFrameTime - lastFrameTime
      gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult)

      const sec = Math.floor(Date.now() / 1000)
      if (sec != currentSecond) {
        currentSecond = sec
        framesLastSecond = frameCount
        frameCount = 1
      } else { frameCount++ }

      if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
        if (keysDown[38] && player.canMoveUp()) { player.moveUp(gameTime), console.log('North is unclick'), keysDown[38] = false } else if (keysDown[38] && !player.canMoveUp()) { console.log('North is blocked'), keysDown[38] = false } else if (keysDown[40] && player.canMoveDown()) { player.moveDown(gameTime), console.log('South is unclick'), keysDown[40] = false } else if (keysDown[40] && !player.canMoveDown()) { console.log('South is blocked'), keysDown[40] = false } else if (keysDown[37] && player.canMoveLeft()) { player.moveLeft(gameTime), console.log('West is unclick'), keysDown[37] = false } else if (keysDown[37] && !player.canMoveLeft()) { console.log('West is blocked'), keysDown[37] = false } else if (keysDown[39] && player.canMoveRight()) { player.moveRight(gameTime), console.log('East is unclick'), keysDown[39] = false } else if (keysDown[39] && !player.canMoveRight()) { console.log('East is blocked'), keysDown[39] = false }
      }

      viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2))

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1])

      for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
        for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
          ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour
          ctx.fillRect(viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH), tileW, tileH)

          const tile = tileTypes[gameMap[toIndex(x, y)]]
          var sprite = getFrame(tile.sprite, tile.spriteDuration,
            gameTime, tile.animated)
          ctx.drawImage(tileset,
            sprite.x, sprite.y, sprite.w, sprite.h,
            viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH),
            tileW, tileH)
        }
      }

      ctx.fillStyle = '#0000ff'
      ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      var sprite = player.sprites[player.direction]
      ctx.drawImage(tileset,
        sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
        viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      ctx.fillStyle = '#ff0000'
      // ctx.fillText("FPS: " + framesLastSecond, 10, 20);
      // ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

      lastFrameTime = currentFrameTime
      requestAnimationFrame(drawGame)
    }
  }

  $(window).trigger('click')
}

// #endregion

// #region Map of Origin

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

function GM_Origin (a, b) {
  if (currentland == 'Origin') {
    console.log('Your location is GM_Origin')
    CL()

    let ctx = null
    const gameMap = [
      3, 3, 3, 0, 0, 4, 3, 3, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      3, 1, 3, 0, 0, 4, 3, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      3, 2, 2, 0, 0, 4, 4, 1, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      3, 3, 3, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 6, 3, 2, 3, 6, 2, 6,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 2, 3, 2, 3, 3, 2, 3,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 3,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 3, 4, 4, 4,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 7, 2, 3, 4, 4, 4,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 3, 6, 5, 3,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 3, 8, 2, 6, 3, 3, 3
    ]
    const tileW = 40; const tileH = 40
    const mapW = 20; const mapH = 20
    let currentSecond = 0; let frameCount = 0; let framesLastSecond = 0; let lastFrameTime = 0

    // Remember that player only have two tile vision range.

    const tileEvents = {
      27: WalktoBalony,
      379: WalktoParent,
      334: ConfrontGangMethod,
      372: Escape,
    }

    $(document).on('click', '.buttons', function () {
      const button = $(this).val()
      console.log('The Button is ' + button)
    })

    let tileset = null; const tilesetURL = '/Game Projects/The Grand Hunt CYOA/Arts/tileset.png'; let tilesetLoaded = false

    let gameTime = 0
    const gameSpeeds = [
      { name: 'Normal', mult: 1 },
      { name: 'Slow', mult: 0.3 },
      { name: 'Fast', mult: 3 },
      { name: 'Paused', mult: 0 }
    ]
    const currentSpeed = 0

    const floorTypes = {
      solid: 0,
      path: 1,
      grass: 8
    }
    const tileTypes = {
      0: /* SH-void */ { colour: 'black', floor: floorTypes.solid, sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      1: /* SH-event */ { colour: 'goldenrod', floor: floorTypes.path,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      2: /* SH-pathway */ { colour: 'grey', floor: floorTypes.path,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      3: /* SH-wall */ { colour: 'rgb(50, 50, 50)'/* darker grey */, floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      4: /* SH-water */ { colour: 'blue', floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      5: /* SH-shop */ { colour: 'silver', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] },
      6: /* SH-house */ { colour: 'brown', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] },
      7: /* SH-parenthouse */ { colour: 'red', floor: floorTypes.grass, sprite: [{ x: 0, y: 160, w: 40, h: 40 }] },
      8: /* SH-police */ { colour: 'blue', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] }
    }

    function WalktoBalony () {
      Systems('Movement')
    };

    function WalktoParent () {

    };

    // make one for each origin, the flee go south left, confront go to yellow tile, and call will summon shifting red/blue police or black/green gang toward your house from blue police station to the south at crossroad.

    function ConfrontGangMethod () {

      //$('.buttons').remove()
      //$('.centers').remove()

      cleanChoice()

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'AH_Adventurer\'>Flee, as they are too many and you are one.</button></center><br class=\'brs\'>').appendTo('#choicebox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'AH_BountyHunter\'>Fight them motherfucka!</button></center><br class=\'brs\'>').appendTo('#choicebox')

      $('<center class=\'centers\'><button class=\'command_button buttons\' value=\'AH_Mercenary\'>Report to the security.</button></center><br class=\'brs\'>').appendTo('#choicebox')

      if (OBG == 'Adventurer' && prologue == true) {
        clean()
        $('<p class=\'texts\'>There is too many of them and I am only one man. I need to escape before they notice that I am here!' + br +'(Flee to dark-orange tile in south-west.)</p>').appendTo('#textbox')
        gameMap[toIndex(12, 18)] = (gameMap[toIndex(12, 18)] == 2 ? 1 : 1)
      }
      
      else if (OBG == 'Bounty Hunter' && prologue == true) {
        $('<p class=\'texts\'>I go to fight them even if it cost me my life!'+ br +'(Face them in dark-orange tile.)</p>').appendTo('#textbox')
        gameMap[toIndex(15, 14)] = (gameMap[toIndex(15, 14)] == 2 ? 1 : 1)
      }
      
      else if (OBG == 'Mercenary' && prologue == true) {
        $('<p class=\'texts\'>Why not call security on them.</p>').appendTo('#textbox')
      }
      
      else {
        console.log('A second have passed since last second')
        setTimeout(function () { ConfrontGangMethod() }, 1000)
      };
    };

    function Escape() {
      $('<p class=\'texts\'>(You successful escape the conflict zone, and left your parent unavenged, hopeful you wont do it again... You COWARD!)</p>').appendTo('#textbox')
      currentland = 'A_Tutorial'
      GM_A_Tutorial(4,4)
    }

    const directions = {
      up: 0,
      right: 1,
      down: 2,
      left: 3
    }

    const keysDown = {
      37: false,
      38: false,
      39: false,
      40: false
    }

    const viewport = {
      screen: [0, 0],
      startTile: [0, 0],
      endTile: [0, 0],
      offset: [0, 0],
      update: function (px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px)
        this.offset[1] = Math.floor((this.screen[1] / 2) - py)

        const tile = [Math.floor(px / tileW), Math.floor(py / tileH)]

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 10) / tileW)
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 10) / tileH)

        if (this.startTile[0] < 0) { this.startTile[0] = 0 }
        if (this.startTile[1] < 0) { this.startTile[1] = 0 }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 10) / tileW)
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 10) / tileH)

        if (this.endTile[0] >= mapW) { this.endTile[0] = mapW - 1 }
        if (this.endTile[1] >= mapH) { this.endTile[1] = mapH - 1 }
      }
    }

    const player = new Character()

    function Character () {
      this.tileFrom	= [1, 1]
      if (a, b == undefined) {
        console.log('Undefined Starting Location, revert to default.')
        this.tileTo		= [1, 1]
      } else {
        console.log('Using (' + a + ',' + b + ') as Starting Location.')
        this.tileTo		= [a, b]
      }
      this.timeMoved	= 0
      this.dimensions	= [30, 30]
      this.position	= [45, 45]

      this.delayMove	= {}
      this.delayMove[floorTypes.path]			= 400
      this.delayMove[floorTypes.grass]		= 800

      this.direction	= directions.up
      this.sprites = {}
      this.sprites[directions.up]		= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.right]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.down]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.left]	= [{ x: 0, y: 0, w: 40, h: 40 }]
    }
    Character.prototype.placeAt = function (x, y) {
      this.tileFrom	= [x, y]
      this.tileTo		= [x, y]
      this.position	= [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
        ((tileH * y) + ((tileH - this.dimensions[1]) / 2))]
    }
    Character.prototype.processMovement = function (t) {
      if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false }

      const moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor]

      if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1])

        if (typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])] !== 'undefined') {
          tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this)
          console.log('Nothing special on this tile.')
        }
      } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2)
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2)

        if (this.tileTo[0] != this.tileFrom[0]) {
          var diff = (tileW / moveSpeed) * (t - this.timeMoved)
          this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff)
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
          var diff = (tileH / moveSpeed) * (t - this.timeMoved)
          this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff)
        }

        this.position[0] = Math.round(this.position[0])
        this.position[1] = Math.round(this.position[1])
      }

      return true
    }
    Character.prototype.canMoveTo = function (x, y) {
      if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false }
      if (typeof this.delayMove[tileTypes[gameMap[toIndex(x, y)]].floor] === 'undefined') { return false }
      return true
    }
    Character.prototype.canMoveUp		= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1) }
    Character.prototype.canMoveDown 	= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1) }
    Character.prototype.canMoveLeft 	= function () { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]) }
    Character.prototype.canMoveRight 	= function () { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]) }
    Character.prototype.canMoveDirection = function (d) {
      switch (d) {
        case directions.up:
          return this.canMoveUp()
        case directions.down:
          return this.canMoveDown()
        case directions.left:
          return this.canMoveLeft()
        default:
          return this.canMoveRight()
      }
    }

    Character.prototype.moveLeft	= function (t) { this.tileTo[0] -= 1; this.timeMoved = t; this.direction = directions.left }
    Character.prototype.moveRight	= function (t) { this.tileTo[0] += 1; this.timeMoved = t; this.direction = directions.right }
    Character.prototype.moveUp		= function (t) { this.tileTo[1] -= 1; this.timeMoved = t; this.direction = directions.up }
    Character.prototype.moveDown	= function (t) { this.tileTo[1] += 1; this.timeMoved = t; this.direction = directions.down }
    Character.prototype.moveDirection = function (d, t) {
      switch (d) {
        case directions.up:
          return this.moveUp(t)
        case directions.down:
          return this.moveDown(t)
        case directions.left:
          return this.moveLeft(t)
        default:
          return this.moveRight(t)
      }
    }

    function toIndex (x, y) {
      return ((y * mapW) + x)
    }

    function getFrame (sprite, duration, time, animated) {
      if (!animated) { return sprite[0] }
      time = time % duration

      for (x in sprite) {
        if (sprite[x].end >= time) { return sprite[x] }
      }
    }

    window.onload = function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('East is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('West is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    }

    $(window).on('click', function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('West is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('East is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    })

    function drawGame () {
      if (ctx == null) { return }
      if (!tilesetLoaded) { requestAnimationFrame(drawGame); return }

      const currentFrameTime = Date.now()
      const timeElapsed = currentFrameTime - lastFrameTime
      gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult)

      const sec = Math.floor(Date.now() / 1000)
      if (sec != currentSecond) {
        currentSecond = sec
        framesLastSecond = frameCount
        frameCount = 1
      } else { frameCount++ }

      if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
        if (keysDown[38] && player.canMoveUp()) { player.moveUp(gameTime), console.log('North is unclick'), keysDown[38] = false } else if (keysDown[38] && !player.canMoveUp()) { console.log('North is blocked'), keysDown[38] = false } else if (keysDown[40] && player.canMoveDown()) { player.moveDown(gameTime), console.log('South is unclick'), keysDown[40] = false } else if (keysDown[40] && !player.canMoveDown()) { console.log('South is blocked'), keysDown[40] = false } else if (keysDown[37] && player.canMoveLeft()) { player.moveLeft(gameTime), console.log('West is unclick'), keysDown[37] = false } else if (keysDown[37] && !player.canMoveLeft()) { console.log('West is blocked'), keysDown[37] = false } else if (keysDown[39] && player.canMoveRight()) { player.moveRight(gameTime), console.log('East is unclick'), keysDown[39] = false } else if (keysDown[39] && !player.canMoveRight()) { console.log('East is blocked'), keysDown[39] = false }
      }

      viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2))

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1])

      for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
        for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
          ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour
          ctx.fillRect(viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH), tileW, tileH)

          const tile = tileTypes[gameMap[toIndex(x, y)]]
          var sprite = getFrame(tile.sprite, tile.spriteDuration,
            gameTime, tile.animated)
          ctx.drawImage(tileset,
            sprite.x, sprite.y, sprite.w, sprite.h,
            viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH),
            tileW, tileH)
        }
      }

      ctx.fillStyle = '#0000ff'
      ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      var sprite = player.sprites[player.direction]
      ctx.drawImage(tileset,
        sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
        viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      ctx.fillStyle = '#ff0000'
      // ctx.fillText("FPS: " + framesLastSecond, 10, 20);
      // ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

      lastFrameTime = currentFrameTime
      requestAnimationFrame(drawGame)
    }
  }

  $(window).trigger('click')
}

// #endregion

// #region Map of A_Tutorial

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

var Begin_A_T = false;

function GM_A_Tutorial (a, b) {
  if (currentland == 'A_Tutorial' && prologue == true && OBG == 'Adventurer') {
    console.log('Your location is GM_A_Tutorial')
    CL()

    let ctx = null
    // Desert planet for cultist and star horror.
    const gameMap = [
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      2, 2, 2, 4, 2, 2, 2, 2, 5, 2,
      2, 5, 3, 2, 2, 2, 2, 2, 3, 2,
      2, 2, 2, 2, 2, 4, 3, 2, 3, 2,
      2, 2, 3, 3, 1, 2, 3, 2, 4, 2,
      2, 2, 2, 2, 2, 2, 7, 7, 7, 2,
      2, 2, 2, 2, 3, 5, 7, 6, 7, 2,
      2, 2, 3, 2, 3, 3, 7, 6, 7, 2,
      2, 4, 2, 2, 2, 2, 7, 7, 7, 2,
      2, 2, 2, 2, 2, 2, 2, 2, 2, 2
    ]
    const tileW = 40; const tileH = 40
    const mapW = 10; const mapH = 10
    let currentSecond = 0; let frameCount = 0; let framesLastSecond = 0; let lastFrameTime = 0

    // Remember that player only have two tile vision range.

    const tileEvents = {
      //#region 0-9
      0 :A, 
      1 :A, 
      2 :A, 
      3 :A, 
      4 :A, 
      5 :A, 
      6 :A, 
      7 :A, 
      8 :A, 
      9 :A, 
      //#endregion
      //#region 10-19
      10 :A, 
      11 :A, 
      12 :A, 
      13 :A, 
      14 :A, 
      15 :A, 
      16 :A, 
      17 :A, 
      18 :A, 
      19 :A, 
      //#endregion 
      //#region 20-29
      20 :A, 
      21 :A, 
      22 :A, 
      23 :A, 
      24 :A, 
      25 :A, 
      26 :A, 
      27 :A, 
      28 :A, 
      29 :A, 
      //#endregion
      //#region 30-39
      30 :A, 
      31 :A, 
      32 :A, 
      33 :A, 
      34 :A, 
      35 :A, 
      36 :A, 
      37 :A, 
      38 :A, 
      39 :A, 
      //#endregion
      //#region 40-49
      40 :A, 
      41 :A, 
      42 :A, 
      43 :A, 
      44 : A_Tutorial,
      45 :A, 
      46 :A, 
      47 :A, 
      48 :A, 
      49 :A, 
      //#endregion
      //#region 50-59
      50 :A, 
      51 :A, 
      52 :A, 
      53 :A, 
      54 :A, 
      55 :A, 
      56 :A, 
      57 :A, 
      58 :A, 
      59 :A, 
      //#endregion
      //#region 60-69
      60 :A, 
      61 :A, 
      62 :A, 
      63 :A, 
      64 :A, 
      65 :A, 
      66 :A, 
      67 :A, 
      68 :A, 
      69 :A, 
      //#endregion
      //#region 70-79
      70 :A, 
      71 :A, 
      72 :A, 
      73 :A, 
      74 :A, 
      75 :A, 
      76 :A, 
      77 :A, 
      78 :A, 
      79 :A, 
      //#endregion
      //#region 80-89
      80 :A, 
      81 :A, 
      82 :A, 
      83 :A, 
      84 :A, 
      85 :A, 
      86 :A, 
      87 :A, 
      88 :A, 
      89 :A, 
      //#endregion
      //#region 90-99
      90 :A, 
      91 :A, 
      92 :A, 
      93 :A, 
      94 :A, 
      95 :A, 
      96 :A, 
      97 :A, 
      98 :A, 
      99 :A, 
      //#endregion
    }

    let tileset = null; const tilesetURL = '/Game Projects/The Grand Hunt CYOA/Arts/tileset.png'; let tilesetLoaded = false

    let gameTime = 0
    const gameSpeeds = [
      { name: 'Normal', mult: 1 },
      { name: 'Slow', mult: 0.3 },
      { name: 'Fast', mult: 3 },
      { name: 'Paused', mult: 0 }
    ]
    const currentSpeed = 0

    const floorTypes = {
      solid: 0,
      path: 1,
      grass: 8
    }
    const tileTypes = {
      0: /* T_void */ { colour: 'black', floor: floorTypes.solid, sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      1: /* recall station */ { colour: 'silver', floor: floorTypes.path,	sprite: [{ x: 0, y: 40, w: 40, h: 40 }]	},
      2: /* T-sand */ { colour: 'tan', floor: floorTypes.grass,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      3: /* T-harden_sand */ { colour: 'sandybrown', floor: floorTypes.path,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      4: /* T-sandblock */ { colour: 'saddlebrown', floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      5: /* temple */ { colour: 'gray', floor: floorTypes.grass,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      6: /* water */ { colour: 'blue', floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      7: /* trees */ { colour: 'green', floor: floorTypes.grass,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      
    }

    $(document).on('click', '.buttons', function () {
      const button = $(this).val()
      console.log('The Button is ' + button)
    })

    function A() {
      DE()
    } // This is just to avoid error from A in tileEvents.
    
    function A_Tutorial() {
      if (Begin_A_T == false && prologue == true) {
        CCEvents('Origin Background')
        Begin_A_T = true
      }
    }

    const directions = {
      up: 0,
      right: 1,
      down: 2,
      left: 3
    }

    const keysDown = {
      37: false,
      38: false,
      39: false,
      40: false
    }

    const viewport = {
      screen: [0, 0],
      startTile: [0, 0],
      endTile: [0, 0],
      offset: [0, 0],
      update: function (px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px)
        this.offset[1] = Math.floor((this.screen[1] / 2) - py)

        const tile = [Math.floor(px / tileW), Math.floor(py / tileH)]

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 10) / tileW)
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 10) / tileH)

        if (this.startTile[0] < 0) { this.startTile[0] = 0 }
        if (this.startTile[1] < 0) { this.startTile[1] = 0 }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 10) / tileW)
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 10) / tileH)

        if (this.endTile[0] >= mapW) { this.endTile[0] = mapW - 1 }
        if (this.endTile[1] >= mapH) { this.endTile[1] = mapH - 1 }
      }
    }

    const player = new Character()

    function Character () {
      this.tileFrom	= [1, 1]
      if (a, b == undefined) {
        console.log('Undefined Starting Location, revert to default.')
        this.tileTo		= [4, 4]
      } else {
        console.log('Using (' + a + ',' + b + ') as Starting Location.')
        this.tileTo		= [a, b]
      }
      this.timeMoved	= 0
      this.dimensions	= [30, 30]
      this.position	= [45, 45]

      this.delayMove	= {}
      this.delayMove[floorTypes.path]			= 400
      this.delayMove[floorTypes.grass]		= 800

      this.direction	= directions.up
      this.sprites = {}
      this.sprites[directions.up]		= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.right]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.down]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.left]	= [{ x: 0, y: 0, w: 40, h: 40 }]
    }
    Character.prototype.placeAt = function (x, y) {
      this.tileFrom	= [x, y]
      this.tileTo		= [x, y]
      this.position	= [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
        ((tileH * y) + ((tileH - this.dimensions[1]) / 2))]
    }
    Character.prototype.processMovement = function (t) {
      if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false }

      const moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor]

      if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1])

        if (typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])] !== 'undefined') {
          tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this)
          console.log('Something special on this tile.')
        }
      } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2)
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2)

        if (this.tileTo[0] != this.tileFrom[0]) {
          var diff = (tileW / moveSpeed) * (t - this.timeMoved)
          this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff)
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
          var diff = (tileH / moveSpeed) * (t - this.timeMoved)
          this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff)
        }

        this.position[0] = Math.round(this.position[0])
        this.position[1] = Math.round(this.position[1])
      }

      return true
    }
    Character.prototype.canMoveTo = function (x, y) {
      if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false }
      if (typeof this.delayMove[tileTypes[gameMap[toIndex(x, y)]].floor] === 'undefined') { return false }
      return true
    }
    Character.prototype.canMoveUp		= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1) }
    Character.prototype.canMoveDown 	= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1) }
    Character.prototype.canMoveLeft 	= function () { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]) }
    Character.prototype.canMoveRight 	= function () { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]) }
    Character.prototype.canMoveDirection = function (d) {
      switch (d) {
        case directions.up:
          return this.canMoveUp()
        case directions.down:
          return this.canMoveDown()
        case directions.left:
          return this.canMoveLeft()
        default:
          return this.canMoveRight()
      }
    }

    Character.prototype.moveLeft	= function (t) { this.tileTo[0] -= 1; this.timeMoved = t; this.direction = directions.left }
    Character.prototype.moveRight	= function (t) { this.tileTo[0] += 1; this.timeMoved = t; this.direction = directions.right }
    Character.prototype.moveUp		= function (t) { this.tileTo[1] -= 1; this.timeMoved = t; this.direction = directions.up }
    Character.prototype.moveDown	= function (t) { this.tileTo[1] += 1; this.timeMoved = t; this.direction = directions.down }
    Character.prototype.moveDirection = function (d, t) {
      switch (d) {
        case directions.up:
          return this.moveUp(t)
        case directions.down:
          return this.moveDown(t)
        case directions.left:
          return this.moveLeft(t)
        default:
          return this.moveRight(t)
      }
    }

    function toIndex (x, y) {
      return ((y * mapW) + x)
    }

    function getFrame (sprite, duration, time, animated) {
      if (!animated) { return sprite[0] }
      time = time % duration

      for (x in sprite) {
        if (sprite[x].end >= time) { return sprite[x] }
      }
    }

    window.onload = function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('East is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('West is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    }

    $(window).on('click', function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('West is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('East is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    })

    function drawGame () {
      if (ctx == null) { return }
      if (!tilesetLoaded) { requestAnimationFrame(drawGame); return }

      const currentFrameTime = Date.now()
      const timeElapsed = currentFrameTime - lastFrameTime
      gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult)

      const sec = Math.floor(Date.now() / 1000)
      if (sec != currentSecond) {
        currentSecond = sec
        framesLastSecond = frameCount
        frameCount = 1
      } else { frameCount++ }

      if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
        if (keysDown[38] && player.canMoveUp()) { player.moveUp(gameTime), console.log('North is unclick'), keysDown[38] = false } else if (keysDown[38] && !player.canMoveUp()) { console.log('North is blocked'), keysDown[38] = false } else if (keysDown[40] && player.canMoveDown()) { player.moveDown(gameTime), console.log('South is unclick'), keysDown[40] = false } else if (keysDown[40] && !player.canMoveDown()) { console.log('South is blocked'), keysDown[40] = false } else if (keysDown[37] && player.canMoveLeft()) { player.moveLeft(gameTime), console.log('West is unclick'), keysDown[37] = false } else if (keysDown[37] && !player.canMoveLeft()) { console.log('West is blocked'), keysDown[37] = false } else if (keysDown[39] && player.canMoveRight()) { player.moveRight(gameTime), console.log('East is unclick'), keysDown[39] = false } else if (keysDown[39] && !player.canMoveRight()) { console.log('East is blocked'), keysDown[39] = false }
      }

      viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2))

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1])

      for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
        for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
          ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour
          ctx.fillRect(viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH), tileW, tileH)

          const tile = tileTypes[gameMap[toIndex(x, y)]]
          var sprite = getFrame(tile.sprite, tile.spriteDuration,
            gameTime, tile.animated)
          ctx.drawImage(tileset,
            sprite.x, sprite.y, sprite.w, sprite.h,
            viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH),
            tileW, tileH)
        }
      }

      ctx.fillStyle = '#0000ff'
      ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      var sprite = player.sprites[player.direction]
      ctx.drawImage(tileset,
        sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
        viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      ctx.fillStyle = '#ff0000'
      // ctx.fillText("FPS: " + framesLastSecond, 10, 20);
      // ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

      lastFrameTime = currentFrameTime
      requestAnimationFrame(drawGame)
    }
  }

  $(window).trigger('click')
}

// #endregion

// #region Map of BH_Tutorial

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

function GM_BH_Tutorial (a, b) {
  if (currentland == 'BH_Tutorial') {
    console.log('Your location is GM_BH_Tutorial')
    CL()

    let ctx = null
    const gameMap = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
    const tileW = 40; const tileH = 40
    const mapW = 20; const mapH = 20
    let currentSecond = 0; let frameCount = 0; let framesLastSecond = 0; let lastFrameTime = 0

    // Remember that player only have two tile vision range.

    const tileEvents = {
      /*42: WalktoBirth,
      21: Prologue,
      27: WalktoBalony,
      379: WalktoParent,
      334: ConfrontGangMethod*/
    }

    $(document).on('click', '.buttons', function () {
      const button = $(this).val()
      console.log('The Button is ' + button)
    })

    

    let tileset = null; const tilesetURL = '/Game Projects/The Grand Hunt CYOA/Arts/tileset.png'; let tilesetLoaded = false

    let gameTime = 0
    const gameSpeeds = [
      { name: 'Normal', mult: 1 },
      { name: 'Slow', mult: 0.3 },
      { name: 'Fast', mult: 3 },
      { name: 'Paused', mult: 0 }
    ]
    const currentSpeed = 0

    const floorTypes = {
      solid: 0,
      path: 1,
      grass: 8
    }
    const tileTypes = {
      0: /* SH-void */ { colour: 'black', floor: floorTypes.solid, sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      1: /* SH-event */ { colour: 'goldenrod', floor: floorTypes.path,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      2: /* SH-pathway */ { colour: 'grey', floor: floorTypes.path,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      3: /* SH-wall */ { colour: 'rgb(50, 50, 50)'/* darker grey */, floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      4: /* SH-water */ { colour: 'blue', floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      5: /* SH-shop */ { colour: 'silver', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] },
      6: /* SH-house */ { colour: 'brown', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] },
      7: /* SH-parenthouse */ { colour: 'red', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] },
      8: /* SH-police */ { colour: 'blue', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] }
    }

    const directions = {
      up: 0,
      right: 1,
      down: 2,
      left: 3
    }

    const keysDown = {
      37: false,
      38: false,
      39: false,
      40: false
    }

    const viewport = {
      screen: [0, 0],
      startTile: [0, 0],
      endTile: [0, 0],
      offset: [0, 0],
      update: function (px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px)
        this.offset[1] = Math.floor((this.screen[1] / 2) - py)

        const tile = [Math.floor(px / tileW), Math.floor(py / tileH)]

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 10) / tileW)
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 10) / tileH)

        if (this.startTile[0] < 0) { this.startTile[0] = 0 }
        if (this.startTile[1] < 0) { this.startTile[1] = 0 }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 10) / tileW)
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 10) / tileH)

        if (this.endTile[0] >= mapW) { this.endTile[0] = mapW - 1 }
        if (this.endTile[1] >= mapH) { this.endTile[1] = mapH - 1 }
      }
    }

    const player = new Character()

    function Character () {
      this.tileFrom	= [1, 1]
      if (a, b == undefined) {
        console.log('Undefined Starting Location, revert to default.')
        this.tileTo		= [1, 1]
      } else {
        console.log('Using (' + a + ',' + b + ') as Starting Location.')
        this.tileTo		= [a, b]
      }
      this.timeMoved	= 0
      this.dimensions	= [30, 30]
      this.position	= [45, 45]

      this.delayMove	= {}
      this.delayMove[floorTypes.path]			= 400
      this.delayMove[floorTypes.grass]		= 800

      this.direction	= directions.up
      this.sprites = {}
      this.sprites[directions.up]		= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.right]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.down]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.left]	= [{ x: 0, y: 0, w: 40, h: 40 }]
    }
    Character.prototype.placeAt = function (x, y) {
      this.tileFrom	= [x, y]
      this.tileTo		= [x, y]
      this.position	= [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
        ((tileH * y) + ((tileH - this.dimensions[1]) / 2))]
    }
    Character.prototype.processMovement = function (t) {
      if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false }

      const moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor]

      if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1])

        if (typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])] !== 'undefined') {
          tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this)
          console.log('Nothing special on this tile.')
        }
      } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2)
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2)

        if (this.tileTo[0] != this.tileFrom[0]) {
          var diff = (tileW / moveSpeed) * (t - this.timeMoved)
          this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff)
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
          var diff = (tileH / moveSpeed) * (t - this.timeMoved)
          this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff)
        }

        this.position[0] = Math.round(this.position[0])
        this.position[1] = Math.round(this.position[1])
      }

      return true
    }
    Character.prototype.canMoveTo = function (x, y) {
      if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false }
      if (typeof this.delayMove[tileTypes[gameMap[toIndex(x, y)]].floor] === 'undefined') { return false }
      return true
    }
    Character.prototype.canMoveUp		= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1) }
    Character.prototype.canMoveDown 	= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1) }
    Character.prototype.canMoveLeft 	= function () { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]) }
    Character.prototype.canMoveRight 	= function () { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]) }
    Character.prototype.canMoveDirection = function (d) {
      switch (d) {
        case directions.up:
          return this.canMoveUp()
        case directions.down:
          return this.canMoveDown()
        case directions.left:
          return this.canMoveLeft()
        default:
          return this.canMoveRight()
      }
    }

    Character.prototype.moveLeft	= function (t) { this.tileTo[0] -= 1; this.timeMoved = t; this.direction = directions.left }
    Character.prototype.moveRight	= function (t) { this.tileTo[0] += 1; this.timeMoved = t; this.direction = directions.right }
    Character.prototype.moveUp		= function (t) { this.tileTo[1] -= 1; this.timeMoved = t; this.direction = directions.up }
    Character.prototype.moveDown	= function (t) { this.tileTo[1] += 1; this.timeMoved = t; this.direction = directions.down }
    Character.prototype.moveDirection = function (d, t) {
      switch (d) {
        case directions.up:
          return this.moveUp(t)
        case directions.down:
          return this.moveDown(t)
        case directions.left:
          return this.moveLeft(t)
        default:
          return this.moveRight(t)
      }
    }

    function toIndex (x, y) {
      return ((y * mapW) + x)
    }

    function getFrame (sprite, duration, time, animated) {
      if (!animated) { return sprite[0] }
      time = time % duration

      for (x in sprite) {
        if (sprite[x].end >= time) { return sprite[x] }
      }
    }

    window.onload = function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('East is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('West is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    }

    $(window).on('click', function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('West is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('East is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    })

    function drawGame () {
      if (ctx == null) { return }
      if (!tilesetLoaded) { requestAnimationFrame(drawGame); return }

      const currentFrameTime = Date.now()
      const timeElapsed = currentFrameTime - lastFrameTime
      gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult)

      const sec = Math.floor(Date.now() / 1000)
      if (sec != currentSecond) {
        currentSecond = sec
        framesLastSecond = frameCount
        frameCount = 1
      } else { frameCount++ }

      if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
        if (keysDown[38] && player.canMoveUp()) { player.moveUp(gameTime), console.log('North is unclick'), keysDown[38] = false } else if (keysDown[38] && !player.canMoveUp()) { console.log('North is blocked'), keysDown[38] = false } else if (keysDown[40] && player.canMoveDown()) { player.moveDown(gameTime), console.log('South is unclick'), keysDown[40] = false } else if (keysDown[40] && !player.canMoveDown()) { console.log('South is blocked'), keysDown[40] = false } else if (keysDown[37] && player.canMoveLeft()) { player.moveLeft(gameTime), console.log('West is unclick'), keysDown[37] = false } else if (keysDown[37] && !player.canMoveLeft()) { console.log('West is blocked'), keysDown[37] = false } else if (keysDown[39] && player.canMoveRight()) { player.moveRight(gameTime), console.log('East is unclick'), keysDown[39] = false } else if (keysDown[39] && !player.canMoveRight()) { console.log('East is blocked'), keysDown[39] = false }
      }

      viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2))

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1])

      for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
        for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
          ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour
          ctx.fillRect(viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH), tileW, tileH)

          const tile = tileTypes[gameMap[toIndex(x, y)]]
          var sprite = getFrame(tile.sprite, tile.spriteDuration,
            gameTime, tile.animated)
          ctx.drawImage(tileset,
            sprite.x, sprite.y, sprite.w, sprite.h,
            viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH),
            tileW, tileH)
        }
      }

      ctx.fillStyle = '#0000ff'
      ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      var sprite = player.sprites[player.direction]
      ctx.drawImage(tileset,
        sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
        viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      ctx.fillStyle = '#ff0000'
      // ctx.fillText("FPS: " + framesLastSecond, 10, 20);
      // ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

      lastFrameTime = currentFrameTime
      requestAnimationFrame(drawGame)
    }
  }

  $(window).trigger('click')
}

// #endregion

// #region Map of M_Tutorial

// Look into change time to turn based by have time only process when you move, of course, add options to let player switch between real time movement and turn based movement.

// Rewrite the code to better suit you, most of function are useless and serve as clutter that make it harder for you to do your thing.

function GM_M_Tutorial (a, b) {
  if (currentland == 'M_Tutorial') {
    console.log('Your location is GM_M_Tutorial')
    CL()

    let ctx = null
    const gameMap = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
    const tileW = 40; const tileH = 40
    const mapW = 20; const mapH = 20
    let currentSecond = 0; let frameCount = 0; let framesLastSecond = 0; let lastFrameTime = 0

    // Remember that player only have two tile vision range.

    const tileEvents = {
      /*42: WalktoBirth,
      21: Prologue,
      27: WalktoBalony,
      379: WalktoParent,
      334: ConfrontGangMethod*/
    }

    $(document).on('click', '.buttons', function () {
      const button = $(this).val()
      console.log('The Button is ' + button)
    })

    

    let tileset = null; const tilesetURL = '/Game Projects/The Grand Hunt CYOA/Arts/tileset.png'; let tilesetLoaded = false

    let gameTime = 0
    const gameSpeeds = [
      { name: 'Normal', mult: 1 },
      { name: 'Slow', mult: 0.3 },
      { name: 'Fast', mult: 3 },
      { name: 'Paused', mult: 0 }
    ]
    const currentSpeed = 0

    const floorTypes = {
      solid: 0,
      path: 1,
      grass: 8
    }
    const tileTypes = {
      0: /* SH-void */ { colour: 'black', floor: floorTypes.solid, sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      1: /* SH-event */ { colour: 'goldenrod', floor: floorTypes.path,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      2: /* SH-pathway */ { colour: 'grey', floor: floorTypes.path,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      3: /* SH-wall */ { colour: 'rgb(50, 50, 50)'/* darker grey */, floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      4: /* SH-water */ { colour: 'blue', floor: floorTypes.solid,	sprite: [{ x: 0, y: 0, w: 0, h: 0 }]	},
      5: /* SH-shop */ { colour: 'silver', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] },
      6: /* SH-house */ { colour: 'brown', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] },
      7: /* SH-parenthouse */ { colour: 'red', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] },
      8: /* SH-police */ { colour: 'blue', floor: floorTypes.grass, sprite: [{ x: 0, y: 120, w: 40, h: 40 }] }
    }

    const directions = {
      up: 0,
      right: 1,
      down: 2,
      left: 3
    }

    const keysDown = {
      37: false,
      38: false,
      39: false,
      40: false
    }

    const viewport = {
      screen: [0, 0],
      startTile: [0, 0],
      endTile: [0, 0],
      offset: [0, 0],
      update: function (px, py) {
        this.offset[0] = Math.floor((this.screen[0] / 2) - px)
        this.offset[1] = Math.floor((this.screen[1] / 2) - py)

        const tile = [Math.floor(px / tileW), Math.floor(py / tileH)]

        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 10) / tileW)
        this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 10) / tileH)

        if (this.startTile[0] < 0) { this.startTile[0] = 0 }
        if (this.startTile[1] < 0) { this.startTile[1] = 0 }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 10) / tileW)
        this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 10) / tileH)

        if (this.endTile[0] >= mapW) { this.endTile[0] = mapW - 1 }
        if (this.endTile[1] >= mapH) { this.endTile[1] = mapH - 1 }
      }
    }

    const player = new Character()

    function Character () {
      this.tileFrom	= [1, 1]
      if (a, b == undefined) {
        console.log('Undefined Starting Location, revert to default.')
        this.tileTo		= [1, 1]
      } else {
        console.log('Using (' + a + ',' + b + ') as Starting Location.')
        this.tileTo		= [a, b]
      }
      this.timeMoved	= 0
      this.dimensions	= [30, 30]
      this.position	= [45, 45]

      this.delayMove	= {}
      this.delayMove[floorTypes.path]			= 400
      this.delayMove[floorTypes.grass]		= 800

      this.direction	= directions.up
      this.sprites = {}
      this.sprites[directions.up]		= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.right]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.down]	= [{ x: 0, y: 0, w: 40, h: 40 }]
      this.sprites[directions.left]	= [{ x: 0, y: 0, w: 40, h: 40 }]
    }
    Character.prototype.placeAt = function (x, y) {
      this.tileFrom	= [x, y]
      this.tileTo		= [x, y]
      this.position	= [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
        ((tileH * y) + ((tileH - this.dimensions[1]) / 2))]
    }
    Character.prototype.processMovement = function (t) {
      if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false }

      const moveSpeed = this.delayMove[tileTypes[gameMap[toIndex(this.tileFrom[0], this.tileFrom[1])]].floor]

      if ((t - this.timeMoved) >= moveSpeed) {
        this.placeAt(this.tileTo[0], this.tileTo[1])

        if (typeof tileEvents[toIndex(this.tileTo[0], this.tileTo[1])] !== 'undefined') {
          tileEvents[toIndex(this.tileTo[0], this.tileTo[1])](this)
          console.log('Nothing special on this tile.')
        }
      } else {
        this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2)
        this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2)

        if (this.tileTo[0] != this.tileFrom[0]) {
          var diff = (tileW / moveSpeed) * (t - this.timeMoved)
          this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff)
        }
        if (this.tileTo[1] != this.tileFrom[1]) {
          var diff = (tileH / moveSpeed) * (t - this.timeMoved)
          this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff)
        }

        this.position[0] = Math.round(this.position[0])
        this.position[1] = Math.round(this.position[1])
      }

      return true
    }
    Character.prototype.canMoveTo = function (x, y) {
      if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false }
      if (typeof this.delayMove[tileTypes[gameMap[toIndex(x, y)]].floor] === 'undefined') { return false }
      return true
    }
    Character.prototype.canMoveUp		= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1) }
    Character.prototype.canMoveDown 	= function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1) }
    Character.prototype.canMoveLeft 	= function () { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]) }
    Character.prototype.canMoveRight 	= function () { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]) }
    Character.prototype.canMoveDirection = function (d) {
      switch (d) {
        case directions.up:
          return this.canMoveUp()
        case directions.down:
          return this.canMoveDown()
        case directions.left:
          return this.canMoveLeft()
        default:
          return this.canMoveRight()
      }
    }

    Character.prototype.moveLeft	= function (t) { this.tileTo[0] -= 1; this.timeMoved = t; this.direction = directions.left }
    Character.prototype.moveRight	= function (t) { this.tileTo[0] += 1; this.timeMoved = t; this.direction = directions.right }
    Character.prototype.moveUp		= function (t) { this.tileTo[1] -= 1; this.timeMoved = t; this.direction = directions.up }
    Character.prototype.moveDown	= function (t) { this.tileTo[1] += 1; this.timeMoved = t; this.direction = directions.down }
    Character.prototype.moveDirection = function (d, t) {
      switch (d) {
        case directions.up:
          return this.moveUp(t)
        case directions.down:
          return this.moveDown(t)
        case directions.left:
          return this.moveLeft(t)
        default:
          return this.moveRight(t)
      }
    }

    function toIndex (x, y) {
      return ((y * mapW) + x)
    }

    function getFrame (sprite, duration, time, animated) {
      if (!animated) { return sprite[0] }
      time = time % duration

      for (x in sprite) {
        if (sprite[x].end >= time) { return sprite[x] }
      }
    }

    window.onload = function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('East is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('West is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    }

    $(window).on('click', function () {
      ctx = document.getElementsByClassName('game')[0].getContext('2d')
      requestAnimationFrame(drawGame)
      ctx.font = 'bold 10pt sans-serif'

      $('.Move_North').on('click', function () {
        if (keysDown[38] == false) {
          console.log('North is click'), keysDown[38] = true
        } // else console.log("North is unclick"), keysDown[37]=false;
      })
      $('.Move_West').on('click', function () {
        if (keysDown[37] == false) {
          console.log('West is click'), keysDown[37] = true
        } // else console.log("East is unclick"), keysDown[37]=false;
      })
      $('.Move_East').on('click', function () {
        if (keysDown[39] == false) {
          console.log('East is click'), keysDown[39] = true
        } // else console.log("West is unclick"), keysDown[39]=false;
      })
      $('.Move_South').on('click', function () {
        if (keysDown[40] == false) {
          console.log('South is click'), keysDown[40] = true
        } // else console.log("South is unclick"), keysDown[40]=false;
      })

      window.addEventListener('keydown', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
      })
      window.addEventListener('keyup', function (e) {
        // if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
        /* if(e.keyCode==83)
				{
					currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
				} */
      })

      viewport.screen = [document.getElementsByClassName('game')[0].width,
        document.getElementsByClassName('game')[0].height]

      tileset = new Image()
      tileset.onerror = function () {
        ctx = null
        alert('Failed loading tileset.')
      }
      tileset.onload = function () { tilesetLoaded = true }
      tileset.src = tilesetURL

      for (x in tileTypes) {
        tileTypes[x].animated = tileTypes[x].sprite.length > 1

        if (tileTypes[x].animated) {
          let t = 0

          for (s in tileTypes[x].sprite) {
            tileTypes[x].sprite[s].start = t
            t += tileTypes[x].sprite[s].d
            tileTypes[x].sprite[s].end = t
          }

          tileTypes[x].spriteDuration = t
        }
      }
    })

    function drawGame () {
      if (ctx == null) { return }
      if (!tilesetLoaded) { requestAnimationFrame(drawGame); return }

      const currentFrameTime = Date.now()
      const timeElapsed = currentFrameTime - lastFrameTime
      gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult)

      const sec = Math.floor(Date.now() / 1000)
      if (sec != currentSecond) {
        currentSecond = sec
        framesLastSecond = frameCount
        frameCount = 1
      } else { frameCount++ }

      if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
        if (keysDown[38] && player.canMoveUp()) { player.moveUp(gameTime), console.log('North is unclick'), keysDown[38] = false } else if (keysDown[38] && !player.canMoveUp()) { console.log('North is blocked'), keysDown[38] = false } else if (keysDown[40] && player.canMoveDown()) { player.moveDown(gameTime), console.log('South is unclick'), keysDown[40] = false } else if (keysDown[40] && !player.canMoveDown()) { console.log('South is blocked'), keysDown[40] = false } else if (keysDown[37] && player.canMoveLeft()) { player.moveLeft(gameTime), console.log('West is unclick'), keysDown[37] = false } else if (keysDown[37] && !player.canMoveLeft()) { console.log('West is blocked'), keysDown[37] = false } else if (keysDown[39] && player.canMoveRight()) { player.moveRight(gameTime), console.log('East is unclick'), keysDown[39] = false } else if (keysDown[39] && !player.canMoveRight()) { console.log('East is blocked'), keysDown[39] = false }
      }

      viewport.update(player.position[0] + (player.dimensions[0] / 2),
        player.position[1] + (player.dimensions[1] / 2))

      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1])

      for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
        for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
          ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour
          ctx.fillRect(viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH), tileW, tileH)

          const tile = tileTypes[gameMap[toIndex(x, y)]]
          var sprite = getFrame(tile.sprite, tile.spriteDuration,
            gameTime, tile.animated)
          ctx.drawImage(tileset,
            sprite.x, sprite.y, sprite.w, sprite.h,
            viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH),
            tileW, tileH)
        }
      }

      ctx.fillStyle = '#0000ff'
      ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      var sprite = player.sprites[player.direction]
      ctx.drawImage(tileset,
        sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
        viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
        player.dimensions[0], player.dimensions[1])

      ctx.fillStyle = '#ff0000'
      // ctx.fillText("FPS: " + framesLastSecond, 10, 20);
      // ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);

      lastFrameTime = currentFrameTime
      requestAnimationFrame(drawGame)
    }
  }

  $(window).trigger('click')
}

// #endregion
