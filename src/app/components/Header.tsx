import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {

    const [companyName, setCompanyName] = useState<any>('')

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCompanyName(localStorage.getItem('name'))
        }
    }, [])

    return (
        <Box className='header'>
            <Box sx={{ display: 'flex', padding: '22px', justifyContent: 'space-between' }}>
                <Box sx={{ maxWidth: '200px' }}>
                    <Link className="header-link" href={typeof window !== 'undefined' ? "/om/dashboard?id=" + localStorage.getItem('id') : ''}>Home</Link>
                </Box>
                <Box>
                    <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{companyName}</Typography>
                </Box>
                <Box sx={{ maxWidth: '200px' }}>
                    <Link className="header-link" href={'/'}>Logout</Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;