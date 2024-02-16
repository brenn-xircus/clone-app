import React from 'react'
import ServicesCard from './servicesCard'
import { Box, Flex } from '@chakra-ui/react'
import SectionHeader from '../components/sectionHeader'
import { TbBrandSpeedtest, TbDiamond, TbHeart, TbLayoutDashboard, TbPuzzle, TbStar, TbWorld } from "react-icons/tb";
import ServicesInfo from './servicesInfo';

const ServicesSection = () => {

  const cardData = [
    {
      icon: <TbLayoutDashboard/>,
      title: 'Ui-X Design',
      description: 'Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.'
    },
    {
      icon: <TbPuzzle/>,
      title: 'Development',
      description: 'Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.'
    },
    {
      icon: <TbWorld />,
      title: 'Web Development',
      description: 'Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet estsed ut euismod.'
    }
  ]

  const cardInfoStats = [
    {
      icon: <TbDiamond />,
      count: '489k',
      label: 'Subscribers'
    },
    {
      icon: <TbStar />,
      count: '300+',
      label: 'Projects'
    },
    {
      icon: <TbHeart />,
      count: '400',
      label: 'Websites'
    },
    {
      icon: <TbBrandSpeedtest />,
      count: '199',
      label: 'Apps'
    },

  ]
  return (

    <Flex gap={20} mb={20} flexDir="column" pt={{ base: '90px', md: '160px' }} w="full" h="full">
      <SectionHeader sectionNumber="01" title="Services" sectionNumberBg="#FFBC99" />
      <ServicesCard cardData={cardData} />
      <ServicesInfo cardInfoStats={cardInfoStats}/>
    </Flex>
      

  )
}

export default ServicesSection