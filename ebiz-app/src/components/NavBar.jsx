import React from "react";
import {
  Box,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Link,
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";

const links = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About Us",
    to: "/about",
  },
  {
    title: "Categories",
    to: "/products",
  },
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack spacing={3}>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        borderBottomColor="gray.200"
        boxShadow="dark-lg"
        p="4"
        width="100%"
        rounded="md"
        bg="white"
      >
        <Box display="flex" alignItems="center">
          <Heading
            color="primary.1"
            size="xl"
            onClick={() => navigate("/")}
            cursor="pointer"
          >
            eBiz
          </Heading>
        </Box>
        <Box display="flex" alignItems="center">
          <InputGroup width={isSmallerThan768 ? "300" : "lg"}>
            <Input placeholder="Search Products" variant="filled" size="md" />
            <InputRightElement pointerEvents="none">
              <IconButton
                colorScheme="white"
                color="primary.1"
                icon={<Search2Icon />}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap="50px"
          justifyContent="space-between"
          mt="5px"
        >
          {isSmallerThan768 ? (
            <HamburgerIcon links={links} display="flex" gap="20px" />
          ) : (
            <Box
              letterSpacing="0.75px"
              display="flex"
              gap="20px"
              position="relative"
            >
              {links.map((link, key) => (
                <Link
                  key={link.to}
                  href={link.to}
                  color={location.pathname === link.to ? "primary.14" : "black"}
                  _hover={{ color: "primary.9" }}
                >
                  {link.title}
                </Link>
              ))}
              <Menu isOpen={isOpen} onClose={onClose}>
                <MenuButton
                  as={Link}
                  _hover={{ color: "primary.9" }}
                  onMouseEnter={onOpen}
                  onClick={onOpen}
                >
                  {links.find((link) => link.to === "products")}
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList onMouseLeave={onClose}>
                  <MenuItem>Category 1</MenuItem>
                  <MenuItem>Category 2</MenuItem>
                  <MenuItem>Category 3</MenuItem>
                  <MenuItem>Category 4</MenuItem>
                  <MenuItem>Category 5</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
        </Box>
      </Box>
    </HStack>
  );
};

export default NavBar;
