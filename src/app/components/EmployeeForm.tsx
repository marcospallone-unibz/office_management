import Button from "@mui/material/Button";
import { useState } from "react";
import { newEmployee } from './../utils/getAPIData';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const EmployeeForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: typeof window != 'undefined' ? localStorage.getItem('company') : null
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
        await newEmployee(formData);
        location.href = '/om/employees'
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
            <h1 className="h1-title">Add employee</h1>
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
                    <Typography>Email</Typography>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </Box>
                <Box sx={{ padding: '1rem' }}>
                    <Typography>Phone</Typography>
                    <input
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </Box>
                <Box sx={{ padding: '1rem' }}><Button className='button' type="submit">Add employee</Button></Box>
            </form>
        </Box>
    );
};

export default EmployeeForm;