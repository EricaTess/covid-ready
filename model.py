""" Models for covid app."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """A user."""

    __tablename__ = 'users'


    user_id = db.Column(db.Integer,
                        primary_key=True,
                        autoincrement=True)
    username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)

    def __repr__(self):
        return f'<User user_id={self.user_id} username={self.username}>'


class Clinic(db.Model):
    """A clinic"""

    __tablename__ = 'clinics'

    clinic_id = db.Column(db.Integer,
                        primary_key=True,
                        autoincrement=True)
    name = db.Column(db.String)
    clinic_key = db.Column(db.String, unique=True)

    def __repr__(self):
        return f'<Clinic clinic_id={self.clinic_id} name={self.name}>'


class Measure(db.Model):
    """A covid measure."""

    __tablename__ = 'measures'

    measure_code = db.Column(db.String,
                            primary_key=True,
                            unique=True)
    measure = db.Column(db.String, unique=True)
    max_score = db.Column(db.Integer)

    def __repr__(self):
        return f'<Measure measure_code={self.measure_code} max_score={self.max_score}>'


class Measure_Rating(db.Model):
    """A measure rating."""

    __tablename__ = 'measure_ratings'

    id = db.Column(db.Integer,
                    primary_key=True,
                    autoincrement=True)
    score = db.Column(db.Integer)
    rating_id = db.Column(db.Integer,
                        db.ForeignKey('ratings.rating_id'))
    measure_code = db.Column(db.String,
                        db.ForeignKey('measures.measure_code'))

    rating = db.relationship('Rating', backref='measure_ratings')
    measure = db.relationship('Measure', backref='measure_ratings')

    def __repr__(self):
        return f'<Measure Rating id={self.id} score={self.score}>'


class Rating(db.Model):
    """A rating."""

    __tablename__ = 'ratings'

    rating_id = db.Column(db.Integer,
                        primary_key=True,
                        autoincrement=True)
    overall_score = db.Column(db.Integer)
    clinic_id = db.Column(db.Integer,
                        db.ForeignKey('clinics.clinic_id'))
    user_id = db.Column(db.Integer,
                        db.ForeignKey('users.user_id'))

    clinic = db.relationship('Clinic', backref='ratings')
    user = db.relationship('User', backref='ratings')

    def __repr__(self):
        return f'<Rating rating_id={self.rating_id} overall_score={self.overall_score}>'



def connect_to_db(flask_app, db_uri='postgresql:///covid_rating', echo=True):
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
    flask_app.config['SQLALCHEMY_ECHO'] = echo
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.app = flask_app
    db.init_app(flask_app)

    print('Connected to the db!')


if __name__ == '__main__':
    from server import app
    connect_to_db(app, echo=False)

    # Call connect_to_db(app, echo=False) if your program output gets
    # too annoying; this will tell SQLAlchemy not to print out every
    # query it executes.