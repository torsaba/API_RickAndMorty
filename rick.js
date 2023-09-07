const searchCharacter = async (search) => {
    let API = "https://rickandmortyapi.com/api/character";
    const api = await fetch(API);
    const data = await api.json();
    console.log(data);
    data.results.map(item => {
        divItem = document.createElement("div")
        div = document.querySelector("#resultado");
        divItem.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${item.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    })
    div.appendChild(divItem);
}

searchCharacter();