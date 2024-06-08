import { Box, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { deleteOffice } from '../utils/getAPIData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const OfficeCard = (data: any) => {

    const [office, setOffice] = useState<any>();

    useEffect(() => {
        setOffice(data?.office)
    }, [])

    const handleDelete = async (event: any) => {
        event.stopPropagation();
        let data = {
            id: office?.id
        }
        await deleteOffice(data);
        location.reload();
    }

    const navigate = () => {
        location.href = '/om/office?id=' + office?.id
    }

    return (
        <Box component={'div'} onClick={navigate} sx={{ textAlign: 'center', cursor: 'pointer', minHeight: '100%', display: 'flex' }}>
            <Box sx={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <Box>
                    <Typography>{office?.name}</Typography>
                    <Typography sx={{ fontStyle: 'italic' }}>{office?.city}, {office?.address}</Typography>
                </Box>
                <Box><IconButton className='button elimina' onClick={handleDelete}><DeleteOutlineIcon></DeleteOutlineIcon></IconButton></Box>
            </Box>
        </Box>
    );
};

export default OfficeCard;