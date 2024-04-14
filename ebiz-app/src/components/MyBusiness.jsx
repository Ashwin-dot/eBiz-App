import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";
import {
  Box,
  Heading,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
} from "@chakra-ui/react";
const MyBusiness = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Box>
        <Box maxW="1200px" m="0 auto" display="flex" justifyContent="center">
          <Box p="50px 10px 50px 0px">
            <Card>
              <CardHeader>
                <Heading size="md" textAlign="center">
                  Edit Business House
                </Heading>
              </CardHeader>
              <CardBody pt="0px">
                <FormControl>
                  <FormLabel mt="5px">Sector</FormLabel>
                  <Select defaultValue="Product">
                    <option value="English">Household Materials</option>
                    <option value="Nepali">Fashion</option>
                    <option value="Hindi">Accessories</option>
                  </Select>
                  <FormLabel mt="5px">Business House Name</FormLabel>
                  <Input placeholder="Business Name" />
                  <FormLabel mt="5px">Business Owner Name</FormLabel>
                  <Input placeholder="Owner Name" />
                  <FormLabel mt="5px">Business House Email</FormLabel>
                  <Input placeholder="Business Email" />
                  <FormLabel mt="5px">
                    Business House Registration Number
                  </FormLabel>
                  <Input
                    type="number"
                    placeholder="Business Registration Number"
                  />
                  <FormLabel mt="5px">Category</FormLabel>
                  <Select defaultValue="Land">
                    <option value="Land">Land</option>
                    <option value="Building">Building</option>
                    <option value="Residential">Residential</option>
                    <option value="Factory">Factory</option>
                  </Select>
                </FormControl>
              </CardBody>
              <CardFooter mt="0px" pt="0px">
                <Button>Update</Button>
              </CardFooter>
            </Card>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MyBusiness;
