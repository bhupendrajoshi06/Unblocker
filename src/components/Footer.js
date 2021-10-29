import React from 'react'

import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

  
  const Logo = (props) => {
    return (
        <img width={400} src={'https://unblocker.ai/static/media/unblockerai.99855652.png'} className="App-logo" alt="logo" />
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
        bg={useColorModeValue('blackAlpha.900', 'blackAlpha.900')}
        color={useColorModeValue('white.700', 'white.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={6}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link color="white" href={'#'}>Home</Link>
            <Link color="white"href={'#'}>Showcases </Link>
           
            <Link   color="white" href={'#'}>Active Consultations</Link>
            <Link   color="white" href={'#'}>Heros</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text color="white" >©2021 UnBlocker.ai, LLC. All rights reserved.</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton  label={'Twitter'} href={'#'}>
                <FaTwitter  color="#00acee" />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube  color="#c4302b" />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram color="#cd486b" />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }
