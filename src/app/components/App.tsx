import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const App = () => {

    const [res, setRes] = useState('NULL');
    const router = useRouter()

    return (
        <div>
            <Link href={'/om/login'}>LOGIN</Link>
            <Link href={'/om/register'}>REGISTRATI</Link>
        </div>
    );
};

export default App;