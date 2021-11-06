import React,{useState, useContext} from 'react';
import { Button, Grid} from '@mui/material';

import useStyles from './style'
import {locationContext} from './../../App';

const initialState = { location: '', lat: '', lng: ''}

const Form = () => {

    const classes = useStyles();
    const [format, setFormat] = useState(initialState);
    const {dispatch} = useContext(locationContext)

    const onLocation = (e) => {
        e.preventDefault();
        if(format.location !== '' && format.lat !== '' && format.lng !== '') {
            dispatch({
                type: 'ADD_COORDINATE',
                payload:format
            })
        }
        setFormat(initialState);
    }

    const onSetData = (e) => {
        setFormat({...format, [e.target.name]: e.target.value});
    }

    return (
        <form onSubmit={onLocation}>
            <Grid container className={classes.fullContainer}>
                <Grid item className={classes.firstBlock}>
                    <Grid container className={classes.container} spacing={1} > 
                        <Grid item >
                            <label className={classes.locationLabel}>Location Name</label>
                            <input className={classes.locationInput} type="text" onChange={onSetData} value={format.location} name="location" placeholder='Location' />
                        </Grid>
                        <Grid item>
                            <label className={classes.label}>Enter Lattitude</label>
                            <input className={classes.input}type="text" onChange={onSetData} value={format.lat} name="lat" placeholder='Lat' />
                        </Grid>
                        <Grid item>
                            <label className={classes.label}>Enter Longitude</label>
                            <input className={classes.input}type="text" onChange={onSetData} value={format.lng} name="lng" placeholder='Lon' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.secondBlock} >
                    <Button variant='contained' type='submit'  className={classes.submitButton} >Submit</Button>
                </Grid>
            </Grid>
         </form>
    )
}

export default Form;