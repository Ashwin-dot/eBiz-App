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
import { AiOutlineUser } from "react-icons/ai";
import { BiSolidBusiness } from "react-icons/bi";
import { LiaProductHunt } from "react-icons/lia";
import { MdOutlineViewComfyAlt } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { GoCommentDiscussion } from "react-icons/go";
import { MdLogout } from "react-icons/md";

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
  const {
    isOpen: isCategoriesOpen,
    onOpen: onCategoriesOpen,
    onClose: onCategoriesClose,
  } = useDisclosure();
  const {
    isOpen: isProfileOpen,
    onOpen: onProfileOpen,
    onClose: onProfileClose,
  } = useDisclosure();
  const categories = [
    {
      title: "Land",
      icon: <LiaHomeSolid />,
    },
    {
      title: "Building",
      icon: <AiFillCustomerService />,
    },
    {
      title: "Factory",
      icon: <GiFurShirt />,
    },
    {
      title: "Residential",
      icon: <BsMagic />,
    },
  ];

  const profilesubmenu = [
    {
      title: "My Profile",
      icon: <AiOutlineUser />,
      to: "/myprofile",
    },
    {
      title: "My Business",
      to: "/mybusiness",
      icon: <BiSolidBusiness />,
    },
    {
      title: "Add Product",
      to: "/addproduct",
      icon: <LiaProductHunt />,
    },
    {
      title: "View Product",
      to: "/myprofile",
      icon: <MdOutlineViewComfyAlt />,
    },
    {
      title: "Calls",
      to: "/calls",
      icon: <MdCall />,
    },
    {
      title: "Message",
      to: "/message",
      icon: <MdMessage />,
    },
    {
      title: "Buy History",
      to: "/buyhistory",
      icon: <MdHistory />,
    },
    {
      title: "Comments",
      to: "/comments",
      icon: <GoCommentDiscussion />,
    },
    {
      title: "Logout Business",
      to: "/logoutbusiness",
      icon: <MdLogout />,
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
                  link.title !== "All Categories" &&
                  link.title !== "Profile" && (
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

              <Menu
                isOpen={isCategoriesOpen}
                onClose={onCategoriesClose}
                placement="bottom-start"
              >
                <MenuButton
                  as={Link}
                  color={
                    location.pathname === "/categories" ? "primary.14" : "black"
                  }
                  _hover={{ color: "primary.9" }}
                  px={0}
                  onMouseEnter={onCategoriesOpen}
                >
                  {links.find((link) => link.title === "All Categories").title}
                  <ChevronDownIcon />
                </MenuButton>
                <MenuList onMouseLeave={onCategoriesClose}>
                  {categories.map((category) => (
                    <MenuItem key={category.title} icon={category.icon}>
                      {category.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>

              <Menu
                isOpen={isProfileOpen}
                onClose={onProfileClose}
                placement="bottom-start"
              >
                <MenuButton
                  as={Link}
                  color={
                    location.pathname === "/profile" ? "primary.14" : "black"
                  }
                  _hover={{ color: "primary.9" }}
                  px={0}
                  onMouseOver={onProfileOpen}
                >
                  {profilesubmenu.find((profile) => profile.title === "Profile")
                    ?.title || "Profile"}

                  <ChevronDownIcon />
                </MenuButton>
                <MenuList onMouseLeave={onProfileClose}>
                  {profilesubmenu.map((profilemenu) => (
                    <MenuItem
                      key={profilemenu.title}
                      icon={profilemenu.icon}
                      onClick={() => navigate(profilemenu.to)}
                    >
                      {profilemenu.title}
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
