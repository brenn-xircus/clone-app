"use client"

import HomePage from "./components/home";
import Navbar from "./components/navbar";
import { Box, HStack, VStack } from "@chakra-ui/react";
import Section from "./components/section";


export default function Home() {
  
  return (
    <>
      <Navbar/>
      <HomePage />
      <VStack h="100vh" px={{ base: '32px', sm: '40px', md: '80px' }} mx="auto" maxW="1280px" w="full">
        <Section/>
      </VStack>
    </>
    
  );
}
