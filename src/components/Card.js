
import React from "react";
import { Box, Grid, Flex,  Text, Center} from "@chakra-ui/layout";
import { Link } from "react-router-dom";


import {

  
  Image,
 
  Avatar,
 
  Stack,
  // useMediaQuery,
  
  useColorModeValue,
} from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/button"


import { FaHeart,FaEye,FaStar } from "react-icons/fa"


function Card(props) {
  
  return ( 


<>
    <Stack  w={{ base: "100%", sm: "100%", md: "100%" }} mb={{ base: 4, md: 0 }} mr={{ base: 0, md: 2 }}>
        
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
    <Image
      h={'210px'}
      w={'full'}
    
      src={
        'https://unblockerai.s3-us-west-2.amazonaws.com/webcontent/showcase-ready.jpg'
      }
      objectFit={'cover'}
    />
    <Flex justify={'center'}  mt={-24}   >
      <Avatar
     
        size={'xl'}
        src={
          props.props.candidate_photo_url
        }
        alt={'Author'}
        css={{
          border: '2px solid white',
        }}
      />
    </Flex>
    <Flex justify={'center'} mt={-5} ml={10} >
      <Avatar
        size={'sm'}
        // props.props.candidate_country_flag
        src={
          'https://raw.githubusercontent.com/Avkash/mldl/master/logos/svg/in.svg'
        }
        alt={'Author'}
        css={{
          border: '2px solid white',
        }}
      />
    </Flex>


<Box p="6" height={200} >


  <Box
  
    fontWeight="bold"
    as="h3"
    fontSize={[20,20,20,20]}
    textAlign={'center'}
    lineHeight="tight"
    isTruncated
  >
  {/* candidate_photo_url */}
  {/* {props.props.candidate_photo_url} */}
  {props.props.candidate_showcase_fullname}
  </Box>
  
    {/* <Badge borderRadius="full" px="2" colorScheme="teal">
      New
    </Badge> */}
    <Center> <Box
      color="gray.500"
      fontWeight="semibold"
 
      letterSpacing="wide"
      fontSize="xs"
      textTransform="uppercase"
    
    >
     {props.props.candidate_showcase_title}
    </Box>  </Center>
    


      <Grid templateColumns="repeat(3, 1fr)"   mt="1" gap={6}>
 


  <Box display="flex" mt={2} alignItems="baseline">
  <Text
        textTransform={'uppercase'}
        color={'gray.700'}
        fontWeight={600}
        fontSize={'sm'}
        bg={useColorModeValue('gray.50', 'gray.900')}
        paddingRight={3}
        alignSelf={'flex-start'}
        rounded={'md'}>
        <IconButton color="red"  padding="10px"  icon={<FaHeart />}
           _hover={{
        bg: ["#F7FAFC"]
      }} background="#F7FAFC"></IconButton> 0
      </Text>
      </Box>  
      <Box display="flex" mt={2} alignItems="baseline">
  <Text
        textTransform={'uppercase'}
        color={'gray.700'}
        fontWeight={600}
        fontSize={'sm'}
        bg={useColorModeValue('gray.50', 'gray.900')}
        paddingRight={3}
        alignSelf={'flex-start'}
        rounded={'md'}>
        <IconButton color="#319795"  padding="10px"  icon={<FaEye />}
           _hover={{
        bg: ["#F7FAFC"]
      }} background="#F7FAFC"></IconButton> 29
      </Text>
      </Box>  

      <Box display="flex" mt={2} alignItems="baseline">
  <Text
        textTransform={'uppercase'}
        color={'gray.700'}
        fontWeight={600}
        fontSize={'sm'}
        bg={useColorModeValue('gray.50', 'gray.900')}
        paddingRight={3}
        alignSelf={'flex-start'}
        rounded={'md'}>
        <IconButton color="#dbc81a"  padding="10px"  icon={<FaStar />}
           _hover={{
        bg: ["#F7FAFC"]
      }} background="#F7FAFC"></IconButton> 10
      </Text>
      </Box>  
      </Grid>
      


    <Center mt={3}>
  <Box as="button"  borderRadius="md" bg="black"   color="white" px={12} h={8}>
  <Link to='/profile'>  Showcase</Link>
</Box></Center>
</Box>
  </Box>


  </Stack>

</>
   );
}

export default Card;