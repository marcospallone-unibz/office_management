import { Box } from "@mui/material";
import Link from "next/link";

const Header = () => {

    const links = [
        {
            label: "Home",
            href: typeof window !== 'undefined' ? "/om/dashboard?id="+localStorage.getItem('id') : ''
        },
        {
            label: "Esci",
            href: "/"
        }
    ]

    return (
        <Box className='header'>
            <Box sx={{display:'flex', padding:'22px', justifyContent:'space-between'}}>
                {links?.map((link, i) => (
                    <Box key={i} sx={{ maxWidth: '200px' }}>
                        <Link className="header-link" href={link?.href}>{link?.label}</Link>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Header;