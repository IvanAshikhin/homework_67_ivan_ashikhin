let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');
console.log(param)

$.getJSON(`https://rickandmortyapi.com/api/character/${param}`, function (data) {
    cards(data);
});


function cards(character) {
    const cardContainer = $("#cards");
    console.log(character);
    cardContainer.append(`
        <div class="card deta">
            <h2>Name: ${character.name}</h2>
            <h4>Status: ${character.status}</h4>
            <h4>Species: ${character.species}</h4>
            <h4>Gender: ${character.gender}</h4>
            <h4>Origin Name: ${character.origin.name}</h4>
            <h4>Location Name: ${character.location.name}</h4>
            <img alt="aaa" src=${character.image} class="card-img-top">
        </div>
    `);
}