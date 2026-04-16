import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { SectionWrapper } from '@/shared/components/SectionWrapper';
import { HoverCard } from '@/shared/components/HoverCard';
import BrushIcon from '@mui/icons-material/Brush';
import SpaIcon from '@mui/icons-material/Spa';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

const servicesList = [
  {
    title: 'Extensão de Cílios',
    description: 'Técnicas variadas (Fio a Fio, Volume Russo, Híbrido) para realçar seu olhar com naturalidade e elegância.',
    icon: <AutoAwesomeIcon fontSize="large" />,
  },
  {
    title: 'Design de Sobrancelha',
    description: 'Mapeamento facial completo para encontrar o desenho ideal que harmonize perfeitamente com seu rosto.',
    icon: <BrushIcon fontSize="large" />,
  },
  {
    title: 'Micropigmentação',
    description: 'Resultados duradouros e naturais para lábios e sobrancelhas, valorizando ainda mais a sua beleza.',
    icon: <FaceRetouchingNaturalIcon fontSize="large" />,
  },
  {
    title: 'Maquiagem & Penteados',
    description: 'Produção completa para eventos especiais, casamentos e formaturas. Destaque-se em qualquer ocasião.',
    icon: <SpaIcon fontSize="large" />,
  },
];

export const ServicesSection = () => {
  return (
    <SectionWrapper
      id="servicos"
      title="Meus Serviços"
      subtitle="Oferecemos uma variedade de tratamentos estéticos primorosos, focados em realçar a beleza que já existe em você."
      bgSecondary
    >
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {servicesList.map((service, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <HoverCard sx={{ height: '100%', p: 4, textAlign: 'center' }}>
              <Box
                className="icon-wrapper"
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  mb: 3,
                  background: 'rgba(168, 85, 247, 0.05)',
                  color: '#a855f7',
                  transition: 'all 0.3s ease',
                }}
              >
                {service.icon}
              </Box>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {service.description}
              </Typography>
            </HoverCard>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
};
