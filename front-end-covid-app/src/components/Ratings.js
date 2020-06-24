import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function Ratings(props) {


    const [value] = useState()

    const handleRating = (event) => {

        const userId = localStorage.getItem('user_id')

        const data = {
            measure: event.target.name,
            score: event.target.value,
            place_id: props.place_id,
            user_id: userId
        };

        fetch('/ratings', {
            method: 'POST',
            headers:{
                "content_type":"application/json",
            },
            body: JSON.stringify(data),
        })
          .then(response => response.json())
          .then(res => console.log(res));
    }


  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Overall Score</Typography>
            <Rating
            name={"overall-score|".concat(props.place_id)}
            value={value}
            onClick={handleRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Mask Usage</Typography>
            <Rating
            name={"mask-usage|".concat(props.place_id)}
            value={value}
            onClick={handleRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Cleanliness</Typography>
            <Rating
            name={"cleanliness|".concat(props.place_id)}
            value={value}
            onClick={handleRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Six Foot Distancing</Typography>
            <Rating
            name={"six-foot-distancing|".concat(props.place_id)}
            value={value}
            onClick={handleRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Glove Usage</Typography>
            <Rating
                name={"glove-usage|".concat(props.place_id)}
                value={value}
                onClick={handleRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Leave a review</Typography>
            <TextField id="outlined-basic" variant="outlined" />
            <button>Submit Review</button>
        </Box>
    </div>
  );
}