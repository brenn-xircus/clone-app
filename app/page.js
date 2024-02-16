"use client"

import HomePage from "./components/home";
import Navbar from "./components/navbar";
import { VStack } from "@chakra-ui/react";
import ServicesSection from "./[services]/servicesSection";
import ProjectSection from "./[project]/projectSection";


export default function Home() {
  
  return (
    <>
      <Navbar/>
      <HomePage />
      <VStack pb={20} h="100vh" px={{ base: '32px', sm: '40px', md: '80px' }} mx="auto" maxW="1280px" w="full">
        <ServicesSection />
        <ProjectSection />
      </VStack>
    </>
    
  );
}
