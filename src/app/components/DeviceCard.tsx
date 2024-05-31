import { Box, Button, CircularProgress, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { deleteDevice } from '../utils/getAPIData';

const DeviceCard = ({ device }: any) => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
                location.reload();
            }, 1600);
        }
    }, [loading]);

    const handleDelete = async (event:any) => {
        event.stopPropagation();
        let data = {
            id: device?.id
        }
        // setLoading(true);
        await deleteDevice(data);
        location.reload();
    }

    const navigate = () => {
        location.href = '/om/device?id=' + device.id
    }

    if (loading) return <Box sx={{textAlign: 'center', marginTop:'5rem'}}><CircularProgress></CircularProgress></Box>

    return (
        <Box component={'div'} onClick={navigate} sx={{textAlign:'center', cursor:'pointer', display: 'flex', minHeight: '125px'}}>
            <Box sx={{ padding: '1rem', display:'flex', flexDirection: 'column', flex: 1, justifyContent:'space-between' }}>
                <Box><Typography>{device?.name}</Typography></Box>
                <Button className='button elimina' onClick={handleDelete} sx={{width:' fit-content', marginLeft:'auto', marginRight: 'auto'}}>Elimina</Button>
            </Box>
        </Box>
    );
};

export default DeviceCard;