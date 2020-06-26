  
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
    overall_score = request.json["overall_score"]
    mask_score = request.json["mask_score"]
    clean_score = request.json["clean_score"]
    six_ft_score = request.json["six_ft_score"]
    glove_score = request.json["glove_score"]
    text_review = request.json["text_review"]
    user_id = request.json["user_id"]

    crud.create_rating(place_id, overall_score, mask_score, clean_score, 
                      six_ft_score, glove_score, text_review, user_id)

    return {"this": "worked"}

@app.route('/users/register', methods=['POST'])
def register():
    """Register User"""

    # print(request.json)
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
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)

    




