import React,{ createContext, useReducer, useState} from 'react';
import {Button, Grid, CssBaseline} from '@mui/material';

import Form from './components/form/form';
import Map from './components/map/map';
import Coordinate from './components/coordinate/coordinate';
import reducer from './reducer/reducer';

const locationContext = createContext(null);
export {locationContext};

const App = () => {
    
    const location = [];
    const [state, dispatch] = useReducer(reducer, location);
    const [show, setShow] = useState(false);

    const display = () => {
        setShow((prevShow) => !prevShow);
    }

    return (
        <div>
            <locationContext.Provider value={{state, dispatch}}>
                <CssBaseline/>
                <Button id="home-button" variant="contained" onClick={display}>Home</Button>
                {show && (
                    <div >
                        <Grid  id='container' >
                            <Grid container>
                                <Grid item xs={12}>
                                    <Form/>
                                </Grid>
                                <Grid item xs={6} >
                                    <Coordinate/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Map/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                )}
            </locationContext.Provider>
        </div>
    )
}

export default App; 