import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const DashboardCard = ({ title, value, icon }) => {
    return (
        <Card
            sx={{
                backgroundColor: '#333',
                color: 'white',
                borderRadius: 2,
                boxShadow: 2,
                padding: '20px',
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <Box>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="h4">{value}</Typography>
            </Box>
            <Box sx={{ fontSize: '40px' }}>{icon}</Box>
        </Card>
    );
};

export default DashboardCard;
