// Dashboard.js
import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';

function Dashboard() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Sales</Typography>
              <Typography variant="h4">$12,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Sessions</Typography>
              <Typography variant="h4">1,200</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Engagement</Typography>
              <Typography variant="h4">87%</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
