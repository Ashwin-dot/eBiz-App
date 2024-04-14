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
import { useCountries } from "use-react-countries";

const MyProfile = () => {
  const { countries } = useCountries();

  return (
    <>
      <Header />
      <NavBar />
      <Box>
        <Box maxW="1200px" m="0 auto" display="flex" justifyContent="center">
          <Box p="50px 10px 50px 0px">
            <Card boxShadow="lg">
              <CardHeader>
                <Heading size="md" textAlign="center">
                  Edit Profile Information
                </Heading>
              </CardHeader>
              <CardBody pt="0px">
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" />
                  <FormLabel mt="5px">Last name</FormLabel>
                  <Input placeholder="Last name" />
                  <FormLabel mt="5px">Country</FormLabel>
                  <Select defaultValue="Nepal">
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country.name}
                      </option>
                    ))}
                  </Select>
                  <FormLabel mt="5px">Language</FormLabel>
                  <Select>
                    <option value="English">English</option>
                    <option value="Nepali">Nepali</option>
                    <option value="Hindi">Hindi</option>
                  </Select>
                  <FormLabel mt="5px">User Type</FormLabel>
                  <Select>
                    <option value="User">User</option>
                    <option value="User">Admin</option>
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

export default MyProfile;
