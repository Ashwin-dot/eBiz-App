import React from "react";
import {
  Box,
  Text,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  useDisclosure,
  Heading,
  useMediaQuery,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
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
    title: "products",
    to: "/products",
  },
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSmallerThan1054] = useMediaQuery("(max-width: 1054px)");
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <HStack spacing={3}>
          <Box>
            <Box display="flex" alignItems="center">
              <Heading size="md" onClick={() => navigate("/")} cursor="pointer">
                eBiz
              </Heading>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap="50px"
            justifyContent="space-between"
            w={isSmallerThan768 ? "100%" : "auto"}
            mt="5px"
          >
            {isSmallerThan768 ? (
              <HamburgerIcon links={links} />
            ) : (
              <Box
                letterSpacing="0.75px"
                display="flex"
                gap="20px"
                position="relative"
              >
                {links.map((link) => (
                  <Link
                    key={link.to}
                    href={link.to}
                    color={
                      location.pathname === link.to ? "primary.14" : "black"
                    }
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
                    {links.find((link) => link.title === "Products")}
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
        </HStack>
      </Box>
    </>
  );
};

export default NavBar;
