import { useEffect, useState } from "react";
import { getOffices } from "../utils/getAPIData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";



const Dashboard = (data: any) => {

    const searchParams = useSearchParams()

    const [offices, setOffices] = useState([]);

    const getData = async () => {
        const results = await getOffices(searchParams.get('t'))
        console.log(results)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Dashboard;