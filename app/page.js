"use client"

import ClientSection from "./(clients)/clientSection";
import ContactsSection from "./(contacts)/contactsSection";
import NewsSection from "./(news)/newsSection";
import ProjectSection from "./(projects)/projectSection";
import ServicesSection from "./(services)/servicesSection";
import Footer from "./components/footer";
import HomePage from "./components/home";
import Navbar from "./components/navbar";
import { Box } from "@chakra-ui/react";
import Wallet from "./components/wallet";

export default function Home() {
  
  return (
    <>
      <Wallet>
        <Navbar/>
        <HomePage />
        <Box px={{ base: '32px', sm: '40px', md: '80px' }} mx="auto" maxW="1280px" w="full">
          <ServicesSection />
          <ProjectSection />
          <ClientSection />
          <NewsSection />
          <ContactsSection />
        </Box>
        <Footer />
      </Wallet>
    </>
    
  );
}
