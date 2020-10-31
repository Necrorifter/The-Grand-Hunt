function test(num) {

    if (num == '1') {

        i++
        $('<p class=\'texts\'>Test File Link is confirmed and completed. Here the number, '+i+'</p>').insertBefore('.button');

        console.log(i)

        if (i == '10') {

            i=100
            $('<p class=\'texts\'>Okay, you got 10 confirmed and now this will change the number to 100. number is '+i+'</p>').insertBefore('.button');

        }

    }

}

startGame();