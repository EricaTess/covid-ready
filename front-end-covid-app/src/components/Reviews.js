import React, {useState, useEffect} from 'react';

import RatingForm from './RatingForm';

export default function Reviews(props) {

    const [reviews, setReviews] = useState([])
    const [overallScore, setOverallScore] = useState('')
    const [maskScore, setMaskScore] = useState('')
    const [cleanScore, setCleanScore] = useState('')
    const [sixFtScore, setSixFtScore] = useState('')
    const [gloveScore, setGloveScore] = useState('')
    const [textReview, setTextReview] = useState('')


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
        if (reviews.length > 0) {
            for (const review in reviews) {
                
            }
        }
    }

    return(
        <div>
            <RatingForm />
        </div>
    )

}