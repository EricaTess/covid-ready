import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { Rating } from '@material-ui/lab';

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
        <div className="clinic-information" id={"clinic|".concat(props.place_id)}>
            <p className="clinic-name">{props.name}</p>
            <p className="address">{props.address}</p>
            <p className="phone">{props.phone}</p>
            <p className="hours">{layoutHours()}</p>
            <a className="website" href={props.website}>Website</a>
            <Box component="fieldset" mb={3} borderColor="transparent">
            Average Overall Score<br/>
            <Rating
                name={"overall-score|".concat(props.place_id)}
                precision={.1}
                value={4.45}
                readOnly
            />
            <button className="btn btn-primary btn-block leave-review-btn" onClick={displayReviewForm}>Rate Clinic</button>
            <button className="btn btn-primary btn-block view-review-btn" onClick={displayReviews}>View Reviews</button>
            </Box>
            {leaveReview}
            {showReviews}
        </div> 
        
    )
}