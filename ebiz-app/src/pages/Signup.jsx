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
  Image,
  InputRightElement,
  useMediaQuery,
} from "@chakra-ui/react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [reshowPassword, resetShowPassword] = useState(false);
  const [isSmallerthan454] = useMediaQuery("(max-width:454px)");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const retogglePasswordVisibility = () => {
    resetShowPassword(!reshowPassword);
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
        w={isSmallerthan454 ? "300px" : "500px"}
        paddingLeft={isSmallerthan454 ? "30px" : "4px"}
        shadow="lg"
        borderRadius="10px"
        backgroundColor="rgba(255, 255, 255, 0.9)"
        px="20px"
        pt="20px"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Heading>eBiz</Heading>
          <Box display="flex" gap="15px">
            <Link href="/signup">Sign up</Link>
            <Link href="/login">Login</Link>
          </Box>
        </Box>
        <Box pt="20px">
          <Text>Sign up to continue to our application</Text>
          <InputGroup pt="10px">
            <Input variant="outline" placeholder="Enter your full name" />
          </InputGroup>
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
          <InputGroup pt="10px">
            <Input
              variant="outline"
              type={reshowPassword ? "text" : "password"}
              placeholder="Re-enter your password"
            />
            <InputRightElement onClick={retogglePasswordVisibility} mt="9px">
              {reshowPassword ? <ViewOffIcon /> : <ViewIcon />}
            </InputRightElement>
          </InputGroup>
        </Box>

        <Box textAlign="center" pt="10px">
          <Button colorScheme="cyan" color="primary.2">
            Sign up
          </Button>
        </Box>
        <Box pt="10px" textAlign="center" pb="20px">
          <Text>
            Already have an account?
            <Link href="/login">
              {" "}
              <b>Login</b>
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
