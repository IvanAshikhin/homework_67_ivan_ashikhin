$.getJSON("https://rickandmortyapi.com/api/character/", function (data) {
    cards(data.results);
});

function cards(data) {
    const cardContainer = $("#cards");
    console.log(data);
    data.forEach(character => {
        cardContainer.append(`
            <a href="character.html/?id=${character.id}">
            <div class="card">
                <h4>${character.name}</h4>
                <img alt="aaa" src=${character.image} class="card-img-top">
            </div>
            </a>
            <br>
        `);
    });
}
