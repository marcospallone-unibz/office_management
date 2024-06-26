import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { newOffice } from '../utils/getAPIData';

const OfficeForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        city: '',
        address: '',
        company: typeof window !== 'undefined' ? localStorage.getItem('company') : null
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await newOffice(formData);
        location.href = '/om/dashboard?id=' + localStorage.getItem('company');
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
            <h1 className='h1-title'>Add office</h1>
            <form onSubmit={handleSubmit}>
                <Box sx={{ padding: '1rem' }}>
                    <Typography>Name</Typography>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </Box>
                <Box sx={{ padding: '1rem' }}>
                    <Typography>City</Typography>
                    <input
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </Box>
                <Box sx={{ padding: '1rem' }}>
                    <Typography>Address</Typography>
                    <input
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </Box>
                <Box sx={{ padding: '1rem' }}><Button className='button' type="submit">Add office</Button></Box>
            </form>
        </Box>
    );
};

export default OfficeForm;