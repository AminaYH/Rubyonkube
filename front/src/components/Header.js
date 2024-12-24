import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';

const Header = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
                backgroundColor: '#1F1F1F',
                color: 'white',
            }}
        >
            <Typography variant="h6">Dashboard</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                    John Doe
                </Typography>
                <Avatar alt="User" src="/user-avatar.jpg" />
            </Box>
        </Box>
    );
};

export default Header;
