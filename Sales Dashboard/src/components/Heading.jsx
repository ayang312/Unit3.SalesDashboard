import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Heading = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Brightness4Icon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          YANG'S RESTAURANT DASHBOARD
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Heading;
