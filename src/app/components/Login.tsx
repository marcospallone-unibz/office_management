import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { login } from "../utils/getAPIData";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const Login = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
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
        var results = await login(formData);
        if (results?.data?.code == 200) {
            if (window !== undefined) {
                console.log(results?.data)
                localStorage.setItem('id', results?.data?.id)
                localStorage.setItem('company', results?.data?.company)
            }
            router.push('/om/dashboard?id=' + results?.data?.id + '&company=' + results?.data?.company)
        } else {
            alert('ERRORE NELLA RICHIESTA')
        }
    };

    return (
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
            <h1 className="h1-title">Login</h1>
            <form onSubmit={handleSubmit}>
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
                <Box sx={{ padding: '1rem' }}><Button className='button' type="submit">LOGIN</Button></Box>
            </form>
        </Box>
    );
};

export default Login;