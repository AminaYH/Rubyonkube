import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaChartLine, FaUsers, FaCreditCard, FaCog } from 'react-icons/fa';

// Sidebar Component with Jumping Floating Effect
const Sidebar = () => {
    return (
        <Box
            sx={{
                width: 250,
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Semi-transparent black background
                backdropFilter: 'blur(10px)', // Glass effect
                color: '#fff',
                position: 'fixed',
                top: 0,
                left: 0,
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '5px 0px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow
                animation: 'float 2s ease-in-out infinite', // Add floating animation
            }}
        >
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '30px' }}>
                Dashboard
            </Typography>
            <Box>
                <SidebarItem text="Analytics" icon={<FaChartLine />} />
                <SidebarItem text="Users" icon={<FaUsers />} />
                <SidebarItem text="Payments" icon={<FaCreditCard />} />
                <SidebarItem text="Settings" icon={<FaCog />} />
            </Box>
        </Box>
    );
};

// Sidebar item with hover effects and glowing text
const SidebarItem = ({ text, icon }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                    backgroundColor: '#4caf50', // Hover background color
                    transform: 'scale(1.1) translateY(-5px)', // Jumping effect
                    boxShadow: '0px 0px 20px rgba(0, 255, 0, 0.7)', // Glowing effect
                    color: '#fff', // Change text color on hover
                },
                '& svg': {
                    marginRight: '10px',
                    transition: 'color 0.3s ease', // Smooth icon color transition
                },
                '&:hover svg': {
                    color: '#fff', // Icon color changes on hover
                },
            }}
        >
            {icon}
            <Typography variant="h6">{text}</Typography>
        </Box>
    );
};

export default Sidebar;
