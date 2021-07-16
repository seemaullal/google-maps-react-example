from flask import Flask, jsonify, send_from_directory
from time import sleep
from data import DATA

app = Flask(__name__)
app.secret_key = "secret"


# TBD: Add route for production

@app.route("/api/map_data")
def get_map_data():
    sleep(2)  # simulate slow connections

    return jsonify(DATA)


if __name__ == "__main__":
    app.run("0.0.0.0", debug=True, port=5001) # will run on port 5000 by default
