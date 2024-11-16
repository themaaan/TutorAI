from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)  # Tämä sallii cross-origin pyynnöt

# OpenAI API key
openai.api_key = ""

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("message", "")

    # Muutetaan käyttäjän viesti oikeaan muotoon
    messages = [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": user_message}
    ]

    # ChatGPT:n vastaus
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=messages
    )

    bot_reply = response.choices[0].message['content'].strip()

    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(port=5002, debug=True)


    