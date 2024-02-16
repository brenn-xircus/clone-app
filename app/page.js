"use client"

import HomePage from "./components/home";
import Navbar from "./components/navbar";
import { VStack } from "@chakra-ui/react";
import ServicesSection from "./components/servicesSection";


export default function Home() {
  
  return (
    <>
      <Navbar/>
      <HomePage />
      <VStack h="100vh" px={{ base: '32px', sm: '40px', md: '80px' }} mx="auto" maxW="1280px" w="full">
        <ServicesSection />
      </VStack>
    </>
    
  );
}
