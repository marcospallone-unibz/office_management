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

    const handleDelete = async () => {
        let data = {
            id: device?.id
        }
        // setLoading(true);
        await deleteDevice(data);
        location.reload();
    }

    if (loading) return <Box sx={{textAlign: 'center', marginTop:'5rem'}}><CircularProgress></CircularProgress></Box>

    return (
        <Box>
            <Box sx={{ padding: '1rem' }}>
                <Box component={Link} href={'/om/device?id=' + device.id}><Typography>{device?.name}</Typography></Box>
                <Button className='button elimina' onClick={handleDelete}>Elimina</Button>
            </Box>
        </Box>
    );
};

export default DeviceCard;