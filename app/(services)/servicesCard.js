"use client";

import { Grid, IconButton, Text, VStack } from '@chakra-ui/react'
import { useTheme } from '@emotion/react';
import React from 'react'

const ServicesCard = ({ cardData = [] }) => {

  const theme = useTheme()

  return (
    <Grid gap={7} gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))">
      {cardData.map((card) => (
        <VStack 
          key={card.title} 
          justifyContent="start" 
          p="60px 40px" 
          bg="gray.100" 
          borderRadius="lg"
          _hover={{ bg: theme.colors.primary[50], color: 'white !important'}}
          transition="0.2s ease"
        >
          <IconButton 
            icon={card.icon}
            variant="unstyled"
            _hover={{
              cursor: "auto",
            }}
            fontSize="28px"
            w="full"
            transition="none"
          />
          <Text w="full" fontWeight="bold" fontSize="24px">{card.title}</Text>
          <Text w="full" fontSize="sm">{card.description}</Text>
      </VStack>
      ))}
    </Grid>
  )
}

export default ServicesCard