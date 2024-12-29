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
  Textarea,
} from '@mui/joy';
import React from 'react';
import TimelapseIcon from '@mui/icons-material/Timelapse';

const CreateCountdownPage = () => {
  return (
    <Sheet
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ffee81',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            <div>
              <TimelapseIcon color="warning" sx={{ fontSize: '4rem' }} />
            </div>
          </AspectRatio>
        </CardOverflow>
        <Typography level="h1" sx={{ mt: 'calc(var(--icon-size) / 2)' }}>
          Create Your Countdown
        </Typography>
    
        <CardContent sx={{ width: '80%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Input
            placeholder="Enter countdown name"
            color="warning"
            variant="outlined"
            size="lg"
            startDecorator={<Typography level="h4">Name</Typography>}
          />
          <Input
            type="datetime-local"
            color="warning"
            variant="outlined"
            size="lg"
            startDecorator={<Typography level="h4">Date & Time</Typography>}
          />
          <Select
            placeholder="Select a category"
            color="warning"
            variant="outlined"
            size="lg"
            startDecorator={<Typography level="h4">Category</Typography>}
          >
            <Option value="birthday">Birthday</Option>
            <Option value="event">Event</Option>
            <Option value="goal">Goal</Option>
          </Select>
          
        </CardContent>
        <CardActions
          orientation="horizontal"
          buttonFlex={1}
          sx={{
            '--Button-radius': '40px',
            width: 'clamp(min(100%, 200px), 50%, min(100%, 300px))',
          }}
        >
          <Button variant="solid" color="warning">
            Copy 🧷
          </Button>
          <Button variant="plain" color="neutral">
            Share ➦
          </Button>
        </CardActions>
      </Card>
    </Sheet>
  );
};

export default CreateCountdownPage;
