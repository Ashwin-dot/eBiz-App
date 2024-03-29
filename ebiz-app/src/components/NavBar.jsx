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
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { GiFurShirt } from "react-icons/gi";
import { BsMagic } from "react-icons/bs";
import { LiaHomeSolid } from "react-icons/lia";
import { BsDribbble } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { GiSonicShoes } from "react-icons/gi";
import { AiFillCustomerService } from "react-icons/ai";

const links = [
  {
    title: "Login",
    to: "/login",
  },
  {
    title: "Sign up",
    to: "/signup",
  },
  {
    title: "All Categories",
    to: "/categories",
  },
  {
    title: "Profile",
    to: "/profile",
  },
];

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSmallerThan768] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const categories = [
    {
      title: "Furniture & Lightning",
      icon: <LiaHomeSolid />,
    },
    {
      title: "Electronic Devices",
      icon: <AiFillCustomerService />,
    },
    {
      title: "Fashion",
      icon: <GiFurShirt />,
    },
    {
      title: "Health & Beauty",
      icon: <BsMagic />,
    },
    {
      title: "Sports & Outdoor",
      icon: <BsDribbble />,
    },
    {
      title: "Watches & Accessories",
      icon: <BsSmartwatch />,
    },
    {
      title: "Computer, Office & Education",
      icon: <BsPcDisplayHorizontal />,
    },
    {
      title: "Shoes",
      icon: <GiSonicShoes />,
    },
  ];

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
              {links.map(
                (link, key) =>
                  link.title !== "All Categories" && (
                    <React.Fragment key={link.to}>
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
                      {key == 0 && (
                        <Divider
                          orientation="vertical"
                          border="0.9px solid"
                          h="25px"
                        />
                      )}
                    </React.Fragment>
                  )
              )}

              <Menu isOpen={isOpen} onClose={onClose} placement="bottom-start">
                <MenuButton
                  as={Link}
                  color={
                    location.pathname === "/categories" ? "primary.14" : "black"
                  }
                  _hover={{ color: "primary.9" }}
                  px={0}
                  onMouseEnter={onOpen}
                >
                  {links.find((link) => link.title === "All Categories").title}
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList onMouseLeave={onClose}>
                  {categories.map((category) => (
                    <MenuItem key={category.title} icon={category.icon}>
                      {category.title}
                    </MenuItem>
                  ))}
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
