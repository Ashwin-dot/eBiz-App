import { EmailIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Link,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        maxW="1200px"
        m="0 auto"
        p="150px"
      >
        <Box bg="primary.2">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading>eBiz</Heading>
            <Box display="flex" gap="15px">
              <Link>Signup</Link>
              <Link>Login</Link>
            </Box>
          </Box>
          <Box>
            <Text>Sign Up</Text>
            <InputGroup>
              <Input variant="outline" placeholder="Enter your email" />
              <InputRightElement>
                <EmailIcon />
              </InputRightElement>
            </InputGroup>
            <InputGroup>
              <Input
                variant="outline"
                type="password"
                placeholder="Enter your password"
              />
              <InputRightElement>
                <ViewIcon />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Signup;
