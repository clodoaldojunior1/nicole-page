"use client";
import PropTypes from "prop-types";
import React from "react";

import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { 
  AppBar, Box, Button, Container, Slide, Toolbar, 
  IconButton, Drawer, List, ListItem, ListItemButton, ListItemText 
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import LanguageSwitcher from "../LanguageSwitcher";
import Image from "next/image";


function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.func,
};

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
];

export const HeaderComponent = ({ props }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const isScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
    target: typeof window !== "undefined" ? window : undefined,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const ctaButton = (
    <Button
      variant="contained"
      href="#contato"
      sx={{
        px: { xs: 3, md: 4 },
        py: { xs: 1, md: 1 },
        fontSize: { xs: '0.9rem', md: '1rem' },
        fontWeight: 600,
        borderRadius: 50,
        color: '#fff',
        backgroundColor: '#a855f7',
        boxShadow: '0 4px 10px rgba(168, 85, 247, 0.3)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          backgroundColor: '#9333ea',
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 15px rgba(168, 85, 247, 0.4)',
        },
      }}
    >
      AGENDAR
    </Button>
  );

  return (
    <HideOnScroll {...props}>
      <AppBar 
        position="fixed" 
        elevation={isScrolled ? 4 : 0}
        sx={{
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.05)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="dense"
            disableGutters
            sx={{
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
              py: { xs: 1, md: 0 },
              minHeight: '70px',
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: 140, sm: 160, md: 180 },
              }}
            >
              <Image
                width={160}
                height={70}
                src="/nicole-logo.svg"
                alt="Nicole Ramos - Lash Design"
              />
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: 'center',
                gap: 3,
              }}
            >
              {navItems.map((item) => (
                <Button 
                  key={item.label}
                  variant="text" 
                  href={item.href}
                  sx={{ 
                    color: isScrolled ? '#333' : '#fff', // Branco no topo p/ contrastar c/ degradê, Escuro quando rolar
                    fontWeight: 600,
                    fontSize: '1rem',
                    textShadow: isScrolled ? 'none' : '0 2px 4px rgba(0,0,0,0.1)', // Dá leitura no fundo gradiente
                    '&:hover': { color: '#a855f7', backgroundColor: 'transparent' }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              {ctaButton}
              <Box sx={{ filter: isScrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                <LanguageSwitcher />
              </Box>
            </Box>

            {/* Mobile Navigation (Hamburger Menu) */}
            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: 'center', gap: 1 }}>
              <Box sx={{ filter: isScrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>
                <LanguageSwitcher />
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: isScrolled ? '#333' : '#fff',
                  filter: isScrolled ? 'none' : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* Drawer (Mobile Menu Overlay) */}
        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280, backgroundColor: '#fff' },
          }}
        >
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
            <Image width={120} height={50} src="/nicole-logo.svg" alt="Nicole Ramos" />
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List sx={{ pt: 2 }}>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={handleDrawerToggle} component="a" href={item.href} sx={{ py: 2 }}>
                  <ListItemText 
                    primary={item.label} 
                    primaryTypographyProps={{ fontSize: '1.1rem', fontWeight: 600, color: '#333', textAlign: 'center' }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ mt: 2, justifyContent: 'center' }}>
              <Box onClick={handleDrawerToggle}>
                {ctaButton}
              </Box>
            </ListItem>
          </List>
        </Drawer>

      </AppBar>
    </HideOnScroll>
  );
};
