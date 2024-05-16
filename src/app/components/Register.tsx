import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const Register = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email }),
        });

        const data = await res.json();
        if (res.ok) {
            setMessage('User created successfully!');
            // Reindirizza l'utente alla homepage dopo aver creato l'utente
            router.push('/');
        } else {
            setMessage('Error creating user: ' + data.error);
        }
    };

    return (
        <div>
            <div>
                <h1>Create User</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Surname:</label>
                        <input
                            type="text"
                            value={surname}
                            onChange={(e) => setSurname(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Create User</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Register;