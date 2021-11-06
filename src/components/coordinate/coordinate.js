import React,{useContext} from 'react';
import { Typography, Grid, Button } from '@mui/material';

import useStyles from './style';
import {locationContext} from './../../app';

const Coordinate = () => {

    const classes = useStyles();
    const {state} = useContext(locationContext);

    return (
        <div id="coordinates-container">
            <div className={classes.container}>
                <Typography variant="h6"  className={classes.header}  >ALL CO-ORDINATES:</Typography>
                <Grid container flex="true" justifyContent="space-between">
                    <Typography variant="p" bold="true" display="flex" className={classes.headingColor} >My Co-ordinates</Typography>
                    <div style={{display: 'flex'}}>
                        <Typography variant="p" bold="true" style={{'paddingRight': '50px'}}  className={classes.headingDeafult} >DEFAULT</Typography>
                        <Typography variant="p" bold="true"   className={classes.headingDeafult}  >DEFAULT</Typography>
                    </div>
                </Grid>
                {state.map((coordinate, i) => (
                    <Grid container flex="true" justifyContent="space-between" key={i}>
                        <Typography variant="p" bold="true" display="flex" className={classes.headingColor} >{`${i+1}) ${coordinate.location}`}</Typography>
                        <div style={{display: 'flex'}}>
                            <Typography variant="p" bold="true" style={{'paddingRight': '50px'}}  className={classes.headingColor} >{coordinate.lat}</Typography>
                            <Typography variant="p" bold="true"   className={classes.headingColor}  >{coordinate.lng}</Typography>
                        </div>
                    </Grid>
                ))}
                <div className={classes.routeContainer}>
                    <Button variant='contained' disabled={state.length === 0 ? true : false} className={classes.routeButton}  >Show Route</Button>
                </div>
            </div>
        </div>
    )
}

export default Coordinate;