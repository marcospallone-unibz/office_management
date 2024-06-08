import { Box, IconButton, Switch, Typography } from '@mui/material';
import { deleteDevice, updateDevice } from '../utils/getAPIData';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const DeviceCard = ({ device }: any) => {

    const handleDevice = async (event: any) => {
        event.stopPropagation();
        let data = {
            state: !device?.state,
            deviceId: device?.id
        }
        await updateDevice(data);
        location.reload()
    }

    const handleDelete = async (event: any) => {
        event.stopPropagation();
        let data = {
            id: device?.id
        }
        await deleteDevice(data);
        location.reload();
    }

    return (
        <Box sx={{ textAlign: 'center', display: 'flex', minHeight: '125px' }}>
            <Box sx={{ padding: '1rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <Box><Typography>{device?.name}</Typography></Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 60px' }}>
                    <Switch
                        checked={device?.state}
                        onChange={handleDevice}
                        color='success'
                        sx={{marginTop:'10px'}}
                    />
                    <IconButton className='button elimina' onClick={handleDelete}><DeleteOutlineIcon></DeleteOutlineIcon></IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default DeviceCard;