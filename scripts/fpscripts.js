document.addEventListener("DOMContentLoaded", function () {
    const mainCardContainer = document.querySelector(".main-card-container");
    const optionsContainer = document.querySelector(".options-container");
    const startButton = document.querySelector(".start-game-button");
    const messageDisplay = document.querySelector(".message");
    const timerProgress = document.querySelector(".timer-progress");
  
    const GAME_DURATION = 5000;
    const GAME_RESTART_DELAY = 0; 
  
    let timerInterval;
    let gameEnded = true; 
  
    startButton.addEventListener("click", startGame);
  
    function startGame() {
        console.log("startGame function called");
        if (gameEnded) {
            startButton.disabled = true; 
            messageDisplay.textContent = ''; 
            resetGame();
            startTimer();
            gameEnded = false;
            startButton.disabled = false;
        }
    }
  
    function resetGame() {
        console.log("resetGame function called");
        clearElement(mainCardContainer);
        clearElement(optionsContainer);
        const mainCardValue = generateRandomValue(3, 12);
        const mainCard = createCard("main-card");
        mainCard.textContent = mainCardValue;
        mainCardContainer.appendChild(mainCard);
        const correctOptionValue = generateRandomValue(mainCardValue + 1, 13);
        const incorrectOptions = generateIncorrectOptions(mainCardValue);
        const optionValues = [correctOptionValue, ...incorrectOptions];
        optionValues.sort(() => Math.random() - 0.5);
        for (let i = 0; i < optionValues.length; i++) {
            const card = createCard("option-card");
            card.textContent = optionValues[i];
            optionsContainer.appendChild(card);
        }
        enableOptionCards(); 
    }
  
    function handleOptionClick(event) {
        console.log("handleOptionClick function called");
        if (!gameEnded) {
            clearInterval(timerInterval);
            const selectedValue = parseInt(event.target.textContent);
            const mainCardValue = parseInt(mainCardContainer.textContent);
            if (selectedValue > mainCardValue) {
                endGame("You win!");
            } else {
                endGame("You lose!");
            }
            messageDisplay.style.display = 'block'; 
        }
    }
  
    function startTimer() {
        console.log("startTimer function called");
        let startTime = Date.now();
        timerInterval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const progress = (elapsedTime / GAME_DURATION) * 100;
            timerProgress.style.width = `${100 - progress}%`;
            if (elapsedTime >= GAME_DURATION) {
                clearInterval(timerInterval);
                endGame("Time's up! You lose.");
            }
        }, 100);
    }
  
    function endGame(message) {
        console.log("endGame function called");
        messageDisplay.textContent = message;
        gameEnded = true;
        startButton.disabled = false; 
        messageDisplay.style.display = 'block';
        disableOptionCards(); 
    }
  
    function createCard(className) {
        console.log("createCard function called");
        const card = document.createElement("div");
        card.classList.add("card", className);
        return card;
    }
    
    function generateRandomValue(min, max) {
        console.log("generateRandomValue function called");
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
  
    function generateIncorrectOptions(mainCardValue) {
        console.log("generateIncorrectOptions function called");
        const incorrectOptions = [];
        console.log("Array initialized: incorrectOptions =", incorrectOptions);
        for (let i = 0; i < 3; i++) {
            console.log("Loop iteration:", i + 1);
            let value;
            do {
                console.log("Generating random value...");
                value = generateRandomValue(1, mainCardValue);
                console.log("Generated random value:", value);
            } while (incorrectOptions.includes(value));
            console.log("Generated unique value:", value);
            incorrectOptions.push(value);
            console.log("Value pushed to incorrectOptions array:", incorrectOptions);
        }
        console.log("Loop completed. Returning incorrectOptions:", incorrectOptions);
        return incorrectOptions;
    }
    
  
    function clearElement(element) {
        console.log("clearElement function called");
        element.innerHTML = "";
    }
  
    function enableOptionCards() {
        console.log("enableOptionCards function called");
        const optionCards = document.querySelectorAll(".option-card");
        optionCards.forEach(card => {
            card.addEventListener("click", handleOptionClick);
            card.disabled = false; 
        });
    }
  
    function disableOptionCards() {
        console.log("disableOptionCards function called");
        const optionCards = document.querySelectorAll(".option-card");
        optionCards.forEach(card => {
            card.removeEventListener("click", handleOptionClick);
            card.disabled = true;
        });
    }
  });