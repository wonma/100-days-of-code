// Mission 2
// Create a h1 element with a sentence.
// Capture user's input using a text field and when the keyboard enter is pressed, switch the h1 text into the input text.

/********************** Code Plan ***********************/
// Create a text field
// add an event listener to the text field (event: change)
// add the event handler to the event listener, which will display the captured text value to h3

/********************** Correct ***********************/
const input = document.createElement('input');
input.setAttribute('type', 'text')
document.body.appendChild(input)

const h3 = document.createElement('h3')
h3.innerText = 'Heyyyyyyy'
document.body.appendChild(h3)

input.addEventListener('change', handleInput)
function handleInput(e) {
    h3.innerText = e.target.value // Teacher just used input.value withouting referencing the event object
}
