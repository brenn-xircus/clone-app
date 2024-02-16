"use client";

import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import React from 'react'

const NewsCard = ({ newsCardData = []}) => {

  const theme = useTheme()

  return (
    <Grid gap={8} gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))" w="full">
      {newsCardData.map((data) => (
        <Flex flexDir="column" key={data.id} borderRadius="md">
          <Box 
            bgImage="url('https://via.placeholder.com/1080x1920')"
            bgSize="cover"
            bgPos="center"
            w="full"
            height="500px"
            filter="grayscale(100%)"
            cursor="pointer"
            transition="0.3s ease"
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
          />
          <Box p={6} bg="blackAlpha.50" borderBottomRightRadius="md" borderBottomLeftRadius="md" fontWeight="black" >
            <Text color={theme.colors.primary[50]} fontSize="xs" >{data.title}</Text>
            <Text>{data.label}</Text>
          </Box>
        </Flex>
      ))}
    </Grid>
  )
}

export default NewsCard