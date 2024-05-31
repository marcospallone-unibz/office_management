import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getDevicesByOffice, getSingleDevice, getSingleOffice, updateDevice } from "../utils/getAPIData";
import DeviceCard from "./DeviceCard";
import { useRouter } from "next/navigation";

const DeviceDashboard = () => {

    const searchParams = useSearchParams()
    const [device, setDevice] = useState<any>(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getDevice = async () => {
            const results = await getSingleDevice(searchParams.get('id'))
            console.log(results?.data[0])
            setDevice(results?.data[0])
        }
        getDevice();
    }, [])

    useEffect(() => {
        console.log(device)
    }, [device])

    useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false);
                location.reload();
            }, 1600);
        }
    }, [loading]);

    const handleDevice = async () => {
        let data = {
            state: !device?.state,
            deviceId: device?.id
        }
        console.log(data)
        // setLoading(true)
        await updateDevice(data);
        location.reload()
    }

    if (loading) return <Box sx={{ textAlign: 'center', marginTop: '5rem' }}><CircularProgress></CircularProgress></Box>

    return (
        <Box sx={{ padding: '1rem' }}>
            <Box><Typography>{device?.name}</Typography></Box>
            <Box><Button className={`button device-state-${device?.state ? 'on' : 'off'}`} onClick={handleDevice}>{device?.state ? 'ON' : 'OFF'}</Button></Box>
        </Box>
    );
};

export default DeviceDashboard;