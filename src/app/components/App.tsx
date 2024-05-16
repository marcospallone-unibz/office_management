import React, { useState } from 'react';
import axios from 'axios';
import router from 'next/router';

const App = () => {

    const [res, setRes] = useState('NULL');

    const fetchData = async () => {
        try {
            const response = await axios.get('http://54.80.75.250:3000');
            // Gestione della risposta
            console.log(response.data)
            setRes(response.data);
        } catch (error) {
            // Gestione degli errori
            console.error('Errore nella richiesta:', error);
        }
    };

    const handleLogin = () => {

    }

    const handleRegister = () => {
        router.push('/register');
    }

    return (
        <div>
            <button onClick={handleLogin}>LOGIN</button>
            <button onClick={handleRegister}>REGISTRATI</button>
            <div>{res}</div>
        </div>
    );
};

export default App;