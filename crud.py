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

    result = {
        'overall_score': rating.overall_score,
        'mask_score': rating.mask_score,
        'clean_score': rating.clean_score,
        'six_ft_score': rating.six_ft_score,
        'glove_score': rating.glove_score,
        'text_review': rating.text_review
    }

    return result

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

def get_rating_by_clinic(place_id):
    """Get rating by clinic id"""

    ratings = Rating.query.filter_by(place_id=place_id).all()
    print('this is what comes back from db', ratings)
    if len(ratings) == 0:
        return []
    reviews = []
    for rating in ratings:
        review = {
            'overall_score': rating.overall_score,
            'mask_score': rating.mask_score,
            'clean_score': rating.clean_score,
            'six_ft_score': rating.six_ft_score,
            'glove_score': rating.glove_score,
            'text_review': rating.text_review,
            'user_id': rating.user_id
        }
        reviews.append(review)

    return reviews
    


if __name__ == '__main__':
    from server import app
    connect_to_db(app, echo=False)