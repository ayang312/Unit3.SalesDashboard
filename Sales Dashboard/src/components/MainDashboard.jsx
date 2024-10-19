import { Box, Typography, Grid, Paper } from '@mui/material';

const StatCard = ({ title, value, change }) => {
  return (
    <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h5">{value}</Typography>
      <Typography>{title}</Typography>
      <Typography color="green">{change}</Typography>
    </Paper>
  );
};

const MainDashboard = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4">Welcome to your dashboard</Typography>
      <Grid container spacing={3} sx={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={4}>
          <StatCard title="Sales Obtained" value="837" change="+21%" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard title="New Clients" value="86,435" change="+5%" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <StatCard title="Traffic Received" value="23,784,133" change="+43%" />
        </Grid>
      </Grid>

      <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" fontWeight="bold">
          Revenue Generated
        </Typography>
        <Typography variant="h3" color="green">
          $271,434.63
        </Typography>
      </Paper>
    </Box>
  );
};

export default MainDashboard;
