// $('<p class=\'texts\'></p>').appendTo('#textbox');

// $('<center class=\'centers\'><button class=\'command_button buttons\' value=\' \'></button> <br class=\'brs\'></center>').appendTo('#storebox');

// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').appendTo('#textbox').fadeIn(0);

// $('<button class=\'command_button s-buttons\' value=\'pistol\'>Pistol</button> <br class=\'brs\'>').appendTo('#storebox');

const pistol = 'pistol'
let amtOPistol = 0

const rifle = 'rifle'
let amtORifle = 0

const sword = 'sword'
let amtOSword = 0

const test = 'test'
let amtOTest = 0

//let point = 400

function store () {
  clean()
  equipmentWipe('wipe')

  $('#textbox').addClass('hidden')
  $('#choicebox').removeClass('hidden')
  $('#storebox').removeClass('hidden')
  $('#inventory').removeClass('hidden')
  $('#equipment').addClass('hidden')

  if ($('#storebox').hasClass('hidden')) {
    $('.MB-I').removeClass('hidden')
  } else {
    $('.MB-I').addClass('hidden')
  }

  inventoryWipe()
  lookInventory()

  console.log(point)
  CL()

  CCPlayer('Credit')

  $('<p class=\'texts\'>Store</p>').appendTo('#storebox');

  $('<button class=\'store_button s-buttons\' value=\'pistol\'>Pistol | Cost: 100c</button>').appendTo('#storebox')

  $('<button class=\'store_button s-buttons\' value=\'rifle\'>Rifle | Cost: 200c</button>').appendTo('#storebox')

  $('<button class=\'store_button s-buttons\' value=\'sword\'>Sword | Cost: 50c</button>').appendTo('#storebox')

  $('<button class=\'store_button s-buttons\' value=\'test\'>Test | Cost: 500c</button>').appendTo('#storebox')

  $('<button class=\'equipment_button s-buttons\' value=\'exitStore\'>Exit</button>').appendTo('#choicebox')

  $('<button class=\'equipment_button e-buttons\' value=\'s-equipment\'>Equipment</button>').appendTo('#choicebox')
};

$(document).on('click', '.s-buttons', function () {
  const button = $(this).val()
  console.log('The Button is ' + button)
  CL()
  $('#container').scrollTop($('#container')[0].scrollHeight)

  if (button == 'exitStore') {
    $('.MB-N').trigger('click')
  }

  switch (button) {
    case 'pistol': {
      commandReset()

      selectInventory('reset')

      selectedItem = 'pistol'

      $('<button class=\'inventory_button c-buttons\' value=\'buyPistol\'>Buy</button>').appendTo('#choicebox')

      $(this).addClass('selected')

      console.log('select Pistol')
      CL()

      selectInventory('select')
    } break

    case 'rifle': {
      commandReset()

      selectInventory('reset')

      selectedItem = 'rifle'

      $('<button class=\'inventory_button c-buttons\' value=\'buyRifle\'>Buy</button>').appendTo('#choicebox')

      $(this).addClass('selected')

      console.log('select Rifle')
      CL()

      selectInventory('select')
    } break

    case 'sword': {
      commandReset()

      selectInventory('reset')

      selectedItem = 'sword'

      $('<button class=\'inventory_button c-buttons\' value=\'buySword\'>Buy</button>').appendTo('#choicebox')

      $(this).addClass('selected')

      console.log('select Sword')
      CL()

      selectInventory('select')
    } break

    case 'test': {
      commandReset()

      selectInventory('reset')

      selectedItem = 'test'

      $('<button class=\'inventory_button c-buttons\' value=\'buyTest\'>Buy</button>').appendTo('#choicebox')

      $(this).addClass('selected')

      console.log('select Test')
      CL()

      selectInventory('select')
    }
  }
})

