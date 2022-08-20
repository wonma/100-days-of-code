// Mission3
/*
 * Rotate h1 text whenever you click it as below: 
 * 'Example Domain'
 * -> 'First Click'
 * -> 'Second Click'
 * -> 'Third Click'
 * -> 'Example Domain' 
 * -> ....
 */

// -----------------------Planning-----------------------
// Grab h1 element and add event listener 'click'
// Set a callback function
// with switch conditional statement
// if the condition is met, reassign a new text to the h1 element
// const h1 = document.querySelector(h1) ==> h1로 실수함

// -----------------------First Try-----------------------
const h1 = document.querySelector('h1')
h1.addEventListener('click', handleClick)

function handleClick(){
    switch(h1.innerText) {
        case 'Example Domain': 
            h1.innerText = 'First Click'
            break;
        case 'First Click':
            h1.innerText = 'Second Click'
            break;
        case 'Second Click':
            h1.innerText = 'Third Click'
            break;
        case 'Third Click':
            h1.innerText = 'Example Domain'
            break;
    }
}

// ----------------------- Mission Condition Added -----------------------
// Use an array that contains all the phrases.
const h5 = document.querySelector('h5')
const greetings = ['Today was a great day!', 'Tomorrow will be fun', 'Everyday is a good day', 'Live a life']
h5.addEventListener('click', handleClicks)
function handleClicks(){
    switch(h5.innerText){
        case greetings[0]:
            h5.innerText = greetings[1]
            break;
        case greetings[1]:
            h5.innerText = greetings[2]
            break;
        case greetings[2]:
            h5.innerText = greetings[3]
            break;
        case greetings[3]:
            h5.innerText = greetings[0]
            break;
    }
}