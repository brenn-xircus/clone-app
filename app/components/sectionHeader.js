"use client";

import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const SectionHeader = ({ sectionNumber, title, sectionNumberBg, flex  }) => {

  return (
    <Flex
        flex={flex ? 1 : 0}
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent={{ base: 'center', md: 'space-between'}}
        gap={3}
      >
        <VStack alignItems={{ base: 'center', md: 'start' }} gap={3}>
          <Box 
            bg={sectionNumberBg} 
            fontSize="14px" 
            color="white" 
            p="8px 22px" 
            borderRadius="4px"
          >
            {sectionNumber}
          </Box>
          <Flex 
            position="relative" 
            justifyContent={{ base: 'center', md: 'start' }} 
            alignItems="center"
          >
            <Text
              position="absolute"
              fontSize={{ base: '40px', md: '48px' }}
              fontWeight="bold"
            >
              {title}
            </Text>
            <Text
              fontSize={{ base: '48px', md: '64px', lg: '92px' }}
              color="#e6e8ec"
              fontWeight="bold"
              lineHeight={1}
            >{title}</Text>
          </Flex>
        </VStack>
      </Flex>
  )
}

export default SectionHeader