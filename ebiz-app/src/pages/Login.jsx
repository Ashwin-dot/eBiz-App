import { useState } from "react";
import { EmailIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Link,
  Text,
  Input,
  InputGroup,
  Checkbox,
  Button,
  InputRightElement,
  useMediaQuery,
} from "@chakra-ui/react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSmallerthan454] = useMediaQuery("(max-width:454px)");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      backgroundImage="url(./Signup/building.jpg)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box
        bg="primary.2"
        w={isSmallerthan454 ? "300px" : "500px"}
        p="4"
        shadow="lg"
        borderRadius="10px"
        backgroundColor="rgba(255, 255, 255, 0.9)"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Heading>eBiz</Heading>
          <Box display="flex" gap="15px">
            <Link href="/signup">Sign up</Link>
            <Link href="/login">Login</Link>
          </Box>
        </Box>
        <Box pt="20px">
          <Text>Sign in to continue to our application</Text>
          <InputGroup pt="10px">
            <Input variant="outline" placeholder="Enter your email" />
            <InputRightElement mt="9px">
              <EmailIcon />
            </InputRightElement>
          </InputGroup>
          <InputGroup pt="10px">
            <Input
              variant="outline"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <InputRightElement onClick={togglePasswordVisibility} mt="9px">
              {showPassword ? <ViewOffIcon /> : <ViewIcon />}
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box textAlign="center" pt="10px">
          <Button colorScheme="cyan" color="primary.2">
            Sign in
          </Button>
        </Box>
        <Box display="flex" justifyContent="space-between" pt="5px">
          <Box display="flex" gap="5px" alignItems="center">
            <Checkbox border="1px" h="fit-content" />
            <Text>Remember Me</Text>
          </Box>
          <Box>Forgot Password ?</Box>
        </Box>
        <Box textAlign="center" pt="5px">
          <Text>
            Don't have an account?{" "}
            <Link href="/signup">
              {" "}
              <b>Sign up</b>{" "}
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
