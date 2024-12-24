import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Divider } from '@mui/material';
import Sidebar from '../components/Sidebar'; // Importing the floating sidebar
import ChartCard from '../components/ChartCard'; // Chart component remains the same

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            <Sidebar /> {/* Floating Sidebar */}



            <Box sx={{ flex: 1, padding: '20px', marginLeft: '250px' }}> {/* Add left margin to account for sidebar */}
                <Container maxWidth="xl">
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
                        Welcome to the Dashboard!
                    </Typography>

                    <Grid container spacing={4}>
                        {/* Dashboard Cards */}
                        <Grid item xs={12} md={4}>
                            <Card sx={{ backgroundColor: '#3f51b5', color: '#fff' }}>
                                <CardContent>
                                    <Typography variant="h5">Total Sales</Typography>
                                    <Typography variant="h6">$5,200</Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                        <Grid item xs={12} md={4}>
                            <Card sx={{ backgroundColor: '#4c77af', color: '#fff' }}>
                                <CardContent>
                                    <Typography variant="h5">Users</Typography>
                                    <Typography variant="h6">1,250</Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card sx={{ backgroundColor: '#3678f4', color: '#fff' }}>
                                <CardContent>
                                    <Typography variant="h5">Revenue</Typography>
                                    <Typography variant="h6">$2,000</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Divider sx={{ margin: '20px 0' }} />

                    {/* Charts Section */}
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <ChartCard title="Sales Growth" />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <ChartCard title="User Engagement" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Dashboard;
