// Funcion para generar numero al azar entre 1 y 100
function numeroRandom() {
  return Math.ceil(Math.random() * 100) + 1;
}

// Funcion para jugar
function playGame() {
  let RANDOM_NUMBER = numeroRandom();
  let playAgain = true;

  // Loop para seguir jugando
  while (playAgain) {
    const USER_GUESS = parseInt(
      prompt("Enter your guess (between 1 and 100):")
    );

    // Si es una entrada invalida - Adivinaste - Sigue intentando
    if (isNaN(USER_GUESS) || USER_GUESS < 1 || USER_GUESS > 100) {
      //document.write("Please enter a valid number between 1 and 100.");
      console.log("Please enter a valid number between 1 and 100.");
    } else if (USER_GUESS === RANDOM_NUMBER) {
      //document.write("Congratulations! You guessed the correct number!");
      console.log("Congratulations! You guessed the correct number!");
      playAgain = confirm("Do you want to play again?");
      if (playAgain) {
        RANDOM_NUMBER = numeroRandom();
      }
    } else if (USER_GUESS < RANDOM_NUMBER) {
      //document.write("Try a higher number.");
      console.log("Try a higher number.");
    } else {
      //document.write("Try a lower number.");
      console.log("Try a lower number.");
    }
  }

  //document.write("Thanks for playing!");
  console.log("Thanks for playing!");
}

// Llamando a la función para jugar
playGame();
