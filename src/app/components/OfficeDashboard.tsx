import { Box, Button, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getDevicesByOffice, getSingleOffice } from "../utils/getAPIData";
import DeviceCard from "./DeviceCard";

const OfficeDashboard = () => {

  const searchParams = useSearchParams()
  const [office, setOffice] = useState<any>(null)
  const [devices, setDevices] = useState([])

  useEffect(() => {
    const getOffice = async () => {
      const results = await getSingleOffice(searchParams.get('id'))
      setOffice(results?.data[0])
    }
    getOffice();
  }, [])

  useEffect(() => {
    const getDevices = async () => {
      const results = await getDevicesByOffice(office?.id)
      if (results?.data != 'Nessun device') {
        setDevices(results?.data)
      }
    }
    getDevices();
  }, [office])

  useEffect(() => {
    console.log(devices)
  }, [devices])

  return (
    <Box sx={{ padding: '1rem' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{office?.name}</Typography>
        <Typography sx={{ fontStyle: 'italic' }}>{office?.city}, {office?.address}</Typography>
      </Box>
      <Button className="button" href={"/om/addDevice?officeID=" + searchParams.get('id')} sx={{marginTop:'1rem'}}>Aggiungi dispositivo</Button>
      <Box sx={{ marginTop: '2rem', display: 'flex' }}>
        {devices?.map((device, i) => (
          <Box key={i} sx={{marginTop: '1rem', marginLeft: '1rem', width:'200px', maxWidth: '200px', border: '0.5px solid #E6E2DD', borderRadius: '10px' }}>
            <DeviceCard device={device}></DeviceCard>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OfficeDashboard;