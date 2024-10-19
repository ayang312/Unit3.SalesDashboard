import React from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from './components/Sidebar';
import Heading from './components/Heading';
import MainDashboard from './components/MainDashboard';
import TransactionBar from './components/TransactionBar';

const App = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Heading />
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <MainDashboard />
          </Grid>
          <Grid item xs={12} md={4}>
            <TransactionBar />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default App;
