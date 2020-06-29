import React, {useState, useEffect} from 'react';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';


export default function RatingForm(props) {

    // console.log('This is the props in RatingForm: ', props.reviews.clean_score)

    return (
        <div>
            <Typography component="legend">Overall Score</Typography>
            <Rating
                name={"overall-score|".concat(props.place_id)}
                value={props.reviews.overall_score}
                readOnly
            />
            <Typography component="legend">Mask Usage</Typography>
            <Rating
                name={"mask-usage|".concat(props.place_id)}
                value={props.reviews.mask_score}
                readOnly
            />
            <Typography component="legend">Cleanliness</Typography>
            <Rating
                name={"cleanliness|".concat(props.place_id)}
                value={props.reviews.clean_score}
                readOnly
            />
            <Typography component="legend">Six Foot Distancing</Typography>
            <Rating
                name={"six-foot-distancing|".concat(props.place_id)}
                value={props.reviews.six_ft_score}
                readOnly
            />
            <Typography component="legend">Glove Usage</Typography>
            <Rating
                name={"glove-usage|".concat(props.place_id)}
                value={props.reviews.glove_score}
                readOnly
            />
            <TextField 
                id="text-review" 
                multiline
                value={props.reviews.text_review}
                rows={4}
                variant="outlined" 
                disabled
            />
            <Divider variant="middle"/>
        </div>
    )

}