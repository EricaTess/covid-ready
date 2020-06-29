import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

export default function Ratings(props) {

    const [overallScore, setOverallScore] = useState('')
    const [maskScore, setMaskScore] = useState('')
    const [cleanScore, setCleanScore] = useState('')
    const [sixFtScore, setSixFtScore] = useState('')
    const [gloveScore, setGloveScore] = useState('')
    const [textReview, setTextReview] = useState('')

    const handleOverallRating = (event) => {
        event.preventDefault()
        setOverallScore(event.target.value)
    }
    
    const handleMaskRating = (event) => {
        event.preventDefault()
        setMaskScore(event.target.value)
    }

    const handleCleanRating = (event) => {
        event.preventDefault()
        setCleanScore(event.target.value)
    }

    const handleSixFtRating = (event) => {
        event.preventDefault()
        setSixFtScore(event.target.value)
    }

    const handleGloveRating = (event) => {
        event.preventDefault()
        setGloveScore(event.target.value)
    }

    const handleTextReview = (event) => {
        event.preventDefault()
        setTextReview(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()

        const userId = localStorage.getItem('user_id')

        const data = {
            overall_score: overallScore,
            mask_score: maskScore,
            clean_score: cleanScore,
            six_ft_score: sixFtScore,
            glove_score: gloveScore,
            text_review: textReview,
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
          .then(res => {
              console.log(res);
            });
    }

  return (
    <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Overall Score</Typography>
            <Rating
                name={"overall-score|".concat(props.place_id)}
                onChange={handleOverallRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Mask Usage</Typography>
            <Rating
                name={"mask-usage|".concat(props.place_id)}
                onChange={handleMaskRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Cleanliness</Typography>
            <Rating
                name={"cleanliness|".concat(props.place_id)}
                onChange={handleCleanRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Six Foot Distancing</Typography>
            <Rating
                name={"six-foot-distancing|".concat(props.place_id)}
                onChange={handleSixFtRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Glove Usage</Typography>
            <Rating
                name={"glove-usage|".concat(props.place_id)}
                onChange={handleGloveRating}
            />
        </Box>
        <Box component="fieldset" mb={3} borderColor="transparent">
            <TextField 
                id="text-review" 
                multiline
                rows={4}
                defaultValue={"Leave a Review"}
                variant="outlined" 
                onChange={handleTextReview}/>
            <button onClick={handleSubmit}>Submit Review</button>
        </Box>
    </div>
  );
}