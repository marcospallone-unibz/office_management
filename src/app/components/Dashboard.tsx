import { useEffect, useState } from "react";
import { getOffices } from "../utils/getAPIData";


const Dashboard = () => {

    const [offices, setOffices] = useState([])

    useEffect(() => {
        var response = getOffices()
        console.log(response);
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Dashboard;