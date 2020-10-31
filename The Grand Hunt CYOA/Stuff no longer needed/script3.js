$(document).ready(function() {
    // Create jQuery handle to all situations.
    // Having this outside click handler allows you to access it while
    // preventing you from having to query the DOM every time you want to
    // act on this selection of elements as a whole.
    var $allSituations = $('.situation');

    // Get selector for default situation(s) which will show on page load
    var $defaultSituation = $('.default_situation');

    // Show default situation(s)
    $allSituations.hide();
    $defaultSituation.fadeIn(2000);

    $('.situation_choice').on('click', function() {
        // Find target situation element for this choice.
        // We use the 'situation-target' data attribute for the
        // clicked element, this, within the handler to determine
        // the target.
        var targetName = $(this).data('situation-target');
        var $target = $('.situation[data-situation="' + targetName + '"]')

        // if we find a single target element, we can now show it
        if($target.length === 1) {
            // hide all situations
            $allSituations.hide();
            // show target element
            $target.fadeIn(4000);
        }
    });
});

/*<div class="situation default_situation" data-situation="start">

                <div class="situation_text">
                    You are lost in the woods.
                </div>

                <input type="button" class="situation_choice"
                    value="Continue on..."
                    data-situation-target="found_cave">
            </div>

            <div class="situation" data-situation="found_cave">
                <div class="situation_text">
                    You find a cave. Do you go inside or go look for food? 
                </div>

                <input type="button" class="situation_choice"
                    value="Go inside"
                    data-situation-target="enter_cave">

                <input type="button" class="situation_choice"
                    value="Look for food"
                    data-situation-target="food_search">
            </div>

            <div class="situation" data-situation="enter_cave">
                <div class="situation_text">
                    You walk into the cave.
                </div>

            </div>

            <div class="situation" data-situation="food_search">
                <div class="situation_text">
                    You walk away from the cave, to search for food. You find berries. Do you eat them or not? 
                </div>

                <input type="button" class="situation_choice"
                    value="Eat the berries"
                    data-situation-target="eat_berries">

                <input type="button" class="situation_choice"
                    value="Don't eat the berries"
                    data-situation-target="ignore_berries">
            </div>

            <div class="situation" data-situation="eat_berries">
                <div class="situation_text">
                    You eat the berries.
                </div>

            </div>

            <div class="situation" data-situation="ignore_berries">
                <div class="situation_text">
                    You ignore the berries. You are still hungry.
                </div>

            </div>*/