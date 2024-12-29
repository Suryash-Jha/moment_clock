import React, { useState } from 'react';
import {
  AspectRatio,
  Button,
  Card,
  CardActions,
  CardContent,
  CardOverflow,
  Sheet,
  Typography,
  Input,
  Select,
  Option,
  Box,
} from '@mui/joy';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import CelebrationIcon from '@mui/icons-material/Celebration';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import { ToastContainer, toast } from 'react-toastify';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import dayjs from 'dayjs';

const CreateCountdownPage = () => {
  const [selectedFont, setSelectedFont] = useState('Roboto');
  const [eventName, setEventName] = useState('');

  const categories = [
    { name: 'Birthday', image: 'https://via.placeholder.com/150', icon: <CelebrationIcon color="warning" /> },
    { name: 'UAT', image: 'https://via.placeholder.com/150', icon: <DeveloperModeIcon color="warning" /> },
    { name: 'Production', image: 'https://via.placeholder.com/150', icon: <RocketLaunchIcon color="warning" /> },
    { name: 'Custom', image: 'https://via.placeholder.com/150', icon: <EventSeatIcon color="warning" /> },
  ];

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  return (
    <Sheet
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ffee81',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: selectedFont, // Set font family dynamically
      }}
    >
      <Card
        data-resizable
        sx={{
          textAlign: 'center',
          alignItems: 'center',
          width: '70%',
          minHeight: '70%',
          m: 2,
          overflow: 'auto',
          resize: 'horizontal',
          '--icon-size': '100px',
          boxShadow: '10px 10px 0px rgba(0, 0, 0, 1)',
        }}
      >
        <CardOverflow variant="solid" color="warning">
          <AspectRatio
            variant="outlined"
            color="warning"
            ratio="1"
            sx={{
              m: 'auto',
              transform: 'translateY(50%)',
              borderRadius: '50%',
              width: 'var(--icon-size)',
              boxShadow: 'sm',
              bgcolor: 'background.surface',
              position: 'relative',
            }}
          >
            <TimelapseIcon color="warning" sx={{ fontSize: '4rem' }} />
          </AspectRatio>
        </CardOverflow>

        <Typography
          sx={{
            mt: 'calc(var(--icon-size) / 2)',
            fontSize: {
              xs: '1rem', // Equivalent to 'h4'
              sm: '2.5rem', // Equivalent to 'h1'
            },
            fontWeight: {
              xs: 'bold', // Optional: match the weight of h4
              sm: '700',  // Optional: match the weight of h1
            },
          }}
        >
          Create Your Countdown
          {/* <Select
          value={selectedFont}
          onChange={handleFontChange}
          color="warning"
          variant="outlined"
          size="lg"
          sx={{
            marginBottom: 2,
            width: '70%',
          }}
        >
          <Option value="Roboto">Roboto</Option>
          <Option value="Arial">Arial</Option>
          <Option value="Courier New">Courier New</Option>
        </Select> */}
        </Typography>



        <Input
          placeholder="Enter Event Name"
          color="warning"
          variant="soft"
          size="lg"
          sx={{
            width: '90%',
            maxWidth: 800,
            padding: 2,
            textAlign: 'center',
            marginBottom: 3,
            fontSize: '1.5rem',
            fontFamily: { selectedFont },
            borderRadius: '50px'
          }}
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
            <LocalizationProvider dateAdapter={AdapterDayjs}>

        <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
</LocalizationProvider>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            width: '80%',
            marginBottom: 3,
            flexWrap: 'wrap',
          }}
        >
          {categories.map((category, index) => (
            <Card
              key={index}
              sx={{
                width: '20%',
                minWidth: 100,
                // backgroundColor: 'white',
                textAlign: 'center',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <AspectRatio
                ratio="1"
                sx={{
                  width: '100%',
                  height: 200,
                  overflow: 'hidden',
                  borderRadius: '8px',
                  marginBottom: 2,
                  backgroundColor: '#ff0000'
                }}
              >
                {/* <TimelapseIcon /> */}
                {category.icon}

              </AspectRatio>
              <Typography level="h4">{category.name}</Typography>
            </Card>
          ))}
        </Box>

        <CardActions
          orientation="horizontal"
          buttonFlex={1}
          sx={{
            '--Button-radius': '40px',
            width: 'clamp(min(100%, 200px), 50%, min(100%, 300px))',
          }}
        >
          <Button variant="solid" color="warning" onClick={() => toast.success('Link Copied!')}>
            Copy 🧷
          </Button>
          <Button variant="plain" color="neutral">
            Share ➦
          </Button>
        </CardActions>
      </Card>

      <ToastContainer />
    </Sheet>
  );
};

export default CreateCountdownPage;
