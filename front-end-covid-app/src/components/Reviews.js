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

    const getReviews = reviews.map((review) => {
        console.log(JSON.stringify(review))
        return (
            <div>
                <ul>
                    <li>
                        <RatingForm reviews={review}/> 
                    </li>
                </ul>
            </div>
        )
    })

  return(
    <div>
      {getReviews}
    </div>
  )

}