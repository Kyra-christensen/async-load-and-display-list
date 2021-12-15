// import functions and grab DOM elements
import { getDogs, getSongs, getFamily, getCandy } from './fetch-utils.js';
import { renderDogs, renderSongs, renderFamily, renderCandy } from './render-utils.js';

const dogListContainerEl = document.querySelector('#dog-container');
const songListContainerEl = document.querySelector('#song-container');
const familyListContainerEl = document.querySelector('#family-container');
const candyListContainerEl = document.querySelector('#candy-container');
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

window.addEventListener('load', async() => {
    const songs = await getSongs();

    for (let song of songs) {
        const songEl = renderSongs(song);
        songListContainerEl.append(songEl);
    }
});

window.addEventListener('load', async() => {
    const familyMember = await getFamily();

    for (let family of familyMember) {
        const familyEl = renderFamily(family);
        familyListContainerEl.append(familyEl);
    }
});

window.addEventListener('load', async() => {
    const candies = await getCandy();

    for (let candy of candies) {
        const candyEl = renderCandy(candy);
        candyListContainerEl.append(candyEl);
    }
});