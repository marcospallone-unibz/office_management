import { Box, Button, Typography } from '@mui/material';

const App = () => {

    return (
        <Box>
            <Box sx={{ textAlign: 'center', marginTop: '5rem' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '2rem' }}>OFFICE MANAGEMENT</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
                <Button href={'/om/login'} className='button' sx={{ marginTop: '2rem' }}>Sign In</Button>
                <Button href={'/om/register'} className='button' sx={{ marginTop: '2rem', marginLeft: '2rem' }}>Sign Up</Button>
            </Box>
        </Box>
    );
};

export default App;