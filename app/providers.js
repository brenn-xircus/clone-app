'use client'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { XircusTonProvider, setupSDK } from '@xircus-web3/ton-react'

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#2a85ff'
    }
  }
});


export function Providers({ children }) {
  return (
    <XircusTonProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </XircusTonProvider>
    
  )
}