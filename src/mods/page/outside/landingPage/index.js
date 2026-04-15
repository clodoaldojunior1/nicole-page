import { HeaderComponent } from "@/componentes/Header";
import { AboutSection } from "@/componentes/Sections/about";
import { HeroSection } from "@/componentes/Sections/hero";
import { ServicesSection } from "@/componentes/Sections/services";
import { GallerySection } from "@/componentes/Sections/gallery";
import { ContactSection } from "@/componentes/Sections/contact";
import { Grid } from "@mui/material";

export default function LandingPageMod() {
  return (
    <>
      <Grid>
        <HeaderComponent titleLogo="Nicole Cilios" />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </Grid>
    </>
  );
}
