# [COVID Ready](https://youtu.be/dfqQUmXaZiA)

## Summary
COVID Ready is a crowd sourced application that addresses patient anxieties surrounding clinic COVID readiness and ensures that medical clinics are adhering to COVID guidelines. Users can rate medical clinics based on their COVID readiness through a 5 star rating system based on whether a mask is required, if hand sanitizer is available, six foot distancing, if the providers are wearing proper PPE, and an overall score. Users can also provide more information of their experience through a text review. Not only can they leave a review, they can also see reviews left by other users.

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

Get your own Google Maps/Place API key at [Google Maps API](https://developers.google.com/maps/documentation/javascript/get-api-key) and replace the API key in 'GoogleMap.js' component in the componentDidMount() method.

To have this app running on your local computer, please follow the below steps:

Clone repository:
```
$ git clone https://github.com/EricaTess/covid-ready.git
```
Navigate to repo:
```
$ cd covid-ready
```
Create and activate a virtual environment:
```
$ virtualenv env
$ source env/bin/activate
```
Install dependencies:
```
(env) $ pip3 install -r requirements.txt
```
Create database `covid_rating`:
```
(env) $ createdb covid_rating
```
Create database tables:
```
(env) $ python3 -i model.py
>>> db.create_all()
```
Start server:
```
(env) $ python3 server.py
```
In a separate terminal window, navigate to front-end-covid-app folder:
Install dependencies:
```
$ npm install
```
Start App!
```
$ npm start
```


## <a name="about"></a>About the Developer

COVID Ready was created by Erica Sanchez. Get to know her on [LinkedIn](https://www.linkedin.com/in/erica-t-sanchez/)
