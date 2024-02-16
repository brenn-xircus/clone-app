import React from 'react'
import ServicesCard from './servicesCard'
import { Box } from '@chakra-ui/react'
import SectionHeader from './sectionHeader'

const ServicesSection = () => {
  return (

    <Box pt={{ base: '90px', md: '160px' }} w="full" h="full">
      <SectionHeader sectionNumber="01" title="Services" sectionNumberBg="#FFBC99" />
      <ServicesCard />
    </Box>
      

  )
}

export default ServicesSection