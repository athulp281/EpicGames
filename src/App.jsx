import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HeroSection } from "./componets/HeroSection";
import { CardSection } from "./componets/CardSection";
import { Box } from "@mui/material";
import { ContributionSection } from "./componets/ContributionSection";
import { ContactSection } from "./componets/ContactSection";
import { Footer } from "./componets/Footer";

function App() {
    return (
        <>
            <HeroSection />
            <CardSection />
            <ContributionSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export default App;
