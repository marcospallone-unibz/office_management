import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { register } from './../utils/getAPIData';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const Register = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
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
        const response = await register(formData);
        router.push('/')
    };

    return (
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1 className="h1-title">Sign Up</h1>
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
                    <Typography>Password</Typography>
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="input"
                    />
                </Box>
                <Box sx={{ padding: '1rem' }}><Button className='button' type="submit">Sign Up</Button></Box>
            </form>
        </Box>
    );
};

export default Register;