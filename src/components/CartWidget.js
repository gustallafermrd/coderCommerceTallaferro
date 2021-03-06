import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Cart() {
  return (
    <div className="cart">
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

export default Cart;

