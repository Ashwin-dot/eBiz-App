import React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, fullname, confirmPassword);
  }

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Box
        maxW="md"
        w="full"
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow="xl"
        rounded="lg"
        p={6}
      >
        <VStack spacing={6}>
          <Heading as="h1" size="xl" textAlign="center">
            <Link to="/" color="blue.400">eBiz</Link>
          </Heading>
          <Stack spacing={4} w="full">
            <Heading fontSize="2xl">Create a new account</Heading>
            <FormControl id="fullname">
              <FormLabel>Full Name</FormLabel>
              <Input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <FormControl id="confirm-password">
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={6}>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
              <Text align="center">
                Already have an account? <Link to="/login">Sign in</Link>
              </Text>
            </Stack>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
};

export default SignupForm;