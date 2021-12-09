import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import {
  Button,
  Alert,
  Image,
  Box,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { postOrder } from "../../helpers/Api";

function Cart() {
  const [address, setAddress] = useState("");
  const { items, removeFromCart, clearCart } = useCart();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  const handleSubmitForm = async () => {
    const itemIds = items.map((item) => item._id);

    const input = {
      address,
      items: JSON.stringify(itemIds),
    };
    await postOrder(input);
    clearCart();
    onClose();
  };

  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning">Sepetinizde ürün bulunmamaktadır!</Alert>
      )}

      {items.length > 0 && (
        <>
          <ul style={{ listStyleType: "decimal" }}>
            {items.map((item) => (
              <li key={item._id} style={{ marginBottom: 15 }}>
                <Link to={`/product/${item._id}`}>
                  {item.title} - {item.price} TL
                  <Image
                    htmlWidth={200}
                    src={item.photos[0]}
                    alt={item.title}
                  />
                </Link>
                <Button
                  mt="2"
                  size="sm"
                  colorScheme="pink"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove From Basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontSize="22">Total:{total} TL</Text>
          </Box>
          <Button onClick={onOpen} colorScheme="green" mt="2" size="sm">
            Order
          </Button>

          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button onClick={handleSubmitForm} colorScheme="blue" mr={3}>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
}

export default Cart;
