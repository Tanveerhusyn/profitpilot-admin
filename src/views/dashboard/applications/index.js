import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Button, Card } from '@mui/material';
import { getConnectedApplications } from 'utils/services';

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const result = await getConnectedApplications();
      if (result.isSuccess && result.data.length > 0) {
        const updatedApps = result.data.map((app) => {
          const isConnected = app.accessToken ? true : false;

          if (isConnected) {
            // localStorage.setItem(`accessToken`, app.accessToken);
          }

          return { ...app, isConnected };
        });
        setApplications(updatedApps);
      }
      console.log('Applications', result);
    };
    fetchApplications();
  }, []);

  return (
    <MainCard title="App Store">
      {applications.map((app, index) => (
        <Card
          elevation={1}
          key={index}
          style={{
            maxWidth: '200px',
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
          <Button>{app.name == 'xero' ? 'Connected to xero' : ''}</Button>
        </Card>
      ))}

      {/* Material-UI Dialog for empty response */}
    </MainCard>
  );
};

export default Applications;
