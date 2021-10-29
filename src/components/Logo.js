import React from "react";
import { Box } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
           <img src={'https://unblocker.ai/static/media/unblockerai.99855652.png'} className="App-logo" alt="logo" />
    </Box>
  );
}
