const btn = document.querySelector('.btn');
const liste = document.querySelector('.liste');


btn.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json()) 
    .then(data => {
        const breeds = data.message; 
        for (let breed in breeds) { 
            let newLi = document.createElement('li');
            let breedName = document.createElement('h2');
            breedName.innerText = breed; 
            newLi.appendChild(breedName);
            liste.appendChild(newLi); 
        }
    })
    .catch(error => {
        console.error('Erreur', error);
    });
});
