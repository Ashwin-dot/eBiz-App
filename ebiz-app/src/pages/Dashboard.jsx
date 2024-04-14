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
import { AiFillCustomerService } from "react-icons/ai";
import Footer from "../components/Footer";

const Dashboard = () => {
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
          <Heading size="md" pt="15px">
            Latest Business and Offers
          </Heading>
          <Box display="flex" gap="20px" pt="20px">
            <SimpleGrid columns={[2, 3, 4, 5]} gap="20px">
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
            <SimpleGrid columns={[2, 3, 4, 5]} gap="20px">
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
