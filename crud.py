"""CRUD operations."""

from model import db, User, Rating, connect_to_db

def create_user(username, email, password):
    """Create a new User instance."""
    
    user = User(username=username, email=email, password=password)

    db.session.add(user)
    db.session.commit()

    return user.user_id


def create_rating(place_id, overall_score, mask_score, clean_score, 
                six_ft_score, glove_score, text_review, user_id):
    """Create and return a new rating"""

    rating = Rating(place_id=place_id, 
                    overall_score=overall_score,
                    mask_score=mask_score,
                    clean_score=clean_score,
                    six_ft_score=six_ft_score,
                    glove_score=glove_score,
                    text_review=text_review,
                    user_id=user_id)
    
    db.session.add(rating)
    db.session.commit()

    return rating

def get_user(email):
    """Get User by Username"""

    user = User.query.filter_by(email=email).first()

    if user is None:
        result = {'username': None}
        return result
    else:
        result = {
            'username': user.username,
            'email': user.email,
            'password': user.password,
            'user_id': user.user_id
        }
        return result
    
    



if __name__ == '__main__':
    from server import app
    connect_to_db(app)