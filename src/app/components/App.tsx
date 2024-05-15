import React, { useState } from 'react';
import axios from 'axios';

const App = () => {

    const [res, setRes] = useState('NULL');

    const fetchData = async () => {
        try {
            const response = await axios.get('34.201.62.55:3000');
            // Gestione della risposta
            setRes(response.data);
        } catch (error) {
            // Gestione degli errori
            console.error('Errore nella richiesta:', error);
        }
    };

    const handleClick = () => {
        fetchData(); // Chiamata alla funzione fetchData al click del bottone
    };

    return (
        <div>
            <button onClick={handleClick}>Fai una richiesta</button>
            <div>{res}</div>
        </div>
    );
};

export default App;