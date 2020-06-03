"""CRUD operations."""

from model import db, User, Rating, Clinic, Measure, Measure_Rating, connect_to_db

def create_user(username, email, password):
    """Create a new User instance."""
    
    user = User(username=username, email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return user

def create_measure(measure, max_score):
    """Create a new measure."""

    measure = Measure(measure=measure, max_score)

    db.session.add(measure)
    db.session.commit()

    return measure

def create_measure_rating(score):
    """Create a new measure rating."""

    measure_rating = Measure_Rating(score=score)

    db.session.add(measure_rating)
    db.session.commit()

    return measure_rating

if __name__ == '__main__':
    from server import app
    connect_to_db(app)