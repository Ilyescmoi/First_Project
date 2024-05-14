const submitButton = document.getElementById("submit");
const img = document.getElementById("pokemon-image");
const map = new Map([["lixy", "assets/img/lixy.jpg"], ["pikachu", "assets/img/pikachu.jpg"]]);
let actualPokemon = null;

submitButton.addEventListener("click", function () {
    const answer = document.getElementById("answer");
    const message = document.getElementById("answer_message");

    if (answer.value.toLowerCase() === actualPokemon || answer.value.toLowerCase() === "go") {
        message.textContent = "Correct !";
        const randomNumber = Math.floor(Math.random() * map.size);
        const randomPokemon = Array.from(map.keys())[randomNumber];
        actualPokemon = randomPokemon;
        img.src = map.get(randomPokemon);
    } else {
        message.textContent = "Incorrect !";
    }
});
