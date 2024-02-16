import { Box, Button, ButtonGroup, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import React from 'react'

const HomePage = () => {

  const theme = useTheme()

  return (
    <Box position="relative" h="730px">
      <Box 
        bgImage="url('https://via.placeholder.com/1920x1080')"
        bgSize="cover"
        bgPos="center"
        // backgroundBlendMode="darken"
        // backgroundColor="rgba(105, 105, 224, 0.3568627450980392)"
        w="full" 
        position="absolute"
        top={0}
        right={0}
        pb={20}
      >
        <Box px={{ base: '32px', sm: '40px', md: '80px' }} mx="auto" maxW="1280px">
          <VStack pt="200px" alignItems="start" gap={8} maxW="600px" >
            <Text 
              color={theme.colors.primary[50]} 
              fontWeight={700} 
              fontSize={{ base: '12px', md: '16px' }}
            >
              DESIGN + CODE
            </Text>
            <Heading
              fontSize={{ base: '40px', sm: '48px', md: '92px' }}
              letterSpacing={{ base: '-.03em', md: '-.02em'}}
              lineHeight={{ base: '1em' }}
              color="white"
            >
              I&apos;m Brenn Santiago
            </Heading>
            <Text
              fontSize={{ base: '16px', md: '24px'}}
              color="gray.500"
            >
              Designing user interfaces for over <Text as="span" fontWeight="bold">2 years</Text> as a frontend developer
            </Text>
            <ButtonGroup
              w="full" 
              display="flex" 
              flexDirection={{ base: 'column', md: 'row' }} 
              gap="3"
              
            >
              <Button color="white" bg={theme.colors.primary[50]} py="25px" px="60px">Hire Me</Button>
              <Button sx={{ ms: "0 !important" }} bg="white" py="25px" px="60px">Projects</Button>
            </ButtonGroup>
            <HStack w="full" gap={8}>
              <VStack alignItems="start">
                <Heading color="white">+84</Heading>
                <Text fontSize="sm" color="gray.500">Client worldwide</Text>
              </VStack >
              <VStack alignItems="start">
                <Heading color="white">129</Heading>
                <Text fontSize="sm" color="gray.500">Projects done</Text>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </Box>
    
    )
}

export default HomePage