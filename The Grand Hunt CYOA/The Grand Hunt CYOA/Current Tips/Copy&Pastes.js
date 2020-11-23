// All functions

// Variables Section

let input = $('.command_line').val()
input = ''
// input = '';
console.log('The Input is ' + input)
let pn
pn = '' + input + ''
console.log('The pn is ' + pn)
console.log('The PN is ' + PN)

// $(this) is somehow allow it to recieve array and input them into variable buttons for uses in multiple choice buttons. it work using what is current, if you click on button that button become this, if you click on block of text, that text become this, might be useful.

// End of Variables Section

// Input Section

// $('<p class=\'texts\'></p>').insertBefore('#placeholder');
// $('<center><button class=\'command_button buttons\' value=\' \'></button></center><br class=\'brs\'>').insertBefore('#placeholder_choice');
// $('<input type=\'text\' class=\'command_line lines\' size=\'50\' autofocus=\'autofocus\' autocomplete=\'off\'></input>').insertBefore('#placeholder').fadeIn(0);

const button = $(this).val()
console.log('The Button is ' + button)
$('#console').scrollTop($('#console')[0].scrollHeight)

$('.command_line').val('')

// End of Input Section

//
