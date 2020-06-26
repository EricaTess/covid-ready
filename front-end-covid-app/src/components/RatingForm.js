import React, {useState, useEffect} from 'react';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';


export default function RatingForm(props) {
    const [review, setReviews] = useState([])


    return (
        <div>
            <Typography component="legend">Overall Score</Typography>
            <Rating
                name={"overall-score|".concat(props.place_id)}
                value={5}
                readOnly
            />
            <Typography component="legend">Mask Usage</Typography>
            <Rating
                name={"mask-usage|".concat(props.place_id)}
                value={5}
                readOnly
            />
            <Typography component="legend">Cleanliness</Typography>
            <Rating
                name={"cleanliness|".concat(props.place_id)}
                value={5}
                readOnly
            />
            <Typography component="legend">Six Foot Distancing</Typography>
            <Rating
                name={"six-foot-distancing|".concat(props.place_id)}
                value={5}
                readOnly
            />
            <Typography component="legend">Glove Usage</Typography>
            <Rating
                name={"glove-usage|".concat(props.place_id)}
                value={5}
                readOnly
            />
            <TextField 
                id="text-review" 
                multiline
                rows={4}
                variant="outlined" 
                disabled
            />
        </div>
    )

}