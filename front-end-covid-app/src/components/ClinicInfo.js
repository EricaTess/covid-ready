import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Rating } from '@material-ui/lab';
import { Divider } from '@material-ui/core';

import Reviews from './Reviews';
import Ratings from './Ratings';


export default function ClinicInfo(props) {
    const [value] = useState(5)
    const [review, setReview] = useState(false);
    const [reviews, setReviews] = useState(false);
    

    const displayReviewForm = (e) => {
        e.preventDefault();
         
        if (review === !<Ratings />) {
            setReview(<Ratings place_id={props.place_id}/>)
        } else {
            setReview(!<Ratings />)
        }
    }

    const displayReviews = (e) => {
        e.preventDefault()
        //Get reviews from backend
        if (reviews === !<Reviews />) {
            setReviews(<Reviews place_id={props.place_id}/>)
        } else {
            setReviews(!<Reviews />)
        }
    }

    
    // const renderHours = () => {
    //     if (props.hours !== undefined) {
    //         const hours = props.hours.map((item) => {
    //             return ({item})
    //         })
    //     }
    // }
    


    return (
        <div>
            <Typography component="legend">{props.name}</Typography>
            <Typography component="legend">{props.phone}</Typography>
            <Typography component="legend">{props.address}</Typography>
            <Typography component="legend">{props.hours}</Typography>
            <a href={props.website}>Website</a>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Overall Score</Typography>
            <Rating
                name={"overall-score|".concat(props.place_id)}
                precision={.1}
                value={value}
                readOnly
            />
            <button className="leave-review-btn" onClick={displayReviewForm}>Leave a Review</button>
            <button className="view-review-btn" onClick={displayReviews}>View Reviews</button>
            </Box>
            <Divider variant="middle"/>
            {review}
            {reviews}
        </div>
    )
}