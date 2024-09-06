let randomNumber = Math.floor(Math.random() * 10) + 1;
let attemptsLeft = 5;

document.getElementById('submitBtn').addEventListener('click', function() {
    let userGuess = parseInt(document.getElementById('guess').value);
    let messageElement = document.getElementById('message');
    let attemptsElement = document.getElementById('attemptsLeft');

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        messageElement.textContent = "Por favor, asegúrate de ingresar un NÚMERO válido entre 1 y 10 SIN DECIMALES";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        alert(`¡Felicidades! Adivinaste el número ${randomNumber}. Te sobraron ${attemptsLeft} intentos.`);
        resetGame();
    } else if (attemptsLeft === 0) {
        alert("Mala suerte ):  el número misterioso era:  " + randomNumber);
        resetGame();
    } else {
        messageElement.textContent = userGuess > randomNumber ? "Muy alto. Intenta de nuevo." : "Muy bajo. Intenta de nuevo.";
        attemptsElement.textContent = `Intentos restantes: ${attemptsLeft}`;
    }
});

function resetGame() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attemptsLeft = 5;
    document.getElementById('guess').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attemptsLeft').textContent = `Intentos restantes: ${attemptsLeft}`;
}