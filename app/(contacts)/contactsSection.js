"use client";

import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SectionHeader from '../components/sectionHeader'
import { useTheme } from '@emotion/react'

const ContactsSection = () => {

   const theme = useTheme()

  return (
    <Box w="full" p="4rem" bg="blackAlpha.50" borderRadius="md" mb={20} id="contacts">
      <Flex gap={20} flexDir={{ base: "column", md: "row" }} w="full" h="full">
        <Flex flexDir="column" flex={1} gap={{ base: 4, md: 0 }}>
          <SectionHeader 
            sectionNumber="05" 
            title="Contacts" 
            sectionNumberBg="#FFD88D" 
            flex={false}
          />
          <Flex flexDir="column" gap={8}>
            <Text fontSize="sm" textAlign={{ base: "center", md: "start" }} color="gray.500">Donec et enim vitae tellus auctor menean leo diamfeugiat nulla sed. consequat venenatis est. Praesent commodo consequat pharetra.</Text>
            <Button color="white" _hover={{}} bg={theme.colors.primary[50]}  variant="solid" >Contact</Button>
          </Flex> 
          
        </Flex>
        <Box 
            bgImage="url('https://via.placeholder.com/1080x1920')"
            bgSize="cover"
            bgPos="center"
            w="full"
            height="300px"
          />
      </Flex>
    </Box>
  )
}

export default ContactsSection