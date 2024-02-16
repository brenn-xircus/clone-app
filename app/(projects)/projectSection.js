"use client";

import React from 'react'
import SectionHeader from '../components/sectionHeader'
import { Flex } from '@chakra-ui/react'
import ProjectGallery from './projectGallery'

const ProjectSection = () => {

  const projectGalleryData = [
    {
      id: 0,
      image: 'https://via.placeholder.com/1080x1920',
      label: 'Reputation',
    },
    {
      id: 1,
      image: 'https://via.placeholder.com/1080x1920',
      label: 'Copped up',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/1080x1920',
      label: 'Insane',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/1080x1920',
      label: 'I like you',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/1080x1920',
      label: 'I cannot be',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/1080x1920',
      label: 'Insane',
    },
  ]
  return (
    <Flex gap={20} mb={20} flexDir="column"  w="full" h="full" id="projects">
      <SectionHeader sectionNumber="02" title="Projects" sectionNumberBg="#CABDFF" />
      <ProjectGallery projectGalleryData={projectGalleryData}/>
    </Flex>

  )
}

export default ProjectSection