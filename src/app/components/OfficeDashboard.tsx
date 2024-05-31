import { Box, Button, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
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
    <Suspense>
      <Box sx={{ padding: '1rem' }}>
        <Button className="button" href={"/om/addDevice?officeID=" + searchParams.get('id')}>Aggiungi dispositivo</Button>
        <Box sx={{ marginTop: '2rem' }}>
          <Typography>Ufficio: {office?.name}</Typography>
          <Typography>Città: {office?.city}</Typography>
          <Typography>Indirizzo: {office?.address}</Typography>
        </Box>
        <Box sx={{ marginTop: '3rem' }}>
          <Typography>DISPOSITIVI:</Typography>
          {devices?.map((device, i) => (
            <Box key={i}>
              <DeviceCard device={device}></DeviceCard>
            </Box>
          ))}
        </Box>
      </Box>
    </Suspense>
  );
};

export default OfficeDashboard;