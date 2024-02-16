"use client";

import { Box, Grid, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProjectGallery = ({ projectGalleryData = [] }) => {
  return (
    <Grid gap={8} gridTemplateColumns="repeat(auto-fit, minmax(270px, 1fr))">
      {projectGalleryData.map((data) => (
        <VStack key={data.id} alignItems="start">
          <Box
            bgImage={`url(${data.image})`}
            bgSize="cover"
            bgPos="center"
            w="full"
            height="500px"
            filter="grayscale(100%)"
            cursor="pointer"
            transition="0.3s ease"
            borderRadius="md"
            
          />
          <Text fontWeight="bold">{data.label}</Text>
        </VStack>
      ))}
    </Grid>
  )
}

export default ProjectGallery