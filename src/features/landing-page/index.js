import { HeaderComponent } from "@/shared/components/Header";
import { AboutSection } from "./components/About";
import { HeroSection } from "./components/Hero";
import { ServicesSection } from "./components/Services";
import { GallerySection } from "./components/Gallery";
import { ContactSection } from "./components/Contact";
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
