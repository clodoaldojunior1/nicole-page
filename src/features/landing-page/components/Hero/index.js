import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const  HeroSection = () => {
  return (
    <Box
      id="inicio"
      sx={{
        display: "flex",
        background: "linear-gradient(135deg, #f8c8dc, #a855f7)",
        width: "100%",
        minHeight: { xs: "auto", md: "100vh" },
        py: { xs: 15, md: 0 },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, md: 5 }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: "900",
                  color: "#fff",
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                  letterSpacing: { xs: '2px', md: '5px' },
                  lineHeight: 1.2,
                  textShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                Beleza que realça quem você é!
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  lineHeight: 1.6,
                  maxWidth: '500px',
                  mx: { xs: 'auto', md: 0 }
                }}
              >
                Cílios personalizados, design de sobrancelhas, henna, maquiagem
                e penteados que valorizam sua beleza natural em cada detalhe.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsAppIcon />}
                href="#contato" // Pode ser o link pro whatsapp direto ou âncora pra seção de contato
                sx={{
                  width: { xs: '100%', sm: 'auto' },
                  alignSelf: { xs: 'center', md: 'flex-start' },
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 50,
                  color: '#a855f7',
                  backgroundColor: '#fff',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#fff',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                Agendar meu horário
              </Button>
            </Stack>
          </Grid>
          {/* grid image */}
          <Grid size={{ md: 6 }} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                display: "inline-flex",
                width: { xs: 240, sm: 360, md: 390 },
                height: "100%",
              }}
            >
              <Image
                src="/person-nicole.png"
                width={800}
                height={500}
                alt="Brand Logo"
                style={{ width: "100%", height: "auto" }}
                sizes="(max-width: 600px) 240px, (max-width: 900px) 300px, 330px"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
