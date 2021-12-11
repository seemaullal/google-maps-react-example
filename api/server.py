from flask import Flask, jsonify, send_from_directory
from time import sleep
from data import DATA

app = Flask(__name__, static_folder="../build", static_url_path="/")
app.secret_key = "secret"


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    return app.send_static_file("index.html")


@app.errorhandler(404)
def not_found(_error):
    return app.send_static_file("index.html")


@app.route("/api/map_data")
def get_map_data():
    sleep(2)  # simulate slow connections

    return jsonify(DATA)


if __name__ == "__main__":
    app.run("0.0.0.0", debug=True, port=5001)  # will run on port 5000 by default
