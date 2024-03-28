import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
      bg="primary.1"
      color="primary.2"
    >
      <Heading size="md">e-Commerce for everything</Heading>
    </Box>
  );
};

export default Header;
