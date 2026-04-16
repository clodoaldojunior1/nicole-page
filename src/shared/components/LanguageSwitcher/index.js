"use client";

import React from "react";
import Image from "next/image";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";

const LANGS = [
  { key: "pt", label: "PT", flag: "/flags/br.png" },
  { key: "en", label: "EN", flag: "/flags/us.png" },
  { key: "es", label: "ES", flag: "/flags/es.jpg" },
];

export default function LanguageSwitcher() {
  const [lang, setLang] = React.useState("pt");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const current = LANGS.find((l) => l.key === lang) || LANGS[0];

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleSelect = (key) => {
    setLang(key);
    handleClose();

    // 👉 AQUI você chama seu sistema de idioma:
    // i18n.changeLanguage(key)
    // ou router.push(`/${key}`)
    console.log("Idioma trocado para:", key);
  };

  return (
    <Box>
      {/* Botão com a bandeira atual */}
      <IconButton onClick={handleOpen} size="small">
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Image
            src={current.flag}
            alt={current.label}
            fill
            sizes="28px"
            style={{ objectFit: "cover" }}
          />
        </Box>
      </IconButton>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            minWidth: 120,
          },
        }}
      >
        {LANGS.map((item) => (
          <MenuItem
            key={item.key}
            selected={item.key === lang}
            onClick={() => handleSelect(item.key)}
            sx={{ gap: 1.5 }}
          >
            <Box
              sx={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={item.flag}
                alt={item.label}
                fill
                sizes="22px"
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Typography fontWeight={600}>{item.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
