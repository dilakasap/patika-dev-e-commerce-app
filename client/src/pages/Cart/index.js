import { Alert } from '@chakra-ui/alert';
import { Link } from "react-router-dom";
import React from 'react'
import { useCart } from '../../contexts/CartContext';
import { Image} from '@chakra-ui/image';

function Cart() {
  const {items} = useCart();

  return (
    <div>
       {items.length<1 && <Alert status="warning">Sepetinizde ürün bulunmamaktadır!</Alert>}

       {items.length > 0 && <>
       <ul>
         {
           items.map((item)=>(
            <li key={item._id}>
              <Link to={`/product/${item._id}`}>
                {item.title} - {item.price} TL
                <Image htmlWidth={200} src={item.photos[0]} alt={item.title}/>
              </Link>
            </li>
           ))
         }
       </ul>
       </>}
    </div>
  )
}

export default Cart;
