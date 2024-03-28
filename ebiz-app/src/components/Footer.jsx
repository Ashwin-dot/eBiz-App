import { Box, Text, Link } from "@chakra-ui/react";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <Box bg="primary.1" color="primary.2" mt="15px">
        <Box
          maxW="1200px"
          m="0 auto"
          pt="20px"
          display="flex"
          justifyContent="space-between"
          pb="20px"
        >
          <Box>
            <Text as="b">Popular Categories</Text>
            <Box gap="10px" pt="5px">
              <Text>Electronic Devices</Text>
              <Text>Fashion</Text>
              <Text>Shoes</Text>
              <Text>Watches & Accessories</Text>
            </Box>
          </Box>
          <Box>
            <Text as="b">e-Biz</Text>
            <Box gap="10px" pt="5px">
              <Text>About e-Biz</Text>
              <Text>Terms & Conditions</Text>
              <Text>Privacy Policy</Text>
            </Box>
          </Box>

          <Box>
            <Text as="b">Customer Care</Text>
            <Box gap="10px" pt="5px">
              <Text>Help Center</Text>
              <Text>How to Buy</Text>
              <Text>Contact Us</Text>
            </Box>
          </Box>

          <Box>
            <Text as="b">Digital Payments</Text>
            <Box gap="10px" pt="5px">
              <Text>Credit Card</Text>
              <Text>Google Wallet</Text>
              <Text>Debit Card</Text>
            </Box>
          </Box>
          <Box>
            <Text as="b">Stay Connected</Text>
            <Box display="flex" gap="10px" pt="5px">
              <Link
                href="https://www.facebook.com/profile.php?id=100008514757568"
                target="_blank"
              >
                <AiOutlineFacebook size="20px" />
              </Link>
              <Link
                href="https://www.instagram.com/subashkhatri784/"
                target="_blank"
              >
                <AiOutlineInstagram size="20px" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/subash-khatri-051408222/"
                target="_blank"
              >
                <AiOutlineLinkedin size="20px" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
