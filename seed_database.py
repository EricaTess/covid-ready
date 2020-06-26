import os
import json

import crud
import model
import server

import googlemaps

os.system('dropdb ratings')
os.system('createdb ratings')

model.connect_to_db(server.app)
model.db.create_all()


gmaps = googlemaps.Client(key='AIzaSyDtkAQdVxlPIJeGjfRUhYRizL35fLxm9V8')

places_result = gmaps.places(query='medical clinics')

list_of_clinics = []
for clinic in places_result['results']:
    name = clinic['name']
    clinic_key = clinic['id']
    print(name, clinic_key)
    db_clinic = crud.create_clinic(name, clinic_key)
    list_of_clinics.append(db_clinic)

if __name__ == '__main__':
    connect_to_db(app)
    with app.app_context():