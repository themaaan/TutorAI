// Hakee tarvittavat elementit
const sendButton = document.getElementById("sendButton");
const userInput = document.getElementById("user-input");
const chatMessages = document.getElementById("chat-messages");

// Funktio viestin lähettämiseen backendille
async function sendMessageToChatbot(message) {
    try {
        // Lähetä viesti API:lle käyttäen POST-pyyntöä
        const response = await fetch("http://localhost:5002/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: message }),
        });

        // Parsitaan vastaus JSON-muodossa
        const data = await response.json();
        return data.reply;
    } catch (error) {
        console.error("Virhe API-kutsussa:", error);
        return "Jokin meni pieleen API-yhteydessä.";
    }
}

// Funktio käyttäjän viestin lähettämiseksi
async function handleUserMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    // Päivitä chat-ikkuna käyttäjän viestillä
    addMessageToChat("You", message);
    userInput.value = "";

    // Hae vastaus chatbottiin API-kutsulla
    const botReply = await sendMessageToChatbot(message);

    // Päivitä chat-ikkuna chatbotin vastauksella
    addMessageToChat("Bot", botReply);
}

// Funktio viestin lisäämiseksi chat-ikkunaan
function addMessageToChat(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = `<b>${sender}:</b> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scrollaa alas uusimman viestin näyttämiseksi
}

// Lisää tapahtumankäsittelijä "Send" -painikkeelle
sendButton.addEventListener("click", handleUserMessage);

// Lisää tapahtumankäsittelijä Enter-näppäimelle
userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleUserMessage();
    }
});
