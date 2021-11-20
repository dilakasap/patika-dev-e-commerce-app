import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProductDetails } from "../../helpers/Api";
import { Box, Text, Button } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { useCart } from "../../contexts/CartContext";

function ProductDetails() {
  const { product_id } = useParams();
  const { addToCart, items } = useCart();
  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    getProductDetails(product_id)
  );
  if (isLoading) {
    return "Loading...";
  }
  if (isError) {
    return "Error" + isError.message;
  }
  console.log(data);

  const images = data.photos.map((url) => ({ original: url }));
  const findCartItem = items.find((item) => item._id === product_id);
  return (
    <div>
      <Button colorScheme="telegram" onClick={() => addToCart(data)}>
        {findCartItem ? "Remove from Cart" : "Add to Cart"}
      </Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
      <p>{data.description}</p>
      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetails;
