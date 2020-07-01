import React, {useState, useEffect} from 'react';

import RatingForm from './RatingForm';

export default function Reviews(props) {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/ratings-by-clinic', {
            method: 'POST',
            headers:{
                "content_type":"application/json",
            },
            body: JSON.stringify(props.place_id),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setReviews(data)
            })
    }, [])


    const getReviews = () => {
        console.log('in getReviews', reviews)
        const jsx = []
        if (reviews & reviews.length === 0) {
            return (
                <div>
                    <ul>
                        <li>
                            No reviews! Rate this clinic.
                        </li>
                    </ul>
                </div>
            )
        }
        reviews.map((review) => {
            console.log(JSON.stringify(review))
            jsx.push(
                <div>
                    <ul>
                        <li>
                          <RatingForm reviews={review}/> 
                        </li>
                    </ul>
                </div>
            )
        }) 
        return jsx;
    }


    return(
        <div>
            {getReviews()}
        </div>
    )

}