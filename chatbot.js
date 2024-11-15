function displayMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${message.sender === 'user' ? 'user' : 'bot'}`;
    messageDiv.textContent = message.text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Kun käyttäjä lähettää viestin
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();
    
    if (message) {
        // Näytä käyttäjän viesti
        displayMessage({
            text: message,
            sender: 'user'
        });
        
        // Tyhjennä input
        userInput.value = '';
        
        // Botin vastaus (voit muokata tätä tarpeen mukaan)
        setTimeout(() => {
            displayMessage({
                text: "I'm currently in development. Please try asking your question to our human tutors!",
                sender: 'bot'
            });
        }, 1000);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    const userInput = document.getElementById('userInput');

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
});