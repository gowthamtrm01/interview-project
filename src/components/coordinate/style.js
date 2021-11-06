import {makeStyles} from '@mui/styles';

export default makeStyles(() => ({
    container:{
        width: '100%',
        height: '50vh',
        position: 'relative',
    },
    header:{
        fontWeight: 'bold',
        color: '#123043'
    },
    headingColor:{
        color: '#123043'
    },
    headingDeafult:{
        color:	'#DCDCDC'
    },
    routeContainer:{
        position: 'absolute',
        bottom: '0'
    },
    routeButton:{
        color: 'white',
        backgroundColor: '#074770',
        borderRadius:'21px',
        width: '445px'
    }
}))