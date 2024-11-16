from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/api/data', methods=['GET'])
def get_data():
    data = {"message": "Hello from Python!"}
    response = jsonify(data)
    response.headers['Content-Type'] = 'application/json'
    return response

if __name__ == '__main__':
    app.run(port=5001)
