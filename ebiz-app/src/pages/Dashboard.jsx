import React from "react";
import NavBar from "../components/NavBar";
import {
  Text,
  Box,
  Stack,
  Card,
  CardBody,
  Image,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { AiFillCustomerService } from "react-icons/ai";
import { GiFurShirt } from "react-icons/gi";
import Footer from "../components/Footer";
import { BsMagic } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";
import { BsSmartwatch } from "react-icons/bs";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { GiSonicShoes } from "react-icons/gi";

const Dashboard = () => {
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

  const electronicdevices = [
    {
      src: "./Electronic/redmi.jpg",
      etitle: "Redmi 13C | 6/128GB | 6.74in Display",
      eprice: "16000",
      alt: "Redmi 13C",
    },
    {
      src: "./Electronic/redmi.jpg",
      etitle: "Redmi 12 | 5G | 6/128GB | 6.74in Display",
      eprice: "14500",
      alt: "Redmi 12C",
    },
    {
      src: "./Electronic/redmi.jpg",
      etitle: "Redmi 12 | 5G | 6/128GB | 6.74in Display",
      eprice: "14500",
      alt: "Redmi 12C",
    },
    {
      src: "./Electronic/redmi.jpg",
      etitle: "Redmi 12 | 5G | 6/128GB | 6.74in Display",
      eprice: "14500",
      alt: "Redmi 12C",
    },
    {
      src: "./Electronic/redmi.jpg",
      etitle: "Redmi 12 | 5G | 6/128GB | 6.74in Display",
      eprice: "14500",
      alt: "Redmi 12C",
    },
  ];

  return (
    <>
      <Header />
      <NavBar />
      <Box>
        <Box maxW="1200px" m="0 auto">
          <Card boxShadow="md" display="flex">
            <SimpleGrid
              columns={[2, 3, 4]}
              gap="2px"
              pt="15px"
              pb="15px"
              pl="15px"
            >
              {categories.map((category) => (
                <Box display="flex" pl="15px">
                  <Box pt="5px" pr="5px">
                    {category.icon}
                  </Box>
                  <Link>{category.title}</Link>
                </Box>
              ))}
            </SimpleGrid>
          </Card>

          <Heading size="md" pt="15px">
            Top Products
          </Heading>
          <Box display="flex" gap="20px" pt="20px">
            <SimpleGrid columns={[3, 4, 5]} gap="20px">
              {electronicdevices.map((eproduct, key) => (
                <Card maxW="250px" boxShadow="md">
                  <CardBody pl="10px" pt="0px" pr="10px" pb="5px">
                    <Image
                      src={eproduct.src}
                      alt={eproduct.alt}
                      borderRadius="lg"
                      p="0px"
                    />
                    <Stack>
                      <Text as="b" size="md">
                        {eproduct.etitle}
                      </Text>
                      <Text color="blue.600">NPR {eproduct.eprice}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          <Heading size="md" pt="20px">
            Just For You
          </Heading>
          <Box display="flex" gap="20px" pt="20px">
            <SimpleGrid columns={[3, 4, 5]} gap="20px">
              {electronicdevices.map((eproduct, key) => (
                <Card maxW="250px" boxShadow="md">
                  <CardBody pl="10px" pt="0px" pr="10px" pb="5px">
                    <Image
                      src={eproduct.src}
                      alt={eproduct.alt}
                      borderRadius="lg"
                      p="0px"
                    />
                    <Stack>
                      <Text as="b" size="md">
                        {eproduct.etitle}
                      </Text>
                      <Text color="blue.600">NPR {eproduct.eprice}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>
          <Box textAlign="end">
            <Button mt="20px">Shop More</Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Dashboard;
