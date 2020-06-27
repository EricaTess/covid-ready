import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Rating } from '@material-ui/lab';
import { Divider } from '@material-ui/core';

import Reviews from './Reviews';
import Ratings from './Ratings';


export default function ClinicInfo(props) {
    const [review, setReview] = useState([])
    const [leaveReviews, setLeaveReviews] = useState(false);
    const [displayReview, setDisplayReview] = useState(false);

    
    // useEffect(() => {
    //     fetch('/get_overall_score', {
    //     method: 'POST',
    //     headers:{
    //         "content_type":"application/json",
    //     },
    //     body: JSON.stringify(props.place_id),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Clinic Info: ", data)
    //         setReview(data)
    //     })
    // }, [])

    // console.log('Clinic info overall_score: ', data)
    

    const leaveReview = (e) => {
        e.preventDefault();
         
        if (leaveReviews === !<Ratings />) {
            setLeaveReviews(<Ratings place_id={props.place_id}/>)
        } else {
            setLeaveReviews(!<Ratings />)
        }
    }

    const displayReviews = (e) => {
        e.preventDefault()
        //Get reviews from backend
        if (displayReview === !<Reviews />) {
            setDisplayReview(<Reviews place_id={props.place_id}/>)
        } else {
            setDisplayReview(!<Reviews />)
        }
    }

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
                    value={5}
                    readOnly
                />
                <button className="leave-review-btn" onClick={leaveReview}>Leave a Review</button>
                <button className="view-review-btn" onClick={displayReviews}>View Reviews</button>
            </Box>
            <Divider variant="middle"/>
            {leaveReviews}
            {displayReview}
        </div>
    )
}