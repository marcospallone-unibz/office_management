import axios from "axios";
import { useEffect, useState } from "react";


const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
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
            console.log(data)
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const url = 'http://54.87.175.86:3000/register'; // Sostituisci con il tuo endpoint backend

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
            <h1>Create User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Surname:</label>
                    <input
                        name="surname"
                        type="text"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                    />
                </div>
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
                <button type="submit">REGISTRATI</button>
            </form>
        </div>
    );
};

export default Register;