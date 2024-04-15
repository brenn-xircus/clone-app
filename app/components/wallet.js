import { Box, Button, Flex, Grid, Stack, Text } from '@chakra-ui/react'
import { useWallet, useWalletAuth } from '@xircus-web3/ton-react'
import { useEffect } from 'react';

export default function Wallet({ children }) {
  const wallet = useWallet()
  
   useEffect(() => {
    localStorage.setItem('walletStatus', wallet.status);
  }, [wallet.status]);

  return (
    <Box>
      {wallet.status !== wallet.CONNECTED && (
        <Grid h="100vh" w="full" placeItems="center" bg="gray.200" >
          <Stack bg="gray.100" borderRadius="md" p={4} mb={4}>
            <Text textAlign="center">
              To access this page, please connect your wallet.
            </Text>
            <Button colorScheme="blue" onClick={wallet.connect} mt={2} mx="auto" display="block">
              Connect
            </Button>
          </Stack>
        </Grid>
      )}
      {wallet.status === wallet.CONNECTED && children}
      </Box>
  );
}