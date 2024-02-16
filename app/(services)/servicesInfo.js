"use client";

import { Box, Grid, IconButton, Text, VStack } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import React from 'react'

const ServicesInfo = ({ cardInfoStats = []}) => {

  const theme = useTheme()
  return (
    <Box pb={20}>
      <Grid gap={7} p="60px" gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" bg="gray.100">
          {cardInfoStats.map((info, index) => (
            <VStack
              key={index}
              alignItems="center"
              justifyContent="center"
              w="full"
            >
              <IconButton 
                icon={info.icon}
                variant="unstyled"
                _hover={{
                  cursor: "auto",
                }}
                fontSize="28px"
                transition="none"
                color={theme.colors.primary[50]}
              />
              <Text fontWeight="bold" fontSize="3rem">{info.count}</Text>
              <Text>{info.label}</Text>
            </VStack>
          ))}
      </Grid>
    </Box>
  )
}

export default ServicesInfo