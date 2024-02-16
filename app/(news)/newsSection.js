"use client";

import { Flex } from '@chakra-ui/react'
import React from 'react'
import SectionHeader from '../components/sectionHeader'
import NewsCard from './newsCard'

const NewsSection = () => {

  const newsCardData = [ 
    {
      id: 0,
      title: 'WRAPPED',
      label: 'Quam Vulputate Dignissim Suspendisse Intellus'
    },
    {
      id: 1,
      title: 'I LIKE YOU',
      label: 'Quam Vulputate Dignissim Suspendisse Intellus'
    },
    {
      id: 2,
      title: 'I CANNOT BE',
      label: 'Quam Vulputate Dignissim Suspendisse Intellus'
    },
  ]

  return (
    <Flex gap={20} mb={20} flexDir="column"  w="full" h="full">
      <SectionHeader sectionNumber="04" title="News" sectionNumberBg="#B5E4CA" alignItems="start"/>
      <NewsCard newsCardData={newsCardData} />
    </Flex>
  )
}

export default NewsSection