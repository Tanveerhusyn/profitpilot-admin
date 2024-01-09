import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Dialog, Fab, Grid, Avatar, Paper, Tooltip, Typography, IconButton, Divider, OutlinedInput } from '@mui/material';

import { IconAssembly, IconMicrophone, IconSend } from '@tabler/icons'; // Import the relevant Tabler Icons

import AnimateButton from 'ui-component/extended/AnimateButton';
import { SET_BORDER_RADIUS } from 'store/actions';
import { gridSpacing } from 'store/constant';
// import TotalGrowthLineChart from 'views/dashboard/Default/TotalGrowthLineChart';
import { CloseOutlined } from '@mui/icons-material';

// ==============================|| LIVE CUSTOMIZATION ||============================== //

const Customization = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const customization = useSelector((state) => state.customization);
  const chatContainerRef = useRef(null);
  const [chatData, setChatData] = useState([]);
  // drawer on/off
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [chatData]);

  // state - border radius
  const [borderRadius] = useState(customization.borderRadius);

  const handleSendMessage = async (message) => {
    const newMessage = { user: true, message };
    setChatData((prevChat) => [...prevChat, newMessage]);
    const accessToken = localStorage.getItem('accessToken');
    try {
      // Send the question to the backend API
      const response = await fetch('http://127.0.0.1:5001/ask-question', {
        method: 'POST',
        headers: {
          Authorization: accessToken,
          'xero-tenant-id': 'a638ba7e-48b1-43ce-aefd-1fed5037517e',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: message })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from the backend API');
      }

      // Parse the response
      const data = await response.json();

      const parsed = JSON.parse(data[1]);
      console.log('data', parsed);

      const assistantResponse = {
        user: false,
        message: parsed.message,
        chart: parsed && parsed.ChartData ? parsed.ChartData : null
      };

      setChatData((prevChat) => [...prevChat, assistantResponse]);
    } catch (error) {
      console.error('Error sending or fetching response:', error);
    }
  };

  // const handleSendMessage = (message) => {
  //   const newMessage = { user: true, message };
  //   setChatData((prevChat) => [...prevChat, newMessage]);

  //   // Simulate assistant's response
  //   setTimeout(() => {
  //     let assistantResponse;

  //     if (message.toLowerCase().includes('profit')) {
  //       // Render chart component as the assistant's response
  //       assistantResponse = {
  //         user: false,
  //         message: <TotalGrowthBarChart isLoading={false} />
  //       };
  //     } else if (message.toLowerCase().includes('sales')) {
  //       // Render chart component as the assistant's response
  //       assistantResponse = {
  //         user: false,
  //         message: <TotalGrowthLineChart isLoading={false} />
  //       };
  //     } else {
  //       // Default response
  //       assistantResponse = { user: false, message: 'Sure, how can I assist you?' };
  //     }

  //     setChatData((prevChat) => [...prevChat, assistantResponse]);
  //     if (chatContainerRef.current) {
  //       chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  //     }
  //   }, 1000);
  // };

  useEffect(() => {
    dispatch({ type: SET_BORDER_RADIUS, borderRadius });
  }, [dispatch, borderRadius]);

  return (
    <>
      {/* toggle button */}
      <Tooltip title="Live Customize">
        <Fab
          component="div"
          onClick={handleToggle}
          size="medium"
          variant="circular"
          color="secondary"
          sx={{
            borderRadius: '5px 20px 5px 20px',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '160px',
            height: '60px',
            zIndex: theme.zIndex.speedDial,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 10px'
          }}
        >
          <Typography variant="body1" sx={{ color: '#fff', textAlign: 'center' }}>
            Ask Pilot
          </Typography>
          <AnimateButton type="rotate">
            <IconButton color="inherit" size="large" disableRipple>
              <IconAssembly />
            </IconButton>
          </AnimateButton>
        </Fab>
      </Tooltip>

      <Dialog
        fullWidth
        maxWidth="lg"
        onClose={handleToggle}
        open={open}
        PaperProps={{
          sx: {
            display: 'flex',
            flexDirection: 'row',
            minHeight: '90vh',
            minWidth: '80vw',
            background: 'red',
            width: '100%'
          }
        }}
      >
        {/* Right Chatbox */}
        <Grid item xs={12} component={Paper} elevation={3} sx={{ p: 0, borderRadius: 0, minWidth: '100%' }}>
          <Grid container spacing={gridSpacing} sx={{ p: 2, m: 0, height: '100%', width: '100%' }}>
            {/* Display active thread's history */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                minWidth: '100%'
              }}
            >
              <IconButton edge="end" color="inherit" onClick={handleToggle} aria-label="fullscreen" sx={{ marginRight: 2 }}>
                <CloseOutlined />
              </IconButton>
            </div>

            <Divider sx={{ width: '100%', marginBottom: '20px' }} />
            <div
              ref={chatContainerRef}
              style={{
                height: 'calc(100% - 60px)',
                overflowY: 'auto',
                width: '100%',
                mt: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                paddingBottom: '15%'
              }}
            >
              {chatData.map((chat, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: chat.user ? 'row-reverse' : 'row',
                    alignItems: 'center',
                    gap: 4,
                    marginBottom: '0.5rem'
                  }}
                >
                  <Avatar
                    sx={{
                      margin: '0.2rem'
                    }}
                  />

                  <Paper
                    elevation={1}
                    sx={{
                      display: 'inline-block',
                      padding: '15px 0.5rem',
                      maxWidth: '70%',
                      borderRadius: chat.user ? '12px 12px 0 12px' : '0 12px 12px 12px',
                      backgroundColor: chat.user ? 'secondary.main' : 'warning.main',
                      color: chat.user ? '#fff' : '#000'
                    }}
                  >
                    {chat.message}
                    {/* {chat.chart && (
                      <div key={`chart-${index}`}>
                        <TotalGrowthLineChart isLoading={false} xaxis={chat.chart.data} yaxis={chat.chart.value} />
                      </div>
                    )} */}
                  </Paper>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                position: 'absolute',
                bottom: 10,
                zIndex: 999,
                width: '95%',
                gap: 4
              }}
            >
              <OutlinedInput
                label="Ask Profit Pilot..."
                variant="outlined"
                placeholder="Ask Profit Pilot ..."
                fullWidth
                sx={{
                  width: 'calc(100% - 48px)', // Adjust the width here
                  marginRight: '10px'
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage(e.target.value);
                    e.target.value = '';
                  }
                }}
              />
              <IconButton>
                <IconSend />
              </IconButton>
              <IconButton>
                <IconMicrophone />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default Customization;
