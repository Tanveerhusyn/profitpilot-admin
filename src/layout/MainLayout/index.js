import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery, Button, Divider } from '@mui/material';

// project imports
import Breadcrumbs from 'ui-component/extended/Breadcrumbs';
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
import navigation from 'menu-items';
import { drawerWidth } from 'store/constant';
import { SET_MENU } from 'store/actions';

// assets
import { IconChevronRight } from '@tabler/icons';

import { Dialog, DialogTitle, DialogContent, Card, Typography } from '@mui/material';
// import { environments } from 'utils/env';
import { getCurrentUser, xeroAuth } from 'utils/services';
import { Oval } from 'react-loader-spinner';

const CustomCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  maxWidth: '400px',
  textAlign: 'justify',
  justifyContent: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(1)
}));

const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: '#061A2A',
  color: theme.palette.primary.contrastText,
  textAlign: 'center',
  fontSize: '20px',
  padding: theme.spacing(2)
}));

// const CustomButton = styled(Button)(({ theme }) => ({
//   margin: theme.spacing(1),
//   background: '#F4CE24',
//   color: 'black',
//   borderRadius: '10px'
// }));

const DialogComponent = ({ open, handleClose }) => {
  //get success query param from the current url
  const location = useLocation();
  const success = new URLSearchParams(location.search).get('success');
  console.log('SUCCESS Check', success);
  useEffect(() => {
    const fetchUser = async () => {
      const result = await getCurrentUser();
      console.log('NEW', result);
      if (result.isSuccess) {
        handleClose();
        localStorage.setItem('user', JSON.stringify(result.data));
      }
    };
    if (success) {
      fetchUser();
    }
  }, [success]);

  const [locading, setLoading] = useState({
    xero: false,
    quickbooks: false
  });
  const handleClick = async (appName, accessToken) => {
    if (accessToken) {
      console.log(`Already connected to ${appName}`);
      // Handle the already connected logic here
    } else {
      const token = localStorage.getItem('accessToken');
      setLoading({ ...locading, [appName]: true });
      const result = await xeroAuth(token);
      console.log('xeroAuth', result);
      setLoading({ ...locading, [appName]: true });
      if (result.isSuccess) {
        window.location.href = result.data.url;
      }
    }
  };
  return (
    <Dialog
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          minWidth: '60vw',
          width: '100%'
        }
      }}
      fullWidth
      open={open}
      onClose={handleClose}
    >
      <CustomDialogTitle>{'Connect to an Accounting Platform'}</CustomDialogTitle>
      <div className="flex flex-row justify-between items-center w-100">
        <DialogContent>
          <CustomCard>
            <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Xero_software_logo.svg" alt="Xero" style={{ width: 60, height: 60 }} />
            <Typography variant="body2" color="text.secondary">
              Xero is a powerful cloud-based accounting platform designed for small and medium-sized businesses. It simplifies financial
              management with features like online invoicing, bank reconciliation, and real-time financial reporting. Xero integrates
              seamlessly with various business applications, providing an efficient solution for managing your financial needs, enabling you
              to focus on growing your business.
            </Typography>

            <Button
              style={{
                background: '#F4CE24',
                color: 'black',
                borderRadius: '10px',
                height: '40px',
                width: '200px',
                padding: '5px 15px'
              }}
              onClick={() => handleClick('xero', null)}
            >
              {(locading.xero && (
                <Oval
                  visible={true}
                  height="20"
                  width="20"
                  color="white"
                  strokeWidth="5"
                  secondaryColor="#061A2A"
                  animationDuration="1"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              )) ||
                'Connect to Xero'}
            </Button>
          </CustomCard>
        </DialogContent>
        <Divider orientation="vertical" flexItem />
        <DialogContent>
          <CustomCard>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/79/Intuit_QuickBooks_logo.svg"
              alt="Xero"
              style={{ width: 150, height: 60 }}
            />
            <Typography variant="body2" color="text.secondary">
              QuickBooks is a comprehensive accounting tool designed to cater to the needs of small to medium-sized businesses. It offers
              features like expense tracking, invoice management, and financial reporting. QuickBooks also provides capabilities for payroll
              processing and tax filing,providing an efficient solution for managing your financial needs making it a versatile tool for
              business financial management.
            </Typography>

            <Button
              disabled
              style={{
                background: '#F4CE24',
                color: 'black',
                borderRadius: '10px',
                height: '40px',
                padding: '5px 15px',
                width: '200px'
              }}
              onClick={() => handleClick('xero', null)}
            >
              {(locading.quickbooks && (
                <Oval
                  visible={true}
                  height="20"
                  width="20"
                  color="white"
                  strokeWidth="5"
                  secondaryColor="#061A2A"
                  animationDuration="1"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              )) ||
                'Connect to QuickBooks'}
            </Button>
          </CustomCard>
        </DialogContent>
      </div>
    </Dialog>
  );
};

// styles
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: theme.transitions.create(
    'margin',
    open
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }
  ),
  [theme.breakpoints.up('md')]: {
    marginLeft: open ? 0 : -(drawerWidth - 20),
    width: `calc(100% - ${drawerWidth}px)`
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: '20px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px'
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '10px',
    width: `calc(100% - ${drawerWidth}px)`,
    padding: '16px',
    marginRight: '10px'
  }
}));

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
  // Handle left drawer
  const leftDrawerOpened = useSelector((state) => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));
  console.log('USER', user);
  const isAppConnected = user && user.connectedApplications.length > 0;

  const [openDialog, setOpenDialog] = useState(true);
  const location = useLocation();
  console.log(openDialog);
  // const handleClickOpen = () => {
  //   setOpenDialog(true);
  // };
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
        }}
      >
        <Toolbar>
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      {(isAppConnected && (
        <>
          <Sidebar drawerOpen={!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />

          {/* main content */}
          <Main theme={theme} open={leftDrawerOpened}>
            {/* breadcrumb */}
            <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign />
            <Outlet />
          </Main>
          <Customization />
        </>
      )) || <DialogComponent open={location.pathname !== '/login' && location.pathname !== '/register'} handleClose={handleClose} />}
    </Box>
  );
};

export default MainLayout;
