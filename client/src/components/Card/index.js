import React from "react";
import { Button, Box, Image } from "@chakra-ui/react";
import moment from "moment";
import { useNavigate } from "react-router";

function Card({item}) {
  const navigate=useNavigate();
  const goToProductDetail=(()=>{
    navigate(`product/${item._id}`)
  })
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Box onClick={goToProductDetail}>
      <Image src={item.photos[0]} alt={item.title}></Image>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          {moment(item.createdAt).format("DD/MM/YYYY")}
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {item.title}
        </Box>
        <Box>{item.price}</Box>
      </Box>
      </Box>
      <Button colorScheme="pink">
        Add to cart
      </Button>
    </Box>
  );
}

export default Card;
