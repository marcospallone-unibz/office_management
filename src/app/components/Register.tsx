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
        await register(formData);
        router.push('/')
    };

    return (
        <Box>
            <h1 className="h1-title">Registrazione</h1>
            <form onSubmit={handleSubmit}>
                <Box sx={{padding: '1rem'}}>
                    <Typography>Nome:</Typography>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Box sx={{padding: '1rem'}}>
                    <Typography>Email:</Typography>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Box sx={{padding: '1rem'}}>
                    <Typography>Password:</Typography>
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Box>
                <Box sx={{padding: '1rem'}}><Button className='button' type="submit">REGISTRATI</Button></Box>
            </form>
        </Box>
    );
};

export default Register;