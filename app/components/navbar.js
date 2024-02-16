'use client';

import { Box, HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Text, useMediaQuery } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { Link as ScrollLink } from 'react-scroll';

const navbarItems = ['Home', 'Services', 'Projects', 'Clients', 'Contacts']


const Navbar = () => {

  const [scrolling, setScrolling] = useState(false)
  const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
  const [activeSection, setActiveSection] = useState('Home');

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

  const handleSetActive = (section) => {
    setActiveSection(section);
  };

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
        <Text fontSize="2xl" fontWeight="bold" color={scrolling ? 'black' : 'white' }>M4mba</Text>
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
              transition="0.2s ease"
              color={activeSection === item ? theme.colors.primary[50] : 'gray.500'}
            >
                <ScrollLink 
                  to={item.toLowerCase()} 
                  smooth={true} 
                  offset={-60} 
                  duration={500} 
                  spy={true} 
                  activeClass="active"
                  onSetActive={() => handleSetActive(item)}
                >
                  {item}
                </ScrollLink>
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
              >
                  <ScrollLink 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    offset={-80} 
                    duration={500} 
                    spy={true} 
                    activeClass="active"
                    onSetActive={() => handleSetActive(item)}
                    color={activeSection === item ? theme.colors.primary[50] : 'gray.500'}
                  >
                    {item}
                  </ScrollLink>
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