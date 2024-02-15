'use client'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      50: '#2a85ff'
    }
  }
});

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
    </ChakraProvider>
  )
}