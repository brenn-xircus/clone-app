'use client'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    primary: {
      50: "#FCFCFD",
      100: "#cfe0ff",
      200: "#add4ff",
    },
  },
});

export default theme;


export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
    </ChakraProvider>
  )
}