import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Register = () => {


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        // Questo codice verrà eseguito solo lato client
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const res = await fetch('http://54.242.208.130:3000/newUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, surname, email, password }),
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
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;