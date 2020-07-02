# COVID Ready

## Summary
COVID Ready is a crowd sourced application that allows patients to 
rate clinics based on COVID readiness. Patients are given the opportunity 
to review the clinic ratings and seek care based off their needs.

## Table of Contents

* [Tech Stack](#tech-stack)
* [Features](#features)
* [Setup/Installation](#installation)
* [About the Developer](#about)

## <a name="tech-stack"></a>Tech Stack

__Frontend:__ HTML5, CSS3, React, Javascript, Bootstrap <br/>
__Backend:__ Python, Flask, PostgreSQL, SQLAlchemy <br/>
__APIs:__ Google Maps API, Google Places API <br/>

## <a name="features"></a>Features

Register or login to access clinic reviews

![Login](/front-end-covid-app/src/img/login.gif)

Search clinics by city and review
![Search/Review](/front-end-covid-app/src/img/nav-review.gif)

## <a name="installation"></a>Setup/Installation

#### Requirements:

- PostgreSQL
- Python 3.7.3
- Google Maps/Places API key

To have this app running on your local computer, please follow the below steps:

Clone repository:
```
$ git clone https://github.com/EricaTess/covid-ready.git
```
Create a virtual environment:
```
$ virtualenv env
```
Activate the virtual environment:
```
$ source env/bin/activate
```
Install dependencies:
```
(env) $ pip3 install -r requirements.txt
```
Start server:
```
(env) $ python3 server.py
```
Navigate to front-end-covid-app folder in another terminal window:
```
$ npm start
```

Get your own Google Maps/Place API key at [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key)

## <a name="about"></a>About the Developer

COVID Ready was created by Erica Sanchez. Get to know her on [LinkedIn](https://www.linkedin.com/in/erica-t-sanchez/)
