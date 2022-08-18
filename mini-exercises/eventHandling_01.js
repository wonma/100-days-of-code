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
let userInput = prompt('What is your name?')
const h2 = document.createElement('h2') // This and the rest wait until the prompt is typed.
h2.innerText = userInput
document.body.appendChild(h2)