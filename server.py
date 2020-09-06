  
"""Server for covid app."""

from flask import (Flask, render_template, request, flash, session, redirect, send_from_directory, jsonify)
from model import connect_to_db
from jinja2 import StrictUndefined
from flask_cors import CORS
import json
from flask_bcrypt import Bcrypt

import crud
import model

from model import connect_to_db, db

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined
cors = CORS(app)
bcrypt = Bcrypt(app)


@app.route('/ratings', methods=['POST'])
def get_ratings():
    """Post Ratings"""

    print(request.json)
    place_id = request.json["place_id"]
    overall_score = request.json["overall_score"]
    mask_score = request.json["mask_score"]
    clean_score = request.json["clean_score"]
    six_ft_score = request.json["six_ft_score"]
    glove_score = request.json["glove_score"]
    text_review = request.json["text_review"]
    user_id = request.json["user_id"]

    result = crud.create_rating(place_id, overall_score, mask_score, clean_score, 
                      six_ft_score, glove_score, text_review, user_id)

    return jsonify(result)


@app.route('/ratings-by-clinic', methods=['POST'])
def get_ratings_by_clinic():
    """Get reviews by clinic id"""

    result = crud.get_rating_by_clinic(request.json)

    return jsonify(result)


@app.route('/users/register', methods=['POST'])
def register():
    """Register User"""

    username = request.json['username']
    email = request.json['email']
    password = bcrypt.generate_password_hash(request.json['password']).decode('utf-8')
    
    user_id = crud.create_user(username, email, password)

    result = {
        'user_id': user_id
    }

    return jsonify(result)

@app.route('/users/login', methods=['POST'])
def login():
    """Login User"""

    email = request.json['email']
    password = request.json['password']
    result = ""

    user = crud.get_user(email) #Gets back dictionary of email and pass

    if user['username'] == None:
        print("Username not found")
        return 
    else:
        user_id = user['user_id']
    
    #Check if decrypted password is the same password from login 
    if bcrypt.check_password_hash(user['password'], password):

        result = jsonify({
            'user_id': user_id
        })
    else:
        print("Incorrect password")
        result = "Invalid"

    return result

    
if __name__ == '__main__':
    connect_to_db(app, echo=False)
    app.run(host='0.0.0.0')

    




