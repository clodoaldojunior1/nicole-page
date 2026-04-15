import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { SectionWrapper } from '@/componentes/UI/SectionWrapper';
import Image from 'next/image';
import Profile from "@/../public/profile-nicole.jpeg"
// Importe sua imagem aqui. Exemplo:
// import Profile from '../public/sua-foto-de-perfil.jpg';

export const AboutSection = () => {
  return (
    <SectionWrapper id="sobre" title="Sobre mim" bgSecondary={false}>
      {/*
        MUDANÇA 1: Usando Grid container.
        - spacing={4}: Espaço entre os itens do grid.
        - alignItems="center": Centraliza verticalmente a foto com o texto.
      */}
      <Grid container spacing={4}>

        {/*
          MUDANÇA 2: A coluna da Imagem.
          - xs={12}: Ocupa toda a largura em celulares (foto fica em cima).
          - md={4}: Ocupa 1/3 da largura em telas médias/grandes (foto fica ao lado).
        */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          {/*
             Este Paper age como a "moldura" da imagem.
             - position: 'relative': Essencial para o 'fill' do Next Image funcionar.
             - width/height: Tamanho fixo ou responsivo da moldura.
             - borderRadius: '50%': Deixa redondo.
             - overflow: 'hidden': Garante que a imagem quadrada seja cortada pelo círculo.
          */}
          <Paper
            elevation={3}
            sx={{
              position: 'relative',
              width: { xs: '200px', md: '280px' }, // Responsivo: menor no celular, maior no PC
              height: { xs: '200px', md: '280px' }, // Mantém quadrado
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #fff', // Opcional: uma borda branca bonita
            }}
          >
             {/*
               MUDANÇA 3: Next Image otimizado.
               - fill: Faz a imagem preencher o container pai (o Paper).
               - style={{ objectFit: "cover" }}: A MÁGICA. Corta o excesso sem distorcer.
               - sizes: Ajuda o Next.js a carregar o tamanho certo da imagem.
             */}
            <Image
              src={Profile} // Certifique-se que sua importação está correta
              alt="Foto de Perfil Lash Designer"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center top" // DICA EXTRA: Se cortar muito a testa, use "center top" para focar mais no rosto. Se não, use só "center".
              }}
              sizes="(max-width: 768px) 200px, 280px"
            />
          </Paper>
        </Grid>

        {/* A coluna do Texto */}
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ p: { xs: 0, md: 2 } }}> {/* Padding apenas no desktop */}
            {/* Usei body1 ou body2 que são melhores para leitura que h6 */}
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Com 17 anos e já somando 2 anos de experiência dedicada à estética, transformei minha paixão em profissão. Sou especialista em Lash Design, dominando desde o clássico Fio a Fio até técnicas como Tufinho e Cílios de Seda, sempre utilizando materiais de alta qualidade como Nagaraku.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
              Minha atuação vai além do olhar: sou certificada em Micropigmentação, Design de Sobrancelhas, Maquiagem e Penteados com Tranças. Acredito que a beleza está nos detalhes, por isso invisto constantemente em diversas certificações para entregar o melhor resultado a cada cliente. Este é apenas o começo da minha jornada, pois meu próximo passo é a graduação em Estética, elevando ainda mais o padrão de cuidado e bem-estar que ofereço no meu espaço.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

