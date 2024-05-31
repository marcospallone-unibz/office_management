import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const App = () => {

    const [res, setRes] = useState('NULL');
    const router = useRouter()

    return (
        <Box>
            <Box sx={{textAlign: 'center', marginTop:'5rem'}}>
                <Typography sx={{fontWeight: 700, fontSize:'2rem'}}>OFFICE MANAGEMENT</Typography>
            </Box>
            <Box sx={{textAlign: 'center'}}>
                <Button href={'/om/login'} className='button' sx={{marginTop: '2rem'}}>LOGIN</Button>
                <Button href={'/om/register'} className='button' sx={{ marginTop: '2rem', marginLeft: '2rem'}}>REGISTRATI</Button>
            </Box>
        </Box>
    );
};

export default App;