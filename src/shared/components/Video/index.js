
"use client";
import React, { useState } from "react";
import { Box, Skeleton } from "@mui/material";

export const VideoPlayer = ({
  src,
  poster,
  width = "100%",
  height = "auto",
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  sx = {},
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box
      sx={{
        position: "relative",
        width,
        height,
        borderRadius: 2,
        overflow: "hidden",
        ...sx,
      }}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation="wave"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            bgcolor: "grey.800", // Darker skeleton for video placeholder usually looks better
          }}
        />
      )}
      <Box
        component="video"
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        onLoadedData={() => setIsLoading(false)}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
        {...props}
      >
        Seu navegador não suporta a tag de vídeo.
      </Box>
    </Box>
  );
};
