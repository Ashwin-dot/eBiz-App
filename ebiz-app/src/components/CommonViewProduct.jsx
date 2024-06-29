import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React from 'react';
import {
  Box,
  Image,
  Text,
  Heading,
  Stack,
  Badge,
  VStack,
  HStack,
  Button,
  Divider,
  Tag,
  SimpleGrid,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import Loading from "./Loading";

const CommonViewProduct = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/products/" + id).then((res) => { 
      setProduct(res.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Header />
      <NavBar />
      {loading ? (
        <Loading /> 
      ) : (
        <Box p={8}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Image src={product.images[0]} alt={product.title} rounded="md" />
            <VStack align="start" spacing={4}>
              <Badge colorScheme="blue" fontSize="lg">
                {product.brand}
              </Badge>
              <Heading as="h1" size="xl">
                {product.title}
              </Heading>
              <Text fontSize="lg">{product.description}</Text>
              <HStack>
                <Text fontSize="2xl" fontWeight="bold">
                  ${product.price.toFixed(2)}
                </Text>
                <Text fontSize="xl" color="gray.500" textDecoration="line-through">
                  ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                </Text>
                <Badge colorScheme="green">{product.discountPercentage}% off</Badge>
              </HStack>
              <HStack>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < product.rating ? 'teal.500' : 'gray.300'}
                    />
                  ))}
                <Text>{product.rating}</Text>
              </HStack>
              <Text color={product.stock > 0 ? 'green.500' : 'red.500'}>
                {product.availabilityStatus}
              </Text>
              <Button colorScheme="blue">Add to Cart</Button>
              <Divider />
              <Text>
                <strong>SKU:</strong> {product.sku}
              </Text>
              <Text>
                <strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
              </Text>
              <Text>
                <strong>Weight:</strong> {product.weight}g
              </Text>
              <Text>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </Text>
              <Text>
                <strong>Shipping:</strong> {product.shippingInformation}
              </Text>
              <Divider />
              <Heading as="h2" size="md">
                Reviews
              </Heading>
              {product.reviews.map((review, index) => (
                <Box key={index} borderWidth="1px" borderRadius="lg" p={4} w="full">
                  <HStack>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={i < review.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                    <Text>{review.rating}</Text>
                  </HStack>
                  <Text>{review.comment}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {new Date(review.date).toLocaleDateString()} by {review.reviewerName}
                  </Text>
                </Box>
              ))}
              <Divider />
              <Text>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </Text>
              <Text>
                <strong>Minimum Order Quantity:</strong> {product.minimumOrderQuantity}
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default CommonViewProduct;
