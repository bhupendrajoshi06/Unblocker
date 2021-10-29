
import React from "react";
import { Box, Grid, GridItem, Flex, Heading, Text, Center, } from "@chakra-ui/layout";
// import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { AspectRatio } from "@chakra-ui/react"
import { Map, GoogleApiWrapper } from 'google-maps-react';
import {
    Divider,

    Image,

    Avatar,

    Stack,
    // useMediaQuery,

    useColorModeValue,
} from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/button"


import { FaHome, FaUser, FaHandshake, FaSms, FaVideo, FaHeart, FaEye, FaStar,
     FaIdBadge, FaLaugh, FaShareAlt, FaStreetView, FaCrown, FaCreativeCommonsNd, 
     FaSeedling, FaTags, FaInfo,FaTwitter,FaYoutube,FaGlobe,FaLinkedin,FaInstagram } from "react-icons/fa"






function Profile() {
    // const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")

    // const mapStyles = {
    //     width: "100%",
    //     height: "100%",
    //   };
    return (


        <div >




            <Flex



                align="center"
                justify={{ base: "center", md: "space-around", xl: "space-between" }}
                direction={{ base: "column-reverse", md: "row" }}
                wrap="no-wrap"
             
                px={3}
                py={4}


            >
                <Stack
                    mt={{ base: 1, md: -120 }}
                    ml={{ base: 1, md: 10 }}
                    spacing='1'
                    w={{ base: "80%", md: "20%" }}
                    align={["left", "left", "flex-start", "flex-start"]}
                >
                    <Grid templateColumns="repeat(4, 1fr)" mt="1" mb="4" gap={6}>



                        <Box display="flex" mt={2} alignItems="baseline">
                            <Text
                                textTransform={'uppercase'}
                                color={'red.700'}
                                fontWeight={600}
                                fontSize={'sm'}
                                bg={useColorModeValue('red.50', 'red.900')}

                                alignSelf={'flex-start'}
                                rounded={'md'}>
                                <IconButton color="white" icon={<FaHome />}
                                    _hover={{
                                        bg: ["#868686"]
                                    }} background="#868686"></IconButton>
                            </Text>
                        </Box>


                        <Box display="flex" mt={2} alignItems="baseline">
                            <Text
                                textTransform={'uppercase'}
                                color={'red.700'}
                                fontWeight={600}
                                fontSize={'sm'}
                                bg={useColorModeValue('red.50', 'red.900')}

                                alignSelf={'flex-start'}
                                rounded={'md'}>
                                <IconButton color="white" icon={<FaHandshake />}
                                    _hover={{
                                        bg: ["#868686"]
                                    }} background="#868686"></IconButton>
                            </Text>
                        </Box>


                        <Box display="flex" mt={2} alignItems="baseline">
                            <Text
                                textTransform={'uppercase'}
                                color={'red.700'}
                                fontWeight={600}
                                fontSize={'sm'}
                                bg={useColorModeValue('red.50', 'red.900')}

                                alignSelf={'flex-start'}
                                rounded={'md'}>
                                <IconButton color="white" icon={<FaSms />}
                                    _hover={{
                                        bg: ["#868686"]
                                    }} background="#868686"></IconButton>
                            </Text>
                        </Box>

                        <Box display="flex" mt={2} alignItems="baseline">
                            <Text
                                textTransform={'uppercase'}
                                color={'red.700'}
                                fontWeight={600}
                                fontSize={'sm'}
                                bg={useColorModeValue('red.50', 'red.900')}

                                alignSelf={'flex-start'}
                                rounded={'md'}>
                                <IconButton color="white" icon={<FaUser />}
                                    _hover={{
                                        bg: ["#868686"]
                                    }} background="#868686"></IconButton>
                            </Text>
                        </Box>



                    </Grid>

                    <Text fontSize="xs" fontWeight="semibold" color="gray" pt={[0, 0, 0, 4]} textAlign={["left", "left", "left", "left"]}> SHOWCASE CONTENT</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 2]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaVideo />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Introduction Video</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaIdBadge />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Individual</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaLaugh />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Highlight</Text>




                    <Text fontSize="xs" fontWeight="semibold" color="gray" paddingTop="30px" textAlign={["left", "left", "left", "left"]}> PROFILE CONTENT</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 2]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaShareAlt />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Post Statistics</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaStreetView />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Post Feedback</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaCrown />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Winning Solution</Text>



                    <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaCreativeCommonsNd />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Consultation Statistics</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaSeedling />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Consultation Feedback</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaTags />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton> Top Tags</Text>


                    <Text fontSize="xs" fontWeight="semibold" color="gray" pt={[0, 0, 0, 4]} textAlign={["left", "left", "left", "left"]}> UTILITIES</Text>

                    <Text fontSize="18px" pt={[0, 0, 0, 2]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaInfo />}
                        _hover={{
                            bg: ["#f4f4f4"]
                        }} background="#f4f4f4"></IconButton>Help</Text>



                </Stack>

                <Box w={{ base: "100%", sm: "100%", md: "80%" }} mr={{ base: 1, md: 20 }} >
                    {/* TODO: Make this change every X secs */}
                    <GridItem colSpan={1} width="100%" bg="white" border="1px" borderColor="#c5c5c58f" borderRadius="12px" >

                        <Box  borderRadius="lg" overflow="hidden">
                            <Image
                                h={'210px'}
                                w={'full'}

                                src={
                                    'https://unblockerai.s3-us-west-2.amazonaws.com/ubnpublic/9be5d9ec-8e7f-4910-ad2f-246f321c38ac-profile-banner-IMG-20171218-WA0027.jpg'
                                }
                                objectFit={'cover'}
                            />
                            <Grid templateColumns="repeat(5, 1fr)" gap={1}>
                                <GridItem colSpan={2}  >

                                    
                                <Grid templateColumns="repeat(8, 1fr)"  gap={1}>

                                   

                                    <Box display="flex" mt={-12} ml={2} alignItems="baseline">
                                    <Text
                                        textTransform={'uppercase'}
                                        color={'gray.700'}
                                        fontWeight={600}
                                        fontSize={'sm'}
                                        bg={useColorModeValue('gray.50', 'gray.900')}
                                        
                                        alignSelf={'flex-start'}
                                        rounded={'md'}>
                                        <IconButton color="#00acee" padding="10px" icon={<FaTwitter />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton>
                                    </Text>
                                    </Box>

                                    <Box display="flex" mt={-12} alignItems="baseline">
                                    <Text
                                        textTransform={'uppercase'}
                                        color={'gray.700'}
                                        fontWeight={600}
                                        fontSize={'sm'}
                                        bg={useColorModeValue('gray.50', 'gray.900')}
                                      
                                        alignSelf={'flex-start'}
                                        rounded={'md'}>
                                        <IconButton color="red" padding="10px" icon={<FaYoutube />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton> 
                                    </Text>
                                    </Box>
                                    <Box display="flex" mt={-12} alignItems="baseline">
                                    <Text
                                        textTransform={'uppercase'}
                                        color={'gray.700'}
                                        fontWeight={600}
                                        fontSize={'sm'}
                                        bg={useColorModeValue('gray.50', 'gray.900')}
                                      
                                        alignSelf={'flex-start'}
                                        rounded={'md'}>
                                        <IconButton color="#319795" padding="10px" icon={<FaGlobe />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton>
                                    </Text>
                                    </Box>

                                            
                                    <Box display="flex" mt={-12} alignItems="baseline">
                                    <Text
                                        textTransform={'uppercase'}
                                        color={'gray.700'}
                                        fontWeight={600}
                                        fontSize={'sm'}
                                        bg={useColorModeValue('gray.50', 'gray.900')}
                                        
                                        alignSelf={'flex-start'}
                                        rounded={'md'}>
                                        <IconButton color="#00acee" padding="10px" icon={<FaLinkedin />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton> 
                                    </Text>
                                    </Box>

                                            
                                    <Box display="flex" mt={-12} alignItems="baseline">
                                    <Text
                                        textTransform={'uppercase'}
                                        color={'gray.700'}
                                        fontWeight={600}
                                        fontSize={'sm'}
                                        bg={useColorModeValue('gray.50', 'gray.900')}
                                        
                                        alignSelf={'flex-start'}
                                        rounded={'md'}>
                                        <IconButton color="#CD486B" padding="10px" icon={<FaInstagram />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton> 
                                    </Text>
                                    </Box>


                                    </Grid>
                                    <Box p={6}>
                                    <Box 

                                        fontWeight="semibold"
                                        as="h3"
                                        fontSize={[20, 20, 20, 27]}
                                        textAlign={'left'}
                                        lineHeight="tight"
                                        isTruncated
                                    >

                                        Amitabh Chauhan
                                    </Box>
                                    <Box display="flex" alignItems="baseline">
                                        {/* <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                            </Badge> */}

                                             <Box
                                            color="gray.500"
                                            fontWeight="semibold"

                                            fontSize={[14, 20, 20, 16]}
                                          

                                        >
                                            Amitabh Chauhan Films
                                          
                                        </Box>

                                        

                                    </Box>

                                    <Box display="flex" alignItems="baseline">
                                        {/* <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                            </Badge> */}

                                             <Box
                                            color="gray.500"
                                            fontWeight="semibold"

                                            fontSize={[14, 20, 20, 16]}
                                           

                                        >
                                            
                                            (A C Films)
                                        </Box>
                                      </Box>
                                      

                                      
                                    <Box display="flex" alignItems="baseline">
                                        {/* <Badge borderRadius="full" px="2" colorScheme="teal">
                                            New
                                            </Badge> */}

                                             <Box
                                            color="#9e9696"
                                            fontWeight="medium"

                                            fontSize={[14, 20, 20, 16]}
                                           

                                        >
                                            
                                            Entertainment
                                        </Box>
                                      </Box>
                                      </Box>

                                </GridItem>
                                <GridItem colStart={4} colEnd={8} >


                                    <Flex justify={'right'} mr={[10]} mt={[-10]}   >
                                        <Avatar

                                            size={'2xl'}
                                            src={
                                                'https://unblockerai.s3-us-west-2.amazonaws.com/ubnpublic/a72df3bf-3d28-4f7a-b10b-34e42c90fa0c-profile-content-image-IMG-20171226-WA0022_2.jpg'
                                            }
                                            alt={'Author'}
                                            css={{
                                                border: '2px solid white',
                                            }}
                                        />
                                    </Flex>
                                    <Flex justify={'right'} mt={-9} ml={10} mr={[10]} >
                                        <Avatar
                                            size={'sm'}
                                            src={
                                                'https://raw.githubusercontent.com/Avkash/mldl/master/logos/svg/in.svg'
                                            }
                                            alt={'Author'}
                                            css={{
                                                border: '2px solid white',
                                            }}
                                        />
                                    </Flex>


                                    <Grid templateColumns="repeat(5, 1fr)" mt="3" gap={1}>

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
                                        <IconButton color="#00ACEE" padding="10px" icon={<FaTwitter />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton> 10
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
                                        <IconButton color="#dbc81a" padding="10px" icon={<FaStar />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton> 10
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
                                        <IconButton color="red" padding="10px" icon={<FaHeart />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton> 13
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
                                        <IconButton color="#319795" padding="10px" icon={<FaEye />}
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
                                        <IconButton color="#512DA8" padding="10px" icon={<FaHeart />}
                                            _hover={{
                                                bg: ["#F7FAFC"]
                                            }} background="#F7FAFC"></IconButton> 0
                                    </Text>
                                </Box>

                                
                                </Grid>

                                
                                </GridItem>
                            </Grid>



                        </Box>





                    </GridItem>


                    <Flex
                        align="center"
                        justify={{ base: "center", md: "space-around", xl: "space-between" }}
                        direction={{ base: "column-reverse", md: "row" }}
                        wrap="no-wrap"
                        minH="60vh"
                        px={0}
                        mt={[3, 0, 0, 0]}

                    >




                        <Stack w={{ base: "100%", sm: "100%", md: "100%" }} mb={{ base: 4, md: 0 }} mt={[-4,0,0,1]} >

                            <Box  borderWidth="1px" borderRadius="lg" overflow="hidden">
                                       
                                                            <AspectRatio ratio={16 / 9}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                        alt="demo"/>
                    </AspectRatio>

                            </Box>


                        </Stack>

                        

                    </Flex>





                </Box>


            </Flex>



        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDHFZSNR9ezzNmp8fzJRrue4KPiC9HvlDY',
    version: 3.31
  })(Profile);