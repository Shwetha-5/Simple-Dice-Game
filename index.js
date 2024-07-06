window.onload = function() {
    // Prompt for player names
    var ply1 = prompt("Enter name of player 1: ");
    document.getElementById("p1").innerHTML = ply1;

    var ply2 = prompt("Enter name of player 2: ");
    document.getElementById("p2").innerHTML = ply2;

    // Number of rounds
    var rounds = 5;
    var p1 = 0, p2 = 0;
    var currentRound = 0;

    // Function to play a round
    function playRound() {
        if (currentRound < rounds) {
            currentRound++;
            querySelector.getElementById("round").innerHTML="Round "+currentRound;
            // Generate random numbers for both dice
            var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            var randomNumber2 = Math.floor(Math.random() * 6) + 1;

            // Set the dice images
            document.querySelector(".img1").src = "./images/dice" + randomNumber1 + ".png";
            document.querySelector(".img2").src = "./images/dice" + randomNumber2 + ".png";

            // Determine the round winner and update the heading
            var heading = document.querySelector("h1");
            if (randomNumber1 === randomNumber2) {
                heading.innerHTML = "Draw";
            } else if (randomNumber1 > randomNumber2) {
                heading.innerHTML = "🚩 " + ply1 + " wins";
                p1++;
            } else {
                heading.innerHTML = ply2 + " wins 🚩";
                p2++;
            }

            // Check if all rounds are played
            if (currentRound === rounds) {
                // Display the final results
                var results = document.getElementById("result");
                results.innerHTML = ply1 + " wins " + p1 + " matches and " + ply2 + " wins " + p2 + " matches";
            }
        }
    }

    // Attach event listener to the button
    document.getElementById("playRound").addEventListener("click", playRound);
};

