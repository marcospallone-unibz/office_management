import { Box, Button, CircularProgress, Typography } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { deleteOffice } from '../utils/getAPIData';

const OfficeCard = (data: any) => {

    const [office, setOffice] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setOffice(data?.office)
    }, [])

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
            id: office?.id
        }
        // setLoading(true);
        await deleteOffice(data);
        location.reload();
    }

    const navigate = () => {
        location.href = '/om/office?id=' + office?.id
    }

    if (loading) return <Box sx={{textAlign: 'center', marginTop:'5rem'}}><CircularProgress></CircularProgress></Box>

    return (
        <Box component={'div'} onClick={navigate} sx={{textAlign:'center', cursor: 'pointer', minHeight:'100%', display:'flex'}}>
            <Box sx={{ padding: '1rem', display:'flex', flexDirection: 'column', flex: 1, justifyContent:'space-between'}}>
                <Box><Typography>{office?.name}</Typography></Box>
                <Box><Button className='button elimina' sx={{}} onClick={handleDelete}>Elimina</Button></Box>
            </Box>
        </Box>
    );
};

export default OfficeCard;