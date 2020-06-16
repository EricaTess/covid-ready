import React from 'react';
import { Rating } from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
//   const [value, setValue] = React.useState(2);

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Mask Usage</Typography>
        <Rating
          name="mask-usage"
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Cleanliness</Typography>
        <Rating
          name="cleanliness"
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Six Foot Distancing</Typography>
        <Rating
          name="six-foot-distancing"
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Glove Usage</Typography>
        <Rating
          name="glove-usage"
        />
      </Box>
    </div>
  );
}