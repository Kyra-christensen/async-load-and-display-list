export function renderDogs(dog) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');
    const breedEl = document.createElement('p');
    const img = document.createElement('img');
    const ageAndBreedEl = document.createElement('div');

    div.classList.add('dog-detail');
    nameEl.classList.add('name');
    ageEl.classList.add('age');
    breedEl.classList.add('breed');
    ageAndBreedEl.classList.add('age-and-breed');
    
    nameEl.textContent = dog.name;
    ageEl.textContent = dog.age;
    breedEl.textContent = dog.breed;
    img.src = `./assets/${dog.breed}.jpg`;
    
    ageAndBreedEl.append(ageEl, breedEl);
    
    
    div.append(nameEl, img, ageAndBreedEl);

    return div;

}

export function renderSongs(song) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const songEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const img = document.createElement('img');

    div.classList.add('song-detail');
    nameEl.classList.add('name');
    songEl.classList.add('songName');
    yearEl.classList.add('yearReleased');

    nameEl.textContent = song.artist;
    songEl.textContent = song.songName;
    yearEl.textContent = song.yearReleased;
    
    img.src = `./assets/${song.artist}.jpg`;
    
    div.append(nameEl, img, songEl, yearEl);

    return div;
}

export function renderFamily(familyMember) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const relationEl = document.createElement('p');
    const birthdayEl = document.createElement('p');
    
    div.classList.add('family-detail');
    nameEl.classList.add('name');
    relationEl.classList.add('relation');
    birthdayEl.classList.add('birthday');

    nameEl.textContent = familyMember.name;
    relationEl.textContent = familyMember.relation;
    birthdayEl.textContent = familyMember.birthday;
    
    div.append(nameEl, relationEl, birthdayEl);

    return div;
}

export function renderCandy(candy) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const colorEl = document.createElement('p');
    const priceEl = document.createElement('p');
    
    div.classList.add('candy-detail');
    nameEl.classList.add('name');
    colorEl.classList.add('color');
    priceEl.classList.add('price');

    nameEl.textContent = candy.name;
    colorEl.textContent = candy.color;
    priceEl.textContent = candy.price;
    
    div.append(nameEl, colorEl, priceEl);

    return div;
}