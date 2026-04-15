import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { SectionWrapper } from '@/componentes/UI/SectionWrapper';
import { HoverCard } from '@/componentes/UI/HoverCard';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const ContactSection = () => {
  return (
    <SectionWrapper
      id="contato"
      title="Agende seu Horário"
      subtitle="Pronta para realçar o seu olhar? Entre em contato e vamos agendar o seu momento de autocuidado."
      bgSecondary
    >
      <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
        <HoverCard sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
          <Stack spacing={4}>
            
            {/* WhatsApp CTA */}
            <Box>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#333' }}>
                Fale comigo pelo WhatsApp
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Tire suas dúvidas, consulte horários disponíveis e agende sua sessão de forma rápida e prática.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/92994586554"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mt: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 50,
                  background: 'linear-gradient(135deg, #25D366, #128C7E)', // WhatsApp Colors
                  boxShadow: '0 8px 16px rgba(37, 211, 102, 0.3)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 20px rgba(37, 211, 102, 0.4)',
                  }
                }}
              >
                Agendar Agora
              </Button>
            </Box>

            {/* Divider */}
            <Box sx={{ width: '100%', height: '1px', bgcolor: 'rgba(0,0,0,0.05)' }} />

            {/* Additional Info */}
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}  sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 50, height: 50, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: 'rgba(168, 85, 247, 0.1)', color: '#a855f7'
                  }}
                >
                  <LocationOnIcon />
                </Box>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Localização</Typography>
                  <Typography variant="body2" color="text.secondary">Manaus, AM - Av. Tefé, 84 - Cachoeirinha</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    width: 50, height: 50, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    bgcolor: 'rgba(168, 85, 247, 0.1)', color: '#a855f7'
                  }}
                >
                  <InstagramIcon />
                </Box>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Instagram</Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    href="https://instagram.com/_nicolecilios/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#a855f7', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    @_nicolecilios
                  </Typography>
                </Box>
              </Box>
            </Stack>

          </Stack>
        </HoverCard>
      </Box>
    </SectionWrapper>
  );
};
