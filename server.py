  
"""Server for covid app."""

from flask import (Flask, render_template, request, flash, session, redirect, send_from_directory, jsonify)
from model import connect_to_db
from jinja2 import StrictUndefined
from flask_cors import CORS
import json
from flask_bcrypt import Bcrypt

# import googlemaps
import crud
import model
# import seed_database 

from model import connect_to_db, db

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined
cors = CORS(app)
bcrypt = Bcrypt(app)


# Replace this with routes and view functions!
@app.route('/')
def homepage():
    """View homepage"""

    return {"status": "test"}
    # return render_template('front-end-covid-app/public/index.html')

@app.route('/ratings', methods=['POST'])
def get_ratings():
    """Post Ratings"""

    print(request.json)
    place_id = request.json["place_id"]
    measure = request.json["measure"]
    score = request.json["score"]

    crud.create_rating(place_id, measure, score)

    return {"did this": "work"}

@app.route('/users/register', methods=['POST'])
def register():
    """Register User"""

    print(request.json)
    username = request.json['username']
    email = request.json['email']
    password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')
    
    crud.create_user(username, email, password)

    result = {
        'username': username,
        'email': email,
        'password': password
    }

    return jsonify({'result': result})

@app.route('/users/login', methods=['POST'])
def login():
    """Login User"""

    email = request.get_json['email']
    password = request.get_json()['password']
    result = ""

    # if bcrypt.check_password_hash(rv)/
    result = {
        'email': email,
        'password': password
    }

    return jsonify({'result': result})

    


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)

    




