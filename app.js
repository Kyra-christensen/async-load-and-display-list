// import functions and grab DOM elements
import { getDogs } from './fetch-utils.js';
import { renderDogs } from './render-utils.js';

const dogListContainerEl = document.querySelector('#dog-container');
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
window.addEventListener('load', async() => {
    const dogs = await getDogs();

    for (let dog of dogs) {
        const dogEl = renderDogs(dog);
        dogListContainerEl.append(dogEl);
    }
});