const submitButton = document.getElementById("submit");
const img = document.getElementById("pokemon-image");
const map = new Map([["lixy", "assets/img/lixy.jpg"], ["pikachu", "assets/img/pikachu.jpg"],
["salamèche", "assets/img/salamèche.png"]]);
let actualPokemon = null;
const startButton = document.getElementById("start");
const answer = document.getElementById("answer");
const message = document.getElementById("answer_message");
const userScore = document.getElementById("userScore");
let score = 0;
answer.style.display = "none";
submitButton.style.display = "none";

startButton.addEventListener("click", () => {
    startButton.style.display = "none";
    submitButton.style.display = "block";
    answer.style.display = "block";
    const randomIndex = Math.floor(Math.random() * map.size);
    actualPokemon = Array.from(map.keys())[randomIndex];
    img.src = map.get(actualPokemon);
});

submitButton.addEventListener("click", function () {
    if (answer.value.toLowerCase() === actualPokemon) {
        message.textContent = "Correct !";
        score++;
        userScore.textContent = "Score : " + score.toString();
        let randomNumber = Math.floor(Math.random() * map.size);
        let randomPokemon = Array.from(map.keys())[randomNumber];
        if (randomPokemon === actualPokemon) {
            randomNumber = Math.floor(Math.random() * map.size);
            randomPokemon = Array.from(map.keys())[randomNumber];
        }
        actualPokemon = randomPokemon;
        img.src = map.get(randomPokemon);
    } else {
        message.textContent = "Incorrect ! Try again !";
    }
    answer.value = "";
});
