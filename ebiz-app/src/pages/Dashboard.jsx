import React, { useEffect, useState } from "react";
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
import axios from "axios";
import Loading from "../components/Loading";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search, setSearch] = useState("");

useEffect(() => {
  axios.get("https://dummyjson.com/products?limit=100").then((res) => {
    setProducts(res.data.products);
    setFilteredProducts(res.data.products);
    setLoading(false);
  });
}, []);

useEffect(() => {
  if (!loading) {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }
}, [search]);

  return (
    <>
      <Header />
      <NavBar search={search} setSearch={setSearch} />
      {
        loading ? (
          <Loading />
        ) : (
          <Box>
            <Box maxW="1200px" m="0 auto">
              <Heading size="md" pt="20px">
                Just For You
              </Heading>
              <Box display="flex" gap="20px" pt="20px">
                <SimpleGrid columns={[2, 3, 4, 5]} gap="20px">
                  {
                    filteredProducts.map((product, key) => (
                      <Link to={`/product/${product.id}`} key={key}>
                        <Card maxW="250px" boxShadow="md" key={key}>
                          <CardBody pl="10px" pt="0px" pr="10px" pb="5px">
                            <Image
                              src={product.thumbnail}
                              alt={product.title}
                              borderRadius="lg"
                              p="0px"
                            />
                            <Stack>
                              <Text as="b" size="md">
                                {product.title}
                              </Text>
                              <Text color="blue.600">NPR {product.price}</Text>
                            </Stack>
                          </CardBody>
                        </Card>
                      </Link>
                    ))
                  }
                </SimpleGrid>
              </Box>
              <Box textAlign="end">
                <Button mt="20px">Shop More</Button>
              </Box>
            </Box>
          </Box>
        )
      }
      <Footer />
    </>
  );
};

export default Dashboard;
