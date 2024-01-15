import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
// import { getConnectedApplications } from 'utils/services';

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  // const isAuthenticated = localStorage.getItem('user') ? true : false;
  // const [loading, setLoading] = useState(false);
  // const isConnected = localStorage.getItem('accessToken') ? true : false;
  // const [connected, setConnected] = useState(localStorage.getItem('accessToken') ? true : false);

  // useEffect(() => {
  //   const fetchApplications = async () => {
  //     setLoading(true);
  //     const result = await getConnectedApplications();
  //     if (result.isSuccess && result.data.length > 0) {
  //       console.log('result', result);
  //       const updatedApps = result.data.map((app) => {
  //         const isConnected = app.accessToken ? true : false;

  //         if (isConnected) {
  //           localStorage.setItem(`accessToken`, app.accessToken);
  //           setConnected(true);
  //         }
  //         setLoading(false);
  //         return { ...app, isConnected };
  //       });
  //       setApplications(updatedApps);
  //     } else {
  //       // If no applications are connected, open the dialog
  //       setLoading(false);

  //       localStorage.removeItem('accessToken');
  //       handleClickOpen();
  //     }
  //     console.log('Applications', result);
  //   };
  //   fetchApplications();
  // }, []);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
