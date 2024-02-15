'use client';

import { HStack, Text } from "@chakra-ui/react";

const navbarItems = ['Home', 'Services', 'About', 'Blog', 'Contact']

const Navbar = () => {
  return ( 
    <HStack h={120} w="full" alignItems="center" justifyContent="space-between">
        <Text fontSize="2xl">Vedio</Text>
        <HStack gap={8} fontSize="sm">
          {navbarItems.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
        </HStack>
        <Text>Let&apos;s talk </Text>
    </HStack>
   );
}
 
export default Navbar;