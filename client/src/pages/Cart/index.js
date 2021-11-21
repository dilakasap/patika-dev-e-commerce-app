import { Alert } from '@chakra-ui/alert';
import React from 'react'
import { useCart } from '../../contexts/CartContext';

function Cart() {
  const {items} = useCart();

  return (
    <div>
       {items.length<1 && <Alert status="warning">Sepetinizde ürün bulunmamaktadır!</Alert>}
    </div>
  )
}

export default Cart;
