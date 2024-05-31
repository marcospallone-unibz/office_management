import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getOffices } from "../utils/getAPIData";
import OfficeCard from "./OfficeCard";

const Dashboard = () => {

    const [offices, setOffices] = useState([]);

    const getData = async () => {
        let company = null;
        if (window != undefined) {
            company = localStorage.getItem('company')
        }
        const results = await getOffices(company)
        if (results?.data != 'Nessun ufficio') {
            setOffices(results?.data)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    useEffect(() => {
        console.log(offices)
    }, [offices])

    return (
        <Box>
            <Box sx={{ padding: '1rem' }}>
                <Button className="button" href={'/om/addOffice'}>Nuovo Ufficio</Button>
            </Box>
            <Box sx={{ marginTop: '1rem', display: 'flex' }}>
                {offices?.map((office, i) => (
                    <Box key={i} sx={{ marginTop: '1rem', marginLeft: '1rem', maxWidth: '200px', border: '0.5px solid #E6E2DD', borderRadius: '10px' }}>
                        <OfficeCard office={office}></OfficeCard>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Dashboard;