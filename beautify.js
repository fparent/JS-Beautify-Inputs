'use strict';

// Cache the checkboxes
var checkboxes = document.querySelectorAll( 'input[type="checkbox"]' );

/**
 * wrapInputs
 * Wraps the inputs in a span container used for styling purposes.
 * Once done, hide the input inside it.
 * @param  {[type]} new_text [description]
 * @return {[type]}          [description]
 */
function wrapInputs() {
    var newSpan;
    var parent;

    for ( var i = 0; i < checkboxes.length; i++ ) {
        // Create a new span
        newSpan = document.createElement( 'span' );
        newSpan.className = 'checkbox';

        // Get the current checkbox's parent node
        parent = checkboxes[i].parentNode;

        // Append the new span to the checkbox's parent node
        parent.prepend( newSpan );

        // Remove the old checkbox and hide it
        newSpan.prepend( checkboxes[i] );
        checkboxes[i].style.display = 'none';
    }
}


/**
 * toggleInput
 * Toggle the clicked checkbox and also toggle a styling class it's parent
 * @return {[type]} [description]
 */
function toggleInput( event ) {
    var checkbox = event.target.querySelector('input[type="checkbox"]');

    checkbox.checked = !checkbox.checked;
    event.target.classList.toggle( 'checked' );

    console.log('is checked? ' + checkbox.checked);
}


/**
 * beautifyInputs
 *
 * @return null
 */
(function beautifyInputs() {
    // Wrap the inputs in a styling container
    wrapInputs();

    // Bind the click event on the inputs
    for ( var i = 0; i < checkboxes.length; i++ ) {
        checkboxes[i].parentNode.addEventListener( 'click', toggleInput, false);
    }
}());