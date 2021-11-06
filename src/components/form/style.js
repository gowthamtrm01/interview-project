import {makeStyles} from '@mui/styles';
import { borderLeft } from '@mui/system';

export default makeStyles(() => ({
    fullContainer:{
        backgroundColor: '#074770',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: '36px',
        borderTopRightRadius: '36px'
    },
    firstBlock: {
        marginLeft: '20px'
    },
    secondBlock: {
        marginRight: '80px'
    },
    container:{
        height: '120px',
        display: 'flex',
        alignItems: 'center',
    },
    locationInput:{
        borderRadius: '5px',
        width: '200px',
        height: '40px',
        borderColor: '#074770'
    },
    locationLabel:{
        color: '#72a1bf',
        display: 'block',
        marginRight: '0px'
    },
    submitButton:{
        borderRadius: '22px',
        color: '#074770',
        backgroundColor: '#72a1bf',
        width: '150%',
        marginTop: '10px',
    },
    label:{
        color: '#72a1bf',
        display: 'block',
        marginRight: '25px'
    },
    input:{
        borderRadius: '5px',
        width: '150px',
        height: '40px',
        borderColor: '#074770'
    }
}))