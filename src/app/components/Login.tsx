import axios from "axios";
import { useEffect, useState } from "react";


const Login = () => {

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

    const postData = async (url: string, data: any) => {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const url = 'http://54.242.208.130:3000/login'; // Sostituisci con il tuo endpoint backend

        try {
            const result = await postData(url, formData);
            console.log('Data successfully posted:', result);
            // Fai qualcosa con il risultato, ad esempio aggiornare lo stato o visualizzare un messaggio
        } catch (error) {
            console.error('Error posting data:', error);
            // Gestisci l'errore, ad esempio visualizzando un messaggio di errore
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