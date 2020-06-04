  
"""Server for covid app."""

from flask import (Flask, render_template, request, flash, session, redirect, send_from_directory, jsonify)
from model import connect_to_db
from jinja2 import StrictUndefined

from model import connect_to_db, db

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined


# Replace this with routes and view functions!
@app.route('/')
def homepage():
    """View homepage"""

    return render_template('home.html')

@app.route('/maps')
def view_map():
    """View map"""

    return render_template('map.html')


@app.route("/static/<path:resource>")
def get_resource(resource):
    return send_from_directory("static", resource)


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host='0.0.0.0', debug=True)