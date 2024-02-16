"use client";

import { Flex } from '@chakra-ui/react'
import React from 'react'
import SectionHeader from '../components/sectionHeader'
import ClientCard from './clientCard'

const ClientSection = () => {

  const clientCardData = [
    {
      id: 0,
      image: 'https://via.placeholder.com/1920x1080'
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/1920x1080'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1920x1080'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1920x1080'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/1920x1080'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/1920x1080'
    },
  ]
  return (
    <Flex gap={10} mb={20} flexDir={{ base: 'column', md: 'row' }} w="full" h="full" id="clients" >
      <SectionHeader sectionNumber="03" title="Our Clients" sectionNumberBg="#B1E5FC"/>
      <ClientCard clientCardData={clientCardData}/>
    </Flex>
  )
}

export default ClientSection