import { Box, Text } from '@chakra-ui/react'
import { useTheme } from '@emotion/react'
import React from 'react'

const Footer = () => {

  const theme = useTheme()

  return (
    <Box
      as="footer"
      padding="30px"
      fontSize="lg"
      textAlign="center"
      width="100%"
      bg={theme.colors.primary[50]}
      fontWeight="bold"
      display="flex"
      flexDir={{ base: 'column', md: 'row' }}
      justifyContent="center"
      gap={1}
    >
      <Text color="white">Developed by</Text>
      <Text className="name" color="purple.900">
        Brenn Aldwin Santiago
      </Text>
    </Box>
  )
}

export default Footer