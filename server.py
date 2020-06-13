  
"""Server for covid app."""

from flask import (Flask, render_template, request, flash, session, redirect, send_from_directory, jsonify)
from model import connect_to_db
from jinja2 import StrictUndefined
from flask_cors import CORS

import googlemaps
import crud
import model
# import seed_database 

from model import connect_to_db, db

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined
cors = CORS(app)


# Replace this with routes and view functions!
@app.route('/')
def homepage():
    """View homepage"""

    return render_template('home.html')

@app.route('/maps')
def view_map():
    """View map"""

    return render_template('map.html')

@app.route('api/places', methods=['GET', 'POST'])
def get_places():
    """GET places from map view and add in database"""

    



if __name__ == '__main__':
    connect_to_db(app)
    with app.app_context():

        # gmaps = googlemaps.Client(key='AIzaSyDtkAQdVxlPIJeGjfRUhYRizL35fLxm9V8')

        # places_result = gmaps.places(query='medical clinics')

        # for clinic in places_result['results']:
        #     name = clinic['name']
        #     clinic_key = clinic['id']
        #     db_clinic = crud.create_clinic(name, clinic_key)
    app.run(host='0.0.0.0', debug=True)




