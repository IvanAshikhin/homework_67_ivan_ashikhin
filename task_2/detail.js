let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id');
console.log(param)

$.getJSON(`https://rickandmortyapi.com/api/character/id=${param}`, function (data) {
    cards(data);
});


function cards(character) {
    const cardContainer = $("#cards");
    console.log(character);
    cardContainer.append(`
        <div class="card">
            <h2>${character.name}</h2>
            <h4>${character.status}</h4>
            <h4>${character.species}</h4>
            <h4>${character.type}</h4>
            <h4>${character.origin.name}</h4>
            <h4>${character.location.name}</h4>
            <img alt="aaa" src=${character.image} class="card-img-top">
        </div>
    `);
}