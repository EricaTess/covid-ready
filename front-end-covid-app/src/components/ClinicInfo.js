import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Rating } from '@material-ui/lab';
import { Divider } from '@material-ui/core';

import Reviews from './Reviews';
import Ratings from './Ratings';


export default function ClinicInfo(props) {
    const [value] = useState(5)
    const [leaveReview, setLeaveReview] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    

    const displayReviewForm = (e) => {
        e.preventDefault();
         
        if (leaveReview === !<Ratings />) {
            setLeaveReview(<Ratings place_id={props.place_id}/>)
        } else {
            setLeaveReview(!<Ratings />)
        }
    }

    const displayReviews = (e) => {
        e.preventDefault()
        //Get reviews from backend

        if (showReviews === !<Reviews />) {
            setShowReviews(<Reviews place_id={props.place_id}/>)
        } else {
            setShowReviews(!<Reviews />)
        }
    }

    
    const layoutHours = () => {
        if (props.hours === undefined) {
            return
        }
        return (
            <div>
                {props.hours[0]}<br/>
                {props.hours[1]}<br/>
                {props.hours[2]}<br/>
                {props.hours[3]}<br/>
                {props.hours[4]}<br/>
                {props.hours[5]}<br/>
                {props.hours[6]}<br/>
            </div>
        )
    }
    


    return (
        <div id={"clinic|".concat(props.place_id)}>
            <Typography component="legend">{props.name}</Typography>
            <Typography component="legend">{props.phone}</Typography>
            <Typography component="legend">{props.address}</Typography>
            <Typography component="legend">{layoutHours()}</Typography>
            <a href={props.website}>Website</a>
            <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Average Overall Score</Typography>
            <Rating
                name={"overall-score|".concat(props.place_id)}
                precision={.1}
                value={value}
                readOnly
            />
            <button className="btn btn-lg btn-primary btn-block leave-review-btn" onClick={displayReviewForm}>Leave a Review</button>
            <button className="btn btn-lg btn-primary btn-block view-review-btn" onClick={displayReviews}>View Reviews</button>
            </Box>
            {/* <Divider variant="middle"/> */}
            {leaveReview}
            {showReviews}
        </div>
    )
}