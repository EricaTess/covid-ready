import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import GoogleMap from './GoogleMap';

export default function ClinicInfo(props) {

    return (
        <div>
            <Typography component="legend">{props.name}</Typography>
            <Typography component="legend">{props.phone}</Typography>
            <Typography component="legend">{props.address}</Typography>
            <Typography component="legend">{props.hours}</Typography>
            <a href={props.website}>Website</a>
        </div>
    )
}