import { Global } from '@emotion/react';

const FloatingSidebarStyles = () => {
    return (
        <Global
            styles={{
                '@keyframes float': {
                    '0%': {
                        transform: 'translateY(0px)',
                    },
                    '50%': {
                        transform: 'translateY(-10px)', // Floating up
                    },
                    '100%': {
                        transform: 'translateY(0px)', // Floating down
                    },
                },
            }}
        />
    );
};


export default FloatingSidebarStyles;
