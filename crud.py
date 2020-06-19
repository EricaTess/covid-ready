"""CRUD operations."""

from model import db, User, Rating, connect_to_db

def create_user(username, email, password):
    """Create a new User instance."""
    
    user = User(username=username, email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return user


def create_rating(place_id, name, score):
    """Create and return a new rating"""

    rating = Rating(place_id=place_id, 
                    name=name,
                    score=score)
    
    db.session.add(rating)
    db.session.commit()

    return rating

def get_user(email):
    """Get User by Username"""

    user = User.query.filter_by(email=email).first()

    result = {
        'email': user.email,
        'password': user.password
    }
    
    if user is None:
        print('User does not exist')
    else:
        return result



if __name__ == '__main__':
    from server import app
    connect_to_db(app)