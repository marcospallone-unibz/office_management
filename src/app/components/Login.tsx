import { useState } from "react";
import { login } from "../utils/getAPIData";
import { useRouter } from "next/navigation";


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
        if(results?.data?.code == 200){
            router.push('/dashboard')
        } else {
            alert('ERRORE NELLA RICHIESTA')
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
};

export default Login;