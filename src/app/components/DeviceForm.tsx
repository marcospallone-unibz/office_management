import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { newDevice } from '../utils/getAPIData';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useSearchParams } from "next/navigation";

const DeviceForm = () => {

    const [loading, setLoading] = useState(false);
    const [officeID, setOfficeID] = useState<any>(null);

    const searchParams = useSearchParams();

    const [formData, setFormData] = useState({
        name: '',
        state: false,
        office: officeID,
    });

    useEffect(() => {
        setOfficeID(searchParams.get('id'))
      }, [])

    useEffect(() => {
        if (loading) {
          setTimeout(() => {
          setLoading(false);
          location.href = '/om/office?id=' + officeID;
        }, 1800);
        }
      }, [loading]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        // setLoading(true);
        await newDevice(formData);
        location.href = '/om/office?id=' + officeID;
    };

    if (loading) return <Box sx={{textAlign: 'center', marginTop:'5rem'}}><CircularProgress></CircularProgress></Box>

    return (
        <Box>
            <h1 className="h1-title">Aggiungi dispositivo</h1>
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
                <Box sx={{ padding: '1rem' }}><Button className='button' type="submit">Aggiungi</Button></Box>
            </form>
        </Box>
    );
};

export default DeviceForm;