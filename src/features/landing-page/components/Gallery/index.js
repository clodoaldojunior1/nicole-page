import React from 'react';
import { Box, Typography } from '@mui/material';
import { SectionWrapper } from '@/shared/components/SectionWrapper';
import Image from 'next/image';

// Placeholder array for the gallery
const galleryImages = [
  { id: 1, title: 'Tranças Nagô', src: 'https://images.unsplash.com/photo-1512496015851-a1fbca67232e?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Fio a Fio', src: 'https://images.unsplash.com/photo-1588612148118-2e0081e604f2?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Design com Henna', src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Microblading', src: 'https://images.unsplash.com/photo-1623062366883-d9d15c13b2c1?auto=format&fit=crop&q=80&w=800' },
];

export const GallerySection = () => {
  return (
    <SectionWrapper
      id="galeria"
      title="Meu Portfólio"
      subtitle="Um pouco do meu trabalho. Cada detalhe é pensado para ressaltar a sua essência."
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr' },
          gap: 3,
        }}
      >
        {galleryImages.map((item) => (
          <Box
            key={item.id}
            sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              height: { xs: 250, md: 350 },
              cursor: 'pointer',
              '&:hover': {
                '& .gallery-img': {
                  transform: 'scale(1.08)',
                },
                '& .gallery-overlay': {
                  opacity: 1,
                },
              },
            }}
          >
            <Box
              className="gallery-img"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                transition: 'transform 0.5s ease',
              }}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 50vw"
              />
            </Box>
            <Box
              className="gallery-overlay"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                opacity: 0,
                transition: 'opacity 0.4s ease',
                display: 'flex',
                alignItems: 'flex-end',
                p: 4,
              }}
            >
              <Typography variant="h5" color="white" sx={{ fontWeight: 600 }}>
                {item.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </SectionWrapper>
  );
};
