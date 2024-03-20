import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={4}
      bg="primary.1"
    >
      <Text fontSize="sm">eBiz is an ecoomerce Website</Text>
    </Box>
  );
};

export default Header;
