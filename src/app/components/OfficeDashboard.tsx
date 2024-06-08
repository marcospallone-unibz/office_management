import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { generateQRCode, getDevicesByOffice, getSingleOffice } from "../utils/getAPIData";
import DeviceCard from "./DeviceCard";
import AddIcon from '@mui/icons-material/Add';
import KeyIcon from '@mui/icons-material/Key';
import CloseIcon from '@mui/icons-material/Close';
import PlaceIcon from '@mui/icons-material/Place';

const OfficeDashboard = () => {

  const searchParams = useSearchParams()
  const [office, setOffice] = useState<any>(null)
  const [devices, setDevices] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [QRGenerated, setQRGenerated] = useState(false)
  const [downloadURL, setDownloadURL] = useState('')

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

  const handleDoor = () => {
    setModalOpen(true);
  }

  const handleMaps = () => {
    const fullAddress = office?.address + ' ' + office?.city
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
    window.open(mapsUrl, '_blank');
  }

  const handleCloseModal = () => {
    setQRGenerated(false);
    setModalOpen(false);
  }

  const handleNewQRCode = async () => {
    const response = await generateQRCode();
    if (response?.data?.code == 200) {
      setQRGenerated(true);
      setDownloadURL(response?.data?.url);
    }
  }

  const downloadFile = async () => {
    try {
      const link = document.createElement('a');
      link.href = downloadURL;
      link.target = '_blank';
      link.download = 'qr.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <Box sx={{ padding: '1rem' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>{office?.name}</Typography>
        <Typography sx={{ fontStyle: 'italic' }}>{office?.address} - {office?.city}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button className="button" href={"/om/addDevice?officeID=" + searchParams.get('id')} sx={{ marginTop: '1rem' }} startIcon={<AddIcon></AddIcon>}>New device</Button>
        <Button className="button" onClick={handleMaps} sx={{ marginTop: '1rem' }} startIcon={<PlaceIcon></PlaceIcon>}>Open in Maps</Button>
        <Button className="button" onClick={handleDoor} sx={{ marginTop: '1rem' }} startIcon={<KeyIcon></KeyIcon>}>Manage door</Button>
      </Box>
      <Box sx={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px', padding: '1rem' }}>
        {devices?.length == 0 ? <Typography sx={{ fontStyle: 'italic' }}>No device</Typography> :
          devices?.map((device, i) => (
            <Box key={i} sx={{ marginTop: '1rem', border: '0.5px solid #D48166', borderRadius: '10px' }}>
              <DeviceCard device={device}></DeviceCard>
            </Box>
          ))}
      </Box>
      <Modal open={modalOpen} onClose={handleCloseModal} className="modal">
        <Box className="modal-inner-box">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton sx={{ color: '#E6E2DD' }} onClick={handleCloseModal}><CloseIcon></CloseIcon></IconButton>
          </Box>
          <Box className="modal-content">
            <Box>
              <Typography sx={{ marginTop: '2rem' }}>{QRGenerated ? 'The new QR Code has been generated. You can download it via the link below which remains active for 1 minute.' : 'Do you want to generate a new QR Code for opening the office door?'}</Typography>
            </Box>
            <Box>
              <Button className={`button ${QRGenerated ? 'download' : ''}`} onClick={QRGenerated ? downloadFile : handleNewQRCode} sx={{ marginTop: '3rem' }}>{QRGenerated ? 'Download' : 'Confirm'}</Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default OfficeDashboard;