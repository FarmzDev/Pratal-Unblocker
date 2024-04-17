import os
from flask import Flask, request, render_template, send_file, Blueprint
import requests

app = Flask(__name__)

clients_static_bp = Blueprint('clients_static', __name__, static_folder='clients')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/g")
def games():
    return render_template("games.html")
@app.route("/g/eg")
def eaglercraft():
    return render_template("eagl.html")

app.register_blueprint(clients_static_bp)

app.run(debug=True, port=80)