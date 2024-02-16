"use client";

import { Box, Flex, Grid, VStack } from '@chakra-ui/react'
import React from 'react'

const ClientCard = ({ clientCardData = []}) => {
  return (
    <Flex flex={1} justifyContent="center" alignItems="center">
      <Grid gap={8} gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" w="full">
        {clientCardData.map((data) => (
          <VStack key={data.id} alignItems="start" w="full">
            <Box
              bgImage="url('https://via.placeholder.com/1920x1080')"
              bgSize="cover"
              bgPos="center"
              w="full"
              height="180px"
              filter="grayscale(100%)"
              cursor="pointer"
              transition="0.3s ease"
              borderRadius="md"
            />
          </VStack>
        ))}
      </Grid>
    </Flex>
  )
}

export default ClientCard