$(document).on('click', '.c-buttons', function () {
  const button = $(this).val()
  console.log('The Button is ' + button)
  CL()
  $('#container').scrollTop($('#container')[0].scrollHeight)

  lookInventory()

  switch (button) {
    case 'buyPistol': {
      point = point - 100

      selectInventory('reset')

      if (point >= 0) {
        console.log('Your equipment menu is working. ' + button)

        console.log('the point remaining is ' + point + '.')
        CL()

        /* if (amtOPistol >= 3) {

                    console.log("Is this working?");
                    CL();

                    alert("Sorry, you cannot buy more of this type.");

                    point = point + 100;

                    return false;

                }; */

        amtOPistol++

        inventory.push('Pistol')

        console.log('You push pistol into array ' + inventory)

        console.log('amount of pistol owned is ' + amtOPistol)
        CL()

        lookInventory()

        CCPlayer('Credit')
      } else if (point <= 0) {
        // alert("Sorry, you do not have enough point left for " + button + ", please either continue to next step or remove other choices.");
        point = point + 100
        CCPlayer('Credit')
        selectInventory('fail')
      }
    } break

    case 'sellPistol': {
      function sellPistol (inventory, value) {
        const index = inventory.indexOf(value)
        if (index > -1) {
          inventory.splice(index, 1)
        }
        return inventory
      }

      sellPistol(inventory, 'Pistol')

      amtOPistol--

      lookInventory()

      point = point + 100

      CCPlayer('Credit')

      if (amtOPistol == 0) {
        commandReset()
        selectInventory('reset')
        $('.Pistol').remove()
        console.log('no more gun')
        CL()
      }
    } break

    case 'buyRifle': {
      point = point - 200

      selectInventory('reset')

      if (point >= 0) {
        console.log('Your equipment menu is working. ' + button)

        console.log('the point remaining is ' + point + '.')
        CL()

        if (amtORifle >= 3) {
          console.log('Is this working?')
          CL()

          alert('Sorry, you cannot buy more of this type.')

          point = point + 200

          return false
        };

        amtORifle++

        inventory.push('Rifle')

        console.log('You push rifle into array ' + inventory)

        console.log('amount of rifle owned is ' + amtORifle)
        CL()

        lookInventory()

        CCPlayer('Credit')
      } else if (point <= 0) {
        // alert("Sorry, you do not have enough point left for " + button + ", please either continue to next step or remove other choices.");
        point = point + 200
        CCPlayer('Credit')
        selectInventory('fail')
      }
    } break

    case 'sellRifle' && amtORifle > 0: {
      function sellRifle (inventory, value) {
        const index = inventory.indexOf(value)
        if (index > -1) {
          inventory.splice(index, 1)
        }
        return inventory
      }

      sellRifle(inventory, 'Rifle')

      amtORifle--

      lookInventory()

      point = point + 200

      CCPlayer('Credit')

      if (amtORifle == 0) {
        commandReset()
        selectInventory('reset')
        $('.Rifle').remove()
        console.log('no more gun')
        CL()
      }
    } break

    case 'buySword': {
      point = point - 50

      selectInventory('reset')

      if (point >= 0) {
        console.log('Your equipment menu is working. ' + button)

        console.log('the point remaining is ' + point + '.')
        CL()

        if (amtOSword >= 3) {
          console.log('Is this working?')
          CL()

          alert('Sorry, you cannot buy more of this type.')

          point = point + 50

          return false
        };

        amtOSword++

        inventory.push('Sword')

        console.log('You push sword into array ' + inventory)

        console.log('amount of sword owned is ' + amtOSword)
        CL()

        lookInventory()

        CCPlayer('Credit')
      } else if (point <= 0) {
        // alert("Sorry, you do not have enough point left for " + button + ", please either continue to next step or remove other choices.");
        point = point + 50
        CCPlayer('Credit')
        selectInventory('fail')
      }
    } break

    case 'sellSword' && amtOSword > 0: {
      function sellSword (inventory, value) {
        const index = inventory.indexOf(value)
        if (index > -1) {
          inventory.splice(index, 1)
        }
        return inventory
      }

      sellSword(inventory, 'Sword')

      amtOSword--

      lookInventory()

      point = point + 50

      CCPlayer('Credit')

      if (amtOSword == 0) {
        commandReset()
        selectInventory('reset')
        $('.Sword').remove()
        console.log('no more melee')
        CL()
      }
    } break

    case 'buyTest': {
      point = point - 500

      selectInventory('reset')

      if (point >= 0) {
        console.log('Your equipment menu is working. ' + button)

        console.log('the point remaining is ' + point + '.')
        CL()

        if (amtOTest >= 1) {
          console.log('Is this working?')
          CL()

          alert('Sorry, you cannot buy more of this type.')

          point = point + 500

          return false
        };

        amtOTest++

        inventory.push('Test')

        console.log('You push test into array ' + inventory)

        console.log('amount of test owned is ' + amtOTest)
        CL()

        lookInventory()

        CCPlayer('Credit')
      } else if (point <= 0) {
        // alert("Sorry, you do not have enough point left for " + button + ", please either continue to next step or remove other choices.");
        point = point + 500
        CCPlayer('Credit')
        selectInventory('fail')
      }
    } break

    case 'sellTest' && amtOTest > 0: {
      function sellTest (inventory, value) {
        const index = inventory.indexOf(value)
        if (index > -1) {
          inventory.splice(index, 1)
        }
        return inventory
      }

      sellTest(inventory, 'Test')

      amtOTest--

      lookInventory()

      point = point + 500

      CCPlayer('Credit')

      if (amtOTest == 0) {
        commandReset()
        selectInventory('reset')
        $('.Test').remove()
        console.log('no more test')
        CL()
      }
    } break
  }
})
