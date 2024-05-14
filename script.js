var submitButton = document.getElementById("submit");
var img = document.getElementById("pokemon-image");

submitButton.addEventListener("click", function () {
    var answer = document.getElementById("answer");
    var message = document.getElementById("answer_message");
    const map = new Map();
    var randomNumber = Math.floor(Math.random() * map.size);
    var randomPokemon = Array.from(map.keys())[randomNumber];
    img.src = map.get(randomPokemon);
    map.set("lixy", "assets/img/lixy.jpg");
    map.set("pikachu", "assets/img/pikachu.jpg");
    if (answer.value.toLowerCase() === randomPokemon || answer.value.toLowerCase() === "go") {
        message.textContent = "Correct !";
        randomNumber = Math.floor(Math.random() * map.size);
        randomPokemon = Array.from(map.keys())[randomNumber];
        img.src = map.get(randomPokemon);
    } else {
        message.textContent = "Incorrect !";
    }
});


