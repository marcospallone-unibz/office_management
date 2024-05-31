import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { newOffice } from '../utils/getAPIData';

const OfficeForm = (data: any) => {

    const [office, setOffice] = useState<any>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setOffice(data?.office)
    }, [])

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
                location.href = '/om/dashboard?id=' + localStorage.getItem('company');
            }, 1600);
        }
    }, [loading]);

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        city: '',
        address: '',
        company: window != undefined ? localStorage.getItem('company') : null
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
        console.log(formData)
        // setLoading(true)
        await newOffice(formData);
        // setLoading(false);
        location.href = '/om/dashboard?id=' + localStorage.getItem('company');
    };

    if (loading) return <Box sx={{ textAlign: 'center', marginTop: '5rem' }}><CircularProgress></CircularProgress></Box>

    return (
        <Suspense>
            <Box>
                <h1 className='h1-title'>Aggiungi Ufficio</h1>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ padding: '1rem' }}>
                        <Typography>Nome:</Typography>
                        <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box sx={{ padding: '1rem' }}>
                        <Typography>Città:</Typography>
                        <input
                            name="city"
                            type="text"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box sx={{ padding: '1rem' }}>
                        <Typography>Indirizzo:</Typography>
                        <input
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </Box>
                    <Box sx={{ padding: '1rem' }}><Button className='button' type="submit">Aggiungi Ufficio</Button></Box>
                </form>
            </Box>
        </Suspense>
    );
};

export default OfficeForm;