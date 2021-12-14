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
    
    ageAndBreedEl.append(ageEl, breedEl);
    img.src = `../assets/${dog.breed}.jpg`;
    
    div.append(nameEl, img, ageAndBreedEl);

    return div;

}