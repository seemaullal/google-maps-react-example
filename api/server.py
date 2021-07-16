from flask import Flask, jsonify, send_from_directory
from time import sleep

app = Flask(__name__)
app.secret_key = "secret"


# TBD: Add routes for production mode

# @app.route("/")
# def home():

#     return render_template("index.html")


# @app.route("/<path>")
# def route(path):

#     return render_template("index.html")


# @app.route("/<path>/<code>")
# def nested_route(path, code):

#     return render_template("index.html")


@app.route("/api/map_data")
def get_map_data():
    sleep(2)  # simulate slow connections
    map_data = [
        {
            "name": "Hackbright Academy",
            "coords": {"lat": 37.7887459, "lng": -122.4115852},
        },
        {
            "name": "Powell Street Station",
            "coords": {"lat": 37.7844605, "lng": -122.4079702},
        },
        {
            "name": "Montgomery Station",
            "coords": {"lat": 37.7894094, "lng": -122.4013037},
        },
    ]

    return jsonify(map_data)


if __name__ == "__main__":
    app.run("0.0.0.0", debug=True, port=5001) # will run on port 5000 by default
