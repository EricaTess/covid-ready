import React, { useState } from 'react';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Ratings(props) {


    const [value, setValue] = useState()
//   const [isClicked, setIsClicked] = React.useState(false);
//   if (!isClicked) {
//       return (<div onClick={() => {
//           setIsClicked(!isClicked)
//       }}>
//       <Box component="fieldset" mb={3} borderColor="transparent">
//         <Typography component="legend">{props.name}</Typography>
//       </Box>
//       </div>)
//   }

    const handleRating = (event) => {
        // console.log(props.place_id);
        // console.log(event.target.value);

        const data = {
            measure: event.target.name,
            score: event.target.value,
            place_id: props.place_id
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
    // console.log(props.hours);
    


  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">{props.name}</Typography>
        <Typography component="legend">{props.address}</Typography>
        <Typography component="legend">{props.phoneNumber}</Typography>
        <Typography component="legend">{props.hours}</Typography>
        <Typography component="legend"><a href={props.website}>Website</a></Typography>
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
    </div>
  );
}