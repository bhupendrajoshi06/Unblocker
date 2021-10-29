
import React from "react";
import { Box, Grid, GridItem, Flex, Heading, Text, SimpleGrid} from "@chakra-ui/layout";
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'

import {
  Divider,
  Stack,
  // useMediaQuery,

} from '@chakra-ui/react';
import { IconButton } from "@chakra-ui/button"


import { FaHome, FaUser, FaHandshake, FaSms, FaVideo } from "react-icons/fa"




import Card from './Card';


function Home() {
  // const [isLargerThan1280] = useMediaQuery("(min-width: 1280px)")
 const user=[{"networkDataList":[{"candidate_uuid":"c5a51bea-375f-400e-8334-423d797d3805","candidate_showcase_fullname":"Amiya Mcmillan","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1630352082130,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]},{"candidate_uuid":"6989d1f2-4a40-47cd-a76c-d1c255ac8306","candidate_showcase_fullname":"Evelina Greene","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1630142467004,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]},{"candidate_uuid":"b725e791-b329-4336-930a-b935174fe259","candidate_showcase_fullname":"Penn Tyler","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1630141945782,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]},{"candidate_uuid":"5e2e807a-546d-46cd-9bf5-4f94fcd6b963","candidate_showcase_fullname":"Sameer Patil","candidate_showcase_title":"Product Manager","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":"https://lh3.googleusercontent.com/a/AATXAJzGxAsMVdR6wgufYq_7IQ0-tF1o2QgkEqJaP2FX=s96-c","candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1630001073492,"viewsReaction":[{"hearts_collected":0,"profile_views":5,"user_stars":0}]},{"candidate_uuid":"e07f3fb9-ba2a-4022-885a-d6a335fa6ab9","candidate_showcase_fullname":"Jasmine Salooza","candidate_showcase_title":"I am Boss","candidate_showcase_mini_title":"I love coffee and tea","candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":"https://lh3.googleusercontent.com/a-/AOh14GjSKPGWeDSyt4sai00cLDX7SLy5GnaKseU9dZ98=s96-c","candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629940256843,"viewsReaction":[{"hearts_collected":0,"profile_views":1,"user_stars":0}]},{"candidate_uuid":"8ecd75d9-554b-4d03-a950-7a155d9f4a9d","candidate_showcase_fullname":"amitabh chauhan","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":"IN","candidate_country_flag":"IN","candidate_categories":"Artist","candidate_highest_education":null,"candidate_photo_url":"https://unblockerai.s3-us-west-2.amazonaws.com/ubnpublic/a72df3bf-3d28-4f7a-b10b-34e42c90fa0c-profile-content-image-IMG-20171226-WA0022_2.jpg","candidate_photo_type":"https://unblockerai.s3-us-west-2.amazonaws.com/ubnpublic/9be5d9ec-8e7f-4910-ad2f-246f321c38ac-profile-banner-IMG-20171218-WA0027.jpg","candidate_showcase_readiness":false,"candidate_showcase_identity":"amitabhchauhan","candidate_mentor_enabled":false,"candidate_default_video_url":"https://unblockerai.s3-us-west-2.amazonaws.com/ubnpublic/b2e84989-7a9c-40ca-964a-6d6fc4fdc67c-intro-video-logo1.mp4","candidate_guest_profile":false,"created_timestamp":1629912007824,"viewsReaction":[{"hearts_collected":0,"profile_views":47,"user_stars":0}]},{"candidate_uuid":"5cb2eb72-4001-47f3-a2af-bb02976bf808","candidate_showcase_fullname":"Conor Barry","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629824573199,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]},{"candidate_uuid":"f6e1687b-1db7-4646-b17b-88910129770a","candidate_showcase_fullname":"Jignesh Yogi","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629824396264,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]},{"candidate_uuid":"592e0b26-d8f8-4e7f-8fe0-2b11fee3a903","candidate_showcase_fullname":"Yash Patil","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629736193873,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]},{"candidate_uuid":"54eb691f-1bef-44dc-aea2-dd0b7883b0b9","candidate_showcase_fullname":"Tejas Ingale","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629735968879,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]},{"candidate_uuid":"df2eb4f5-469d-4cdf-b8d6-d1e7f887c582","candidate_showcase_fullname":"Delvin Santos","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629709449812,"viewsReaction":[{"hearts_collected":0,"profile_views":24,"user_stars":10}]},{"candidate_uuid":"314618c2-644b-4208-9cd1-8779164dab0b","candidate_showcase_fullname":"Elwin Coltman","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629477298915,"viewsReaction":[{"hearts_collected":0,"profile_views":1,"user_stars":0}]},{"candidate_uuid":"5b6201ec-6896-4d34-bb2b-d47b46085aa1","candidate_showcase_fullname":"Babita Fibona Babita Fibona","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629476779687,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]},{"candidate_uuid":"b17d2d81-240f-41f8-878d-19d380c4dc73","candidate_showcase_fullname":"Nicole Golden","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629404053522,"viewsReaction":[{"hearts_collected":0,"profile_views":1,"user_stars":0}]},{"candidate_uuid":"0e23aca7-11e3-49ec-8c4e-7185f092c540","candidate_showcase_fullname":"Daniel  Benson","candidate_showcase_title":"","candidate_showcase_mini_title":null,"candidate_location_country":null,"candidate_country_flag":null,"candidate_categories":null,"candidate_highest_education":null,"candidate_photo_url":null,"candidate_photo_type":null,"candidate_showcase_readiness":false,"candidate_showcase_identity":null,"candidate_mentor_enabled":false,"candidate_default_video_url":null,"candidate_guest_profile":false,"created_timestamp":1629402687104,"viewsReaction":[{"hearts_collected":0,"profile_views":null,"user_stars":0}]}]}];

    // {{user}}
//  console.log(user[0].networkDataList);
const us= user[0].networkDataList;

  return (
    
    
    <div >




      <Flex



      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="7vh"
      px={3}
      py={4}
      mb={16}
     


      >
      <Stack
       mt={{ base: 12, md: -1810 }}
       ml={{ base: 1, md: 10 }}
      spacing='1'
      w={{ base: "80%", md: "20%" }} 
      align={["left", "left", "flex-start", "flex-start"]}
      >
     

      <Text fontSize="xs" fontWeight="semibold" color="gray" textAlign={["left", "left", "left", "left"]}> CONTENT</Text>

      <Text fontSize="18px" pt={[0, 0, 0, 2]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaHome />}
      _hover={{
      bg: ["#f4f4f4"]
    }} background="#f4f4f4"></IconButton> Home</Text>

      <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaUser />}
      _hover={{
      bg: ["#f4f4f4"]
    }} background="#f4f4f4"></IconButton> Showcases</Text>

      <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaHandshake />}
      _hover={{
      bg: ["#f4f4f4"]
    }} background="#f4f4f4"></IconButton> Active Posts</Text>



      <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaSms />}
      _hover={{
      bg: ["#f4f4f4"]
    }} background="#f4f4f4"></IconButton> Active Consultations</Text>



      <Text fontSize="xs" fontWeight="semibold" color="gray" paddingTop="30px" textAlign={["left", "left", "left", "left"]}> HELP AND ASSISTANCE</Text>

      <Text fontSize="18px" pt={[0, 0, 0, 2]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaVideo />}
      _hover={{
      bg: ["#f4f4f4"]
    }} background="#f4f4f4"></IconButton> Tutorials</Text>

      <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaUser />}
      _hover={{
      bg: ["#f4f4f4"]
    }} background="#f4f4f4"></IconButton> Help</Text>

      <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaHandshake />}
      _hover={{
      bg: ["#f4f4f4"] 
    }} background="#f4f4f4"></IconButton> Active Posts</Text>



      <Text fontSize="18px" pt={[0, 0, 0, 1]} fontWeight="normal" color="gray" textAlign={["left", "left", "left", "left"]}> <IconButton mr={[0, 0, 0, 3]} icon={<FaSms />}
      _hover={{
      bg: ["#f4f4f4"]
    }} background="#f4f4f4"></IconButton> Active Consultations</Text>


      </Stack>

      <Box w={{ base: "100%", sm: "100%", md: "80%" }}  mr={{ base: 1, md: 20 }}  > 
    {/* TODO: Make this change every X secs */}
      <GridItem colSpan={4} width="100%" bg="white" border="1px" borderColor="#c5c5c58f" borderRadius="12px" >

      <Heading align="center" fontSize={[25, 30, 30, 30]} pt={[0, 0, 0, 5]}
      >UnBlocker.Ai Professional Showcases</Heading>
      <Text fontSize={[15, 16, 16, 18]} pt={[3, 0, 0, 3]} pb={[3, 0, 0, 0]} align="center">Please visit each individual showcase listed below and learn more about individual professional and their expertise</Text>

      <Divider pt={[0, 0, 0, 6]} />

      <Grid templateColumns="repeat(7, 1fr)" gap={2} bg="#c5c5c58f">
      <GridItem colSpan={1} h="15"   >

      <SearchIcon mt={[3, 0, 0, 3]} ml={[3, 0, 0, 6]} >

      </SearchIcon>

      </GridItem>
      <GridItem colSpan={3} h="10"  >

      <Text fontSize={[12, 10, 10, 15]} pt={[3, 0, 0, 2]} fontWeight="medium" align="left"> ACTIVE MEMBERS(40)</Text>

      </GridItem>

      <GridItem colSpan={3} h="10" >

      <Text fontSize={[12, 10, 10, 15]} pt={[2, 0, 0, 2]} mr={[2, 0, 0, 120]} fontWeight="normal" align="right"> HELP</Text>


      <Text fontSize={[12, 10, 10, 15]} mr={[12, 0, 0, 6]} mt={[-4, 0, 0, -6]} fontWeight="normal" align="right">FILTER <ChevronDownIcon /> </Text>



      </GridItem>
      </Grid>


      

      </GridItem>


      <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="60vh"
      px={0}
      mt={[3,0,0,3]}
 
    >
     

     <SimpleGrid columns={[1, 2, 3]} spacing="10px">


   
     {us.map((val) => (
     <Card  props={val} />
//<h1>Hello </h1>
      ))}

     

      </SimpleGrid>
   



    

    </Flex>   


     




    
      </Box>

      
      </Flex>



    </div>
  )
}

export default Home