  
"""Server for covid app."""

from flask import (Flask, render_template, request, flash, session, redirect, send_from_directory, jsonify)
from model import connect_to_db
from jinja2 import StrictUndefined
from flask_cors import CORS
import json

# import googlemaps
import crud
import model
# import seed_database 

from model import connect_to_db, db

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined
cors = CORS(app)


# Replace this with routes and view functions!
@app.route('/test')
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
    # print("****", request.get_json(force=True), "****")
    return {"did this": "work"}




if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)

    




