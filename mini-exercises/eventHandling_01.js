// Mission 1
// Capture user's input asking 'what is your name?' and display it in H2 element

/********************** Code Plan ***********************/
// Capture user's input into a variable
// Create a h1 element and insert the user's input within the h1
// Append the h1 element to the body element


/********************** Wrong ***********************/
// let userInput = prompt('What is your name?')
// const h1 = document.createElement('h1')
// h1.innerText = userInput
// document.body.appendChild(h1)

/********************** Correct ***********************/
// let userInput = prompt('What is your name?')
// const h2 = document.createElement('h2') // This and the rest wait until the prompt is typed.
// h2.innerText = userInput
// document.body.appendChild(h2)


// Mission 2
// Create a h1 element with a sentence.
// Capture user's input using a text field and when the keyboard enter is pressed, switch the h1 text into the input text.

/********************** Code Plan ***********************/
// Create a text field
// add an event listener to the text field (event: change)
// add the event handler to the event listener, which will display the captured text value to h3
const input = document.createElement('input');
input.setAttribute('type', 'text')
document.body.appendChild(input)

const h3 = document.createElement('h3')
h3.innerText = 'Heyyyyyyy'
document.body.appendChild(h3)

input.addEventListener('change', handleInput)
function handleInput() {
    h3.innerText = input.value
}
