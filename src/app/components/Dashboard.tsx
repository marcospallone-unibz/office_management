import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getOffices } from "../utils/getAPIData";
import OfficeCard from "./OfficeCard";
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';

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

    return (
        <Box>
            <Box sx={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                <Button className="button" href={'/om/addOffice'} startIcon={<AddIcon></AddIcon>}>New Office</Button>
                <Button className="button" href={'/om/employees'} startIcon={<PersonIcon></PersonIcon>}>Manage Employees</Button>
            </Box>
            <Box sx={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', padding: '1rem' }}>
                {offices?.length == 0 ? <Typography sx={{ fontStyle: 'italic' }}>No office</Typography> :
                    offices?.length > 0 && offices?.map((office, i) => (
                        <Box key={i} sx={{ border: '0.5px solid #D48166', borderRadius: '10px' }}>
                            <OfficeCard office={office}></OfficeCard>
                        </Box>

                    ))}
            </Box>
        </Box>
    );
};

export default Dashboard;