const passwordBox = document.getElementById("password");


function generateRandomPassword(length) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialSymbols = "!@#$%^&*()_+[]{}|;:',.<>?/`~";
    
    const allCharacters = upperCase + lowerCase + numbers + specialSymbols;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }
    return password;
}


function handleGeneratePassword() {

    let length = parseInt(prompt("Enter the desired password length (between 6 and 20 characters):"));

    if (isNaN(length) || length < 6 || length > 20) {
        alert("Please enter a valid number between 6 and 20.");
        return;  
    }

    const newPassword = generateRandomPassword(length); 
    passwordBox.value = newPassword; 
}
function copyPassword() {
    const password = passwordBox.value;

    if (password) {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert("Password copied to clipboard!"); 
            })
            .catch(err => {
                console.error("Failed to copy password:", err); 
            });
    } else {
        alert("No password to copy! Generate one first.");
    }
}
function createFloatingBubbles(numBubbles) {
    const bubblesContainer = document.querySelector('.bubbles-container');

    // Create the specified number of bubbles
    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubblesContainer.appendChild(bubble);
    }
}

// Create 10 floating bubbles when the page loads
createFloatingBubbles(10);
