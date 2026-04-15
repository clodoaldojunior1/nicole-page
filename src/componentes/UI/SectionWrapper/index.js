import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export const SectionWrapper = ({ id, title, subtitle, children, bgSecondary = false }) => {
  return (
    <Box
      id={id}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: bgSecondary ? 'rgba(168, 85, 247, 0.03)' : 'transparent',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
          {title && (
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: 'linear-gradient(135deg, #a855f7, #f8c8dc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  borderRadius: '2px',
                  background: 'linear-gradient(90deg, #a855f7, #f8c8dc)',
                }
              }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mt: 3, maxWidth: '600px', mx: 'auto', fontSize: '1.1rem' }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
        {children}
      </Container>
    </Box>
  );
};
