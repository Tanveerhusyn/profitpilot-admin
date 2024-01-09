import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { Button, Dialog, Card, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import { getConnectedApplications } from 'utils/services';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  const [applications, setApplications] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleClick = (appName, accessToken) => {
    if (accessToken) {
      console.log(`Already connected to ${appName}`);
      // Handle the already connected logic here
    } else {
      window.location.href = `http://localhost:5000/${appName}/auth`;
    }
  };

  useEffect(() => {
    const fetchApplications = async () => {
      const result = await getConnectedApplications();
      if (result.isSuccess && result.data.length > 0) {
        const updatedApps = result.data.map((app) => {
          const isConnected = app.accessToken ? true : false;

          if (isConnected) {
            localStorage.setItem(`accessToken`, app.accessToken);
          }

          return { ...app, isConnected };
        });
        setApplications(updatedApps);
      } else {
        // If no applications are connected, open the dialog
        handleClickOpen();
      }
      console.log('Applications', result);
    };
    fetchApplications();
  }, []);
  console.log('applications', applications);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
        <Dialog fullWidth open={openDialog} onClose={handleClose}>
          <DialogTitle>{'Connect to a Platform'}</DialogTitle>
          <DialogContent>
            <DialogContentText>To continue, please connect to one of the following platforms.</DialogContentText>
            {/* Card for Xero Platform */}
            <Card
              style={{
                height: '150px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                margin: '10px'
              }}
            >
              <img
                style={{
                  width: '50px',
                  height: '50px'
                }}
                src="https://upload.wikimedia.org/wikipedia/en/9/9f/Xero_software_logo.svg"
                alt="xero"
              />
              <Button onClick={() => handleClick('xero', null)}>Connect to Xero</Button>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button variant="primary" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
