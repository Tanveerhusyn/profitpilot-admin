import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { Button } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';
import "bootstrap/dist/css/bootstrap.min.css";

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { getConnectedApplications } from 'utils/services';

// ==============================|| APP ||============================== //
import { Dialog, DialogTitle, DialogContent, DialogActions, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { environments } from 'utils/env';

const CustomCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  justifyContent: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(1)
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  fontSize: '20px',
  padding: theme.spacing(2)
}));

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),

  borderRadius: '10px'
}));

const DialogComponent = ({ open, handleClose }) => {
  const handleClick = (appName, accessToken) => {
    if (accessToken) {
      console.log(`Already connected to ${appName}`);
      // Handle the already connected logic here
    } else {
      window.location.href = `${environments.apiUrl}/${appName}/auth`;
    }
  };
  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
      <CustomDialogTitle>{'Connect to an Accounting Platform'}</CustomDialogTitle>
      <DialogContent>
        <CustomCard>
          <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Xero_software_logo.svg" alt="Xero" style={{ width: 60, height: 60 }} />
          <Typography variant="body2" color="text.secondary">
            Xero is a powerful cloud-based accounting platform designed for small and medium-sized businesses. It simplifies financial
            management with features like online invoicing, bank reconciliation, and real-time financial reporting. Xero integrates
            seamlessly with various business applications, providing an efficient solution for managing your financial needs, enabling you
            to focus on growing your business.
          </Typography>

          <CustomButton
            sx={{
              background: '#FFE68E',
              color: 'black'
            }}
            variant="contained"
            onClick={() => handleClick('xero', null)}
          >
            Connect to Xero
          </CustomButton>
        </CustomCard>
      </DialogContent>
      <DialogActions>
        <CustomButton variant="outlined" color="secondary" onClick={handleClose}>
          Cancel
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};

const App = () => {
  const customization = useSelector((state) => state.customization);
  const isAuthenticated = localStorage.getItem('user') ? true : false;
  const [loading, setLoading] = useState(false);
  // const isConnected = localStorage.getItem('accessToken') ? true : false;
  const [connected, setConnected] = useState(localStorage.getItem('accessToken') ? true : false);
  const [openDialog, setOpenDialog] = useState(true);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      const result = await getConnectedApplications();
      if (result.isSuccess && result.data.length > 0) {
        console.log('result', result);
        const updatedApps = result.data.map((app) => {
          const isConnected = app.accessToken ? true : false;

          if (isConnected) {
            localStorage.setItem(`accessToken`, app.accessToken);
            setConnected(true);
          }
          setLoading(false);
          return { ...app, isConnected };
        });
        setApplications(updatedApps);
      } else {
        // If no applications are connected, open the dialog
        setLoading(false);

        localStorage.removeItem('accessToken');
        handleClickOpen();
      }
      console.log('Applications', result);
    };
    fetchApplications();
  }, []);
  console.log('handleOpen', openDialog);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
        {isAuthenticated && !connected && !loading && <DialogComponent open={openDialog} handleClose={handleClose} />}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
