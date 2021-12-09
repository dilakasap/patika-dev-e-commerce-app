import { Link } from "react-router-dom";
import { useRef } from "react";
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
  Input,
} from "@chakra-ui/react";

function Cart() {
  const { items, removeFromCart } = useCart();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);

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

          <Modal
            initialFocusRef={initialRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create your account</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder="First name" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
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
