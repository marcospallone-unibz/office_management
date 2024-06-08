import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { newDevice } from '../utils/getAPIData';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSearchParams } from "next/navigation";

const DeviceForm = () => {

    const [officeID, setOfficeID] = useState<any>(null);

    const searchParams = useSearchParams();

    const [formData, setFormData] = useState({
        name: '',
        state: false,
        office: officeID,
    });

    useEffect(() => {
        setOfficeID(searchParams.get('officeID'))
    }, [])

    useEffect(() => {
        setFormData(prevState => ({
            ...prevState,
            office: officeID
        }));
    }, [officeID])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        await newDevice(formData);
        location.href = '/om/office?id=' + officeID;
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
            <h1 className="h1-title">Add Device</h1>
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
                <Box sx={{ padding: '1rem' }}><Button className='button' type="submit">Add</Button></Box>
            </form>
        </Box>
    );
};

export default DeviceForm;