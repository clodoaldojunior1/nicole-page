import React from 'react';
import { Paper, Box } from '@mui/material';

export const HoverCard = ({ children, sx = {}, ...props }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        border: '1px solid rgba(168, 85, 247, 0.1)',
        background: '#fff',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)',
          borderColor: 'transparent',
          '& .icon-wrapper': {
            transform: 'scale(1.1) rotate(5deg)',
            background: 'linear-gradient(135deg, #a855f7, #f8c8dc)',
            color: '#fff',
          },
          '& .hover-overlay': {
            opacity: 1,
          }
        },
        ...sx
      }}
      {...props}
    >
      <Box
        className="hover-overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #a855f7, #f8c8dc)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      {children}
    </Paper>
  );
};
