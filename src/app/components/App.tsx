import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const App = () => {

    const [res, setRes] = useState('NULL');
    const router = useRouter()

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

    return (
        <div>
            {/* <button onClick={handleLogin}>LOGIN</button> */}
            <Link href={'/register'}>REGISTRATI</Link>
            <div>{res}</div>
        </div>
    );
};

export default App;