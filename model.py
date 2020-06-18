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


class Rating(db.Model):
    """A rating."""

    __tablename__ = 'ratings'

    rating_id = db.Column(db.Integer,
                        primary_key=True,
                        autoincrement=True)
    place_id = db.Column(db.String)
    name = db.Column(db.String)
    score = db.Column(db.Integer)
    user_id = db.Column(db.Integer,
                        db.ForeignKey('users.user_id'))

    user = db.relationship('User', backref='ratings')

    def __repr__(self):
        return f'<Rating rating_id={self.rating_id} place_id={self.place_id}>'



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