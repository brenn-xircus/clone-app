'use client';

import { Box, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb";

const navbarItems = ['Home', 'Services', 'About', 'Blog', 'Contact']

const Navbar = () => {

  const [activeItem, setActiveItem] = useState('Home')
  const [scrolling, setScrolling] = useState(false)

  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");

  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 
    <Box 
      position="fixed" 
      top={0} 
      left={0} 
      right={0} 
      w="100" 
      zIndex={50} 
      bg={scrolling ? 'white' : 'transparent'} 
      transition="background-color 0.2s ease, box-shadow 0.2s ease"
    >
      <HStack
        alignItems="center" 
        justifyContent="space-between" 
        h="120px" 
        px={{ base: '32px', sm: '40px', md: '80px' }} 
        mx="auto" 
        maxW="1280px"
      >
        <Text fontSize="2xl" fontWeight="bold" color={scrolling ? 'black' : 'white' }>Vedio</Text>
        <HStack
          gap={8}
          fontSize="sm" 
          fontWeight="bold" 
          color="gray.500"
          display={{ base: 'none', md: 'flex' }}
        >
          {navbarItems.map((item) => (
            <Text 
              key={item} 
              _hover={{ color: theme.colors.primary[50], cursor: 'pointer' }}
              color={activeItem === item ? theme.colors.primary[50] : 'gray.500'}
              onClick={() => setActiveItem(item)}
            >
                {item}
            </Text>
          ))}
        </HStack>
        <Text 
          fontSize="sm" 
          fontWeight="bold" 
          color={theme.colors.primary[50]}
          _hover={{ cursor: 'pointer' }}
          display={{ base: 'none', md: 'block' }}
        >
            Let&apos;s talk
        </Text>

        {!isLargerThanMd && (
          <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<TbMenu2 />}
            
            color="blackAlpha"
          />
          <MenuList>
            {navbarItems.map((item) => (
              <MenuItem 
                key={item} 
                _hover={{ color: theme.colors.primary[50], cursor: 'pointer' }}
                color={activeItem === item ? theme.colors.primary[50] : 'gray.500'}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        )}
      </HStack>
        
    </Box>
   );
}
 
export default Navbar;