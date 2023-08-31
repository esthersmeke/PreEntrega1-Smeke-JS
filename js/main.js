let playAgain = true;
let correctNumber = generateRandomNumber();

function generateRandomNumber() {
  return Math.ceil(Math.random() * 9) + 1; // Generar número random entre 1 y 10
}

function playGame() {
  // No mostrar si es falso
  if (!playAgain) {
    return;
  }

  let guessedNumber = parseInt(prompt("Enter your guess (between 1 and 10)"));

  console.log(
    "Random Number was: " +
      correctNumber +
      " ---- You guessed: " +
      guessedNumber
  );

  // Si es una entrada invalida
  if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
    console.log("Please enter a valid number between 1 and 10!");
    window.confirm("Please enter a valid number between 1 and 10!");
    playAgain = true;
    // Si es una entrada correcta
  } else if (guessedNumber === correctNumber) {
    console.log("Congratulations! You guessed the correct number!");
    if (
      window.confirm(
        "Congratulations! You guessed the correct number. Would you like to play again?"
      )
    ) {
      correctNumber = generateRandomNumber(); // Generar un nuevo correctNumber para el proximo round
      guessedNumber = undefined; // Para resetear cada vez que empiezo un round
      playAgain = true;
    } else {
      playAgain = false;
    }
    // Si es una entrda NO correcta
  } else if (guessedNumber < correctNumber) {
    console.log("Please try a higher number. Try Again!");
    window.confirm("Please try a higher number. Try Again!");
    playAgain = true;
  } else {
    console.log("Please try a lower number. Try Again!");
    window.confirm("Please try a lower number. Try Again!");
    playAgain = true;
  }

  playGame(); // Correr playGame una y otra vez
}

// Para que el HTML se loadee primero antes que el juego
document.addEventListener("DOMContentLoaded", function () {
  playGame();
});
