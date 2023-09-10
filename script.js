const API_URL = "https://rickandmortyapi.com/api/character";
const div = document.getElementById("item-2")
let character = [];
async function cargarLista() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        character = data.results;
    }
    catch (error) {
        console.error("Error cargando JSON:", error);
    }

}
async function showAllCharacters() {
    await cargarLista();
    div.innerHTML += "<ul>";
    for (const results of character) {
        div.innerHTML += `<div class="card";>
        <img class="card-img" src="${results.image}" class="card-img-top" alt="pictureCharacter">
        <div class="card-info">
            <h5 class="card-title"> ${results.name}</h5>
            <p class="text-body"> The status is: ${results.status} </p>
            <p class="text-body"> The status is: ${results.species} </p>    
        </div>`
    }
};
showAllCharacters();
